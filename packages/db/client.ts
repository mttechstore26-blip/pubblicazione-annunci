// client.ts
//
// Come il file lib/supabase.ts per le foto, questo crea UN SOLO
// collegamento al database e lo riusa in tutta l'app, invece di aprirne
// uno nuovo ogni volta (aprirne troppi rallenterebbe tutto).
//
// Prisma è lo strumento che useremo per "parlare" col database senza
// scrivere query SQL a mano: gli chiediamo cose tipo
// "prisma.product.create(...)" e lui si occupa di tradurle.
//
// Legge la connessione dalla variabile DATABASE_URL, che aggiungeremo
// al file .env.local insieme a quelle di Supabase che hai già messo.

import { PrismaClient } from "./generated/client";

// Questo pezzo un po' insolito (globalThis) serve solo a evitare che,
// durante lo sviluppo, Next.js crei per errore decine di collegamenti
// al database ogni volta che salvi un file. Dettaglio tecnico, non
// serve capirlo a fondo: si copia e basta.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
