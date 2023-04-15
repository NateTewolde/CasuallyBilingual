import {
  addSpan,
  setBackgroundColor,
  setTextColor,
  translateSpanWords,
} from "./change-words";
import attachWordInfo from "./diplay-word-info";
import { Storage } from "@plasmohq/storage";
import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  exclude_matches: [
    "*://*.google.com/search*",
    "*://*.google.ca/search*",
    "*://*.google.co.uk/search*",
  ],
  all_frames: true,
};

const storage = new Storage();

async function getOptionValues() {
  const percent = await storage.get("percentStorage");
  const languageFrom = await storage.get("languageFromStorage");
  const languageTo = await storage.get("languageToStorage");
  const textColor = await storage.get("textColorStorage");
  const backgroundColor = await storage.get("backgroundColorStorage");

  return { percent, languageFrom, languageTo, textColor, backgroundColor };
}

async function main() {
  const { percent, languageFrom, languageTo, textColor, backgroundColor } =
    await getOptionValues();
  addSpan(Number(percent));
  await translateSpanWords(languageFrom, languageTo);
  setTextColor(textColor);
  setBackgroundColor(backgroundColor);
  attachWordInfo();
}

window.addEventListener("load", main);
