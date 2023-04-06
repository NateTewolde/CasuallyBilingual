import React from "react"

import type { OptionInfo, OptionsArray } from "~types/common"

import Option from "./Option"

//Takes in a list of options as a prop to display.
const ConfigOptions = ({ optionsArray }: OptionsArray) => {
  return (
    <div>
      <button>+Options</button>
      <ul>
        {optionsArray.map((option) => {
          return <Option optionInfo={option} />
        })}
      </ul>
    </div>
  )
}

export default ConfigOptions
