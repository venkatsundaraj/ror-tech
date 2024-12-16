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
  fill: string;
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
      { cx: 54, cy: 127, r: 13.5, fill: "#fff" },
      { cx: 0, cy: 189, r: 13.5, fill: "#fff" },
      { cx: 83, cy: 181, r: 13.5, fill: "#fff" },
      { cx: 27, cy: 159, r: 13.5, fill: "#fff" },
      { cx: 24, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 54, cy: 30, r: 13.5, fill: "#fff" },
      { cx: 24, cy: 61, r: 13.5, fill: "#fff" },
      { cx: 83, cy: 63, r: 13.5, fill: "#fff" },
      { cx: 54, cy: 90, r: 13.5, fill: "#fff" },
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
      { cx: 88, cy: 0, r: 13.5, fill: "#ffffff" }, // Ellipse_13
      { cx: 88, cy: 201, r: 13.5, fill: "#ffffff" }, // Ellipse_14
      { cx: 14, cy: 34.5, r: 13.5, fill: "#ffffff" }, // Ellipse_16
      { cx: 0, cy: 100.5, r: 13.5, fill: "#ffffff" }, // Ellipse_16-2
      { cx: 189, cy: 101, r: 13.5, fill: "#ffffff" }, // Ellipse_7
      { cx: 162, cy: 35, r: 13.5, fill: "#ffffff" }, // Ellipse_15
      { cx: 162, cy: 168, r: 13.5, fill: "#ffffff" }, // Ellipse_10
      { cx: 14, cy: 168, r: 13.5, fill: "#ffffff" }, // Ellipse_14-2
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
      { cx: 0, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 37, cy: 185, r: 13.5, fill: "#fff" },
      { cx: 185, cy: 37, r: 13.5, fill: "#fff" },
      { cx: 222, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 0, cy: 0, r: 13.5, fill: "#fff" },
      { cx: 148, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 222, cy: 74, r: 13.5, fill: "#fff" },
      { cx: 148, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 222, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 74, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 0, cy: 148, r: 13.5, fill: "#fff" },
      { cx: 111, cy: 111, r: 13.5, fill: "#fff" },
      { cx: 185, cy: 111, r: 13.5, fill: "#fff" },
      { cx: 37, cy: 111, r: 13.5, fill: "#fff" },
    ],
    paths: [
      {
        d: "M1274.694,446.539l165.154,166.417",
        stroke: "#fff",
        strokeWidth: 4,
        fill: "none",
      },
      {
        d: "M1273.694,520.539l27.806,28.018",
        stroke: "#fff",
        strokeWidth: 4,
        fill: "none",
      },
      {
        d: "M1486.499,520.539l-27.806,28.018",
        stroke: "#fff",
        strokeWidth: 4,
        fill: "none",
      },
      {
        d: "M1273.694,576.575l27.806-28.018",
        stroke: "#fff",
        strokeWidth: 4,
        fill: "none",
      },
      {
        d: "M1486.499,576.575l-27.806-28.018",
        stroke: "#fff",
        strokeWidth: 4,
        fill: "none",
      },
      {
        d: "M1476.155,446.539l-165.154,166.417",
        stroke: "#fff",
        strokeWidth: 4,
        fill: "none",
      },
      {
        d: "M1363.75,508.958h7.891v27.929",
        stroke: "#fff",
        strokeWidth: 4,
        fill: "none",
      },
      {
        d: "M1387.25,508.958h-7.891v27.929",
        stroke: "#fff",
        strokeWidth: 4,
        fill: "none",
      },
    ],
  },
];

const SvgTransition: React.FC<{
  scrollProgress: number;
  currentValue: (value: number) => void;
}> = ({ scrollProgress, currentValue }) => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const stageIndex = Math.floor(Math.min(scrollProgress / 16.6, 5));
    // console.log(stageIndex, scrollProgress, scrollProgress / 20);
    setCurrentStage(stageIndex);
    currentValue(stageIndex);
    // console.log(currentStage);
  }, [scrollProgress]);

  const interpolatedCircles = stages[currentStage].circles
    ? stages[currentStage].circles
    : [];
  console.log(interpolatedCircles);
  const interpolatedPaths = stages[currentStage].paths
    ? stages[currentStage].paths
    : [];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="249"
      height="212"
      viewBox="0 0 249 212"
      className="absolute top-full -translate-y-1/2 right-1/2 translate-x-1/2 md:translate-x-0 flex items-center justify-center md:right-[100px] p-6 md:p-6"
    >
      <g
        id="Group_190"
        data-name="Group 190"
        transform=""
        className="flex items-center justify-center translate-x-[20px] md:translate-x-0 md:translate-y-0 translate-y-[0px]"
      >
        {interpolatedCircles.map((circle, index) => (
          <motion.circle
            key={index}
            id={`Ellipse_${index}`}
            data-name={`Ellipse ${index}`}
            className={""}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill={circle.fill}
            initial={false}
            animate={{ cx: circle.cx, cy: circle.cy, r: circle.r }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
        {interpolatedPaths.map((path, index) => (
          <motion.path
            key={index}
            id={`Path_${index}`}
            data-name={`Path ${index}`}
            transform="translate(-10670)"
            d={path.d}
            fill="none"
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        ))}
      </g>
    </svg>
  );
};

export default SvgTransition;
