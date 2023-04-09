const replacePercentageOfWords = (text: string, percentage: number) => {
  const words = text.split(" ");
  const wordsToReplace = Math.floor(words.length * (percentage / 100));
  const step = Math.floor(words.length / wordsToReplace);

  for (let i = step - 1; i < words.length; i += step) {
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

const translatePage = (
  percent: string,
  languageFrom: string,
  languageTo: string
) => {
  console.log("Translate page");
  traverseNodes(document.body, Number(percent));
};

export default translatePage;
