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
