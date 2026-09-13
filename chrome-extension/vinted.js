const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getStoredListing() {
  return new Promise((resolve) => {
    chrome.storage.local.get(
      ["mttechVintedListing", "mttechVintedPending"],
      (data) => resolve(data)
    );
  });
}

function setNativeValue(element, value) {
  const prototype =
    element instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype;

  const setter = Object.getOwnPropertyDescriptor(
    prototype,
    "value"
  )?.set;

  if (setter) {
    setter.call(element, value);
  } else {
    element.value = value;
  }

  element.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      inputType: "insertText",
      data: value
    })
  );

  element.dispatchEvent(
    new Event("change", { bubbles: true })
  );
}

async function fillField(selector, value) {
  const element = document.querySelector(selector);

  if (!element || value == null) {
    console.warn("MT TECH Vinted: campo non trovato", selector);
    return false;
  }

  element.focus();
  setNativeValue(element, String(value));
  element.blur();

  await sleep(300);

  return true;
}

async function fillVintedPrice(value) {
  const element = document.querySelector("#price");

  if (!element) {
    console.warn("MT TECH Vinted: campo prezzo non trovato");
    return false;
  }

  const numericPrice = Math.round(Number(value));

  if (!Number.isFinite(numericPrice)) {
    console.warn("MT TECH Vinted: prezzo non valido", value);
    return false;
  }

  const priceText = String(numericPrice);

  element.focus();

  const setter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value"
  )?.set;

  // Pulisce il campo.
  if (setter) {
    setter.call(element, "");
  } else {
    element.value = "";
  }

  element.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      inputType: "deleteContentBackward",
      data: null
    })
  );

  await sleep(200);

  // Simula la digitazione: es. 220
  let current = "";

  for (const char of priceText) {
    current += char;

    if (setter) {
      setter.call(element, current);
    } else {
      element.value = current;
    }

    element.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        inputType: "insertText",
        data: char
      })
    );

    await sleep(120);
  }

  element.dispatchEvent(
    new Event("change", { bubbles: true })
  );

  await sleep(500);

  console.log(
    "✅ MT TECH Vinted: prezzo inserito",
    priceText
  );

  return true;
}

async function urlToFile(url, index) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Impossibile scaricare foto Vinted ${index + 1}`
    );
  }

  const blob = await response.blob();

  let extension = "jpg";

  if (blob.type.includes("png")) extension = "png";
  if (blob.type.includes("webp")) extension = "webp";

  return new File(
    [blob],
    `mttech-vinted-${index + 1}.${extension}`,
    {
      type: blob.type || "image/jpeg"
    }
  );
}

async function uploadImages(urls) {
  const input = document.querySelector(
    'input[type="file"][name="photos"]'
  );

  if (!input) {
    console.warn("MT TECH Vinted: input foto non trovato");
    return;
  }

  const transfer = new DataTransfer();

  for (let i = 0; i < Math.min(urls.length, 20); i++) {
    const file = await urlToFile(urls[i], i);
    transfer.items.add(file);
  }

  input.files = transfer.files;

  input.dispatchEvent(
    new Event("change", { bubbles: true })
  );

  console.log(
    "✅ MT TECH Vinted: foto caricate",
    transfer.files.length
  );
}

async function waitForDynamicFields() {
  for (let i = 0; i < 30; i++) {
    if (
      document.querySelector("#brand") &&
      document.querySelector("#condition") &&
      document.querySelector("#price")
    ) {
      return true;
    }

    await sleep(500);
  }

  return false;
}

async function selectBrand(brandName) {
  if (!brandName) return false;

  const brandField = document.querySelector("#brand");

  if (!brandField) {
    console.warn("MT TECH Vinted: campo Brand non trovato");
    return false;
  }

  // Apre il menu dei brand
  brandField.click();
  brandField.focus();

  await sleep(700);

  let option = null;

  // Prima prova tra i brand già mostrati da Vinted.
  for (let i = 0; i < 12; i++) {
    const radios = [
      ...document.querySelectorAll('[role="radio"][aria-label]')
    ];

    option = radios.find((el) =>
      (el.getAttribute("aria-label") || "")
        .trim()
        .toLowerCase() === brandName.trim().toLowerCase()
    );

    if (option) break;

    await sleep(250);
  }

  // Se non è tra i suggerimenti, prova la ricerca interna.
  if (!option) {
    const searchInput =
      document.querySelector("#brand-search-input");

    if (searchInput) {
      searchInput.focus();
      setNativeValue(searchInput, brandName);

      console.log(
        "MT TECH Vinted: cerco brand",
        brandName
      );

      await sleep(1000);

      for (let i = 0; i < 12; i++) {
        const radios = [
          ...document.querySelectorAll('[role="radio"][aria-label]')
        ];

        option = radios.find((el) =>
          (el.getAttribute("aria-label") || "")
            .trim()
            .toLowerCase() === brandName.trim().toLowerCase()
        );

        if (option) break;

        await sleep(250);
      }
    }
  }

  if (!option) {
    console.warn(
      "MT TECH Vinted: Brand non disponibile",
      brandName
    );

    return false;
  }

  console.log(
    "MT TECH Vinted: clicco brand",
    option.getAttribute("aria-label")
  );

  option.click();

  await sleep(600);

  const selectedValue =
    document.querySelector("#brand")?.value || "";

  if (
    selectedValue.trim().toLowerCase() ===
    brandName.trim().toLowerCase()
  ) {
    console.log(
      "✅ MT TECH Vinted: Brand selezionato",
      selectedValue
    );

    return true;
  }

  console.warn(
    "MT TECH Vinted: click eseguito ma Brand non confermato",
    selectedValue
  );

  return false;
}

async function selectPlatform(listing) {
  const platformField = document.querySelector("#video_game_platform");

  // Se questa categoria non richiede una piattaforma, continuiamo normalmente.
  if (!platformField) {
    console.log("MT TECH Vinted: campo Piattaforma non presente");
    return true;
  }

  const title = (listing.title || "").toLowerCase();

  let wanted = null;

  if (
    title.includes("xbox series s") ||
    title.includes("xbox serie s") ||
    title.includes("xbox series x") ||
    title.includes("xbox serie x")
  ) {
    wanted = "Xbox Series S & X";
  }

  if (!wanted) {
    console.warn(
      "MT TECH Vinted: piattaforma richiesta ma prodotto non riconosciuto"
    );
    return false;
  }

  // Potrebbe essere già stata scelta automaticamente da Vinted.
  if (
    (platformField.value || "").trim().toLowerCase() ===
    wanted.toLowerCase()
  ) {
    console.log(
      "✅ MT TECH Vinted: piattaforma già selezionata",
      platformField.value
    );
    return true;
  }

  platformField.click();
  platformField.focus();

  await sleep(700);

  let option = null;

  // Cerca la voce tra quelle già mostrate nel menu.
  for (let i = 0; i < 20; i++) {
    const radios = [
      ...document.querySelectorAll('[role="radio"]')
    ];

    option = radios.find((el) =>
      (el.textContent || "")
        .trim()
        .toLowerCase() === wanted.toLowerCase()
    );

    if (option) break;

    await sleep(250);
  }

  // Se non è subito visibile, usa "Cerca una piattaforma".
  if (!option) {
    const searchInput =
      document.querySelector("#video_game_platform-search-input");

    if (searchInput) {
      searchInput.focus();
      setNativeValue(searchInput, wanted);

      console.log(
        "MT TECH Vinted: cerco piattaforma",
        wanted
      );

      await sleep(1000);

      for (let i = 0; i < 20; i++) {
        const radios = [
          ...document.querySelectorAll('[role="radio"]')
        ];

        option = radios.find((el) =>
          (el.textContent || "")
            .trim()
            .toLowerCase() === wanted.toLowerCase()
        );

        if (option) break;

        await sleep(250);
      }
    }
  }

  if (!option) {
    console.warn(
      "MT TECH Vinted: piattaforma non trovata",
      wanted
    );
    return false;
  }

  console.log(
    "MT TECH Vinted: clicco piattaforma",
    wanted
  );

  option.click();

  await sleep(700);

  const selected =
    document.querySelector("#video_game_platform")?.value || "";

  if (
    selected.trim().toLowerCase() ===
    wanted.toLowerCase()
  ) {
    console.log(
      "✅ MT TECH Vinted: piattaforma selezionata",
      selected
    );
    return true;
  }

  console.warn(
    "MT TECH Vinted: click eseguito ma piattaforma non confermata",
    selected
  );

  return false;
}

async function setVintedError(stage, message) {
  console.warn("MT TECH Vinted:", message);

  await chrome.storage.local.set({
    mttechVintedStage: stage,
    mttechVintedSuccess: false,
    mttechVintedError: message
  });

  return false;
}

async function selectCondition() {
  const condition = document.querySelector("#condition");

  if (!condition) {
    return setVintedError(
      "condition_required",
      "Condizione Vinted non disponibile"
    );
  }

  if ((condition.value || "").trim().toLowerCase() === "ottime") {
    console.log("✅ MT TECH Vinted: Condizione già impostata su Ottime");
    return true;
  }

  condition.click();
  condition.focus();

  await sleep(600);

  let option =
    document.querySelector("#condition-2") ||
    [...document.querySelectorAll('[role="radio"]')].find(
      (el) => (el.textContent || "").trim() === "Ottime"
    );

  if (!option) {
    return setVintedError(
      "condition_required",
      "Impossibile selezionare la condizione Ottime su Vinted"
    );
  }

  option.click();

  await sleep(500);

  const selected = document.querySelector("#condition")?.value || "";

  if (selected.trim().toLowerCase() !== "ottime") {
    return setVintedError(
      "condition_required",
      "Vinted non ha confermato la condizione Ottime"
    );
  }

  console.log("✅ MT TECH Vinted: Condizione impostata su Ottime");
  return true;
}

async function selectSmallPackage() {
  // Gli ID cambiano in base alla categoria:
  // es. 1/2/3 oppure 8/9/10.
  const radios = [
    ...document.querySelectorAll(
      'input[type="radio"][id^="package_type_selector_"]'
    )
  ];

  if (radios.length === 0) {
    console.log(
      "MT TECH Vinted: nessuna dimensione pacco richiesta"
    );
    return true;
  }

  // La prima opzione è la dimensione più piccola.
  const radio = radios[0];

  if (radio.checked) {
    console.log("✅ MT TECH Vinted: Pacco piccolo già selezionato");
    return true;
  }

  let clickable = null;

  // Prima prova a trovare il contenitore tramite il testo Piccola/Piccolo.
  const textElement = [...document.querySelectorAll("body *")].find((el) => {
    const t = (el.textContent || "").trim().toLowerCase();
    return t === "piccola" || t === "piccolo";
  });

  if (textElement) {
    clickable =
      textElement.closest('[role="button"]') ||
      textElement.closest("label") ||
      textElement.closest("div");
  }

  // Fallback generico.
  if (!clickable) {
    clickable =
      radio.closest('[role="button"]') ||
      radio.closest("label") ||
      radio.parentElement;
  }

  if (clickable) {
    clickable.click();
  } else {
    radio.click();
  }

  radio.dispatchEvent(
    new Event("change", { bubbles: true })
  );

  await sleep(500);

  if (!radio.checked) {
    return setVintedError(
      "package_required",
      "Impossibile selezionare il pacco piccolo su Vinted"
    );
  }

  console.log("✅ MT TECH Vinted: Pacco piccolo selezionato");
  return true;
}

async function verifyRequiredFields() {
  const checks = [
    {
      selector: "#title",
      label: "Titolo"
    },
    {
      selector: "#description",
      label: "Descrizione"
    },
    {
      selector: "#category",
      label: "Categoria"
    },
    {
      selector: "#brand",
      label: "Brand"
    },
    {
      selector: "#condition",
      label: "Condizione"
    },
    {
      selector: "#price",
      label: "Prezzo"
    }
  ];

  for (const check of checks) {
    const field = document.querySelector(check.selector);

    if (!field || !(field.value || "").trim()) {
      return {
        ok: false,
        message: `${check.label} Vinted non compilato`
      };
    }
  }

  const platform = document.querySelector("#video_game_platform");

  if (platform && !(platform.value || "").trim()) {
    return {
      ok: false,
      message: "Piattaforma Vinted non selezionata"
    };
  }

  return { ok: true };
}

async function fillVinted(listing) {
  console.log(
    "MT TECH Vinted: avvio compilazione",
    listing
  );

  await sleep(1000);

  if (listing.images?.length) {
    await uploadImages(listing.images);
  }

  // Lasciamo a Vinted il tempo di analizzare le foto
  // e generare i campi dinamici.
  await sleep(3500);

  await waitForDynamicFields();

  await fillField("#title", listing.title);
  await fillField("#description", listing.description);

  // Categoria e colore vengono lasciati ai suggerimenti Vinted.

  const brandOk = await selectBrand(listing.brand);

  if (!brandOk) {
    return setVintedError(
      "brand_required",
      `Brand ${listing.brand || ""} non disponibile: cambia foto principale`
    );
  }

  const platformOk = await selectPlatform(listing);

  if (!platformOk) {
    return setVintedError(
      "platform_required",
      "Piattaforma Vinted obbligatoria non selezionata"
    );
  }

  const conditionOk = await selectCondition();

  if (!conditionOk) {
    return;
  }

  const priceOk = await fillVintedPrice(listing.price);

  if (!priceOk) {
    return setVintedError(
      "price_required",
      "Prezzo Vinted non compilato correttamente"
    );
  }

  const packageOk = await selectSmallPackage();

  if (!packageOk) {
    return;
  }

  // Verifica finale prima di Carica.
  const validation = await verifyRequiredFields();

  if (!validation.ok) {
    return setVintedError(
      "validation_failed",
      validation.message
    );
  }

  const uploadButton = [...document.querySelectorAll("button")]
    .find(
      (button) =>
        (button.textContent || "").trim() === "Carica"
    );

  if (!uploadButton) {
    return setVintedError(
      "upload_button_missing",
      "Pulsante Carica di Vinted non trovato"
    );
  }

  await sleep(800);

  console.log("MT TECH Vinted: clicco Carica");

  await chrome.storage.local.set({
    mttechVintedStage: "publishing",
    mttechVintedSuccess: false,
    mttechVintedError: null
  });

  uploadButton.click();

  console.log("✅ MT TECH Vinted: click su Carica eseguito");

  // Se il redirect avviene senza ricaricare il content script,
  // possiamo già confermare da qui.
  for (let i = 0; i < 60; i++) {
    await sleep(500);

    if (
      location.pathname.startsWith("/member/")
    ) {
      console.log(
        "✅ MT TECH Vinted: pubblicazione confermata",
        location.href
      );

      await chrome.storage.local.set({
        mttechVintedPending: false,
        mttechVintedStage: "completed",
        mttechVintedSuccess: true,
        mttechVintedError: null
      });

      return;
    }
  }

  await setVintedError(
    "failed",
    "Vinted non ha confermato la pubblicazione. Controlla eventuali campi evidenziati nella pagina."
  );
}

async function run() {
  const {
    mttechVintedListing,
    mttechVintedPending
  } = await getStoredListing();

  const state = await chrome.storage.local.get([
    "mttechVintedStage"
  ]);

  // Dopo una pubblicazione Vinted porta al profilo /member/...
  // Il content script viene ricaricato su questa nuova pagina:
  // qui confermiamo finalmente il successo reale.
  if (
    location.hostname === "www.vinted.it" &&
    location.pathname.startsWith("/member/") &&
    state.mttechVintedStage === "publishing"
  ) {
    console.log(
      "✅ MT TECH Vinted: pubblicazione confermata dal redirect",
      location.href
    );

    await chrome.storage.local.set({
      mttechVintedPending: false,
      mttechVintedStage: "completed",
      mttechVintedSuccess: true
    });

    return;
  }

  if (!mttechVintedPending || !mttechVintedListing) {
    return;
  }

  if (
    location.hostname === "www.vinted.it" &&
    location.pathname === "/items/new"
  ) {
    await fillVinted(mttechVintedListing);
  }
}

run().catch(async (error) => {
  console.error("MT TECH Vinted:", error);

  await chrome.storage.local.set({
    mttechVintedStage: "failed",
    mttechVintedSuccess: false,
    mttechVintedError:
      error instanceof Error
        ? error.message
        : "Errore imprevisto durante la pubblicazione Vinted"
  });
});
