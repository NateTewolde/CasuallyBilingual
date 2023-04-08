import { useStorage } from "@plasmohq/storage/hook";
import React, { useRef, useState } from "react";
import ActiveToggle from "~components/ActiveToggle";
import ConfigOptions from "~components/ConfigOptions";
import Title from "~components/Title";
import TranslationDesc from "~components/TranslationDesc";
import UpdateOptionsBtn from "~components/UpdateOptionsBtn";
import type { OptionInfo, TranslationInfo } from "~types/common";

function IndexPopup() {
  const [percent, setPercent] = useStorage("percentKey", 15);
  const [languageFrom, setLanguageFrom] = useStorage(
    "languageFromKey",
    `English`
  );
  const [languageTo, setLanguageTo] = useStorage("languageToKey", "Arabic");

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
  };

  const handleUpdateClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPercent(optionRefs.percentRef.current.optionValue);
    setLanguageFrom(optionRefs.languageFromRef.current.optionValue);
    setLanguageTo(optionRefs.languageToRef.current.optionValue);
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
