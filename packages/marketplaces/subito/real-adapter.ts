import type { BrowserContext, Page } from "playwright";
import fs from "fs";
import os from "os";
import path from "path";

import type {
  MarketplaceAdapter,
  NormalizedListing,
  PlatformPayload,
  ValidationResult,
  SessionStatus,
  PublishResult,
  ListingStatus,
} from "../../types";

const NEW_LISTING_URL = "https://www.subito.it/vendere/";

async function downloadImage(url: string, index: number): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Impossibile scaricare immagine ${index + 1}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());

  const contentType = response.headers.get("content-type") || "";
  let ext = ".jpg";

  if (contentType.includes("png")) ext = ".png";
  if (contentType.includes("webp")) ext = ".webp";
  if (contentType.includes("jpeg")) ext = ".jpg";

  const filePath = path.join(
    os.tmpdir(),
    `mttech-subito-${Date.now()}-${index}${ext}`
  );

  fs.writeFileSync(filePath, buffer);

  return filePath;
}

export class SubitoRealAdapter implements MarketplaceAdapter {
  private context: BrowserContext | null = null;
  private page: Page | null = null;

  private async getPage(): Promise<Page> {
    console.log("[SUBITO] getPage avviato");
    if (this.page) {
      console.log("[SUBITO] pagina esistente riutilizzata");
      return this.page;
    }

    const userDataDir =
      process.env.SUBITO_PROFILE_DIR ||
      path.resolve(process.cwd(), "pw-profile");

    const nodeRequire = eval("require") as NodeRequire;
    const { chromium } = nodeRequire("playwright") as typeof import("playwright");

    console.log("[SUBITO] avvio Chromium con profilo:", userDataDir);
    this.context = await chromium.launchPersistentContext(userDataDir, {
      executablePath: "/root/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome",
      headless: false,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
    });

    this.page = this.context.pages()[0] || (await this.context.newPage());

    return this.page;
  }

  async authenticate(): Promise<SessionStatus> {
    try {
      const page = await this.getPage();

      await page.goto("https://www.subito.it/", {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      console.log("[SUBITO] pagina caricata:", page.url());
      const loginVisible =
        page.url().includes("login") ||
        page.url().includes("accedi");

      return {
        connected: !loginVisible,
        requiresReauth: loginVisible,
      };
    } catch {
      return {
        connected: false,
        requiresReauth: true,
      };
    }
  }

  validateListing(listing: NormalizedListing): ValidationResult {
    const missingFields: string[] = [];
    const warnings: string[] = [];

    if (!listing.title || listing.title.trim().length < 3) {
      missingFields.push("title");
    }

    if (!listing.description || listing.description.trim().length < 3) {
      missingFields.push("description");
    }

    if (!listing.price || listing.price <= 0) {
      missingFields.push("price");
    }

    if (!listing.images || listing.images.length === 0) {
      missingFields.push("images");
    }

    if (listing.images.length > 12) {
      warnings.push("Subito potrebbe limitare il numero massimo di foto");
    }

    if (listing.title.length > 60) {
      warnings.push("Il titolo verrà limitato a 60 caratteri");
    }

    return {
      valid: missingFields.length === 0,
      missingFields,
      warnings,
    };
  }

  transformListing(listing: NormalizedListing): PlatformPayload {
    return {
      platform: "SUBITO",
      images: listing.images,
      fields: {
        titolo: listing.title.slice(0, 60),
        descrizione: listing.description,
        categoria: listing.category,
        prezzo: listing.price,
        condizione: listing.condition,
        marca: listing.brand ?? null,
        modello: listing.model ?? null,
        localita:
          listing.attributes?.location ||
          process.env.SUBITO_LOCATION ||
          "Palmi",
      },
    };
  }

  async publishListing(
    payload: PlatformPayload,
    _idempotencyKey: string
  ): Promise<PublishResult> {
    console.log("[SUBITO] publishListing iniziato");
    const page = await this.getPage();
    const tempFiles: string[] = [];

    try {
      console.log("[SUBITO] apertura:", NEW_LISTING_URL);
      await page.goto(NEW_LISTING_URL, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      console.log("[SUBITO] pagina caricata:", page.url());
      const loginVisible =
        page.url().includes("login") ||
        page.url().includes("accedi");

      console.log("[SUBITO] loginVisible:", loginVisible);
      if (loginVisible) {
        return {
          success: false,
          requiresManualStep: true,
          error: "Sessione Subito non autenticata.",
        };
      }

      const title = String(payload.fields.titolo ?? "");
      const description = String(payload.fields.descrizione ?? "");
      const price = Number(payload.fields.prezzo ?? 0);
      const location = String(payload.fields.localita ?? "Palmi");

      console.log("[SUBITO] attendo campo #ad_name");
      await page.locator("#ad_name").waitFor({
        state: "visible",
        timeout: 30000,
      });

      const adNameField = page.locator("#ad_name");

      await adNameField.fill("");
      await adNameField.fill(title);

      console.log("[SUBITO] titolo inserito per categoria:", title);

      await page.waitForTimeout(2500);

      let suggestion = page
        .locator("#suggestions-autocomplete li")
        .first();

      if (!(await suggestion.count())) {
        console.log("[SUBITO] primo tentativo categoria fallito, riprovo");

        await adNameField.click();
        await adNameField.press("End");
        await adNameField.type(" ");

        await page.waitForTimeout(500);

        await adNameField.press("Backspace");

        await page.waitForTimeout(3000);

        suggestion = page
          .locator("#suggestions-autocomplete li")
          .first();
      }

      if (!(await suggestion.count())) {
        const genericSuggestions = page.locator(
          '[role="option"], [role="listbox"] li'
        );

        const genericCount = await genericSuggestions.count();

        console.log(
          "[SUBITO] suggerimenti categoria generici:",
          genericCount
        );

        if (genericCount > 0) {
          suggestion = genericSuggestions.first();
        }
      }

      if (!(await suggestion.count())) {
        console.log("[SUBITO] nessuna categoria proposta");

        return {
          success: false,
          requiresManualStep: true,
          error:
            "Subito non ha proposto automaticamente una categoria. Riprova tra qualche secondo.",
        };
      }

      const suggestionText =
        (await suggestion.innerText().catch(() => "")).trim();

      console.log(
        "[SUBITO] categoria proposta:",
        suggestionText
      );

      await suggestion.click();

      console.log("[SUBITO] categoria selezionata");

      await page.waitForURL(/inserimento\.subito\.it/, {
        timeout: 30000,
      });

      for (let i = 0; i < payload.images.length; i++) {
        const filePath = await downloadImage(payload.images[i], i);
        tempFiles.push(filePath);
      }

      if (tempFiles.length > 0) {
        await page
          .locator("#images-file-input")
          .setInputFiles(tempFiles);
      }

      const titleField = page.locator("#title");

      if (await titleField.count()) {
        await titleField.fill(title);
      }

      await page.locator("#description").fill(description);

      const conditionContainer = page
        .locator("div.index-module_container__OwQ0j")
        .first();

      if (await conditionContainer.count()) {
        await conditionContainer.click().catch(() => {});
        await page.waitForTimeout(500);

        const preferredCondition = page.getByRole("option", {
          name: /Come nuovo|Ottime condizioni|Buone condizioni/i,
        });

        if (await preferredCondition.count()) {
          await preferredCondition.first().click();
        }
      }

      const locationField = page.locator("#location");

      await locationField.fill("");
      await locationField.fill(location);

      console.log("[SUBITO] località digitata:", location);

      await page.waitForTimeout(2000);

      let locationSuggestions = page.locator(
        '[id^="autocomplete-location-item-"]'
      );

      let suggestionCount = await locationSuggestions.count();

      if (suggestionCount === 0) {
        locationSuggestions = page.locator(
          '[role="option"], [role="listbox"] li'
        );

        suggestionCount = await locationSuggestions.count();

        console.log(
          "[SUBITO] suggerimenti località generici:",
          suggestionCount
        );
      }

      if (suggestionCount > 0) {
        const suggestionTexts =
          await locationSuggestions.allInnerTexts();

        console.log(
          "[SUBITO] suggerimenti località:",
          JSON.stringify(suggestionTexts)
        );

        let chosen = false;

        for (let i = 0; i < suggestionCount; i++) {
          const item = locationSuggestions.nth(i);
          const text = (await item.innerText()).trim();

          if (text.toLowerCase().includes(location.toLowerCase())) {
            await item.click();
            chosen = true;

            console.log(
              "[SUBITO] località selezionata:",
              text
            );

            break;
          }
        }

        if (!chosen) {
          const firstSuggestion = locationSuggestions.first();
          const text = (await firstSuggestion.innerText()).trim();

          await firstSuggestion.click();

          console.log(
            "[SUBITO] primo suggerimento località selezionato:",
            text
          );
        }
      } else {
        console.log(
          "[SUBITO] nessun suggerimento DOM, provo tastiera"
        );

        await locationField.press("ArrowDown");
        await page.waitForTimeout(500);
        await locationField.press("Enter");
        await page.waitForTimeout(1200);

        console.log(
          "[SUBITO] tentativo selezione località via tastiera completato"
        );
      }

      await page.waitForTimeout(1000);

      await page
        .locator("#price")
        .fill(String(Math.round(price)));

      const subitoPhone = process.env.SUBITO_PHONE?.trim();

      const phoneField = page.locator("#phone");

      if (await phoneField.count()) {
        if (!subitoPhone) {
          return {
            success: false,
            requiresManualStep: true,
            error: "Numero di telefono Subito non configurato.",
          };
        }

        await phoneField.fill(subitoPhone);

        console.log("[SUBITO] telefono compilato");
      }

      const publishButton = page.getByRole("button", {
        name: /Pubblica annuncio/i,
      });

      if (!(await publishButton.count())) {
        return {
          success: false,
          requiresManualStep: true,
          error: "Pulsante Pubblica annuncio non trovato.",
        };
      }

      // Gestione popup cookie Didomi che può bloccare il click finale
      const didomiPopup = page.locator("#didomi-host");

      if (await didomiPopup.count()) {
        const cookieButtons = [
          page.getByRole("button", { name: /Accetta tutto/i }),
          page.getByRole("button", { name: /Accetta e continua/i }),
          page.getByRole("button", { name: /Accetta/i }),
          page.getByRole("button", { name: /Continua senza accettare/i }),
          page.getByRole("button", { name: /Rifiuta tutto/i }),
        ];

        for (const button of cookieButtons) {
          if (await button.count()) {
            try {
              await button.first().click({ timeout: 3000 });
              await page.waitForTimeout(800);
              break;
            } catch {}
          }
        }

        if (await page.locator("#didomi-popup").count()) {
          await page.evaluate(() => {
            document.querySelector("#didomi-host")?.remove();
            document.body.style.overflow = "auto";
          });
          await page.waitForTimeout(500);
        }
      }

      await publishButton.click();

      console.log("[SUBITO] click Pubblica annuncio eseguito");

      await page.waitForTimeout(7000);

      const currentUrl = page.url();
      const html = await page.content();
      const bodyText = await page.locator("body").innerText().catch(() => "");

      console.log("[SUBITO] URL dopo pubblicazione:", currentUrl);

      const idFromUrn = currentUrl.match(/id:ad:([a-zA-Z0-9-]+)/);
      const idFromQuery = currentUrl.match(/[?&]adId=([a-zA-Z0-9-]+)/i);

      const platformListingId =
        idFromUrn?.[1] ||
        idFromQuery?.[1];

      if (platformListingId) {
        console.log("[SUBITO] ID annuncio confermato:", platformListingId);

        return {
          success: true,
          platformListingId,
          platformUrl: currentUrl,
        };
      }

      if (/captcha|challenge|verifica|verify/i.test(html)) {
        console.log("[SUBITO] verifica manuale richiesta");

        return {
          success: false,
          requiresManualStep: true,
          error: "Subito richiede una verifica manuale.",
        };
      }

      const confirmedByText =
        /annuncio pubblicato|annuncio inserito|pubblicazione completata|il tuo annuncio è stato pubblicato/i.test(
          bodyText
        );

      if (confirmedByText) {
        console.log("[SUBITO] conferma testuale pubblicazione trovata");

        return {
          success: true,
          platformUrl: currentUrl,
        };
      }

      console.log("[SUBITO] nessuna conferma certa di pubblicazione");

      return {
        success: false,
        requiresManualStep: true,
        error:
          "Subito non ha restituito una conferma certa della pubblicazione. Controlla I tuoi annunci.",
      };

    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Errore sconosciuto durante la pubblicazione su Subito",
      };
    } finally {
      for (const file of tempFiles) {
        try {
          fs.unlinkSync(file);
        } catch {}
      }
    }
  }

  async updateListing(
    platformListingId: string,
    _payload: PlatformPayload
  ): Promise<PublishResult> {
    return {
      success: false,
      platformListingId,
      requiresManualStep: true,
      error: "Modifica annuncio Subito non ancora implementata.",
    };
  }

  async deleteListing(
    _platformListingId: string
  ): Promise<void> {
    // Verrà implementato dopo la pubblicazione.
  }

  async getListingStatus(
    _platformListingId: string
  ): Promise<ListingStatus> {
    return "PENDING";
  }

  async close(): Promise<void> {
    await this.context?.close();
    this.context = null;
    this.page = null;
  }
}
