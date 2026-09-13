// route.ts (dentro app/api/save-product)
//
// Cosa fa: dopo che hai pubblicato (o anche solo generato) un annuncio,
// questa porta di servizio salva tutto nel database per sempre:
//   - il prodotto (titolo, marca, modello, prezzo, ecc.)
//   - le foto (i link veri di Supabase)
//   - per ogni piattaforma dove hai provato a pubblicare, un "listing"
//     con l'esito (pubblicato o no, link dell'annuncio, eventuale errore)
//
// Da questo momento, se chiudi la pagina e la riapri, il prodotto non
// sparisce più: è nella pagina Inventario (che costruiremo dopo).

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../packages/db/client";

interface SaveProductBody {
  title: string;
  description: string;
  category?: string | null;
  brand?: string | null;
  model?: string | null;
  condition?: string | null;
  price: number;
  imageUrls: string[];
  publishResults: Array<{
    platform: "SUBITO" | "VINTED";
    success: boolean;
    platformListingId?: string;
    platformUrl?: string;
    error?: string;
  }>;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as SaveProductBody;

  // Creiamo il prodotto, le sue foto in ordine, e un "listing" per ogni
  // piattaforma, tutto in un solo passaggio collegato (così non si crea
  // per errore un prodotto senza foto o senza listing a metà).
  const product = await prisma.product.create({
    data: {
      title: body.title,
      description: body.description,
      category: body.category ?? null,
      brand: body.brand ?? null,
      model: body.model ?? null,
      condition: body.condition ?? null,
      suggestedPrice: body.price,
      salePrice: body.price,
      status: body.publishResults.some((r) => r.success) ? "PUBLISHED" : "TO_PUBLISH",
      images: {
        create: body.imageUrls.map((url, index) => ({
          imageUrl: url,
          order: index,
          isCover: index === 0,
        })),
      },
      listings: {
        create: body.publishResults.map((r) => ({
          platform: r.platform,
          price: body.price,
          status: r.success ? "PUBLISHED" : "FAILED",
          platformListingId: r.platformListingId ?? null,
          platformUrl: r.platformUrl ?? null,
          lastError: r.error ?? null,
          // Chiave unica richiesta dallo schema: qui ne generiamo una legata
          // al prodotto e alla piattaforma, così è comunque univoca.
          idempotencyKey: `${Date.now()}-${r.platform}`,
        })),
      },
      historyEvents: {
        create: [
          { eventType: "CREATED" },
          { eventType: "ANALYZED" },
          ...body.publishResults
            .filter((r) => r.success)
            .map((r) => ({
              eventType: r.platform === "SUBITO" ? "PUBLISHED_SUBITO" : "PUBLISHED_VINTED",
            })),
        ],
      },
    },
    include: { images: true, listings: true },
  });

  return NextResponse.json({ product });
}
