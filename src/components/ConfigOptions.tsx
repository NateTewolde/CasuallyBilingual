import React from "react"

import Option from "./Option"

//Takes in a list of options as a prop to display.
const ConfigOptions = (options: string[]) => {
  return (
    <div>
      <button>+Options</button>
      <ul>
        {options.map((option) => {
          return <Option option={option} />
        })}
      </ul>
    </div>
  )
}

export default ConfigOptions
