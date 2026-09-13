// upload-photos.ts
//
// Questa è la funzione che carica DAVVERO le foto online, dentro lo
// spazio "product-images" che hai creato su Supabase. Per ogni foto:
//   1. le dà un nome unico (per non sovrascrivere foto di prodotti diversi)
//   2. la manda a Supabase
//   3. si fa restituire il link pubblico della foto (quello che poi
//      useremo davvero per creare l'annuncio, anche su Subito/Vinted)
//
// Se una foto fallisce a metà caricamento (es. connessione che salta),
// la funzione lo segnala invece di far finta che sia andato tutto bene.

import { supabase, PRODUCT_IMAGES_BUCKET } from "./supabase";

export interface UploadedPhoto {
  url: string;
  path: string;
}

function generateFileName(file: File): string {
  const extension = file.name.split(".").pop() || "jpg";
  const randomId = Math.random().toString(36).slice(2, 10);
  return `${Date.now()}-${randomId}.${extension}`;
}

export async function uploadPhotos(files: File[]): Promise<UploadedPhoto[]> {
  const uploaded: UploadedPhoto[] = [];

  // Le carichiamo una alla volta (non tutte insieme): più lento ma più
  // facile da capire e da mostrare all'utente ("foto 2 di 6 caricata...").
  for (const file of files) {
    const path = generateFileName(file);

    const { error } = await supabase.storage
      .from(PRODUCT_IMAGES_BUCKET)
      .upload(path, file, { cacheControl: "3600", upsert: false });

    if (error) {
      throw new Error(`Caricamento fallito per ${file.name}: ${error.message}`);
    }

    const { data: publicUrlData } = supabase.storage
      .from(PRODUCT_IMAGES_BUCKET)
      .getPublicUrl(path);

    uploaded.push({ url: publicUrlData.publicUrl, path });
  }

  return uploaded;
}
