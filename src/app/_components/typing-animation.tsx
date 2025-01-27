import { cn } from "@/lib/utils";
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
  className?: string;
}

const TypingAnimation: FC<TypingAnimationProps> = function ({
  tileContent,
  className,
}) {
  const currentText = useTypingAnimation(tileContent);

  return (
    <div className="flex items-center justify-start">
      <div className="text-[30px] md:text-[34px] text-foreground font-heading  py-2 md:px-2">
        <p className={cn("bg-secondary max-w-[780px] px-1 py-2", className)}>
          {currentText}
        </p>
        <span className="animate-blink text-transparent">|</span>
      </div>
    </div>
  );
};

export default TypingAnimation;
