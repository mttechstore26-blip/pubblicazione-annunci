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
  try {
    const body = (await request.json()) as SaveProductBody;

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
        status: body.publishResults.some((r) => r.success)
          ? "PUBLISHED"
          : "TO_PUBLISH",

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
                eventType:
                  r.platform === "SUBITO"
                    ? "PUBLISHED_SUBITO"
                    : "PUBLISHED_VINTED",
              })),
          ],
        },
      },

      include: {
        images: true,
        listings: true,
      },
    });

    return NextResponse.json({ product });
  } catch (error) {
    console.error("SAVE PRODUCT ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Errore sconosciuto nel salvataggio prodotto",
      },
      { status: 500 }
    );
  }
}
