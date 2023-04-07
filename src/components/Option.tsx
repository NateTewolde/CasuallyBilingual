import React from "react"

import type { OptionProp } from "~types/common"

const Option = ({ optionInfo }: OptionProp) => {
  return (
    <div>
      <label>
        {`${optionInfo.option}`}
        <input
          data-label={optionInfo.optionType}
          onChange={optionInfo.handleOptionChange}
          defaultValue={optionInfo.optionVal}></input>
      </label>
    </div>
  )
}

export default Option
