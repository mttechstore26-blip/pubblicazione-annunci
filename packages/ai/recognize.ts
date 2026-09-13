// recognize.ts
//
// Cosa fa questo file, in parole semplici:
// Prende le foto che hai caricato + il titolo che hai scritto (es. "Nintendo
// Switch completa"), e chiede a un modello AI multimodale (che "vede" le
// immagini) di riconoscere il prodotto: marca, modello, colore, accessori
// visibili, se c'è la scatola, difetti visibili, ecc.
//
// Due regole IMPORTANTI che rispettiamo sempre, come richiesto:
//   1. L'AI non deve "inventare" cose che non vede nelle foto.
//   2. Ogni campo ha una % di sicurezza (confidence): se è bassa, il campo
//      resta vuoto o viene segnato come "da confermare tu", mai dato per certo.
//
// NOTA per te (principiante): questo file NON chiama davvero un servizio AI
// in questa fase — dentro c'è un adapter "callVisionModel" che oggi è finto
// (restituisce un esempio), e in una fase successiva collegheremo alla vera
// API. La struttura però è già quella definitiva: cambierà solo l'interno
// della funzione callVisionModel, non il resto della pipeline.

import type { AiRecognitionResult, AiFieldResult } from "../types";

// Sotto questa soglia, un campo viene considerato "non abbastanza sicuro"
// e va segnalato all'utente per conferma invece di essere dato per buono.
const CONFIDENCE_THRESHOLD = 0.7;

interface RecognizeInput {
  imageUrls: string[]; // foto già caricate su storage (es. Supabase Storage)
  userTitle: string;   // quello che l'utente ha scritto, es. "Nintendo Switch completa"
}

// Struttura "grezza" che ci aspettiamo torni dal modello AI (prima di
// applicare la soglia di confidenza).
interface RawVisionOutput {
  category: { value: string | null; confidence: number };
  brand: { value: string | null; confidence: number };
  model: { value: string | null; confidence: number };
  variant: { value: string | null; confidence: number };
  color: { value: string | null; confidence: number };
  capacity: { value: string | null; confidence: number };
  accessoriesDetected: string[];
  hasBox: { value: boolean | null; confidence: number };
  cosmeticCondition: { value: string | null; confidence: number };
  visibleDefects: string[];
}

// Applica la soglia: se la confidenza è troppo bassa, il valore viene
// "nascosto" (null) e marcato needsConfirmation, così l'app mostra
// all'utente una domanda invece di un dato inventato.
function applyConfidenceThreshold<T>(field: { value: T | null; confidence: number }): AiFieldResult<T> {
  const belowThreshold = field.confidence < CONFIDENCE_THRESHOLD;
  return {
    value: belowThreshold ? null : field.value,
    confidence: field.confidence,
    needsConfirmation: belowThreshold || field.value === null,
  };
}

// Questa è la funzione che, in futuro, chiamerà davvero il modello AI
// multimodale mandandogli le foto + il titolo e chiedendogli di rispondere
// SOLO in JSON con questa struttura, con istruzioni esplicite del tipo:
// "Se non sei sicuro di un campo, restituisci confidence bassa. Non inventare."
async function callVisionModel(input: RecognizeInput): Promise<RawVisionOutput> {
  // TODO (fase successiva): sostituire con una vera chiamata AI multimodale,
  // passando le imageUrls come immagini e userTitle come contesto testuale.
  // Per ora restituiamo un esempio plausibile, così possiamo già costruire
  // e testare tutto il resto dell'app.
  return {
    category: { value: "Console", confidence: 0.95 },
    brand: { value: "Nintendo", confidence: 0.97 },
    model: { value: "Switch", confidence: 0.9 },
    variant: { value: null, confidence: 0.4 }, // es. non chiaro se OLED o standard → resterà da confermare
    color: { value: "Grigio", confidence: 0.85 },
    capacity: { value: null, confidence: 0.2 },
    accessoriesDetected: ["Dock", "Joy-Con", "Alimentatore"],
    hasBox: { value: true, confidence: 0.8 },
    cosmeticCondition: { value: "Ottime condizioni", confidence: 0.88 },
    visibleDefects: [],
  };
}

export async function recognizeProduct(input: RecognizeInput): Promise<AiRecognitionResult> {
  const raw = await callVisionModel(input);

  const category = applyConfidenceThreshold(raw.category);
  const brand = applyConfidenceThreshold(raw.brand);
  const model = applyConfidenceThreshold(raw.model);
  const variant = applyConfidenceThreshold(raw.variant);
  const color = applyConfidenceThreshold(raw.color);
  const capacity = applyConfidenceThreshold(raw.capacity);
  const hasBox = applyConfidenceThreshold(raw.hasBox);
  const cosmeticCondition = applyConfidenceThreshold(raw.cosmeticCondition);

  // Confidenza complessiva = media dei campi che l'AI ha effettivamente provato a compilare.
  const confidences = [category, brand, model, color, cosmeticCondition].map((f) => f.confidence);
  const overallConfidence = confidences.reduce((a, b) => a + b, 0) / confidences.length;

  return {
    category,
    brand,
    model,
    variant,
    color,
    capacity,
    accessoriesDetected: raw.accessoriesDetected,
    hasBox,
    cosmeticCondition,
    visibleDefects: raw.visibleDefects,
    overallConfidence,
  };
}
