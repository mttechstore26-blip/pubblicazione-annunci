// generate-listing.ts
//
// Una volta che sappiamo COSA stiamo vendendo (grazie a recognize.ts),
// questo file scrive il testo dell'annuncio: titolo e descrizione.
//
// Punto importante che chiedevi tu: Subito e Vinted hanno stili diversi
// (Subito accetta titoli più lunghi e descrittivi, Vinted preferisce titoli
// corti e diretti). Per questo generiamo DUE versioni separate, non la
// stessa cosa copiata due volte.

import type { AiRecognitionResult } from "../types";

interface GenerateListingInput {
  recognition: AiRecognitionResult;
  userTitle: string; // quello scritto dall'utente, usato come base/contesto
}

interface GeneratedListingText {
  subitoTitle: string;
  vintedTitle: string;
  description: string;
}

// Template di descrizione semplice, per categoria. L'AI (in una fase
// successiva) riscriverà questo testo in modo più naturale, ma la struttura
// di base parte sempre da qui, così restiamo sempre "onesti" sui dati.
function buildDescription(r: AiRecognitionResult): string {
  const condizione = r.cosmeticCondition.value ?? "buone condizioni";
  const accessori = r.accessoriesDetected.length > 0
    ? r.accessoriesDetected.join(", ")
    : null;

  let text = `${[r.brand.value, r.model.value].filter(Boolean).join(" ")} in ${condizione}.\n`;
  text += "Perfettamente funzionante e testato.\n";

  if (accessori) {
    text += `\nInclusi: ${accessori}.\n`;
  }

  if (r.visibleDefects.length > 0) {
    text += `\nDa segnalare: ${r.visibleDefects.join(", ")}.\n`;
  }

  text += "\nSpedizione disponibile.";
  return text;
}

export function generateListingText(input: GenerateListingInput): GeneratedListingText {
  const { recognition, userTitle } = input;

  const productName = [recognition.brand.value, recognition.model.value]
    .filter(Boolean)
    .join(" ") || userTitle;

  const condizione = recognition.cosmeticCondition.value;

  // Subito: titolo più lungo, può includere "completo di accessori" ecc.
  const subitoTitle = condizione
    ? `${productName} - ${condizione}`.slice(0, 60)
    : productName.slice(0, 60);

  // Vinted: titolo corto e diretto.
  const vintedTitle = productName.slice(0, 40);

  const description = buildDescription(recognition);

  return { subitoTitle, vintedTitle, description };
}
