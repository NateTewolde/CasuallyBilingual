import changeWords from "./change-words";

const translatePage = (
  percent: string,
  languageFrom: string,
  languageTo: string
) => {
  changeWords(Number(percent));
};

export default translatePage;
