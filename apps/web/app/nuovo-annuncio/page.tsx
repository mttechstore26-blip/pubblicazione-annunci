"use client";

// Schermata "Nuovo annuncio" — versione 3
//
// Novità di questo passaggio: dopo che l'AI ha riconosciuto il prodotto,
// appare un pulsante "Genera annuncio" che prepara titolo, descrizione e
// prezzo per Subito e Vinted, MODIFICABILI da te. Alla fine c'è il
// pulsante vero "Pubblica su Subito + Vinted".
//
// Il flusso ora è completo (anche se ancora tutto "finto" dietro le
// quinte): foto → titolo → analisi AI → generazione annuncio →
// modifica manuale → pubblicazione con risultato per piattaforma.

import { useEffect, useState } from "react";
import { PhotoUploader } from "../../components/PhotoUploader";
import { RecognitionResult } from "../../components/RecognitionResult";
import { uploadPhotos } from "../../lib/upload-photos";

type Status = "idle" | "analyzing" | "analyzed" | "generating" | "ready" | "uploading" | "publishing" | "published" | "error";

export default function NuovoAnnuncioPage() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [recognition, setRecognition] = useState<any>(null);

  // Campi dell'annuncio finale, modificabili a mano dopo la generazione
  const [subitoTitle, setSubitoTitle] = useState("");
  const [vintedTitle, setVintedTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
    const [condition, setCondition] = useState("");

  const [publishResults, setPublishResults] = useState<any[] | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  useEffect(() => {
    function handleExtensionMessage(event: MessageEvent) {
      if (event.source !== window) return;

      if (event.data?.type !== "MTTECH_SUBITO_RESULT") return;

      if (event.data?.success !== true) return;

      setPublishResults((current) => {
        const results = current ?? [];

        return results.map((result) =>
          result.platform === "SUBITO"
            ? {
                ...result,
                success: true,
                pending: false,
                externalId: event.data.adId ?? null,
              }
            : result
        );
      });

      setStatus("published");
    }

    window.addEventListener("message", handleExtensionMessage);

    return () => {
      window.removeEventListener("message", handleExtensionMessage);
    };
  }, []);

  async function handleAnalyze() {
    setStatus("analyzing");
    const fakeImageUrls = photos.map((f) => f.name);

    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrls: fakeImageUrls, userTitle: title }),
    });

    const data = await response.json();
    setRecognition(data);
        setCondition(data.cosmeticCondition?.value || "Buone condizioni");
    setStatus("analyzed");
  }

  async function handleGenerate() {
    setStatus("generating");

    const response = await fetch("/api/generate-listing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recognition, userTitle: title }),
    });

    const data = await response.json();
    setSubitoTitle(data.subitoTitle);
    setVintedTitle(data.vintedTitle);
    setDescription(data.description);
    setPrice(data.price?.recommended ?? 0);
    setStatus("ready");
  }

  async function handlePublish() {
    setUploadError(null);

    // Passo 1: carichiamo davvero le foto online (se ce ne sono), prima
    // di preparare l'annuncio, così Subito/Vinted riceveranno link veri
    // e non più nomi di file finti.
    let realImageUrls: string[] = [];

    if (photos.length > 0) {
      setStatus("uploading");
      try {
        const uploaded = await uploadPhotos(photos);
        realImageUrls = uploaded.map((u) => u.url);
      } catch (err) {
        setUploadError(err instanceof Error ? err.message : "Caricamento foto fallito");
        setStatus("error");
        return;
      }
    }

    setStatus("publishing");

    const listing = {
      productId: "temp-id", // sarà un id vero quando colleghiamo il database
      title: subitoTitle || title,
      description,
      category: recognition.category.value,
      brand: recognition.brand.value,
      model: recognition.model.value,
      condition,
      price,
      images: realImageUrls,
    };

    // Invia l'annuncio al bridge dell'estensione Chrome MT TECH.
    window.postMessage(
      {
        type: "MTTECH_PUBLISH_SUBITO",
        listing: {
          ...listing,
          title: subitoTitle || title,
          location: "Palmi",
        },
      },
      "*"
    );

    // Subito viene confermato realmente dall'estensione Chrome.
    // Vinted non è ancora collegato alla pubblicazione reale.
    setPublishResults([
      {
        platform: "SUBITO",
        success: false,
        pending: true,
      },
      {
        platform: "VINTED",
        success: false,
        pending: false,
        error: "Automazione Vinted non ancora collegata",
      },
    ]);

    // Manteniamo lo stato "publishing" finché Subito non conferma
    // realmente il completamento dell'inserimento.
  }

  return (
    <main className="min-h-screen bg-white px-4 pt-6 pb-24 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Nuovo annuncio</h1>

      <section className="mb-6">
        <p className="text-sm font-medium text-gray-600 mb-2">1. Aggiungi le foto</p>
        <PhotoUploader onChange={setPhotos} />
      </section>

      <section className="mb-6">
        <p className="text-sm font-medium text-gray-600 mb-2">2. Scrivi un titolo breve</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Es. Nintendo Switch completa"
          className="w-full text-base border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </section>

      {status === "analyzing" && (
        <p className="text-sm text-gray-500 mb-4">Sto analizzando il prodotto…</p>
      )}

      {(status === "analyzed" || status === "generating" || status === "ready" || status === "publishing" || status === "published") && recognition && (
        <section className="mb-6">
          <RecognitionResult result={recognition} />
        </section>
      )}

      {status === "analyzed" && (
        <button
          type="button"
          onClick={handleGenerate}
          className="w-full h-12 rounded-2xl text-white text-base font-semibold bg-gray-800 mb-24"
        >
          Genera annuncio
        </button>
      )}

      {status === "generating" && (
        <p className="text-sm text-gray-500 mb-4">Sto preparando titolo, descrizione e prezzo…</p>
      )}

      {(status === "ready" || status === "uploading" || status === "publishing" || status === "published" || status === "error") && (
        <section className="mb-24">
          <p className="text-base font-semibold mb-2">Anteprima annuncio</p>

          <label className="block text-xs text-gray-500 mt-3 mb-1">Titolo Subito</label>
          <input
            value={subitoTitle}
            onChange={(e) => setSubitoTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm"
          />

          <label className="block text-xs text-gray-500 mt-3 mb-1">Titolo Vinted</label>
          <input
            value={vintedTitle}
            onChange={(e) => setVintedTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm"
          />

          <label className="block text-xs text-gray-500 mt-3 mb-1">Descrizione</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm"
          />

          <label className="block text-xs text-gray-500 mt-3 mb-1">Prezzo (€)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm"
          />


          <div className="relative z-50 pointer-events-auto">
          <label className="block text-xs text-gray-500 mt-3 mb-1">
            Condizione *
          </label>

          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm bg-white"
          >
            <option value="">Seleziona condizione</option>
            <option value="Nuovo">Nuovo</option>
            <option value="Come nuovo">Come nuovo</option>
            <option value="Ottime condizioni">Ottime condizioni</option>
            <option value="Buone condizioni">Buone condizioni</option>
            <option value="Discrete condizioni">Discrete condizioni</option>
          </select>


          </div>

          {status === "ready" && (
            <button
              type="button"
              onClick={handlePublish}
              disabled={false}
              className="w-full h-14 rounded-2xl text-white text-base font-semibold bg-black disabled:bg-gray-300 disabled:text-gray-500 mt-6"
            >
              Pubblica su Subito + Vinted
            </button>
          )}

          {status === "uploading" && (
            <p className="text-sm text-gray-500 mt-6">Sto caricando le foto…</p>
          )}

          {status === "publishing" && (
            <p className="text-sm text-gray-500 mt-6">Sto pubblicando…</p>
          )}

          {status === "error" && uploadError && (
            <div className="mt-6">
              <p className="text-sm text-red-600 mb-3">{uploadError}</p>
              <button
                type="button"
                onClick={handlePublish}
                className="w-full h-12 rounded-2xl text-white text-sm font-semibold bg-black"
              >
                Riprova
              </button>
            </div>
          )}

          {status === "published" && publishResults && (
            <div className="mt-6 space-y-2">
              {publishResults.map((r) => (
                <div key={r.platform} className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3">
                  <span className="text-sm font-medium">{r.platform === "SUBITO" ? "Subito" : "Vinted"}</span>
                  <span className={`text-sm ${r.success ? "text-green-600" : "text-red-600"}`}>
                    {r.pending
                      ? "⏳ Pubblicazione in corso…"
                      : r.success
                        ? "✅ Pubblicato"
                        : `❌ ${r.error ?? "Non pubblicato"}`}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {status === "idle" || status === "analyzing" ? (
        <button
          type="button"
          onClick={handleAnalyze}
          disabled={title.trim().length === 0 || status === "analyzing"}
          className="fixed bottom-6 left-4 right-4 max-w-md mx-auto h-14 rounded-2xl text-white text-base font-semibold bg-black disabled:bg-gray-300 disabled:text-gray-500"
        >
          {status === "analyzing" ? "Analisi in corso…" : "Analizza con AI"}
        </button>
      ) : null}
    </main>
  );
}
