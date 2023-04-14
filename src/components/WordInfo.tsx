import React from "react";
import styled from "styled-components";
import type { WordInfoProp } from "~types/common";

const StyledWordInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  background-color: white;
  border: 2px solid black;
  height: 90px;
`;

const StyledWordInfoDesc = styled.div`
  display: flex;
`;

const StyledWordInfoHeader = styled.h1`
  font-size: 0.8rem;
`;

const WordInfo = ({ wordInfo }: WordInfoProp) => {
  console.log(wordInfo.languageFrom);
  return (
    <StyledWordInfo className="word-info">
      <StyledWordInfoHeader>Casually Bilingual</StyledWordInfoHeader>
      <StyledWordInfoDesc>
        <div>
          <h2>{wordInfo.languageFrom}</h2>
          <p>{wordInfo.originalWord}</p>
        </div>
        <div>
          <h2>{wordInfo.languageTo}</h2>
          <p>{wordInfo.translatedWord}</p>
        </div>
      </StyledWordInfoDesc>
    </StyledWordInfo>
  );
};
export default WordInfo;
