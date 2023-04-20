import React from "react";
import styled from "styled-components";
import type { WordInfoProp, StyledTranslatedWordProps } from "~types/common";

const StyledWordInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  background-color: white;
  border: 2px solid black;
`;

const StyledWordInfoHeader = styled.h1`
  font-size: 0.8rem;
`;

const StyledWordInfoDesc = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSpanBorder = styled.span`
  width: 2px;
  border-left: 1px solid black;
`;

const StyledOriginalDiv = styled.span`
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-radius: 2px;
  padding: 4px;
`;

const StyledTranslatedDiv = styled.span`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-radius: 2px;
  padding: 4px;
  text-align: end;
`;

const StyledLanguageHeader = styled.h2`
  font-size: 0.6rem;
`;

const StyledOriginalWord = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

const StyledTranslatedWord = styled.p<StyledTranslatedWordProps>`
  font-size: 0.9rem;
  text-align: center;
  color: ${(props) => props.textColor || "black"};
`;

const WordInfo = ({ wordInfo }: WordInfoProp) => {
  return (
    <StyledWordInfo className="word-info">
      <StyledWordInfoHeader>Casually Bilingual</StyledWordInfoHeader>
      <div>{wordInfo.pronunWord}</div>
      <StyledWordInfoDesc>
        <StyledOriginalDiv>
          <StyledLanguageHeader>{wordInfo.languageFrom}</StyledLanguageHeader>
          <StyledOriginalWord>{wordInfo.originalWord}</StyledOriginalWord>
        </StyledOriginalDiv>
        <StyledSpanBorder></StyledSpanBorder>
        <StyledTranslatedDiv>
          <StyledLanguageHeader>{wordInfo.languageTo}</StyledLanguageHeader>
          <StyledTranslatedWord textColor={wordInfo.textColor}>
            {wordInfo.translatedWord}
          </StyledTranslatedWord>
        </StyledTranslatedDiv>
      </StyledWordInfoDesc>
    </StyledWordInfo>
  );
};
export default WordInfo;
