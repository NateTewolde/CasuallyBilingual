import { Storage } from "@plasmohq/storage";

export {};

const storage = new Storage();

async function getStateValues() {
  const percent = await storage.get("percentKey");
  const languageFrom = await storage.get("languageFromKey");
  const languageTo = await storage.get("languageToKey");

  console.log("Percent:", percent);
  console.log("Language From:", languageFrom);
  console.log("Language To:", languageTo);
}

getStateValues();
