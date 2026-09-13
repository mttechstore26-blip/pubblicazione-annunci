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
    if (this.page) return this.page;

    const userDataDir =
      process.env.SUBITO_PROFILE_DIR ||
      path.resolve(process.cwd(), "pw-profile");

    const nodeRequire = eval("require") as NodeRequire;
    const { chromium } = nodeRequire("playwright") as typeof import("playwright");

    this.context = await chromium.launchPersistentContext(userDataDir, {
      channel: "chrome",
      headless: false,
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

      const loginVisible =
        page.url().includes("login") ||
        (await page.getByText("Accedi", { exact: true }).count()) > 0;

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
    const page = await this.getPage();
    const tempFiles: string[] = [];

    try {
      await page.goto(NEW_LISTING_URL, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      const loginVisible =
        page.url().includes("login") ||
        (await page.getByText("Accedi", { exact: true }).count()) > 0;

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

      await page.locator("#ad_name").waitFor({
        state: "visible",
        timeout: 30000,
      });

      await page.locator("#ad_name").fill(title);
      await page.waitForTimeout(1200);

      const suggestion = page
        .locator("#suggestions-autocomplete li")
        .first();

      if (!(await suggestion.count())) {
        return {
          success: false,
          requiresManualStep: true,
          error: "Subito non ha proposto automaticamente una categoria.",
        };
      }

      await suggestion.click();

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

      await page.locator("#location").fill(location);
      await page.waitForTimeout(1000);

      const locationSuggestion = page
        .locator('[id^="autocomplete-location-item-"]')
        .first();

      if (await locationSuggestion.count()) {
        await locationSuggestion.click();
      }

      await page
        .locator("#price")
        .fill(String(Math.round(price)));

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

      await publishButton.click();

      await page.waitForTimeout(2500);

      const currentUrl = page.url();
      const match = currentUrl.match(/id:ad:([a-zA-Z0-9-]+)/);

      if (match) {
        return {
          success: true,
          platformListingId: match[1],
          platformUrl: currentUrl,
        };
      }

      const html = await page.content();

      if (/captcha|challenge|verifica|verify/i.test(html)) {
        return {
          success: false,
          requiresManualStep: true,
          error: "Subito richiede una verifica manuale.",
        };
      }

      return {
        success: true,
        platformUrl: currentUrl,
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
