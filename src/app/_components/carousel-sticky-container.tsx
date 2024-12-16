"use client";

import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import SvgAnimation from "@/app/_components/svg-animation";
import RandomCircles from "@/app/_components/random-circle";
import { heroSectionData } from "@/config/marketing";

interface CarouselStickyContainerProps {}

const CarouselStickyContainer: FC<CarouselStickyContainerProps> = ({}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [currentStage, setcurrentStage] = useState<number>(0);
  const [currentState, setCurrentState] = useState<number>(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevState) => (prevState + 1) % heroSectionData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (sectionRef.current) {
      const primaryCondition = latest > sectionRef.current.offsetTop;
      if (primaryCondition) {
        const value =
          (latest - sectionRef.current.offsetTop) /
          (sectionRef.current.clientHeight -
            document.documentElement.clientHeight);
        const filteredValue = Math.min(100, value * 100);
        setScrollValue(filteredValue);
        console.log(scrollValue);
      }
    }
  });

  const valueHandler = function (value: number) {
    setcurrentStage(value);
  };

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-[125vh] bg-gradient-to-tr from-primary to-secondary bg-fixed flex items-start justify-center relative"
    >
      <div className="w-full  h-[100vh] flex items-center justify-center sticky top-0 left-0 ">
        <div
          className={cn(
            "absolute bottom-0 left-1/2 top-[70vh] h-0.5 bg-foreground  -translate-x-1/2 transition-all duration-700 ease-out",
            scrollValue < 35 ? "w-1/12" : "w-full"
          )}
        />
        <div
          className={cn(
            "w-full  h-[70vh] flex items-end justify-center transition-all duration-300 ease-out py-5 md:py-8 absolute top-0 left-0",
            scrollValue < 40
              ? "opacity-1 translate-y-0"
              : "opacity-0 translate-y-5"
          )}
        >
          <h1 className="max-w-lg font-normal leading-tight text-center text-foreground font-heading text-secondary_heading px-4 md:px-0">
            We help you derive maximum value from your ecosystem data.
          </h1>
        </div>
        <div
          className={cn(
            "w-full h-full flex flex-col items-start justify-start gap-3 transition-all duration-300 delay-200 ease-out p-5 md:px10 md:py-2 absolute top-0 left-0 mt-32",
            scrollValue > 40
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-0"
          )}
        >
          <h1 className="max-w-lg font-normal leading-tight text-left text-foreground font-heading text-secondary_heading">
            Get into an exciting data journey.
          </h1>
          <span className="text-subtitle_heading font-paragraph text-left font-normal text-foreground">
            Textual | Tabular | Voice | Pictures | Emails | Videos
          </span>
        </div>

        {heroSectionData.map((section, index) => (
          <section
            key={index}
            className={cn(
              "w-full h-[70vh] flex flex-col  items-start justify-center md:justify-end transition-all duration-300 ease-out absolute top-0 left-0",
              scrollValue < 40 ? "opacity-0" : "opacity-1",
              currentState === index && scrollValue > 40
                ? "opacity-1 translate-y-0"
                : "opacity-0 translate-y-5"
            )}
          >
            <div className="flex flex-col items-start justify-center p-5 md:p-10">
              <h1 className="max-w-lg gap-4 font-normal leading-tight text-center text-foreground font-heading text-primary_heading">
                {section.title}
              </h1>
              <p className="text-tertiary_heading mb-3 font-paragraph font-medium text-foreground">
                {section.description}
              </p>
              <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                {section.subText}
              </span>
            </div>
          </section>
        ))}

        {scrollValue > 40 ? (
          <SvgTransition
            scrollProgress={scrollValue}
            currentValue={currentState}
          />
        ) : null}
      </div>
      {/* <div className="absolute w-full h-[30vh] sticky to" /> */}

      {/* <RandomCircles /> */}
    </section>
  );
};

export default CarouselStickyContainer;

// ------------------------------------------------------------------------------------------------------------

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
      { cx: 75, cy: 175, r: 18, fill: "#fff" },
      { cx: 0, cy: 260, r: 18, fill: "#fff" },
      { cx: 115, cy: 250, r: 18, fill: "#fff" },
      { cx: 37, cy: 220, r: 18, fill: "#fff" },
      { cx: 33, cy: 0, r: 18, fill: "#fff" },
      { cx: 75, cy: 41, r: 18, fill: "#fff" },
      { cx: 33, cy: 84, r: 18, fill: "#fff" },
      { cx: 115, cy: 87, r: 18, fill: "#fff" },
      { cx: 75, cy: 124, r: 18, fill: "#fff" },
    ],
  },
  {
    circles: [
      { cx: 167, cy: 150, r: 18, fill: "#fff" },
      { cx: 215, cy: 150, r: 18, fill: "#fff" },
      { cx: 121, cy: 150, r: 18, fill: "#fff" },
      { cx: 29, cy: 150, r: 18, fill: "#fff" },
      { cx: -22, cy: 150, r: 18, fill: "#fff" },
      { cx: 260, cy: 150, r: 18, fill: "#fff" },
      { cx: 74, cy: 150, r: 18, fill: "#fff" },
      { cx: -65, cy: 150, r: 18, fill: "#fff" },
      { cx: 306, cy: 150, r: 18, fill: "#fff" },
    ],
  },
  {
    circles: [
      { cx: 121, cy: 0, r: 18, fill: "#ffffff" },
      { cx: 121, cy: 277, r: 18, fill: "#ffffff" },
      { cx: 19, cy: 48, r: 18, fill: "#ffffff" },
      { cx: 0, cy: 139, r: 18, fill: "#ffffff" },
      { cx: 260, cy: 139, r: 18, fill: "#ffffff" },
      { cx: 223, cy: 48, r: 18, fill: "#ffffff" },
      { cx: 223, cy: 231, r: 18, fill: "#ffffff" },
      { cx: 19, cy: 231, r: 18, fill: "#ffffff" },
    ],
  },
  {
    circles: [
      { cx: 51, cy: 51, r: 18, fill: "#fff" },
      { cx: 255, cy: 255, r: 18, fill: "#fff" },
      { cx: 102, cy: 102, r: 18, fill: "#fff" },
      { cx: 51, cy: 255, r: 18, fill: "#fff" },
      { cx: 255, cy: 51, r: 18, fill: "#fff" },
      { cx: 306, cy: 0, r: 18, fill: "#fff" },
      { cx: 0, cy: 0, r: 18, fill: "#fff" },
      { cx: 204, cy: 102, r: 18, fill: "#fff" },
      { cx: 204, cy: 204, r: 18, fill: "#fff" },
      { cx: 102, cy: 204, r: 18, fill: "#fff" },
      { cx: 153, cy: 153, r: 18, fill: "#fff" },
    ],
  },
  {
    circles: [
      { cx: 51, cy: 51, r: 18, fill: "#fff" },
      { cx: 255, cy: 255, r: 18, fill: "#fff" },
      { cx: 102, cy: 102, r: 18, fill: "#fff" },
      { cx: 0, cy: 102, r: 18, fill: "#fff" },
      { cx: 51, cy: 255, r: 18, fill: "#fff" },
      { cx: 255, cy: 51, r: 18, fill: "#fff" },
      { cx: 306, cy: 0, r: 18, fill: "#fff" },
      { cx: 0, cy: 0, r: 18, fill: "#fff" },
      { cx: 204, cy: 102, r: 18, fill: "#fff" },
      { cx: 306, cy: 102, r: 18, fill: "#fff" },
      { cx: 204, cy: 204, r: 18, fill: "#fff" },
      { cx: 306, cy: 204, r: 18, fill: "#fff" },
      { cx: 102, cy: 204, r: 18, fill: "#fff" },
      { cx: 0, cy: 204, r: 18, fill: "#fff" },
      { cx: 153, cy: 153, r: 18, fill: "#fff" },
      { cx: 255, cy: 153, r: 18, fill: "#fff" },
      { cx: 51, cy: 153, r: 18, fill: "#fff" },
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
export const SvgTransition: React.FC<{
  scrollProgress: number;
  currentValue: number;
}> = ({ scrollProgress, currentValue }) => {
  const [currentStage, setCurrentStage] = useState(0);

  // useEffect(() => {
  //   const stageIndex = Math.floor(Math.min(scrollProgress / 16.6, 5));
  //   // console.log(stageIndex, scrollProgress, scrollProgress / 20);
  //   setCurrentStage(stageIndex);
  //   currentValue(stageIndex);
  //   // console.log(currentStage);
  // }, [scrollProgress]);

  const interpolatedCircles = stages[currentValue].circles
    ? stages[currentValue].circles
    : [];
  // console.log(interpolatedCircles);
  const interpolatedPaths = stages[currentValue].paths
    ? stages[currentValue].paths
    : [];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="350"
      height="300"
      viewBox="-25 -25 300 350"
      className="absolute bg-green-0 top-[70vh] -translate-y-1/2 right-1/2 translate-x-1/2 md:translate-x-0 flex items-center justify-center md:right-[100px] p-6 md:p-6"
    >
      <g
        id="Group_190"
        data-name="Group 190"
        transform=""
        className="flex  items-center justify-center  md:translate-x-0 md:translate-y-0 translate-y-[0px]"
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
