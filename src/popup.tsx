import React, { useState } from "react"

import ActiveToggle from "~components/ActiveToggle"
import ConfigOptions from "~components/ConfigOptions"
import Title from "~components/Title"
import TranslationDesc from "~components/TranslationDesc"
import UpdateOptionsBtn from "~components/UpdateOptionsBtn"
import type { OptionInfo, TranslationInfo } from "~types/common"

function IndexPopup() {
  //const [data, setData] = useState("")
  //  <input onChange={(e) => setData(e.target.value)} value={data} />

  const [percent, setPercent] = useState(15)
  const [languageFrom, setLanguageFrom] = useState(`English`)
  const [languageTo, setLanguageTo] = useState("Arabic")

  const optionsArray: OptionInfo[] = [
    {
      option: "Percent?",
      optionType: "percent",
      optionVal: `${percent}`,
      handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleOptionChange(e)
    },
    {
      option: "From?",
      optionType: "languageFrom",
      optionVal: languageFrom,
      handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleOptionChange(e)
    },
    {
      option: "To?",
      optionType: "languageTo",
      optionVal: languageTo,
      handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleOptionChange(e)
    }
  ]

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.dataset.label)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <Title />
      <ActiveToggle />
      <TranslationDesc translateInfo={{ percent, languageFrom, languageTo }} />
      <ConfigOptions optionsArray={optionsArray} />
      <UpdateOptionsBtn />
    </div>
  )
}

export default IndexPopup
