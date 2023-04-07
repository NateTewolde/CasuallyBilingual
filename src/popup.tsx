import React, { useState } from "react"

import ActiveToggle from "~components/ActiveToggle"
import ConfigOptions from "~components/ConfigOptions"
import Title from "~components/Title"
import TranslationDesc from "~components/TranslationDesc"
import type { OptionInfo, TranslationInfo } from "~types/common"

function IndexPopup() {
  //const [data, setData] = useState("")
  //  <input onChange={(e) => setData(e.target.value)} value={data} />

  const optionsArray: OptionInfo[] = [
    { option: "Percent translated?" },
    { option: "From?" },
    { option: "To?" },
    { option: "Text color" }
  ]

  const translateInfo: TranslationInfo = {
    percent: 15,
    languageFrom: `English`,
    languageTo: `Arabic`
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
      <TranslationDesc translateInfo={translateInfo} />
      <ConfigOptions optionsArray={optionsArray} />
    </div>
  )
}

export default IndexPopup
