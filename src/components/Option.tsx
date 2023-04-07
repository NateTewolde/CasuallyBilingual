import React from "react"

import type { OptionProp } from "~types/common"

const Option = ({ optionInfo }: OptionProp) => {
  return (
    <div>
      <p>{`${optionInfo.option}`}</p>
    </div>
  )
}

export default Option
