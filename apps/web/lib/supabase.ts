// supabase.ts
//
// Questo file crea UN SOLO "collegamento" verso Supabase, che il resto
// dell'app riusa sempre (invece di ricollegarsi ogni volta). Le due
// informazioni segrete/necessarie (URL del progetto e chiave) NON sono
// scritte qui dentro: vengono lette da un file .env.local che tu crei sul
// tuo computer e che NON viene mai caricato online (per sicurezza).
//
// Come si crea il file .env.local (lo rifaremo insieme quando avrai le chiavi):
//   1. nella cartella principale del progetto crea un file chiamato .env.local
//   2. dentro scrivi due righe:
//        NEXT_PUBLIC_SUPABASE_URL=incolla-qui-il-project-url
//        NEXT_PUBLIC_SUPABASE_ANON_KEY=incolla-qui-la-anon-key
//   3. salva. Fatto: il codice qui sotto le leggerà da solo.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Questo avviso ti aiuta a capire subito se hai dimenticato di creare
  // il file .env.local, invece di avere un errore poco chiaro più avanti.
  console.warn(
    "Attenzione: NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY mancanti. " +
    "Crea il file .env.local con le chiavi del tuo progetto Supabase."
  );
}

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "");

export const PRODUCT_IMAGES_BUCKET = "product-images";
