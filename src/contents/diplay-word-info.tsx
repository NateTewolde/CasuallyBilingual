import React from "react";
import { createRoot } from "react-dom/client";
import WordInfo from "~components/WordInfo";
import type { WordInfoObject } from "~types/common";

function showWordInfo(wordInfo: WordInfoObject, x: number, y: number) {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = `${x + 10}px`;
  container.style.top = `${y - 90}px`;
  container.style.zIndex = "1000";
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<WordInfo wordInfo={wordInfo} />);

  return container;
}

function attachWordInfo() {
  const customSpans = document.querySelectorAll(".casually-bilingual-custom");
  let wordInfoContainer: HTMLElement | null = null;
  let clicked = false;

  customSpans.forEach((span) => {
    const wordInfo: WordInfoObject = {
      originalWord: span.getAttribute("data-original-word"),
      translatedWord: span.getAttribute("data-translated-word"),
      languageFrom: span.getAttribute("data-language-from"),
      languageTo: span.getAttribute("data-language-to"),
      textColor: span.getAttribute("data-text-color"),
    };

    span.addEventListener("mouseenter", () => {
      if (!clicked) {
        const rect = span.getBoundingClientRect();
        const { left, top } = rect;
        wordInfoContainer = showWordInfo(wordInfo, left, top);
      }
    });

    span.addEventListener("mousemove", () => {
      if (wordInfoContainer && !clicked) {
        const rect = span.getBoundingClientRect();
        const { left, top } = rect;
        wordInfoContainer.style.left = `${left + 10}px`;
        wordInfoContainer.style.top = `${top - 90}px`;
      }
    });

    span.addEventListener("mouseleave", () => {
      if (wordInfoContainer && !clicked) {
        document.body.removeChild(wordInfoContainer);
        wordInfoContainer = null;
      }
    });

    span.addEventListener("click", () => {
      clicked = !clicked;
    });
  });

  document.addEventListener("click", (event) => {
    if (
      wordInfoContainer &&
      clicked &&
      !(event.target as HTMLElement).classList.contains(
        "casually-bilingual-custom"
      ) &&
      !(event.target as HTMLElement).classList.contains("word-info") &&
      !(event.target as HTMLElement).closest(".word-info")
    ) {
      document.body.removeChild(wordInfoContainer);
      wordInfoContainer = null;
      clicked = false;
    }
  });
}

export default attachWordInfo;
