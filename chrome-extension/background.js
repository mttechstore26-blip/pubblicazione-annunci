function openSubito(listing, sendResponse) {
  chrome.storage.local.set(
    {
      mttechListing: listing,
      mttechPending: true,
      mttechStage: "starting",
      mttechSubitoSuccess: false,
      mttechSubitoAdId: null
    },
    () => {
      chrome.tabs.create(
        {
          url: "https://www.subito.it/vendere/"
        },
        (tab) => {
          sendResponse({
            ok: true,
            tabId: tab.id
          });
        }
      );
    }
  );
}

chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (message?.type !== "MTTECH_PUBLISH_SUBITO") return;

    console.log("📨 MT TECH: richiesta ricevuta");

    openSubito(message.listing, sendResponse);

    return true;
  }
);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;

  const url = tab.url || "";

  if (
    !url.startsWith("http://localhost:3000/") &&
    !url.startsWith("http://127.0.0.1:3000/")
  ) {
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId },
    files: ["webapp.js"]
  }).then(() => {
    console.log("✅ MT TECH: webapp.js iniettato");
  }).catch((error) => {
    console.error("❌ MT TECH injection:", error);
  });
});

function openVinted(listing, sendResponse) {
  chrome.storage.local.set(
    {
      mttechVintedListing: listing,
      mttechVintedPending: true,
      mttechVintedStage: "starting",
      mttechVintedSuccess: false,
      mttechVintedItemId: null
    },
    () => {
      chrome.tabs.create(
        {
          url: "https://www.vinted.it/items/new"
        },
        (tab) => {
          if (sendResponse) {
            sendResponse({
              ok: true,
              tabId: tab.id
            });
          }
        }
      );
    }
  );
}

chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (
      message?.type !== "MTTECH_PUBLISH_VINTED"
    ) {
      return;
    }

    console.log(
      "📨 MT TECH: richiesta Vinted ricevuta"
    );

    openVinted(message.listing, sendResponse);

    return true;
  }
);
