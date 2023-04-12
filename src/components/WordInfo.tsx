import React from "react";
import type { WordInfoProp } from "~types/common";

const WordInfo = ({ content }: WordInfoProp) => {
  return (
    <div
      className="word-info"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        backgroundColor: "blue",
      }}
    >
      <h1>HIIIIIIII</h1>
      <p>{content}</p>
    </div>
  );
};
export default WordInfo;
