import { NextRequest, NextResponse } from "next/server";
import { getAdapter } from "../../../../../packages/marketplaces";
import type { NormalizedListing } from "../../../../../packages/types";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const {
    listing,
    subitoTitle,
    vintedTitle,
  } = body as {
    listing: NormalizedListing;
    subitoTitle?: string;
    vintedTitle?: string;
  };

  const idempotencyKey = randomUUID();

  const platformListings: Record<"SUBITO" | "VINTED", NormalizedListing> = {
    SUBITO: {
      ...listing,
      title: subitoTitle?.trim() || listing.title,
    },
    VINTED: {
      ...listing,
      title: vintedTitle?.trim() || listing.title,
    },
  };

  const platforms = ["SUBITO", "VINTED"] as const;

  const results = await Promise.all(
    platforms.map(async (platform) => {
      const adapter = getAdapter(platform);
      const platformListing = platformListings[platform];

      const validation = adapter.validateListing(platformListing);

      if (!validation.valid) {
        return {
          platform,
          success: false,
          error: `Campi mancanti: ${validation.missingFields.join(", ")}`,
        };
      }

      const payload = adapter.transformListing(platformListing);

      try {
        const publishResult = await adapter.publishListing(
          payload,
          `${idempotencyKey}-${platform}`
        );

        return {
          platform,
          ...publishResult,
        };
      } catch (err) {
        return {
          platform,
          success: false,
          error:
            err instanceof Error
              ? err.message
              : "Errore sconosciuto",
        };
      }
    })
  );

  return NextResponse.json({ results });
}
