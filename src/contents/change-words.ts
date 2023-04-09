import { isWord, isInsideAttribute } from "./text-utils";

const wrapWordsInSpan = (text: string, percentage: number): string => {
  const words = text.split(" ");
  const wordsToReplace = Math.floor(words.length * (percentage / 100));
  const step = Math.floor(words.length / wordsToReplace);

  for (let i = step - 1; i < words.length; i += step) {
    if (words[i].length === 0 || !isWord(words[i])) {
      continue;
    }
    words[
      i
    ] = `<span style="color:blue" class="casually-bilingual-custom">${words[i]}</span>`;
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

const addSpan = (percent: number) => {
  traverseNodes(document.body, percent);
};

export default addSpan;
