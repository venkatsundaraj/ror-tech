"use client";

import React from "react";
import { useCircleAnimation } from "@/hooks/use-circle-animation";

const RandomCircles: React.FC = () => {
  const containerWidth = 1800;
  const containerHeight = 1000;
  const circleCount = 500;

  const circles = useCircleAnimation(
    circleCount,
    containerWidth,
    containerHeight
  );

  return (
    <svg
      width={containerWidth}
      height={containerHeight}
      style={{ border: "1px solid black" }}
      className="w-screen h-screen fixed top-0 left-0"
    >
      {circles.map((circle, index) => (
        <circle
          key={index}
          cx={circle.x}
          cy={circle.y}
          r={circle.radius}
          fill="#eee"
        />
      ))}
    </svg>
  );
};

export default RandomCircles;
