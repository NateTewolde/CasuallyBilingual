import Option from "./Option";
import React from "react";
import uniqid from "uniqid";
import type { OptionInfo, OptionsArray } from "~types/common";

//Takes in a list of options as a prop to display.
const ConfigOptions = ({ optionsArray }: OptionsArray) => {
  return (
    <div>
      <button>+Options</button>
      <ul>
        {optionsArray.map((option) => {
          return <Option optionInfo={option} key={uniqid()} />;
        })}
      </ul>
    </div>
  );
};

export default ConfigOptions;
