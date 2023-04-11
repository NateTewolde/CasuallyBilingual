import React from "react";
import type { WordInfoProp } from "~types/common";

const WordInfo = ({ word }: WordInfoProp) => {
  return (
    <div>
      <p>{word}</p>
    </div>
  );
};
export default WordInfo;
