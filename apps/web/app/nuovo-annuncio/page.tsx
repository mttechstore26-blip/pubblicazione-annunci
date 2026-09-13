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

import { useEffect, useRef, useState } from "react";
import { PhotoUploader } from "../../components/PhotoUploader";
import { uploadPhotos } from "../../lib/upload-photos";

type Status = "idle" | "analyzing" | "analyzed" | "generating" | "ready" | "uploading" | "publishing" | "published" | "error";

export default function NuovoAnnuncioPage() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [productTemplates, setProductTemplates] = useState<any[]>([]);

  useEffect(() => {
    async function loadProductTemplates() {
      try {
        const response = await fetch("/api/product-template");

        if (!response.ok) {
          throw new Error("Errore caricamento prodotti");
        }

        const data = await response.json();

        setProductTemplates(data.templates ?? []);
      } catch (error) {
        console.error(
          "MT TECH: errore caricamento tendina prodotti",
          error
        );
      }
    }

    loadProductTemplates();
  }, []);
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

  const [publishedImageUrls, setPublishedImageUrls] = useState<string[]>([]);

  const productSavedRef = useRef(false);

  useEffect(() => {
    function updateFinalStatus(results: any[]) {
      if (results.length === 0) return;

      // Se almeno una piattaforma sta ancora lavorando, aspettiamo.
      if (results.some((result) => result.pending === true)) {
        setStatus("publishing");
        return;
      }

      // Entrambe hanno terminato.
      if (results.every((result) => result.success === true)) {
        setUploadError(null);
        setStatus("published");
        return;
      }

      // Una o entrambe hanno fallito.
      const failed = results.find(
        (result) => result.success !== true
      );

      setUploadError(
        failed?.error ||
          `Pubblicazione ${failed?.platform || "piattaforma"} non riuscita`
      );

      setStatus("error");
    }

    function handleExtensionMessage(event: MessageEvent) {
      if (event.source !== window) return;

      if (event.data?.type === "MTTECH_SUBITO_RESULT") {
        setPublishResults((current) => {
          const results = current ?? [];

          const next = results.map((result) =>
            result.platform === "SUBITO"
              ? {
                  ...result,
                  success: event.data?.success === true,
                  pending: false,
                  externalId:
                    event.data?.success === true
                      ? event.data.adId ?? null
                      : undefined,
                  error:
                    event.data?.success === true
                      ? undefined
                      : event.data?.error ||
                        "Errore pubblicazione Subito",
                }
              : result
          );

          updateFinalStatus(next);
          return next;
        });

        return;
      }

      if (event.data?.type === "MTTECH_VINTED_RESULT") {
        setPublishResults((current) => {
          const results = current ?? [];

          const next = results.map((result) =>
            result.platform === "VINTED"
              ? {
                  ...result,
                  success: event.data?.success === true,
                  pending: false,
                  error:
                    event.data?.success === true
                      ? undefined
                      : event.data?.error ||
                        "Errore pubblicazione Vinted",
                }
              : result
          );

          updateFinalStatus(next);
          return next;
        });

        return;
      }
    }

    window.addEventListener("message", handleExtensionMessage);

    return () => {
      window.removeEventListener("message", handleExtensionMessage);
    };
  }, []);

  useEffect(() => {
    function handleExtensionMessage(event: MessageEvent) {
      if (event.source !== window) return;

      if (event.data?.type === "MTTECH_SUBITO_RESULT") {
        if (event.data?.success !== true) return;

        setPublishResults((current) => {
          const results = current ?? [];

          const next = results.map((result) =>
            result.platform === "SUBITO"
              ? {
                  ...result,
                  success: true,
                  pending: false,
                  externalId: event.data.adId ?? null,
                }
              : result
          );

          if (
            next.length > 0 &&
            next.every((result) => result.pending !== true) &&
            next.every((result) => result.success === true)
          ) {
            setUploadError(null);
            setStatus("published");
          }

          return next;
        });

        return;
      }

      if (event.data?.type === "MTTECH_VINTED_RESULT") {
        setPublishResults((current) => {
          const results = current ?? [];

          return results.map((result) =>
            result.platform === "VINTED"
              ? {
                  ...result,
                  success: event.data?.success === true,
                  pending: false,
                  error:
                    event.data?.success === true
                      ? undefined
                      : event.data?.error || "Errore pubblicazione Vinted",
                }
              : result
          );
        });

        if (event.data?.success === true) {
          setUploadError(null);
          setStatus("published");
        } else {
          setUploadError(
            event.data?.error || "Errore pubblicazione Vinted"
          );
          setStatus("error");
        }

        return;
      }
    }

    window.addEventListener("message", handleExtensionMessage);

    return () => {
      window.removeEventListener("message", handleExtensionMessage);
    };
  }, []);

  useEffect(() => {
    if (!publishResults || publishResults.length === 0) return;

    // Aspettiamo che tutte le piattaforme abbiano concluso il tentativo.
    if (publishResults.some((result) => result.pending === true)) return;

    // Evita di salvare due volte lo stesso prodotto.
    if (productSavedRef.current) return;

    productSavedRef.current = true;

    async function saveProduct() {
      try {
        const response = await fetch("/api/save-product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description,
            category: recognition?.category?.value ?? null,
            brand: recognition?.brand?.value ?? null,
            model: recognition?.model?.value ?? null,
            condition: condition || null,
            price,
            imageUrls: publishedImageUrls,
            publishResults: publishResults.map((result) => ({
              platform: result.platform,
              success: result.success === true,
              platformListingId:
                result.externalId ?? result.platformListingId ?? undefined,
              platformUrl:
                result.platform === "SUBITO" && result.externalId
                  ? `https://areariservata.subito.it/annunci/inserito?adId=${result.externalId}`
                  : result.platformUrl ?? undefined,
              error: result.error ?? undefined,
            })),
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Salvataggio database fallito (${response.status}): ${errorText}`
          );
        }

        const data = await response.json();

        console.log(
          "✅ MT TECH: prodotto salvato nel database",
          data.product?.id
        );
      } catch (error) {
        // Consente un eventuale nuovo tentativo se il salvataggio fallisce.
        productSavedRef.current = false;

        console.error(
          "MT TECH: errore salvataggio prodotto",
          error
        );
      }
    }

    saveProduct();
  }, [
    publishResults,
    publishedImageUrls,
    title,
    description,
    recognition,
    condition,
    price,
  ]);

  async function prepareListingAutomatically(productName: string) {
    const cleanName = productName.trim();

    if (cleanName.length < 3 || photos.length === 0) {
      return;
    }

    try {
      setUploadError(null);
      setStatus("analyzing");

      // 1. Prima cerchiamo se questo prodotto è già conosciuto.
      const templateResponse = await fetch(
        `/api/product-template?q=${encodeURIComponent(cleanName)}`
      );

      if (templateResponse.ok) {
        const templateData = await templateResponse.json();
        const template = templateData.template;

        if (template) {
          const defaults =
            template.defaultAttributes &&
            typeof template.defaultAttributes === "object"
              ? template.defaultAttributes
              : {};

          const subito =
            template.subitoAttributes &&
            typeof template.subitoAttributes === "object"
              ? template.subitoAttributes
              : {};

          const vinted =
            template.vintedAttributes &&
            typeof template.vintedAttributes === "object"
              ? template.vintedAttributes
              : {};

          const templateRecognition = {
            brand: {
              value: template.brand,
              confidence: 1,
            },
            model: {
              value: template.model,
              confidence: 1,
            },
            category: {
              value: template.category,
              confidence: 1,
            },
            cosmeticCondition: {
              value:
                defaults.condition ||
                "Ottime condizioni",
              confidence: 1,
            },
          };

          setRecognition(templateRecognition);

          setSubitoTitle(
            subito.title ||
            defaults.subitoTitle ||
            cleanName
          );

          setVintedTitle(
            vinted.title ||
            defaults.vintedTitle ||
            cleanName
          );

          setDescription(
            template.descriptionPattern ||
            defaults.description ||
            ""
          );

          const savedPrice = Number(defaults.price || 0);

          const fallbackPrice =
            template.priceRangeMin && template.priceRangeMax
              ? Math.round(
                  (Number(template.priceRangeMin) +
                    Number(template.priceRangeMax)) /
                    2
                )
              : 0;

          setPrice(savedPrice || fallbackPrice);

          setCondition(
            defaults.condition ||
            "Ottime condizioni"
          );

          setStatus("ready");

          console.log(
            "✅ MT TECH: template già conosciuto utilizzato:",
            `${template.brand} ${template.model}`
          );

          return;
        }
      }

      // 2. Se non esiste un template, usiamo la generazione attuale.
      const analyzeResponse = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrls: photos.map((f) => f.name),
          userTitle: cleanName,
        }),
      });

      if (!analyzeResponse.ok) {
        throw new Error("Analisi prodotto non riuscita");
      }

      const analyzed = await analyzeResponse.json();

      setRecognition(analyzed);

      const generatedCondition =
        analyzed.cosmeticCondition?.value ||
        "Ottime condizioni";

      setCondition(generatedCondition);
      setStatus("generating");

      const generateResponse = await fetch("/api/generate-listing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recognition: analyzed,
          userTitle: cleanName,
        }),
      });

      if (!generateResponse.ok) {
        throw new Error("Generazione annuncio non riuscita");
      }

      const generated = await generateResponse.json();

      const finalSubitoTitle =
        generated.subitoTitle || cleanName;

      const finalVintedTitle =
        generated.vintedTitle || cleanName;

      const finalDescription =
        generated.description || "";

      const finalPrice =
        generated.price?.recommended ?? 0;

      setSubitoTitle(finalSubitoTitle);
      setVintedTitle(finalVintedTitle);
      setDescription(finalDescription);
      setPrice(finalPrice);

      setStatus("ready");

      // 3. Memorizziamo il nuovo prodotto per le prossime volte.
      fetch("/api/product-template", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: analyzed?.brand?.value,
          model: analyzed?.model?.value,
          category: analyzed?.category?.value,

          defaultAttributes: {
            subitoTitle: finalSubitoTitle,
            vintedTitle: finalVintedTitle,
            description: finalDescription,
            condition: generatedCondition,
            price: finalPrice,
          },

          subitoAttributes: {
            title: finalSubitoTitle,
          },

          vintedAttributes: {
            title: finalVintedTitle,
          },

          descriptionPattern: finalDescription,

          priceRangeMin:
            generated.price?.min ?? finalPrice,

          priceRangeMax:
            generated.price?.max ?? finalPrice,
        }),
      }).catch((error) => {
        console.error(
          "MT TECH: template non salvato",
          error
        );
      });
    } catch (error) {
      setUploadError(
        error instanceof Error
          ? error.message
          : "Errore durante la preparazione dell'annuncio"
      );

      setStatus("error");
    }
  }

  useEffect(() => {
    if (title.trim().length < 3 || photos.length === 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      prepareListingAutomatically(title);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [title, photos]);

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

    if (realImageUrls.length === 0) {
      setUploadError("Carica almeno una foto del prodotto");
      setStatus("error");
      return;
    }

    productSavedRef.current = false;
    setPublishedImageUrls(realImageUrls);

    // Prepariamo PRIMA i due stati.
    // Così nessun risultato veloce dell'estensione può andare perso.
    setPublishResults([
      {
        platform: "SUBITO",
        success: false,
        pending: true,
      },
      {
        platform: "VINTED",
        success: false,
        pending: true,
      },
    ]);

    setStatus("publishing");

    const listing = {
      productId: "temp-id", // sarà un id vero quando colleghiamo il database
      title: subitoTitle || title,
      description,
      category: recognition.category.value,
      brand: recognition.brand.value,
      condition,
      price,
      images: realImageUrls,
    };

    // Pubblica su Subito.
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

    // Pubblica su Vinted.
    window.postMessage(
      {
        type: "MTTECH_PUBLISH_VINTED",
        listing: {
          ...listing,
          title: vintedTitle || title,
        },
      },
      "*"
    );


  }

  return (
    <main className="min-h-screen bg-white px-4 pt-6 pb-24 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Nuovo annuncio</h1>

        <a
          href="/prodotti"
          className="text-sm font-semibold border border-gray-300 rounded-xl px-3 py-2"
        >
          Gestione prodotti
        </a>
      </div>


      <section className="mb-6">
        <p className="text-sm font-semibold text-gray-800 mb-2">
          1. Seleziona prodotto
        </p>

        <select
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-14 text-base border border-gray-300 rounded-2xl px-4 bg-white focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Seleziona prodotto</option>

          {productTemplates.map((template) => {
            const productName = `${template.brand} ${template.model}`;

            return (
              <option key={template.id} value={productName}>
                {productName}
              </option>
            );
          })}
        </select>
      </section>

      <section className="mb-6">
        <p className="text-sm font-semibold text-gray-800 mb-2">
          2. Carica le foto
        </p>

        <PhotoUploader onChange={setPhotos} />
      </section>

      {status === "analyzing" && (
        <p className="text-sm text-gray-500 mb-4">Riconosco il prodotto e preparo l’annuncio…</p>
      )}

      {status === "generating" && (
        <p className="text-sm text-gray-500 mb-4">Compilazione automatica dell’annuncio…</p>
      )}

      {(status === "ready" || status === "uploading" || status === "publishing" || status === "published" || status === "error") && (
        <section className="mb-24">
          <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold">Riepilogo annuncio</h2>
              <span className="text-green-600 text-sm font-semibold">
                ✓ Pronto
              </span>
            </div>

            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">Prodotto</p>
              <p className="text-base font-semibold">
                {subitoTitle || title}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-1">Prezzo</p>
                <p className="text-lg font-bold">{price} €</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-1">Condizioni</p>
                <p className="text-sm font-semibold">{condition}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Descrizione</p>
              <div className="bg-white border border-gray-200 rounded-xl p-3">
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {description}
                </p>
              </div>
            </div>
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

          {(status === "publishing" || status === "published" || status === "error") && publishResults && (
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


    </main>
  );
}
