console.log("✅ MT TECH Publisher: bridge caricato");

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

window.addEventListener("message", (event) => {
  if (event.source !== window) return;

  if (event.data?.type !== "MTTECH_PUBLISH_SUBITO") return;

  console.log("📨 MT TECH: richiesta pubblicazione ricevuta");

  chrome.runtime.sendMessage({
    type: "MTTECH_PUBLISH_SUBITO",
    listing: event.data.listing
  });
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== "local") return;

  if (
    changes.mttechSubitoSuccess?.newValue === true
  ) {
    chrome.storage.local.get(
      ["mttechSubitoAdId"],
      (data) => {
        console.log(
          "✅ MT TECH: invio successo reale alla webapp",
          data.mttechSubitoAdId
        );

        window.postMessage(
          {
            type: "MTTECH_SUBITO_RESULT",
            success: true,
            adId: data.mttechSubitoAdId || null
          },
          "*"
        );
      }
    );
  }
});
