// route.ts (dentro app/api/analyze)
//
// AGGIORNAMENTO: questa porta di servizio ora chiama il riconoscimento
// VERO basato sul titolo (recognize-from-title.ts), non più quello finto
// basato su foto. Le foto restano facoltative per questo passaggio: se
// scrivi solo il titolo, funziona comunque.
//
// In futuro, quando aggiungeremo anche il vero riconoscimento dalle foto,
// questo file combinerà i due risultati (titolo + foto) invece di usarne
// uno solo — ma la struttura del resto dell'app non dovrà cambiare.

import { NextRequest, NextResponse } from "next/server";
import { recognizeFromTitle } from "../../../../../packages/ai/recognize-from-title";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { userTitle } = body as { imageUrls?: string[]; userTitle: string };

  if (!userTitle || userTitle.trim().length === 0) {
    return NextResponse.json({ error: "Scrivi almeno un titolo, es. 'Nintendo Switch'." }, { status: 400 });
  }

  const result = recognizeFromTitle(userTitle);

  return NextResponse.json(result);
}
