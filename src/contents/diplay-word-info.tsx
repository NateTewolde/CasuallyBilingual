import React from "react";
import { render } from "react-dom";
import WordInfo from "~components/WordInfo";

function showWordInfo(content: string, x: number, y: number) {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = `${x + 10}px`;
  container.style.top = `${y - 90}px`;
  container.style.zIndex = "1000";
  document.body.appendChild(container);

  render(<WordInfo content={content} />, container);

  return container;
}

function attachWordInfo() {
  const customSpans = document.querySelectorAll(".casually-bilingual-custom");
  let wordInfoContainer: HTMLElement | null = null;
  let clicked = false;

  customSpans.forEach((span) => {
    span.addEventListener("mouseenter", (event) => {
      if (!clicked) {
        const target = event.target as HTMLElement;
        const content = target.textContent || "";
        const { pageX, pageY } = event as MouseEvent;
        wordInfoContainer = showWordInfo(content, pageX, pageY);
      }
    });

    span.addEventListener("mousemove", (event) => {
      if (wordInfoContainer && !clicked) {
        const { pageX, pageY } = event as MouseEvent;
        wordInfoContainer.style.left = `${pageX + 10}px`;
        wordInfoContainer.style.top = `${pageY - 90}px`;
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
