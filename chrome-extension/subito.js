const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getStoredListing() {
  return new Promise((resolve) => {
    chrome.storage.local.get(
      ["mttechListing", "mttechPending"],
      (data) => resolve(data)
    );
  });
}

async function typeLikeHuman(input, text) {
  input.focus();

  input.value = "";
  input.dispatchEvent(new Event("input", { bubbles: true }));

  for (const char of String(text || "")) {
    input.value += char;

    input.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        inputType: "insertText",
        data: char
      })
    );

    await sleep(40);
  }

  input.dispatchEvent(new Event("change", { bubbles: true }));
}

async function fillStartPage(listing) {
  let input = null;

  for (let i = 0; i < 20; i++) {
    input = document.querySelector("#ad_name");
    if (input) break;
    await sleep(500);
  }

  if (!input) {
    console.error("MT TECH: #ad_name non trovato");
    return;
  }

  await typeLikeHuman(input, listing.title);

  await sleep(1800);

  const elements = [...document.querySelectorAll("body *")];

  const category = elements.find((el) => {
    return (el.textContent || "").trim() === "Console e Videogiochi";
  });

  if (category) {
    console.log("MT TECH: seleziono Console e Videogiochi");
    category.click();
  } else {
    console.warn("MT TECH: categoria non trovata");
  }
}

async function urlToFile(url, index) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Errore download foto ${index + 1}`);
  }

  const blob = await response.blob();

  let extension = "jpg";

  if (blob.type.includes("png")) extension = "png";
  if (blob.type.includes("webp")) extension = "webp";

  return new File(
    [blob],
    `mttech-${index + 1}.${extension}`,
    {
      type: blob.type || "image/jpeg"
    }
  );
}

async function uploadImages(urls) {
  if (!urls || urls.length === 0) return;

  let input = null;

  for (let i = 0; i < 20; i++) {
    input = document.querySelector("#images-file-input");
    if (input) break;
    await sleep(500);
  }

  if (!input) {
    console.warn("MT TECH: input foto non trovato");
    return;
  }

  const dt = new DataTransfer();

  for (let i = 0; i < Math.min(urls.length, 6); i++) {
    const file = await urlToFile(urls[i], i);
    dt.items.add(file);
  }

  input.files = dt.files;

  input.dispatchEvent(
    new Event("change", { bubbles: true })
  );

  console.log("MT TECH: foto caricate:", dt.files.length);
}

async function selectCondition(condition) {
  const input = document.querySelector(
    "#react-select-itemCondition-input"
  );

  if (!input) {
    console.warn("MT TECH: input condizione non trovato");
    return;
  }

  const control = input.closest(
    ".index-module_control__iJt-l"
  );

  if (!control) {
    console.warn("MT TECH: controllo condizione non trovato");
    return;
  }

  control.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  control.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  control.click();

  await sleep(700);

  const options = [
    ...document.querySelectorAll('[role="option"]')
  ];

  console.log(
    "MT TECH opzioni condizione:",
    options.map(x => x.textContent)
  );

  const option =
    options.find((el) =>
      (el.textContent || "")
        .toLowerCase()
        .includes("come nuovo")
    ) ||
    options[1];

  if (!option) {
    console.warn("MT TECH: Come nuovo non trovato");
    return;
  }

  option.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  option.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  option.click();

  await sleep(400);

  const hidden = document.querySelector(
    'input[type="hidden"][name="itemCondition"]'
  );

  console.log(
    "MT TECH: condizione finale:",
    hidden?.value
  );
}

async function fillLocation(locationName) {
  const input = document.querySelector("#location");

  if (!input) {
    console.warn("MT TECH: campo Comune non trovato");
    return;
  }

  const nativeSetter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value"
  )?.set;

  if (!nativeSetter) {
    console.warn("MT TECH: setter input non trovato");
    return;
  }

  input.focus();
  input.click();

  // Svuota il campo facendo reagire React
  nativeSetter.call(input, "");

  input.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      inputType: "deleteContentBackward",
      data: null
    })
  );

  await sleep(300);

  const word = "Palmi";
  let current = "";

  for (const char of word) {
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: char,
        bubbles: true
      })
    );

    current += char;

    nativeSetter.call(input, current);

    input.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        inputType: "insertText",
        data: char
      })
    );

    input.dispatchEvent(
      new KeyboardEvent("keyup", {
        key: char,
        bubbles: true
      })
    );

    await sleep(250);
  }

  console.log("MT TECH: Palmi digitato, attendo autocomplete");

  await sleep(2500);

  let result = null;

  for (let i = 0; i < 20; i++) {
    result = document.querySelector(
      "#autocomplete-location-item-0"
    );

    if (
      result &&
      (result.textContent || "").includes("Palmi") &&
      (result.textContent || "").includes("(RC)")
    ) {
      break;
    }

    result = null;
    await sleep(250);
  }

  if (!result) {
    console.warn("MT TECH: autocomplete Palmi non comparso");
    return;
  }

  console.log(
    "MT TECH: trovato:",
    result.textContent.trim()
  );

  result.dispatchEvent(
    new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  result.dispatchEvent(
    new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  result.click();

  await sleep(700);

  console.log(
    "✅ MT TECH: Comune selezionato:",
    input.value
  );
}

async function selectSmallPackage() {
  await sleep(700);

  const small = document.querySelector(
    'input[name="itemShippingPackageSize"][value="10"]'
  );

  if (!small) {
    console.warn("MT TECH: Pacco piccolo non trovato");
    return;
  }

  small.scrollIntoView({
    block: "center"
  });

  small.click();

  small.dispatchEvent(
    new Event("input", { bubbles: true })
  );

  small.dispatchEvent(
    new Event("change", { bubbles: true })
  );

  await sleep(500);

  console.log(
    "✅ MT TECH: Pacco piccolo selezionato:",
    small.checked
  );
}

async function fillPhone() {
  await sleep(500);

  const phone =
    document.querySelector("#phone") ||
    document.querySelector('input[type="tel"]');

  if (!phone) {
    console.warn("MT TECH: campo telefono non trovato");
    return;
  }

  await typeLikeHuman(phone, "3793386224");

  await sleep(300);

  console.log("✅ MT TECH: telefono inserito 3793386224");
}

async function clickButtonByText(text) {
  const wanted = text.trim().toLowerCase();

  for (let i = 0; i < 30; i++) {
    const elements = [
      ...document.querySelectorAll("button, a, [role='button']")
    ];

    const target = elements.find((el) => {
      const label = (el.textContent || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

      return label.includes(wanted);
    });

    if (target) {
      target.scrollIntoView({ block: "center" });

      await sleep(300);

      target.click();

      console.log("✅ MT TECH: cliccato:", text);
      return true;
    }

    await sleep(300);
  }

  console.warn("MT TECH: pulsante non trovato:", text);
  return false;
}

async function publishListing() {
  await sleep(1000);

  const clicked = await clickButtonByText("Pubblica annuncio");

  if (clicked) {
    chrome.storage.local.set({
      mttechStage: "promotion"
    });
  }
}

async function markSubitoCompleted() {
  const match = location.href.match(/id:ad:([a-zA-Z0-9-]+)/);

  let adId = match ? match[1] : null;

  if (!adId) {
    const stored = await new Promise((resolve) => {
      chrome.storage.local.get(
        ["mttechSubitoAdId"],
        (data) => resolve(data)
      );
    });

    adId = stored.mttechSubitoAdId || null;
  }

  await chrome.storage.local.set({
    mttechPending: false,
    mttechStage: "completed",
    mttechSubitoAdId: adId,
    mttechSubitoSuccess: true
  });

  console.log(
    "✅ MT TECH: pubblicazione Subito realmente completata",
    adId
  );
}

async function detectFinalConfirmation() {
  const bodyText = (document.body?.innerText || "")
    .replace(/\s+/g, " ")
    .toLowerCase();

  if (
    bodyText.includes(
      "ottimo, hai completato l'inserimento del tuo annuncio"
    )
  ) {
    await markSubitoCompleted();
    return true;
  }

  return false;
}

async function continueMinimumVisibility() {
  console.log("MT TECH: pagina promozione rilevata");

  // Prima controlla se siamo già alla schermata finale.
  if (await detectFinalConfirmation()) {
    return;
  }

  await sleep(1500);

  const firstClick = await clickButtonByText(
    "Continua con visibilità minima"
  );

  if (!firstClick) {
    console.warn("MT TECH: pulsante visibilità minima non trovato");
    return;
  }

  console.log("MT TECH: visibilità minima selezionata");

  await sleep(1800);

  const secondClick = await clickButtonByText(
    "Non mi interessa"
  );

  if (!secondClick) {
    console.warn("MT TECH: pulsante Non mi interessa non trovato");
    return;
  }

  // Conserva subito l'ID dell'annuncio, ma NON dichiara ancora successo.
  const match = location.href.match(/id:ad:([a-zA-Z0-9-]+)/);
  const adId = match ? match[1] : null;

  await chrome.storage.local.set({
    mttechStage: "waiting_confirmation",
    mttechSubitoAdId: adId,
    mttechSubitoSuccess: false
  });

  console.log(
    "MT TECH: attendo conferma finale di Subito",
    adId
  );

  // Se la pagina cambia senza ricaricarsi, controlla per alcuni secondi.
  for (let i = 0; i < 30; i++) {
    await sleep(500);

    if (await detectFinalConfirmation()) {
      return;
    }
  }

  console.log(
    "MT TECH: conferma non ancora rilevata, verrà ricontrollata al caricamento pagina"
  );
}

async function fillListingPage(listing) {
  console.log("MT TECH: compilazione modulo Subito", listing);

  await sleep(1200);

  try {
    await uploadImages(listing.images || []);
  } catch (error) {
    console.error("MT TECH: errore foto", error);
  }

  const title = document.querySelector("#title");

  if (title && listing.title) {
    await typeLikeHuman(title, listing.title);
  }

  const description = document.querySelector("#description");

  if (description && listing.description) {
    await typeLikeHuman(
      description,
      listing.description
    );
  }

  await selectCondition(listing.condition);

  await fillLocation(listing.location || "Palmi");

  const price = document.querySelector("#price");

  if (price && listing.price != null) {
    await typeLikeHuman(
      price,
      String(listing.price)
    );
  }

  await selectSmallPackage();
  await fillPhone();

  await sleep(1000);

  console.log("✅ MT TECH: compilazione completata");

  await publishListing();
}

async function run() {
  const {
    mttechListing,
    mttechPending
  } = await getStoredListing();

  // Se Subito mostra la conferma finale, registra il vero successo.
  if (await detectFinalConfirmation()) {
    return;
  }

  if (!mttechPending || !mttechListing) return;

  if (
    location.hostname === "www.subito.it" &&
    location.pathname.startsWith("/vendere")
  ) {
    await fillStartPage(mttechListing);
    return;
  }

  if (
    location.hostname === "inserimento.subito.it"
  ) {
    await fillListingPage(mttechListing);
    return;
  }

  if (
    location.hostname === "areariservata.subito.it" &&
    location.pathname.includes("promuovi-form")
  ) {
    await continueMinimumVisibility();
    return;
  }
}

run().catch((error) => {
  console.error("MT TECH Publisher:", error);
});
