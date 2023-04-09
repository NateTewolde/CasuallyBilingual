import translatePage from "./translate";
import { Storage } from "@plasmohq/storage";

const storage = new Storage();

async function getStateValues() {
  const percent = await storage.get("percentKey");
  const languageFrom = await storage.get("languageFromKey");
  const languageTo = await storage.get("languageToKey");

  translatePage(percent, languageFrom, languageTo);
}

getStateValues();
