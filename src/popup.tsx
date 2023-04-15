import { useStorage } from "@plasmohq/storage/hook";
import React, { useEffect, useRef, useState } from "react";
import ActiveToggle from "~components/ActiveToggle";
import ConfigOptions from "~components/ConfigOptions";
import Title from "~components/Title";
import TranslationDesc from "~components/TranslationDesc";
import UpdateOptionsBtn from "~components/UpdateOptionsBtn";
import type { OptionInfo } from "~types/common";

function IndexPopup() {
  const [percentStorage, setPercentStorage] = useStorage("percentStorage");
  const [languageFromStorage, setLanguageFromStorage] = useStorage(
    "languageFromStorage"
  );
  const [languageToStorage, setLanguageToStorage] =
    useStorage("languageToStorage");
  const [textColorStorage, setTextColorStorage] =
    useStorage("textColorStorage");
  const [backgroundColorStorage, setBackgroundColorStorage] = useStorage(
    "backgroundColorStorage"
  );

  const [percent, setPercent] = useState<number>(percentStorage);
  const [languageFrom, setLanguageFrom] = useState<string>(languageFromStorage);
  const [languageTo, setLanguageTo] = useState<string>(languageToStorage);
  const [textColor, setTextColor] = useState(textColorStorage);
  const [backgroundColor, setBackgroundColor] = useState(
    backgroundColorStorage
  );

  // Updates local state with storage
  useEffect(() => {
    setPercent(percentStorage);
    setLanguageFrom(languageFromStorage);
    setLanguageTo(languageToStorage);
    setTextColor(textColorStorage);
    setBackgroundColor(backgroundColorStorage);
  }, [
    percentStorage,
    languageFromStorage,
    languageToStorage,
    textColorStorage,
    backgroundColorStorage,
  ]);

  const optionRefs = {
    percent: useRef({ optionLabel: "percent", optionValue: percent }),
    languageFrom: useRef({
      optionLabel: "languageFrom",
      optionValue: languageFrom,
    }),
    languageTo: useRef({ optionLabel: "languageTo", optionValue: languageTo }),
    textColor: useRef({ optionLabel: "textColor", optionValue: textColor }),
    backgroundColor: useRef({
      optionLabel: "backgroundColor",
      optionValue: backgroundColor,
    }),
  };

  const stateSetters = {
    percent: setPercent,
    languageFrom: setLanguageFrom,
    languageTo: setLanguageTo,
    textColor: setTextColor,
    backgroundColor: setBackgroundColor,
  };

  const storageSetters = {
    percent: setPercentStorage,
    languageFrom: setLanguageFromStorage,
    languageTo: setLanguageToStorage,
    textColor: setTextColorStorage,
    backgroundColor: setBackgroundColorStorage,
  };
  type OptionKey =
    | "percent"
    | "languageFrom"
    | "languageTo"
    | "textColor"
    | "backgroundColor";

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const label = `${e.target.dataset.label}`;

    if (optionRefs[label as OptionKey]) {
      optionRefs[label as OptionKey].current = {
        optionLabel: label,
        optionValue:
          label === "percent" ? Number(e.target.value) : e.target.value,
      };
    }
  };

  const handleUpdateClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    for (const label in optionRefs) {
      const newValue = optionRefs[label as OptionKey].current.optionValue;
      if (newValue) {
        stateSetters[label as OptionKey](newValue);
        storageSetters[label as OptionKey](newValue);
      }
    }

    // Send a message to the content script to reload the page
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "refresh_page" });
      }
    });
  };

  const optionsArray: OptionInfo[] = [
    {
      option: "Percent?",
      optionType: "percent",
      optionVal: `${percent}`,
      handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleOptionChange(e),
    },
    {
      option: "From?",
      optionType: "languageFrom",
      optionVal: languageFrom,
      handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleOptionChange(e),
    },
    {
      option: "To?",
      optionType: "languageTo",
      optionVal: languageTo,
      handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleOptionChange(e),
    },
    {
      option: "Text Color",
      optionType: "textColor",
      optionVal: textColor,
      handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleOptionChange(e),
    },
    {
      option: "Background Color",
      optionType: "backgroundColor",
      optionVal: backgroundColor,
      handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleOptionChange(e),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
      }}
    >
      <Title />
      <ActiveToggle />
      <TranslationDesc translateInfo={{ percent, languageFrom, languageTo }} />
      <ConfigOptions optionsArray={optionsArray} />
      <UpdateOptionsBtn
        handleUpdateClick={(
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => handleUpdateClick(e)}
      />
    </div>
  );
}

export default IndexPopup;
