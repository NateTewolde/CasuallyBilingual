import { addSpan, translateSpanWords } from "./change-words";
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
}

window.addEventListener("load", main);
