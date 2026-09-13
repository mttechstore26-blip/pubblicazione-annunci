(() => {
  if (document.documentElement.dataset.mttechBridgeLoaded === "1") {
    console.log("MT TECH Publisher: bridge già attivo");
    return;
  }

  document.documentElement.dataset.mttechBridgeLoaded = "1";

  console.log("✅ MT TECH Publisher: bridge caricato");

  let lastSubitoAdId = null;
  let vintedSuccessReported = false;

  if (!document.querySelector("#mttech-extension-test")) {
    const badge = document.createElement("div");
    badge.id = "mttech-extension-test";
    badge.textContent = "MT TECH EXT ✓";

    Object.assign(badge.style, {
      position: "fixed",
      top: "10px",
      right: "10px",
      zIndex: "2147483647",
      background: "green",
      color: "white",
      padding: "7px 10px",
      borderRadius: "8px",
      fontSize: "12px",
      fontWeight: "bold"
    });

    document.body.appendChild(badge);
  }

  function sendSubitoSuccess(adId) {
    if (adId && lastSubitoAdId === adId) return;

    lastSubitoAdId = adId || "completed";

    console.log(
      "✅ MT TECH: invio conferma Subito alla webapp",
      adId
    );

    window.postMessage(
      {
        type: "MTTECH_SUBITO_RESULT",
        success: true,
        adId: adId || null
      },
      "*"
    );
  }

  function sendVintedSuccess() {
    if (vintedSuccessReported) return;

    vintedSuccessReported = true;

    console.log(
      "✅ MT TECH: invio conferma Vinted alla webapp"
    );

    window.postMessage(
      {
        type: "MTTECH_VINTED_RESULT",
        success: true
      },
      "*"
    );
  }

  function checkStoredResults() {
    chrome.storage.local.get(
      [
        "mttechSubitoSuccess",
        "mttechStage",
        "mttechSubitoAdId",
        "mttechVintedSuccess",
        "mttechVintedStage"
      ],
      (data) => {
        if (
          data.mttechSubitoSuccess === true &&
          data.mttechStage === "completed"
        ) {
          sendSubitoSuccess(data.mttechSubitoAdId || null);
        }

        if (
          data.mttechVintedSuccess === true &&
          data.mttechVintedStage === "completed"
        ) {
          sendVintedSuccess();
        }
      }
    );
  }

  window.addEventListener("message", (event) => {
    if (event.source !== window) return;

    if (event.data?.type === "MTTECH_PUBLISH_SUBITO") {
      lastSubitoAdId = null;

      chrome.runtime.sendMessage({
        type: "MTTECH_PUBLISH_SUBITO",
        listing: event.data.listing
      });

      return;
    }

    if (event.data?.type === "MTTECH_PUBLISH_VINTED") {
      vintedSuccessReported = false;

      chrome.runtime.sendMessage({
        type: "MTTECH_PUBLISH_VINTED",
        listing: event.data.listing
      });

      return;
    }
  });

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== "local") return;

    if (changes.mttechSubitoSuccess?.newValue === false) {
      lastSubitoAdId = null;
    }

    if (changes.mttechVintedSuccess?.newValue === false) {
      vintedSuccessReported = false;
    }

    if (
      changes.mttechSubitoSuccess ||
      changes.mttechStage ||
      changes.mttechSubitoAdId ||
      changes.mttechVintedSuccess ||
      changes.mttechVintedStage
    ) {
      checkStoredResults();
    }

    if (changes.mttechVintedStage?.newValue === "brand_required") {
      window.postMessage(
        {
          type: "MTTECH_VINTED_RESULT",
          success: false,
          error: "Brand non disponibile: cambia foto principale"
        },
        "*"
      );
    }

    if (changes.mttechVintedStage?.newValue === "platform_required") {
      window.postMessage(
        {
          type: "MTTECH_VINTED_RESULT",
          success: false,
          error: "Piattaforma Vinted obbligatoria non selezionata"
        },
        "*"
      );
    }

    if (changes.mttechVintedStage?.newValue === "failed") {
      chrome.storage.local.get(
        ["mttechVintedError"],
        (data) => {
          window.postMessage(
            {
              type: "MTTECH_VINTED_RESULT",
              success: false,
              error:
                data.mttechVintedError ||
                "Errore durante la pubblicazione Vinted"
            },
            "*"
          );
        }
      );
    }
  });

  // Recupera anche eventuali conferme avvenute mentre
  // la webapp non stava ricevendo l'evento.
  checkStoredResults();

  // Controllo di sicurezza periodico.
  setInterval(checkStoredResults, 1500);
})();
