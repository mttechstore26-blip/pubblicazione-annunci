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
function buildDescription(
  r: AiRecognitionResult,
  userTitle: string
): string {
  const normalized = userTitle.toLowerCase();

  // Template specifico Xbox Series S
  if (
    normalized.includes("xbox serie s") ||
    normalized.includes("xbox series s")
  ) {
    return `Xbox Series S in ottime condizioni, perfettamente funzionante.

La console viene venduta completa di:

- Controller originale Xbox
- Cavo di alimentazione
- Cavo HDMI

Console testata e pronta all’uso.`;
  }

  const condizione =
    r.cosmeticCondition.value ?? "buone condizioni";

  const productName =
    userTitle.trim() ||
    [r.brand.value, r.model.value]
      .filter(Boolean)
      .join(" ");

  let text = `${productName} in ${condizione}.\n`;
  text += "Perfettamente funzionante e testato.\n";

  if (r.accessoriesDetected.length > 0) {
    text += "\nInclusi:\n";

    for (const accessorio of r.accessoriesDetected) {
      text += `- ${accessorio}\n`;
    }
  }

  if (r.visibleDefects.length > 0) {
    text += `\nDa segnalare: ${r.visibleDefects.join(", ")}.\n`;
  }

  text += "\nSpedizione disponibile.";

  return text;
}

export function generateListingText(input: GenerateListingInput): GeneratedListingText {
  const { recognition, userTitle } = input;

  const normalized = userTitle.toLowerCase();

  let subitoTitle: string;
  let vintedTitle: string;

  if (
    normalized.includes("xbox serie s") ||
    normalized.includes("xbox series s")
  ) {
    subitoTitle = "Xbox Serie S";
    vintedTitle = "Xbox Serie S";
  } else {
    // Per gli altri prodotti manteniamo come base il titolo scritto
    // dall'utente, evitando titoli generici come "Microsoft Xbox".
    subitoTitle = userTitle.trim().slice(0, 60);
    vintedTitle = userTitle.trim().slice(0, 40);
  }

  const description = buildDescription(
    recognition,
    userTitle
  );

  return {
    subitoTitle,
    vintedTitle,
    description
  };
}

