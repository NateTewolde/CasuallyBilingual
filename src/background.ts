import { Storage } from "@plasmohq/storage";
import { translateText } from "~contents/text-utils";

export {};
console.log("hi background");
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
  // Set default values if they don't exist yet
  if (!(await storage.get("percentStorage"))) {
    await storage.set("percentStorage", 15);
  }
  if (!(await storage.get("languageFromStorage"))) {
    await storage.set("languageFromStorage", "English");
  }
  if (!(await storage.get("languageToStorage"))) {
    await storage.set("languageToStorage", "Arabic");
  }
})();
