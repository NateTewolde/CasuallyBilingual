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
    percentRef: useRef({ optionLabel: "percent", optionValue: percent }),
    languageFromRef: useRef({
      optionLabel: "languageFrom",
      optionValue: languageFrom,
    }),
    languageToRef: useRef({
      optionLabel: "languageTo",
      optionValue: languageTo,
    }),
    textColorRef: useRef({
      optionLabel: "textColor",
      optionValue: textColor,
    }),
    backgroundColorRef: useRef({
      optionLabel: "backgroundColor",
      optionValue: backgroundColor,
    }),
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const label = `${e.target.dataset.label}`;

    if (label === "percent") {
      optionRefs.percentRef.current = {
        optionLabel: "percent",
        optionValue: Number(e.target.value),
      };
    }
    if (label === "languageFrom") {
      optionRefs.languageFromRef.current = {
        optionLabel: "languageFrom",
        optionValue: e.target.value,
      };
    }
    if (label === "languageTo") {
      optionRefs.languageToRef.current = {
        optionLabel: "languageTo",
        optionValue: e.target.value,
      };
    }
    if (label === "languageTo") {
      optionRefs.languageToRef.current = {
        optionLabel: "languageTo",
        optionValue: e.target.value,
      };
    }
    if (label === "textColor") {
      optionRefs.textColorRef.current = {
        optionLabel: "textColor",
        optionValue: e.target.value,
      };
    }
    if (label === "backgroundColor") {
      optionRefs.backgroundColorRef.current = {
        optionLabel: "backgroundColor",
        optionValue: e.target.value,
      };
    }
  };

  const handleUpdateClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPercent(optionRefs.percentRef.current.optionValue || percent);
    setLanguageFrom(
      optionRefs.languageFromRef.current.optionValue || languageFrom
    );
    setLanguageTo(optionRefs.languageToRef.current.optionValue || languageTo);
    setTextColor(optionRefs.textColorRef.current.optionValue || textColor);
    setBackgroundColor(
      optionRefs.backgroundColorRef.current.optionValue || backgroundColor
    );

    setPercentStorage(optionRefs.percentRef.current.optionValue || percent);
    setLanguageFromStorage(
      optionRefs.languageFromRef.current.optionValue || languageFrom
    );
    setLanguageToStorage(
      optionRefs.languageToRef.current.optionValue || languageTo
    );
    setTextColorStorage(
      optionRefs.textColorRef.current.optionValue || textColor
    );
    setBackgroundColorStorage(
      optionRefs.backgroundColorRef.current.optionValue || backgroundColor
    );

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
