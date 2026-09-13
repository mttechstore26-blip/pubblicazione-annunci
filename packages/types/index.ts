// Tipi core condivisi tra AI pipeline, adapter marketplace e app.

export type Platform = "SUBITO" | "VINTED";

/**
 * Rappresentazione interna, agnostica dalla piattaforma, di un annuncio.
 * Ogni adapter la trasforma nel payload specifico della propria piattaforma.
 */
export interface NormalizedListing {
  productId: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  brand?: string;
  model?: string;
  variant?: string;
  color?: string;
  condition: string; // es. "Ottime condizioni"
  capacity?: string; // es. "128GB"
  price: number;
  images: string[]; // URL in ordine, prima immagine = copertina
  attributes?: Record<string, string>; // attributi extra specifici categoria
}

export interface PlatformPayload {
  platform: Platform;
  fields: Record<string, unknown>; // struttura specifica della piattaforma
  images: string[];
}

export interface ValidationResult {
  valid: boolean;
  missingFields: string[];
  warnings: string[];
}

export interface SessionStatus {
  connected: boolean;
  expiresAt?: Date;
  requiresReauth: boolean;
}

export interface PublishResult {
  success: boolean;
  platformListingId?: string;
  platformUrl?: string;
  error?: string;
  requiresManualStep?: boolean; // es. CAPTCHA/verifica che deve completare l'utente
}

export type ListingStatus = "PENDING" | "PUBLISHED" | "FAILED" | "REMOVED";

/**
 * Contratto comune per ogni marketplace. SubitoAdapter e VintedAdapter
 * lo implementano; aggiungere un nuovo marketplace = nuova classe, zero
 * modifiche al resto del sistema.
 *
 * NB: publishListing/updateListing non bypassano CAPTCHA o protezioni anti-bot.
 * Se la piattaforma richiede una verifica manuale, il metodo ritorna
 * `requiresManualStep: true` e l'app chiede conferma all'utente.
 */
export interface MarketplaceAdapter {
  authenticate(): Promise<SessionStatus>;
  validateListing(listing: NormalizedListing): ValidationResult;
  transformListing(listing: NormalizedListing): PlatformPayload;
  publishListing(payload: PlatformPayload, idempotencyKey: string): Promise<PublishResult>;
  updateListing(platformListingId: string, payload: PlatformPayload): Promise<PublishResult>;
  deleteListing(platformListingId: string): Promise<void>;
  getListingStatus(platformListingId: string): Promise<ListingStatus>;
}

// --- AI ---

export interface AiFieldResult<T> {
  value: T | null;
  confidence: number; // 0-1
  needsConfirmation: boolean;
}

export interface AiRecognitionResult {
  category: AiFieldResult<string>;
  brand: AiFieldResult<string>;
  model: AiFieldResult<string>;
  variant: AiFieldResult<string>;
  color: AiFieldResult<string>;
  capacity: AiFieldResult<string>;
  accessoriesDetected: string[]; // solo accessori realmente visibili/confermati
  hasBox: AiFieldResult<boolean>;
  cosmeticCondition: AiFieldResult<string>;
  visibleDefects: string[];
  overallConfidence: number;
}

export interface PriceSuggestion {
  quickSale: number;      // "Vendita rapida"
  recommended: number;    // "Prezzo consigliato"
  maxRealistic: number;   // "Prezzo massimo realistico"
  source: "HISTORICAL" | "SIMILAR_PRODUCTS" | "MARKET_DATA" | "CATEGORY_RULES" | "AI_ESTIMATE";
}
