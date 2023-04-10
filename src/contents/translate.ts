const translateWord = (
  text: string,
  from: string,
  to: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      { action: "translate", text: text, from: from, to: to },
      (response) => {
        if (response.error) {
          console.error(response.error);
          resolve(text);
        } else {
          resolve(response.translatedText);
        }
      }
    );
  });
};

export default translateWord;
