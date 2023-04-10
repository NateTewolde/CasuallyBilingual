export {};
const translate = require("google-translate-api-x");

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

async function translateText(text: string, from: string, to: string) {
  try {
    const res = await translate(text, { from: from, to: to });
    return res.text;
  } catch (err) {
    console.error(err);
  }
}
