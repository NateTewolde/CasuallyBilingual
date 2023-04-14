const translate = require("google-translate-api-x");

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

export { isWord, isInsideAttribute, translateText };
