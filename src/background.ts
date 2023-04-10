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
    if (!text || text.trim().length === 0) {
      console.log(
        "Empty or whitespace-only text provided. Skipping translation."
      );
      return;
    }

    //splits text into chunks
    const chunkSize = 1000;
    const textChunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      textChunks.push(text.slice(i, i + chunkSize));
    }

    //translates each chunk and join the results
    const translatedChunks = [];
    for (const chunk of textChunks) {
      const res = await translate(chunk, { from: from, to: to });
      translatedChunks.push(res.text);
    }
    const translatedText = translatedChunks.join("");

    return translatedText;
  } catch (err) {
    console.error("Error while translating text:", {
      text: text,
      from: from,
      to: to,
      error: err,
    });
  }
}
