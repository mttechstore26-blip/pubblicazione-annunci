"use client";

import { useEffect, useState } from "react";

type Template = {
  id: string;
  brand: string;
  model: string;
  category: string;
  descriptionPattern?: string | null;
  priceRangeMin?: number | null;
  defaultAttributes?: any;
  subitoAttributes?: any;
  vintedAttributes?: any;
};

const emptyForm = {
  id: "",
  brand: "",
  model: "",
  category: "",
  subitoTitle: "",
  vintedTitle: "",
  description: "",
  price: "",
  condition: "Ottime condizioni",
};

export default function ProdottiPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function loadTemplates() {
    setLoading(true);

    try {
      const response = await fetch("/api/product-template");
      const data = await response.json();

      setTemplates(data.templates ?? []);
    } catch {
      setMessage("Errore caricamento prodotti");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTemplates();
  }, []);

  function editTemplate(template: Template) {
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

    setForm({
      id: template.id,
      brand: template.brand,
      model: template.model,
      category: template.category,
      subitoTitle:
        subito.title ||
        defaults.subitoTitle ||
        `${template.brand} ${template.model}`,
      vintedTitle:
        vinted.title ||
        defaults.vintedTitle ||
        `${template.brand} ${template.model}`,
      description:
        template.descriptionPattern ||
        defaults.description ||
        "",
      price: String(
        defaults.price ??
          template.priceRangeMin ??
          ""
      ),
      condition:
        defaults.condition ||
        "Ottime condizioni",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function saveTemplate() {
    if (
      !form.brand.trim() ||
      !form.model.trim() ||
      !form.category.trim()
    ) {
      setMessage("Compila marca, modello e categoria");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const editing = Boolean(form.id);

      const response = await fetch("/api/product-template", {
        method: editing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: form.id || undefined,
          brand: form.brand,
          model: form.model,
          category: form.category,
          subitoTitle: form.subitoTitle,
          vintedTitle: form.vintedTitle,
          description: form.description,
          price: Number(form.price || 0),
          condition: form.condition,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Errore salvataggio"
        );
      }

      setMessage(
        editing
          ? "✅ Prodotto modificato"
          : "✅ Prodotto aggiunto"
      );

      setForm(emptyForm);
      await loadTemplates();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Errore salvataggio prodotto"
      );
    } finally {
      setSaving(false);
    }
  }

  async function deleteTemplate(id: string, name: string) {
    const confirmed = window.confirm(
      `Vuoi eliminare "${name}" dalla tendina?`
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/product-template?id=${encodeURIComponent(id)}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Errore eliminazione"
        );
      }

      setMessage("✅ Prodotto eliminato");

      if (form.id === id) {
        setForm(emptyForm);
      }

      await loadTemplates();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Errore eliminazione prodotto"
      );
    }
  }

  return (
    <main className="min-h-screen bg-white px-4 pt-6 pb-24 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-xl font-bold">
          Gestione prodotti
        </h1>

        <a
          href="/nuovo-annuncio"
          className="text-sm font-semibold border border-gray-300 rounded-xl px-3 py-2"
        >
          Nuovo annuncio
        </a>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Gestisci i prodotti disponibili nella tendina di pubblicazione.
      </p>

      <section className="border border-gray-200 rounded-2xl p-4 mb-8 bg-gray-50">
        <h2 className="font-bold mb-4">
          {form.id ? "Modifica prodotto" : "Aggiungi prodotto"}
        </h2>

        <div className="space-y-4">
          <input
            value={form.brand}
            onChange={(e) =>
              setForm({ ...form, brand: e.target.value })
            }
            placeholder="Marca, es. Nintendo"
            className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white"
          />

          <input
            value={form.model}
            onChange={(e) =>
              setForm({ ...form, model: e.target.value })
            }
            placeholder="Modello, es. Switch OLED"
            className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white"
          />

          <input
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            placeholder="Categoria, es. Console"
            className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white"
          />

          <input
            value={form.subitoTitle}
            onChange={(e) =>
              setForm({
                ...form,
                subitoTitle: e.target.value,
              })
            }
            placeholder="Titolo Subito"
            className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white"
          />

          <input
            value={form.vintedTitle}
            onChange={(e) =>
              setForm({
                ...form,
                vintedTitle: e.target.value,
              })
            }
            placeholder="Titolo Vinted"
            className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white"
          />

          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            placeholder="Descrizione"
            rows={7}
            className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white"
          />

          <input
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
            placeholder="Prezzo"
            className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white"
          />

          <select
            value={form.condition}
            onChange={(e) =>
              setForm({
                ...form,
                condition: e.target.value,
              })
            }
            className="w-full border border-gray-300 rounded-xl px-3 py-3 bg-white"
          >
            <option value="Nuovo">Nuovo</option>
            <option value="Come nuovo">Come nuovo</option>
            <option value="Ottime condizioni">
              Ottime condizioni
            </option>
            <option value="Buone condizioni">
              Buone condizioni
            </option>
            <option value="Discrete condizioni">
              Discrete condizioni
            </option>
          </select>

          <button
            type="button"
            onClick={saveTemplate}
            disabled={saving}
            className="w-full h-12 rounded-2xl bg-black text-white font-semibold disabled:bg-gray-300"
          >
            {saving
              ? "Salvataggio..."
              : form.id
                ? "Salva modifiche"
                : "Aggiungi prodotto"}
          </button>

          {form.id && (
            <button
              type="button"
              onClick={() => setForm(emptyForm)}
              className="w-full h-11 rounded-2xl border border-gray-300 bg-white font-medium"
            >
              Annulla modifica
            </button>
          )}
        </div>

        {message && (
          <p className="text-sm mt-4">{message}</p>
        )}
      </section>

      <section>
        <h2 className="font-bold mb-4">
          Prodotti disponibili
        </h2>

        {loading ? (
          <p className="text-sm text-gray-500">
            Caricamento...
          </p>
        ) : (
          <div className="space-y-3">
            {templates.map((template) => {
              const defaults =
                template.defaultAttributes &&
                typeof template.defaultAttributes === "object"
                  ? template.defaultAttributes
                  : {};

              const price =
                defaults.price ??
                template.priceRangeMin ??
                0;

              const name =
                `${template.brand} ${template.model}`;

              return (
                <div
                  key={template.id}
                  className="border border-gray-200 rounded-2xl p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold">
                        {name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {template.category}
                      </p>

                      <p className="text-base font-semibold mt-2">
                        {price} €
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          editTemplate(template)
                        }
                        className="px-3 py-2 rounded-xl border border-gray-300 text-sm font-medium"
                      >
                        Modifica
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deleteTemplate(
                            template.id,
                            name
                          )
                        }
                        className="px-3 py-2 rounded-xl border border-red-200 text-red-600 text-sm font-medium"
                      >
                        Elimina
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
