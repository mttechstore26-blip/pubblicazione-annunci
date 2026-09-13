// route.ts (dentro app/api/generate-listing)
//
// Cosa fa: prende il risultato del riconoscimento AI (quello che hai visto
// nella schermata precedente) e lo trasforma in un annuncio vero e proprio:
// titolo per Subito, titolo per Vinted, descrizione, prezzo consigliato.
//
// Nota sul prezzo: non abbiamo ancora un database vero con i tuoi dati
// storici, quindi qui uso una fonte finta ("mockDataSource") che dice
// sempre "non ho dati storici, non ho prodotti simili" così il motore
// prezzo arriva fino alla fase 4 (regole per categoria) e restituisce
// comunque un prezzo sensato. Quando colleghiamo il database vero, questa
// fonte finta sparirà da sola senza toccare il resto della logica.

import { NextRequest, NextResponse } from "next/server";
import { generateListingText } from "../../../../../packages/ai/generate-listing";
import { suggestPrice } from "../../../../../packages/ai/pricing";
import type { AiRecognitionResult } from "../../../../../packages/types";

const mockPricingDataSource = {
  async getHistoricalSalePrices() {
    return []; // nessuno storico ancora: il database vero non è collegato
  },
  async getSimilarActivePrices() {
    return [];
  },
  async getMarketPriceEstimate() {
    return null;
  },
  async getCategoryRulePriceRange(category: string) {
    // Regole di partenza molto semplici, solo per far vedere il flusso.
    // Le affineremo quando avremo dati veri.
    const ranges: Record<string, { min: number; max: number }> = {
      Console: { min: 120, max: 220 },
      Smartphone: { min: 150, max: 600 },
      Notebook: { min: 200, max: 900 },
    };
    return ranges[category] ?? { min: 50, max: 150 };
  },
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { recognition, userTitle } = body as {
    recognition: AiRecognitionResult;
    userTitle: string;
  };

  const listingText = generateListingText({ recognition, userTitle });

  const price = await suggestPrice(
    {
      brand: recognition.brand.value,
      model: recognition.model.value,
      category: recognition.category.value,
      condition: recognition.cosmeticCondition.value,
    },
    mockPricingDataSource
  );

  return NextResponse.json({ ...listingText, price });
}
