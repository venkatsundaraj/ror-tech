"use client";
import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { heroSectionData } from "@/config/marketing";
import { useInView } from "framer-motion";
import TypingAnimation from "@/app/_components/typing-animation";

const tileContent = [
  "Next generation digital technologies like Gen AI and machine learning.",
  "Powering businesses for governments and corporates.",
  "Association with leading technologies.",
];
import VideoBackground from "@/app/_components/video-background";
interface StickyScaleContainerDuplicateThreeProps {}

const StickyScaleContainerDuplicateThree: FC<
  StickyScaleContainerDuplicateThreeProps
> = ({}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [currentStage, setcurrentStage] = useState<number>(0);
  const [currentState, setCurrentState] = useState<number>(0);
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState<number>(0);

  // Handle window height on client-side only
  useEffect(() => {
    setWindowHeight(document.documentElement.clientHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevState) => (prevState + 1) % heroSectionData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Only run on client
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (sectionRef.current && windowHeight > 0) {
      const primaryCondition = latest > sectionRef.current.offsetTop;
      if (primaryCondition) {
        const value =
          (latest - sectionRef.current.offsetTop) /
          (sectionRef.current.clientHeight - windowHeight);
        const filteredValue = Math.min(100, value * 100);
        setScrollValue(filteredValue);
      }
    }
  });
  const valueHandler = function (value: number) {
    setcurrentStage(value);
  };

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-[100vh] md:min-h-[100vh] bg-transparent bg-fixed flex items-start justify-center relative px-4 md:px-12"
    >
      <div className="absolute z-10 w-full h-full bg-black/50" />
      <VideoBackground
        className="absolute left-0 top-0 w-full h-full z-0"
        videoSrc="https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JofNLFyuXHOZbh2CjGeXqfwlSxucmzViUyQR8F"
      />
      <div className="container min-h-[100vh] flex flex-col md:items-start items-center justify-center md:justify-end sticky top-[0px] left-0 z-20">
        <div
          className={cn(
            "w-full flex flex-col  items-start justify-start gap-3 transition-all duration-300 delay-200 ease-out  md:px10 md:py-2 top-0 2xl:top-10 left-0 mt-32 opacity-1 translate-x-0"
          )}
        >
          <h2 className="text-[28px] font-heading md:text-[38px] text-center md:text-left font-normal text-foreground  leading-tight min-h-[220px]">
            Digital transformational experts in
            {/* <TileTextSection /> */}
            <TypingAnimation
              className="text-[28px]  md:text-[38px] bg-white text-primary"
              tileContent={tileContent}
            />
          </h2>
          <span className="w-[300px] hidden md:w-[800px] text-subtitle_heading font-paragraph text-left font-normal text-primary">
            Simple. Scaleable. Secure. Compliant. Cost-Effective.
          </span>
        </div>
      </div>
    </section>
  );
};

export default StickyScaleContainerDuplicateThree;

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
      className="flex items-center justify-center  p-6 md:p-6 md:mr-16 md:mt-2 xl:mt-4 xl:mr-32"
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
