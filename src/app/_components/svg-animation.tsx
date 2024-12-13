"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CircleProps {
  cx: number;
  cy: number;
  r: number;
  fill: string;
}

interface PathProps {
  d: string;
  stroke: string;
  strokeWidth: number;
}

interface StageProps {
  circles: CircleProps[];
  paths?: PathProps[];
}

const stages: StageProps[] = [
  {
    circles: [
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 110, cy: 108.5, r: 13.5, fill: "#fff" },
    ],
  },
  {
    circles: [
      { cx: 54, cy: 127, r: 13.5, fill: "#cab8cc" },
      { cx: 0, cy: 189, r: 13.5, fill: "#cab8cc" },
      { cx: 83, cy: 181, r: 13.5, fill: "#cab8cc" },
      { cx: 27, cy: 159, r: 13.5, fill: "#cab8cc" },
      { cx: 24, cy: 0, r: 13.5, fill: "#cab8cc" },
      { cx: 54, cy: 30, r: 13.5, fill: "#cab8cc" },
      { cx: 24, cy: 61, r: 13.5, fill: "#cab8cc" },
      { cx: 83, cy: 63, r: 13.5, fill: "#cab8cc" },
      { cx: 54, cy: 90, r: 13.5, fill: "#cab8cc" },
    ],
  },
  {
    circles: [
      { cx: 169, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 203, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 135, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 68, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 34, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 236, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 101, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 0, cy: 108.5, r: 13.5, fill: "#fff" },
      { cx: 269, cy: 108.5, r: 13.5, fill: "#fff" },
    ],
  },
  {
    circles: [
      { cx: 37, cy: 37, r: 13.5, fill: "#fff" },
      { cx: 185, cy: 185, r: 13.5, fill: "#fff" },
      { cx: 74, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 37, cy: 185, r: 13.5, fill: "#fff" },
      { cx: 185, cy: 37, r: 13.5, fill: "#fff" },
      { cx: 222, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 0, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 148, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 148, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 74, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 111, cy: 111, r: 13.5, fill: "#fff" },
    ],
  },
  {
    circles: [
      { cx: 37, cy: 37, r: 13.5, fill: "#fff" },
      { cx: 185, cy: 185, r: 13.5, fill: "#fff" },
      { cx: 74, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 37, cy: 185, r: 13.5, fill: "#fff" },
      { cx: 185, cy: 37, r: 13.5, fill: "#fff" },
      { cx: 222, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 0, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 148, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 148, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 74, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 111, cy: 111, r: 13.5, fill: "#fff" },
    ],
  },
  {
    circles: [
      { cx: 37, cy: 37, r: 13.5, fill: "#fff" },
      { cx: 185, cy: 185, r: 13.5, fill: "#fff" },
      { cx: 74, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 37, cy: 185, r: 13.5, fill: "#fff" },
      { cx: 185, cy: 37, r: 13.5, fill: "#fff" },
      { cx: 222, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 0, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 148, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 148, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 74, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 111, cy: 111, r: 13.5, fill: "#fff" },
    ],
  },
  // {
  //   circles: [
  //     { cx: 37, cy: 37, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 185, r: 13.5, fill: "#fff" },
  //     { cx: 74, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 0, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 37, cy: 185, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 37, r: 13.5, fill: "#fff" },
  //     { cx: 222, cy: 0, r: 13.5, fill: "#fff" },
  //     { cx: 0, cy: 0, r: 13.5, fill: "#fff" },
  //     { cx: 148, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 222, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 148, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 222, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 74, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 0, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 111, cy: 111, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 111, r: 13.5, fill: "#fff" },
  //     { cx: 37, cy: 111, r: 13.5, fill: "#fff" },
  //   ],
  //   paths: [
  //     {
  //       d: "M11944.694,446.539l165.154,166.417",
  //       stroke: "#fff",
  //       strokeWidth: 4,
  //     },
  //     {
  //       d: "M12109.849,446.539l-165.154,166.417",
  //       stroke: "#fff",
  //       strokeWidth: 4,
  //     },
  //   ],
  // },
  // {
  //   circles: [
  //     { cx: 37, cy: 37, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 185, r: 13.5, fill: "#fff" },
  //     { cx: 74, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 37, cy: 185, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 37, r: 13.5, fill: "#fff" },
  //     { cx: 222, cy: 0, r: 13.5, fill: "#fff" },
  //     { cx: 0, cy: 0, r: 13.5, fill: "#fff" },
  //     { cx: 148, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 148, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 74, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 111, cy: 111, r: 13.5, fill: "#fff" },
  //   ],
  // },
  // {
  //   circles: [
  //     { cx: 37, cy: 37, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 185, r: 13.5, fill: "#fff" },
  //     { cx: 74, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 0, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 37, cy: 185, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 37, r: 13.5, fill: "#fff" },
  //     { cx: 222, cy: 0, r: 13.5, fill: "#fff" },
  //     { cx: 0, cy: 0, r: 13.5, fill: "#fff" },
  //     { cx: 148, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 222, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 148, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 222, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 74, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 0, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 111, cy: 111, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 111, r: 13.5, fill: "#fff" },
  //     { cx: 37, cy: 111, r: 13.5, fill: "#fff" },
  //   ],
  //   paths: [
  //     {
  //       d: "M11944.694,446.539l165.154,166.417",
  //       stroke: "#fff",
  //       strokeWidth: 4,
  //     },
  //     {
  //       d: "M12109.849,446.539l-165.154,166.417",
  //       stroke: "#fff",
  //       strokeWidth: 4,
  //     },
  //   ],
  // },
  // {
  //   circles: [
  //     { cx: 37, cy: 37, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 185, r: 13.5, fill: "#fff" },
  //     { cx: 74, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 37, cy: 185, r: 13.5, fill: "#fff" },
  //     { cx: 185, cy: 37, r: 13.5, fill: "#fff" },
  //     { cx: 222, cy: 0, r: 13.5, fill: "#fff" },
  //     { cx: 0, cy: 0, r: 13.5, fill: "#fff" },
  //     { cx: 148, cy: 74, r: 13.5, fill: "#fff" },
  //     { cx: 148, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 74, cy: 148, r: 13.5, fill: "#fff" },
  //     { cx: 111, cy: 111, r: 13.5, fill: "#fff" },
  //   ],
  // },
];

const SvgTransition: React.FC<{ scrollProgress: number }> = ({
  scrollProgress,
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [nextStage, setNextStage] = useState(1);
  const [stageProgress, setStageProgress] = useState(0);

  useEffect(() => {
    const stageIndex = Math.floor(scrollProgress / 25);
    const progress = (scrollProgress % 20) / 20;

    setCurrentStage(stageIndex);
    setNextStage((stageIndex + 1) % stages.length);
    setStageProgress(progress);
  }, [scrollProgress]);

  const interpolateCircle = (
    circle1: CircleProps,
    circle2: CircleProps,
    progress: number
  ): CircleProps => {
    return {
      cx: circle1.cx + (circle2.cx - circle1.cx) * progress,
      cy: circle1.cy + (circle2.cy - circle1.cy) * progress,
      r: circle1.r + (circle2.r - circle1.r) * progress,
      fill: circle1.fill,
    };
  };

  const currentCircles = stages[currentStage].circles
    ? stages[currentStage].circles
    : [];
  const nextCircles = stages[nextStage].circles;

  const interpolatedCircles = stages[currentStage].circles
    ? stages[currentStage].circles
    : [];

  return (
    // <h2></h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="249"
      height="212"
      viewBox="0 0 249 212"
      className="absolute top-full -translate-y-1/2 right-[100px] p-6"
    >
      <g id="Group_190" data-name="Group 190" transform="">
        {interpolatedCircles.map((circle, index) => (
          <motion.circle
            key={index}
            id={`Ellipse_${index}`}
            data-name={`Ellipse ${index}`}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill={circle.fill}
            initial={false}
            animate={{ cx: circle.cx, cy: circle.cy, r: circle.r }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
        {stages[currentStage].paths?.map((path, index) => (
          <motion.path
            key={index}
            id={`Path_${index}`}
            data-name={`Path ${index}`}
            d={path.d}
            fill="none"
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: stageProgress }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        ))}
      </g>
    </svg>
  );
};

export default SvgTransition;
