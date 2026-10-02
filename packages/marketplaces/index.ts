// Questo file è il posto in cui l'app "sceglie" quale versione usare:
// quella finta (mock) o quella vera. Il resto del programma non deve mai
// scrivere "new SubitoMockAdapter()" direttamente: chiede sempre a questa
// funzione, che decide da sola guardando le variabili d'ambiente.
//
// Variabili d'ambiente coinvolte (le imposteremo nel file .env):
//   MOCK_SUBITO=true   → usa la versione finta di Subito
//   MOCK_VINTED=true   → usa la versione finta di Vinted
//
// Quando avremo pronto l'adapter vero (con Playwright), basterà:
//   1. creare subito/real-adapter.ts con la stessa "forma" (stessi metodi)
//   2. importarlo qui sotto
//   3. mettere MOCK_SUBITO=false nel .env
// Nessun'altra parte dell'app dovrà cambiare.

import type { MarketplaceAdapter, Platform } from "../types";
import { SubitoMockAdapter } from "./subito/mock-adapter";
import { VintedMockAdapter } from "./vinted/mock-adapter";
import { SubitoRealAdapter } from "./subito/real-adapter";
import { VintedRealAdapter } from "./vinted/real-adapter";

// Gli adapter reali mantengono una sessione browser persistente.
// Devono quindi essere condivisi tra le richieste API dello stesso processo:
// creare una nuova istanza a ogni richiesta farebbe tentare a Playwright di
// aprire più Chromium sullo stesso userDataDir, causando:
// "Opening in existing browser session".
let subitoRealAdapter: SubitoRealAdapter | null = null;
let vintedRealAdapter: VintedRealAdapter | null = null;

function getSubitoRealAdapter(): SubitoRealAdapter {
  if (!subitoRealAdapter) {
    subitoRealAdapter = new SubitoRealAdapter();
  }

  return subitoRealAdapter;
}

function getVintedRealAdapter(): VintedRealAdapter {
  if (!vintedRealAdapter) {
    vintedRealAdapter = new VintedRealAdapter();
  }

  return vintedRealAdapter;
}

export function getAdapter(platform: Platform): MarketplaceAdapter {
  if (platform === "SUBITO") {
    const useMock = process.env.MOCK_SUBITO !== "false"; // finto di default finché non diciamo il contrario
    return useMock ? new SubitoMockAdapter() : getSubitoRealAdapter();
  }

  if (platform === "VINTED") {
    const useMock = process.env.MOCK_VINTED !== "false";
    return useMock ? new VintedMockAdapter() : getVintedRealAdapter();
  }

  throw new Error(`Piattaforma sconosciuta: ${platform}`);
}
