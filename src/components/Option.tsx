import React from "react"

import type { OptionProp } from "~types/common"

const Option = ({ option }: OptionProp) => {
  return (
    <div>
      <p>{`${option}`}</p>
    </div>
  )
}

export default Option
