"use client";

// PhotoUploader
//
// Spiegazione semplice: questo è il "pezzo" della schermata che gestisce
// le foto. Fa 4 cose:
//   1. mostra un grosso pulsante per scegliere le foto dal telefono
//   2. mostra le anteprime delle foto scelte, in fila
//   3. permette di togliere una foto (tasto X)
//   4. tiene traccia di quale foto è "principale" (la prima, di default)
//
// "use client" in cima al file vuol dire: questo pezzo di schermata deve
// girare nel telefono/browser dell'utente (perché reagisce ai tocchi),
// non sul server. È una regola di Next.js, non serve altro da sapere ora.

import { useState } from "react";

interface PhotoUploaderProps {
  onChange: (files: File[]) => void;
}

const MAX_PHOTOS = 10;

export function PhotoUploader({ onChange }: PhotoUploaderProps) {
  // "photos" è la lista di foto scelte finora, tenuta in memoria mentre
  // l'utente usa la schermata (non ancora salvata da nessuna parte).
  const [photos, setPhotos] = useState<File[]>([]);

  function handleFilesSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    const combined = [...photos, ...selected].slice(0, MAX_PHOTOS);
    setPhotos(combined);
    onChange(combined);
  }

  function removePhoto(index: number) {
    const updated = photos.filter((_, i) => i !== index);
    setPhotos(updated);
    onChange(updated);
  }

  return (
    <div className="w-full">
      {/* Pulsante grande per aprire la fotocamera/galleria dell'iPhone.
          "capture" suggerisce al telefono di aprire direttamente la fotocamera,
          ma l'utente può comunque scegliere dalla galleria. */}
      <label className="flex flex-col items-center justify-center w-full h-32 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 active:bg-gray-100 cursor-pointer">
        <span className="text-4xl mb-1">📷</span>
        <span className="text-base font-medium text-gray-700">
          {photos.length === 0 ? "Aggiungi foto" : `Aggiungi altre foto (${photos.length}/${MAX_PHOTOS})`}
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          capture="environment"
          className="hidden"
          onChange={handleFilesSelected}
          disabled={photos.length >= MAX_PHOTOS}
        />
      </label>

      {photos.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          {photos.map((file, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={URL.createObjectURL(file)}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === 0 && (
                <span className="absolute top-1 left-1 text-xs bg-black/70 text-white px-2 py-0.5 rounded-full">
                  Principale
                </span>
              )}
              <button
                type="button"
                onClick={() => removePhoto(index)}
                className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center rounded-full bg-black/70 text-white text-sm"
                aria-label="Rimuovi foto"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
