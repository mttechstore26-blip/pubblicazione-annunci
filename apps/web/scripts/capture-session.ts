// capture-session.ts
//
// A COSA SERVE: la prima volta che vuoi collegare Subito o Vinted, lanci
// questo script. Si apre una finestra di browser VERA (non nascosta):
// tu ci fai login dentro con le tue credenziali, esattamente come faresti
// normalmente sul telefono o sul computer. Quando hai finito, torni qui
// e premi Invio: lo script salva la tua sessione (cookie) in un file
// sul tuo computer, così le prossime volte non devi rifare il login.
//
// Nessun trucco: è letteralmente te che accedi con le tue credenziali,
// in una finestra di browser normale, con Playwright che sta solo a
// guardare e a salvare cosa succede dopo.
//
// COME SI USA (lo vedremo insieme quando saremo a questo punto):
//   npx tsx scripts/capture-session.ts subito
//   npx tsx scripts/capture-session.ts vinted
//
// Il file di sessione salvato NON va mai condiviso con nessuno: chiunque
// lo avesse potrebbe usarlo per accedere al tuo account senza password,
// esattamente come un cookie di accesso rubato. Lo aggiungeremo alla
// lista dei file che non vengono mai caricati online (come .env.local).

import { chromium } from "playwright";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const PLATFORM_URLS: Record<string, string> = {
  subito: "https://areariservata.subito.it/login_form?login_tooltip=true",
  vinted: "https://www.vinted.it/member/signup/select_type?ref_url=%2F",
};

async function main() {
  const platform = process.argv[2];

  if (!platform || !PLATFORM_URLS[platform]) {
    console.error("Uso: npx tsx scripts/capture-session.ts subito|vinted");
    process.exit(1);
  }

  const sessionsDir = path.join(process.cwd(), ".sessions");
  if (!fs.existsSync(sessionsDir)) fs.mkdirSync(sessionsDir);
  const sessionFile = path.join(sessionsDir, `${platform}.json`);

  console.log(`Apro il browser su ${PLATFORM_URLS[platform]}...`);
  console.log("Fai login con le tue credenziali vere nella finestra che si apre.");
  console.log("Quando hai finito ed sei collegato, torna qui e premi Invio.");

  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(PLATFORM_URLS[platform]);

  await waitForEnter();

  await context.storageState({ path: sessionFile });
  console.log(`Sessione salvata in ${sessionFile}`);

  await browser.close();
}

function waitForEnter(): Promise<void> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question("Premi Invio quando hai completato il login... ", () => {
      rl.close();
      resolve();
    });
  });
}

main();
