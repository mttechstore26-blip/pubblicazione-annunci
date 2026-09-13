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

export function getAdapter(platform: Platform): MarketplaceAdapter {
  if (platform === "SUBITO") {
    const useMock = process.env.MOCK_SUBITO !== "false"; // finto di default finché non diciamo il contrario
    return useMock ? new SubitoMockAdapter() : new SubitoRealAdapter();
  }

  if (platform === "VINTED") {
    return new VintedMockAdapter();
  }

  throw new Error(`Piattaforma sconosciuta: ${platform}`);
}
