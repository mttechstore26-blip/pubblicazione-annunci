import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../packages/db/client";

function serializeTemplate(template: any) {
  return {
    ...template,
    priceRangeMin:
      template.priceRangeMin != null ? Number(template.priceRangeMin) : null,
    priceRangeMax:
      template.priceRangeMax != null ? Number(template.priceRangeMax) : null,
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get("q") || "").trim().toLowerCase();

    const templates = await prisma.productTemplate.findMany({
      orderBy: [{ brand: "asc" }, { model: "asc" }],
    });

    // Usato dalla pagina Gestione prodotti e dalla tendina.
    if (!q) {
      return NextResponse.json({
        templates: templates.map(serializeTemplate),
      });
    }

    const template =
      templates.find((t) => {
        const full = `${t.brand} ${t.model}`.trim().toLowerCase();
        const model = t.model.toLowerCase();

        return (
          full === q ||
          model === q ||
          full.includes(q) ||
          q.includes(full) ||
          q.includes(model)
        );
      }) ?? null;

    if (!template) {
      return NextResponse.json({ template: null });
    }

    await prisma.productTemplate.update({
      where: { id: template.id },
      data: {
        timesUsed: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      template: serializeTemplate(template),
    });
  } catch (error) {
    console.error("PRODUCT TEMPLATE GET ERROR:", error);

    return NextResponse.json(
      { error: "Errore caricamento prodotti" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const brand = String(body.brand || "").trim();
    const model = String(body.model || "").trim();
    const category = String(body.category || "").trim();

    if (!brand || !model || !category) {
      return NextResponse.json(
        { error: "Marca, modello e categoria sono obbligatori" },
        { status: 400 }
      );
    }

    const title = String(body.title || `${brand} ${model}`).trim();
    const description = String(body.description || "").trim();
    const condition = String(
      body.condition || "Ottime condizioni"
    ).trim();
    const price = Number(body.price || 0);

    const template = await prisma.productTemplate.upsert({
      where: {
        brand_model: {
          brand,
          model,
        },
      },

      update: {
        category,
        descriptionPattern: description,
        priceRangeMin: price,
        priceRangeMax: price,

        defaultAttributes: {
          price,
          condition,
          description,
          subitoTitle: body.subitoTitle || title,
          vintedTitle: body.vintedTitle || title,
        },

        subitoAttributes: {
          title: body.subitoTitle || title,
        },

        vintedAttributes: {
          title: body.vintedTitle || title,
        },
      },

      create: {
        brand,
        model,
        category,
        descriptionPattern: description,
        priceRangeMin: price,
        priceRangeMax: price,

        defaultAttributes: {
          price,
          condition,
          description,
          subitoTitle: body.subitoTitle || title,
          vintedTitle: body.vintedTitle || title,
        },

        subitoAttributes: {
          title: body.subitoTitle || title,
        },

        vintedAttributes: {
          title: body.vintedTitle || title,
        },
      },
    });

    return NextResponse.json({
      template: serializeTemplate(template),
    });
  } catch (error) {
    console.error("PRODUCT TEMPLATE POST ERROR:", error);

    return NextResponse.json(
      { error: "Errore salvataggio prodotto" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    const id = String(body.id || "").trim();

    if (!id) {
      return NextResponse.json(
        { error: "ID prodotto mancante" },
        { status: 400 }
      );
    }

    const brand = String(body.brand || "").trim();
    const model = String(body.model || "").trim();
    const category = String(body.category || "").trim();
    const description = String(body.description || "").trim();
    const condition = String(
      body.condition || "Ottime condizioni"
    ).trim();
    const price = Number(body.price || 0);

    const subitoTitle = String(
      body.subitoTitle || `${brand} ${model}`
    ).trim();

    const vintedTitle = String(
      body.vintedTitle || `${brand} ${model}`
    ).trim();

    const template = await prisma.productTemplate.update({
      where: { id },

      data: {
        brand,
        model,
        category,
        descriptionPattern: description,
        priceRangeMin: price,
        priceRangeMax: price,

        defaultAttributes: {
          price,
          condition,
          description,
          subitoTitle,
          vintedTitle,
        },

        subitoAttributes: {
          title: subitoTitle,
        },

        vintedAttributes: {
          title: vintedTitle,
        },
      },
    });

    return NextResponse.json({
      template: serializeTemplate(template),
    });
  } catch (error) {
    console.error("PRODUCT TEMPLATE PUT ERROR:", error);

    return NextResponse.json(
      { error: "Errore modifica prodotto" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = String(searchParams.get("id") || "").trim();

    if (!id) {
      return NextResponse.json(
        { error: "ID prodotto mancante" },
        { status: 400 }
      );
    }

    await prisma.productTemplate.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PRODUCT TEMPLATE DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Errore eliminazione prodotto" },
      { status: 500 }
    );
  }
}
