import { Storage } from "@plasmohq/storage";
import { translateText } from "~contents/text-utils";

export {};
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "translate") {
    translateText(request.text, request.from, request.to)
      .then((translatedText) => {
        sendResponse({ translatedText: translatedText });
      })
      .catch((error) => {
        sendResponse({ error: error });
      });

    return true;
  }
});

const storage = new Storage();

(async () => {
  // Store option values and set defaults if not stored yet.
  if (!(await storage.get("percentStorage"))) {
    await storage.set("percentStorage", 15);
  }
  if (!(await storage.get("languageFromStorage"))) {
    await storage.set("languageFromStorage", "English");
  }
  if (!(await storage.get("languageToStorage"))) {
    await storage.set("languageToStorage", "Arabic");
  }
  if (!(await storage.get("textColorStorage"))) {
    await storage.set("textColorStorage", "green");
  }
  if (!(await storage.get("backgroundColorStorage"))) {
    await storage.set("backgroundColorStorage", "white");
  }
  if (!(await storage.get("translitStorage"))) {
    await storage.set("translitStorage", "no");
  }
})();
