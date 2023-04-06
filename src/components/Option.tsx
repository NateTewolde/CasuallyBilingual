import React from "react"

import type { OptionProp } from "~types/common"

const Option = ({ optionInfo }: OptionProp) => {
  return (
    <div>
      <p>{`${optionInfo}`}</p>
    </div>
  )
}

export default Option
