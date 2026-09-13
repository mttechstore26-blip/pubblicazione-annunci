// VintedAdapter — VERSIONE REALE (bozza, stessa idea di subito/real-adapter.ts)
//
// Stessa struttura del file gemello per Subito: usa la sessione salvata
// con capture-session.ts, apre il form vero di Vinted, e si ferma in modo
// sicuro (requiresManualStep) finché non avremo registrato i selettori
// veri con "npx playwright codegen https://www.vinted.it/items/new".

import { chromium, type Browser, type Page } from "playwright";
import * as path from "path";
import type {
  MarketplaceAdapter,
  NormalizedListing,
  PlatformPayload,
  ValidationResult,
  SessionStatus,
  PublishResult,
  ListingStatus,
} from "../../types";

const SESSION_FILE = path.join(process.cwd(), ".sessions", "vinted.json");
const NEW_LISTING_URL = "https://www.vinted.it/items/new"; // da verificare/aggiornare con codegen

export class VintedRealAdapter implements MarketplaceAdapter {
  private browser: Browser | null = null;
  private page: Page | null = null;

  private async getPage(): Promise<Page> {
    if (this.page) return this.page;
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext({ storageState: SESSION_FILE });
    this.page = await context.newPage();
    return this.page;
  }

  async authenticate(): Promise<SessionStatus> {
    try {
      const page = await this.getPage();
      await page.goto("https://www.vinted.it/");
      // TODO (da completare con codegen): verifica reale di essere loggati.
      return { connected: true, requiresReauth: false };
    } catch {
      return { connected: false, requiresReauth: true };
    }
  }

  validateListing(listing: NormalizedListing): ValidationResult {
    const missingFields: string[] = [];
    if (!listing.title) missingFields.push("title");
    if (!listing.price) missingFields.push("price");
    if (listing.images.length === 0) missingFields.push("images");
    return { valid: missingFields.length === 0, missingFields, warnings: [] };
  }

  transformListing(listing: NormalizedListing): PlatformPayload {
    return {
      platform: "VINTED",
      images: listing.images,
      fields: {
        title: listing.title.slice(0, 40),
        description: listing.description,
        price: listing.price,
      },
    };
  }

  async publishListing(payload: PlatformPayload, idempotencyKey: string): Promise<PublishResult> {
    const page = await this.getPage();

    try {
      await page.goto(NEW_LISTING_URL);

      // ---- DA SOSTITUIRE CON CODEGEN (stesso procedimento di Subito) ----
      return {
        success: false,
        requiresManualStep: true,
        error: "Selettori del form Vinted non ancora configurati. Completa il form manualmente nella finestra aperta, poi conferma qui.",
      };
      // ---- FINE SEZIONE DA COMPLETARE ----
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : "Errore durante la pubblicazione su Vinted",
      };
    }
  }

  async updateListing(platformListingId: string, payload: PlatformPayload): Promise<PublishResult> {
    return { success: false, requiresManualStep: true, error: "Non ancora implementato." };
  }

  async deleteListing(platformListingId: string): Promise<void> {}

  async getListingStatus(platformListingId: string): Promise<ListingStatus> {
    return "PENDING";
  }

  async close() {
    await this.browser?.close();
  }
}
