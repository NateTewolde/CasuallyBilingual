import React from "react"

import type { TranslationDescProp } from "~types/common"

const TranslationDesc = ({ translateInfo }: TranslationDescProp) => {
  return (
    <div>
      <p>{`${translateInfo.percent}% of all ${translateInfo.languageFrom} words into ${translateInfo.languageTo}`}</p>
    </div>
  )
}

export default TranslationDesc
