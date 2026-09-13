// SubitoAdapter — VERSIONE MOCK (finta)
//
// Cos'è questo file, in parole semplici:
// Quando l'app deve "pubblicare su Subito", in realtà chiama sempre le stesse
// 6 funzioni (authenticate, publishListing, ecc.), definite nel file
// packages/types/index.ts sotto il nome MarketplaceAdapter.
//
// Questa versione MOCK non si collega davvero a Subito.it: finge soltanto
// di farlo, e restituisce risposte "finte ma realistiche" (con un piccolo
// ritardo, come se stesse davvero caricando qualcosa).
// Serve per:
//   1. testare tutta l'app senza pubblicare annunci veri per errore
//   2. sviluppare mentre l'automazione vera (Playwright) non è ancora pronta
//
// Quando saremo pronti a collegarci davvero a Subito, creeremo un secondo
// file (subito/real-adapter.ts) che implementa la STESSA interfaccia, e
// basterà cambiare una riga di configurazione per passare dal finto al vero.

import type {
  MarketplaceAdapter,
  NormalizedListing,
  PlatformPayload,
  ValidationResult,
  SessionStatus,
  PublishResult,
  ListingStatus,
} from "../../types";

// Piccola funzione di comodo: aspetta un po', per simulare una chiamata di rete reale.
function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class SubitoMockAdapter implements MarketplaceAdapter {
  // Finge di verificare se l'account Subito è collegato.
  async authenticate(): Promise<SessionStatus> {
    await wait(200);
    return {
      connected: true,
      requiresReauth: false,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // finge: valido 30 giorni
    };
  }

  // Controlla che l'annuncio abbia tutti i campi che Subito richiede obbligatoriamente.
  // Qui mettiamo regole semplici; le affineremo quando conosceremo davvero il form di Subito.
  validateListing(listing: NormalizedListing): ValidationResult {
    const missingFields: string[] = [];
    const warnings: string[] = [];

    if (!listing.title || listing.title.length < 5) missingFields.push("title");
    if (!listing.category) missingFields.push("category");
    if (!listing.price || listing.price <= 0) missingFields.push("price");
    if (listing.images.length === 0) missingFields.push("images");
    if (listing.images.length > 12) warnings.push("Subito potrebbe limitare il numero di foto");
    if (listing.title.length > 60) warnings.push("Titolo lungo: Subito potrebbe troncarlo");

    return { valid: missingFields.length === 0, missingFields, warnings };
  }

  // Trasforma il nostro formato "universale" (NormalizedListing) nel formato
  // che (in futuro) invieremo davvero al form di Subito.
  transformListing(listing: NormalizedListing): PlatformPayload {
    return {
      platform: "SUBITO",
      images: listing.images,
      fields: {
        titolo: listing.title.slice(0, 60), // Subito limita la lunghezza del titolo
        descrizione: listing.description,
        categoria: listing.category,
        prezzo: listing.price,
        condizione: listing.condition,
        marca: listing.brand ?? null,
        modello: listing.model ?? null,
      },
    };
  }

  // "Pubblica" l'annuncio in modo finto.
  // idempotencyKey serve a evitare pubblicazioni doppie se l'utente preme
  // "Riprova" due volte: se vediamo la stessa chiave, non ripubblichiamo da zero.
  async publishListing(payload: PlatformPayload, idempotencyKey: string): Promise<PublishResult> {
    await wait(800);

    const fakeId = `subito-mock-${idempotencyKey.slice(0, 8)}`;
    return {
      success: true,
      platformListingId: fakeId,
      platformUrl: `https://www.subito.it/mock-listing/${fakeId}`,
    };
  }

  async updateListing(platformListingId: string, payload: PlatformPayload): Promise<PublishResult> {
    await wait(500);
    return {
      success: true,
      platformListingId,
      platformUrl: `https://www.subito.it/mock-listing/${platformListingId}`,
    };
  }

  async deleteListing(platformListingId: string): Promise<void> {
    await wait(300);
    // In modalità mock non c'è nulla da cancellare davvero.
  }

  async getListingStatus(platformListingId: string): Promise<ListingStatus> {
    await wait(200);
    return "PUBLISHED";
  }
}
