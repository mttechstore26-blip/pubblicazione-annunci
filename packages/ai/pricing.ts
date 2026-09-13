// pricing.ts
//
// Suggerisce il prezzo, provando le fonti in questo ordine (dalla più
// affidabile alla meno affidabile), esattamente come richiesto:
//   1. le TUE vendite passate di prodotti uguali/simili
//   2. prodotti simili già presenti nel tuo database (anche non venduti)
//   3. dati di mercato (in futuro: fonti esterne recuperabili legalmente)
//   4. regole configurabili per categoria/modello (es. "console valgono X-Y")
//   5. stima dell'AI, solo come ultima spiaggia
//
// Appena una fonte trova abbastanza dati, ci fermiamo lì e non scendiamo
// alle fonti meno affidabili — così il prezzo suggerito è sempre il più
// solido possibile.

import type { PriceSuggestion } from "../types";

interface PricingInput {
  brand: string | null;
  model: string | null;
  category: string | null;
  condition: string | null;
}

// Questa interfaccia rappresenta "l'accesso al database" che passeremo
// a questa funzione. Per ora è solo la forma (interface); l'implementazione
// vera userà Prisma per interrogare Postgres.
interface PricingDataSource {
  getHistoricalSalePrices(brand: string, model: string): Promise<number[]>;
  getSimilarActivePrices(brand: string, model: string): Promise<number[]>;
  getMarketPriceEstimate(brand: string, model: string): Promise<number | null>;
  getCategoryRulePriceRange(category: string): Promise<{ min: number; max: number } | null>;
}

function buildSuggestionFromPrices(prices: number[], source: PriceSuggestion["source"]): PriceSuggestion {
  const sorted = [...prices].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];

  return {
    quickSale: Math.round(median * 0.9),
    recommended: Math.round(median),
    maxRealistic: Math.round(median * 1.1),
    source,
  };
}

export async function suggestPrice(
  input: PricingInput,
  dataSource: PricingDataSource
): Promise<PriceSuggestion | null> {
  const { brand, model, category } = input;

  // 1. Storico delle TUE vendite (la fonte più affidabile: sono dati reali tuoi)
  if (brand && model) {
    const historical = await dataSource.getHistoricalSalePrices(brand, model);
    if (historical.length >= 2) {
      return buildSuggestionFromPrices(historical, "HISTORICAL");
    }
  }

  // 2. Prodotti simili nel tuo database (anche se non ancora venduti)
  if (brand && model) {
    const similar = await dataSource.getSimilarActivePrices(brand, model);
    if (similar.length >= 2) {
      return buildSuggestionFromPrices(similar, "SIMILAR_PRODUCTS");
    }
  }

  // 3. Dati di mercato esterni (fase successiva: fonti da definire, solo legali)
  if (brand && model) {
    const marketEstimate = await dataSource.getMarketPriceEstimate(brand, model);
    if (marketEstimate) {
      return {
        quickSale: Math.round(marketEstimate * 0.9),
        recommended: Math.round(marketEstimate),
        maxRealistic: Math.round(marketEstimate * 1.15),
        source: "MARKET_DATA",
      };
    }
  }

  // 4. Regole configurabili per categoria (es. "console usate: 100-250€")
  if (category) {
    const range = await dataSource.getCategoryRulePriceRange(category);
    if (range) {
      const mid = (range.min + range.max) / 2;
      return {
        quickSale: range.min,
        recommended: Math.round(mid),
        maxRealistic: range.max,
        source: "CATEGORY_RULES",
      };
    }
  }

  // 5. Nessuna fonte affidabile disponibile: qui, in una fase successiva,
  // chiederemo una stima all'AI come ultima risorsa. Per ora restituiamo
  // null: l'app mostrerà "prezzo da inserire manualmente".
  return null;
}
