import type { BrowserContext, Page } from "playwright";
import type {
  MarketplaceAdapter,
  NormalizedListing,
  PlatformPayload,
  ValidationResult,
  SessionStatus,
  PublishResult,
  ListingStatus,
} from "../../types";

const VINTED_PROFILE_DIR =
  process.env.VINTED_PROFILE_DIR ||
  "/opt/mt-tech-publisher/apps/web/vinted-profile";

const CHROMIUM_PATH =
  "/root/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome";

const NEW_LISTING_URL = "https://www.vinted.it/items/new";

export class VintedRealAdapter implements MarketplaceAdapter {
  private context: BrowserContext | null = null;
  private page: Page | null = null;

  private async getPage(): Promise<Page> {
    if (this.page && !this.page.isClosed()) {
      return this.page;
    }

    console.log("[VINTED] avvio Chromium con profilo:", VINTED_PROFILE_DIR);

    const nodeRequire = eval("require") as NodeRequire;
    const { chromium } = nodeRequire("playwright") as typeof import("playwright");

    this.context = await chromium.launchPersistentContext(
      VINTED_PROFILE_DIR,
      {
        executablePath: CHROMIUM_PATH,
        headless: false,
        args: ["--no-sandbox", "--disable-dev-shm-usage"],
      }
    );

    this.page =
      this.context.pages()[0] || (await this.context.newPage());

    return this.page;
  }

  async authenticate(): Promise<SessionStatus> {
    try {
      const page = await this.getPage();

      await page.goto("https://www.vinted.it/", {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      console.log("[VINTED] pagina autenticazione:", page.url());

      const currentUrl = page.url().toLowerCase();

      const requiresReauth =
        currentUrl.includes("login") ||
        currentUrl.includes("member/signup") ||
        currentUrl.includes("auth");

      return {
        connected: !requiresReauth,
        requiresReauth,
      };
    } catch (err) {
      console.error("[VINTED] errore autenticazione:", err);

      return {
        connected: false,
        requiresReauth: true,
      };
    }
  }

  validateListing(listing: NormalizedListing): ValidationResult {
    const missingFields: string[] = [];

    if (!listing.title) missingFields.push("title");
    if (!listing.price) missingFields.push("price");
    if (!listing.images || listing.images.length === 0) {
      missingFields.push("images");
    }

    return {
      valid: missingFields.length === 0,
      missingFields,
      warnings: [],
    };
  }

  transformListing(listing: NormalizedListing): PlatformPayload {
    return {
      platform: "VINTED",
      images: listing.images,
      fields: {
        title: listing.title.slice(0, 40),
        description: listing.description,
        price: listing.price,
        category: listing.category,
        condition: listing.condition,
      },
    };
  }

  async publishListing(
    payload: PlatformPayload,
    idempotencyKey: string
  ): Promise<PublishResult> {
    const page = await this.getPage();

    try {
      console.log("[VINTED] apertura form nuovo articolo");

      await page.goto(NEW_LISTING_URL, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      console.log("[VINTED] URL form:", page.url());

      const currentUrl = page.url().toLowerCase();

      if (
        currentUrl.includes("login") ||
        currentUrl.includes("signup") ||
        currentUrl.includes("auth")
      ) {
        return {
          success: false,
          requiresManualStep: true,
          error: "Sessione Vinted non autenticata.",
        };
      }

      return {
        success: false,
        requiresManualStep: true,
        error:
          "Sessione Vinted collegata. Ora dobbiamo configurare i selettori reali del form.",
      };
    } catch (err) {
      return {
        success: false,
        error:
          err instanceof Error
            ? err.message
            : "Errore durante la pubblicazione su Vinted",
      };
    }
  }

  async updateListing(
    platformListingId: string,
    payload: PlatformPayload
  ): Promise<PublishResult> {
    return {
      success: false,
      requiresManualStep: true,
      error: "Modifica Vinted non ancora implementata.",
    };
  }

  async deleteListing(platformListingId: string): Promise<void> {}

  async getListingStatus(
    platformListingId: string
  ): Promise<ListingStatus> {
    return "PENDING";
  }

  async close() {
    await this.context?.close();
    this.context = null;
    this.page = null;
  }
}
