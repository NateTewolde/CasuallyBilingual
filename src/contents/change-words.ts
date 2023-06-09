import { isWord, isInsideAttribute } from "./text-utils";
import { getTranslation } from "./text-utils";

const wrapWordsInSpan = (text: string, percentage: number): string => {
  const words = text.split(" ");
  const wordsToReplace = Math.floor(words.length * (percentage / 100));
  const step = Math.floor(words.length / wordsToReplace);

  for (let i = step - 1; i < words.length; i += step) {
    if (words[i].length === 0 || !isWord(words[i])) {
      continue;
    }
    words[i] = `<span class="casually-bilingual-custom">${words[i]}</span>`;
  }
  return words.join(" ");
};

const traverseNodes = (node: Node, percent: number) => {
  if (
    node.nodeType === Node.TEXT_NODE &&
    node.textContent?.trim() &&
    !isInsideAttribute(node)
  ) {
    const newNode = document.createElement("span");
    newNode.innerHTML = wrapWordsInSpan(node.textContent as string, percent);
    node.parentNode?.replaceChild(newNode, node);
  } else {
    for (const child of node.childNodes) {
      traverseNodes(child, percent);
    }
  }
};

const translateSpanWords = async (
  languageFrom: string,
  languageTo: string,
  translit: string
) => {
  const spannedWords = document.querySelectorAll<HTMLElement>(
    ".casually-bilingual-custom"
  );

  const batchSize = 5000;
  let batchStart = 0;
  let batchEnd = 0;

  while (batchStart < spannedWords.length) {
    let batchTextLength = 0;
    for (batchEnd = batchStart; batchEnd < spannedWords.length; batchEnd++) {
      const textContent = spannedWords[batchEnd].textContent;
      if (textContent) {
        batchTextLength += textContent.length;
        if (batchTextLength > batchSize) {
          break;
        }
      }
    }

    const batch = Array.from(spannedWords).slice(batchStart, batchEnd);
    const batchText = batch
      .map((element) => element.textContent || "")
      .join("\n");
    const { translatedBatchText, pronunBatchText } = await getTranslation(
      batchText,
      languageFrom,
      languageTo
    );

    if (translatedBatchText) {
      const translatedWords = translatedBatchText.split("\n");
      const pronunWords = pronunBatchText.split("\n");

      for (let i = 0; i < batch.length; i++) {
        const translatedText = translatedWords[i];
        const pronunText = pronunWords[i];
        if (translatedText) {
          batch[i].setAttribute(
            "data-original-word",
            batch[i].textContent || ""
          );
          if (translit === "yes") {
            batch[i].textContent = pronunText;
          } else {
            batch[i].textContent = translatedText;
          }

          batch[i].setAttribute("data-translated-word", translatedText);
          batch[i].setAttribute("data-language-from", languageFrom);
          batch[i].setAttribute("data-language-to", languageTo);
          batch[i].setAttribute("data-pronun-word", pronunText);
        }
      }
    }

    batchStart = batchEnd;
  }
};

const setTextColor = (color: string) => {
  const spanElements = document.querySelectorAll<HTMLElement>(
    ".casually-bilingual-custom"
  );

  for (const spanElement of spanElements) {
    spanElement.style.color = color;
    spanElement.setAttribute("data-text-color", color);
  }
};

const setBackgroundColor = (color: string) => {
  const spanElements = document.querySelectorAll<HTMLElement>(
    ".casually-bilingual-custom"
  );

  for (const spanElement of spanElements) {
    spanElement.style.backgroundColor = color;
    spanElement.setAttribute("data-background-color", color);
  }
};

const addSpan = (percent: number) => {
  traverseNodes(document.body, percent);
};

export { addSpan, translateSpanWords, setTextColor, setBackgroundColor };
