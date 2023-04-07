import React, { useState } from "react"

import ActiveToggle from "~components/ActiveToggle"
import ConfigOptions from "~components/ConfigOptions"
import Title from "~components/Title"
import TranslationDesc from "~components/TranslationDesc"
import type { OptionInfo, TranslationInfo } from "~types/common"

function IndexPopup() {
  //const [data, setData] = useState("")
  //  <input onChange={(e) => setData(e.target.value)} value={data} />

  const [percent, setPercent] = useState(15)
  const [languageFrom, setLanguageFrom] = useState(`English`)
  const [languageTo, setLanguageTo] = useState("Arabic")

  const optionsArray: OptionInfo[] = [
    { option: "Percent?", optionType: "percent", optionVal: `${percent}` },
    { option: "From?", optionType: "languageFrom", optionVal: languageFrom },
    { option: "To?", optionType: "languageTo", optionVal: languageTo }
  ]

  // const handleOptionChange = (e) => {
  //   console.log(e)
  // }

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
    </div>
  )
}

export default IndexPopup
