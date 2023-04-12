import { addSpan, setTextColor, translateSpanWords } from "./change-words";
import attachWordInfo from "./diplay-word-info";
import { Storage } from "@plasmohq/storage";

const storage = new Storage();

async function getOptionValues() {
  const percent = await storage.get("percentKey");
  const languageFrom = await storage.get("languageFromKey");
  const languageTo = await storage.get("languageToKey");

  return { percent, languageFrom, languageTo };
}

async function main() {
  const { percent, languageFrom, languageTo } = await getOptionValues();
  addSpan(Number(percent));
  translateSpanWords(languageFrom, languageTo);
  setTextColor("green");
  attachWordInfo();
}

window.addEventListener("load", main);
