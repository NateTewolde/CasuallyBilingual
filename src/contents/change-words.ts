function isWord(text: string): boolean {
  const regex = /^[\p{L}\p{M}]+$/u; // A regular expression that matches Unicode letters
  return regex.test(text); // Test if the input text matches the regular expression
}

const replacePercentageOfWords = (text: string, percentage: number): string => {
  const words = text.split(" ");
  const wordsToReplace = Math.floor(words.length * (percentage / 100));
  const step = Math.floor(words.length / wordsToReplace);

  for (let i = step - 1; i < words.length; i += step) {
    if (words[i].length === 0 || !isWord(words[i])) {
      continue;
    }
    words[i] = "CHANGED";
  }
  return words.join(" ");
};

const isInsideAttribute = (node: Node): boolean | null => {
  return (
    node.parentNode &&
    node.parentNode.nodeType === Node.ELEMENT_NODE &&
    ["SCRIPT", "STYLE"].includes(node.parentNode.nodeName.toUpperCase())
  );
};

const traverseNodes = (node: Node, percent: number) => {
  if (
    node.nodeType === Node.TEXT_NODE &&
    node.textContent?.trim() &&
    !isInsideAttribute(node)
  ) {
    node.textContent = replacePercentageOfWords(node.textContent, percent);
  } else {
    for (const child of node.childNodes) {
      traverseNodes(child, percent);
    }
  }
};

const changeWords = (percent: number) => {
  traverseNodes(document.body, percent);
};

export default changeWords;
