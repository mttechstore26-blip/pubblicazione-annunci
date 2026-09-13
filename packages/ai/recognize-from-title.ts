// recognize-from-title.ts
//
// QUESTO è il pezzo "reale" di oggi (non più un esempio finto).
// Prende il titolo che scrivi (es. "Nintendo Switch completa") e:
//   1. lo pulisce (minuscolo, senza accenti strani)
//   2. cerca nel catalogo (product-catalog.ts) l'alias più specifico
//      contenuto nel titolo
//   3. se lo trova, restituisce marca/modello/categoria con confidenza alta
//   4. se non trova nulla, restituisce tutto vuoto con confidenza bassa
//      (mai un prodotto inventato)
//
// Nota per te: le foto, per ora, non vengono ancora davvero "guardate" —
// arriveranno più avanti. Oggi il riconoscimento si basa solo sul titolo,
// come avevi suggerito tu, ed è un vero risparmio: nessuna chiamata AI a
// pagamento per questo passaggio.

import type { AiRecognitionResult, AiFieldResult } from "../types";
import { PRODUCT_CATALOG, type CatalogEntry } from "./product-catalog";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // toglie accenti (es. è → e)
}

function certain<T>(value: T): AiFieldResult<T> {
  return { value, confidence: 0.95, needsConfirmation: false };
}

function unknown<T>(): AiFieldResult<T> {
  return { value: null as unknown as T, confidence: 0, needsConfirmation: true };
}

// Trova la voce di catalogo più specifica che compare nel titolo.
// "Più specifica" = l'alias più lungo che matcha (così "switch oled"
// batte "switch" se il titolo contiene entrambe le parole).
function findBestMatch(normalizedTitle: string): { entry: CatalogEntry; matchedAlias: string } | null {
  let best: { entry: CatalogEntry; matchedAlias: string } | null = null;

  for (const entry of PRODUCT_CATALOG) {
    for (const alias of entry.aliases) {
      if (normalizedTitle.includes(alias)) {
        if (!best || alias.length > best.matchedAlias.length) {
          best = { entry, matchedAlias: alias };
        }
      }
    }
  }

  return best;
}

// Cerca nel titolo qualche parola che indichi le condizioni del prodotto,
// così se scrivi "Nintendo Switch come nuova" il campo condizione si
// riempie da solo. Se non trova nulla, resta da confermare (non inventiamo).
function guessCondition(normalizedTitle: string): AiFieldResult<string> {
  const map: Record<string, string> = {
    "come nuovo": "Come nuovo",
    "come nuova": "Come nuovo",
    "ottime condizioni": "Ottime condizioni",
    "ottimo stato": "Ottime condizioni",
    "buone condizioni": "Buone condizioni",
    "usato": "Buone condizioni",
    "difettoso": "Da riparare",
    "non funzionante": "Da riparare",
  };

  for (const [keyword, condition] of Object.entries(map)) {
    if (normalizedTitle.includes(keyword)) {
      return certain(condition);
    }
  }

  return unknown<string>();
}

export function recognizeFromTitle(userTitle: string): AiRecognitionResult {
  const normalizedTitle = normalize(userTitle);
  const match = findBestMatch(normalizedTitle);

  if (!match) {
    // Nessun prodotto noto riconosciuto: tutto vuoto, tutto da confermare.
    // Meglio onesti che indovinare.
    return {
      category: unknown(),
      brand: unknown(),
      model: unknown(),
      variant: unknown(),
      color: unknown(),
      capacity: unknown(),
      accessoriesDetected: [],
      hasBox: unknown(),
      cosmeticCondition: guessCondition(normalizedTitle),
      visibleDefects: [],
      overallConfidence: 0,
    };
  }

  const { entry } = match;

  return {
    category: certain(entry.category),
    brand: certain(entry.brand),
    model: certain(entry.model),
    variant: entry.variant ? certain(entry.variant) : unknown(),
    color: unknown(), // il colore non si capisce dal solo titolo, resta da confermare
    capacity: unknown(),
    accessoriesDetected: [], // senza foto vere non "vediamo" gli accessori: lista vuota, onesta
    hasBox: unknown(),
    cosmeticCondition: guessCondition(normalizedTitle),
    visibleDefects: [],
    overallConfidence: 0.9,
  };
}
