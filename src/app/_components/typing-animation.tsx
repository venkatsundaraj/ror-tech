import { useState, useEffect, FC } from "react";

export function useTypingAnimation(
  texts: string[],
  typingSpeed: number = 20,
  deletingSpeed: number = 20,
  pauseDuration: number = 1000
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(
            texts[currentTextIndex].slice(0, currentText.length + 1)
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isTyping,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return currentText;
}

import React from "react";

interface TypingAnimationProps {
  tileContent: string[];
}

const TypingAnimation: FC<TypingAnimationProps> = function ({ tileContent }) {
  const currentText = useTypingAnimation(tileContent);

  return (
    <div className="flex items-center justify-start">
      <div className="text-[30px] md:text-[34px] text-foreground font-heading bg-secondary py-2 px-2">
        <span>{currentText}</span>
        <span className="animate-blink text-transparent">|</span>
      </div>
    </div>
  );
};

export default TypingAnimation;
