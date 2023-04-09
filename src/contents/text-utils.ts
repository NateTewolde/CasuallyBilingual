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

export { isWord, isInsideAttribute };
