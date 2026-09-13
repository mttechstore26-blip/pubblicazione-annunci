// VintedAdapter — VERSIONE MOCK (finta)
//
// Stessa idea del file subito/mock-adapter.ts: finge di parlare con Vinted
// per farci testare l'app senza pubblicare annunci veri.
//
// La differenza importante rispetto a Subito è che Vinted ha REGOLE DIVERSE
// (es. titolo più corto, categorie diverse, niente "marca/modello" liberi
// ma taglie/attributi predefiniti per alcune categorie). Anche se qui è
// tutto finto, ho già impostato le differenze corrette, così quando
// sostituiremo questo file con quello vero, la logica sarà già giusta.

import type {
  MarketplaceAdapter,
  NormalizedListing,
  PlatformPayload,
  ValidationResult,
  SessionStatus,
  PublishResult,
  ListingStatus,
} from "../../types";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class VintedMockAdapter implements MarketplaceAdapter {
  async authenticate(): Promise<SessionStatus> {
    await wait(200);
    return {
      connected: true,
      requiresReauth: false,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    };
  }

  validateListing(listing: NormalizedListing): ValidationResult {
    const missingFields: string[] = [];
    const warnings: string[] = [];

    if (!listing.title || listing.title.length < 5) missingFields.push("title");
    if (!listing.category) missingFields.push("category");
    if (!listing.price || listing.price <= 0) missingFields.push("price");
    if (listing.images.length === 0) missingFields.push("images");
    if (listing.images.length > 20) warnings.push("Vinted potrebbe limitare il numero di foto");
    if (listing.title.length > 40) warnings.push("Vinted mostra titoli più corti di Subito: valuta di accorciarlo");

    return { valid: missingFields.length === 0, missingFields, warnings };
  }

  transformListing(listing: NormalizedListing): PlatformPayload {
    return {
      platform: "VINTED",
      images: listing.images,
      fields: {
        // Vinted preferisce titoli più corti e diretti rispetto a Subito
        title: listing.title.slice(0, 40),
        description: listing.description,
        catalog_category: listing.category,
        price: listing.price,
        status: listing.condition, // su Vinted la "condizione" ha un set di valori fisso predefinito
        brand: listing.brand ?? null,
        color: listing.color ?? null,
      },
    };
  }

  async publishListing(payload: PlatformPayload, idempotencyKey: string): Promise<PublishResult> {
    await wait(800);

    const fakeId = `vinted-mock-${idempotencyKey.slice(0, 8)}`;
    return {
      success: true,
      platformListingId: fakeId,
      platformUrl: `https://www.vinted.it/mock-items/${fakeId}`,
    };
  }

  async updateListing(platformListingId: string, payload: PlatformPayload): Promise<PublishResult> {
    await wait(500);
    return {
      success: true,
      platformListingId,
      platformUrl: `https://www.vinted.it/mock-items/${platformListingId}`,
    };
  }

  async deleteListing(platformListingId: string): Promise<void> {
    await wait(300);
  }

  async getListingStatus(platformListingId: string): Promise<ListingStatus> {
    await wait(200);
    return "PUBLISHED";
  }
}
