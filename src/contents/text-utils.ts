import translate from "google-translate-api-x";
import type { BatchTranslations } from "~types/common";

async function translateText(text: string, from: string, to: string) {
  try {
    if (!text || text.trim().length === 0) {
      console.log(
        "Empty or whitespace-only text provided. Skipping translation."
      );
      return;
    }

    const chunkSize = 1000;
    const textChunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      textChunks.push(text.slice(i, i + chunkSize));
    }

    const translatedChunks = [];
    const pronunChunks = [];
    for (const chunk of textChunks) {
      const res = await translate(chunk, { from: from, to: to });
      translatedChunks.push(res.text);
      pronunChunks.push(res.pronunciation);
    }

    const translatedBatchText = translatedChunks.join("");
    const pronunBatchText = pronunChunks.join("");

    return { translatedBatchText, pronunBatchText };
  } catch (err) {
    console.error("Error while translating text:", {
      text: text,
      from: from,
      to: to,
      error: err,
    });
  }
}

// Calls background script to translateText to avoid CORS error.
const getTranslation = (
  text: string,
  from: string,
  to: string
): Promise<BatchTranslations> => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      { action: "translate", text: text, from: from, to: to },
      (response) => {
        if (response.error) {
          console.error(response.error);
          resolve({ translatedBatchText: text, pronunBatchText: "" });
        } else {
          resolve(response.translatedText);
        }
      }
    );
  });
};

const isInsideAttribute = (node: Node): boolean | null => {
  return (
    node.parentNode &&
    node.parentNode.nodeType === Node.ELEMENT_NODE &&
    ["SCRIPT", "STYLE"].includes(node.parentNode.nodeName.toUpperCase())
  );
};

function isWord(text: string): boolean {
  const regex = /^[\p{L}\p{M}]+$/u; // A regular expression that matches Unicode letters
  return regex.test(text); // Test if the input text matches the regular expression
}

export { isWord, isInsideAttribute, translateText, getTranslation };
