import { NextRequest, NextResponse } from "next/server";
import { getAdapter } from "../../../../../packages/marketplaces";
import type { NormalizedListing } from "../../../../../packages/types";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const {
    listing,
    subitoTitle,
  } = body as {
    listing: NormalizedListing;
    subitoTitle?: string;
  };

  const idempotencyKey = randomUUID();

  const platform = "SUBITO" as const;

  const adapter = getAdapter(platform);

  const platformListing: NormalizedListing = {
    ...listing,
    title: subitoTitle?.trim() || listing.title,
  };

  const validation = adapter.validateListing(platformListing);

  if (!validation.valid) {
    return NextResponse.json({
      results: [
        {
          platform,
          success: false,
          error: `Campi mancanti: ${validation.missingFields.join(", ")}`,
        },
      ],
    });
  }

  const payload = adapter.transformListing(platformListing);

  let result;

  try {
    const publishResult = await adapter.publishListing(
      payload,
      `${idempotencyKey}-${platform}`
    );

    result = {
      platform,
      ...publishResult,
    };
  } catch (err) {
    result = {
      platform,
      success: false,
      error:
        err instanceof Error
          ? err.message
          : "Errore sconosciuto",
    };
  }

  const results = [result];

  return NextResponse.json({ results });
}
