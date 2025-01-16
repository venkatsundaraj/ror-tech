"use client";

import { FC } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import SvgAnimation from "@/app/_components/svg-animation";
import SvgTransition from "@/app/_components/svg-animation";
import RandomCircles from "@/app/_components/random-circle";

interface StickyHeroSectionProps {}

const StickyHeroSection: FC<StickyHeroSectionProps> = ({}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [currentStage, setcurrentStage] = useState<number>(0);
  const { scrollY } = useScroll();

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
      }
    }
  });

  const valueHandler = function (value: number) {
    setcurrentStage(value);
  };

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-[300vh] bg-gradient-to-tr from-primary to-secondary bg-fixed flex items-start justify-center relative"
    >
      <div className="w-full  h-[67.4vh]  flex items-center justify-center sticky top-0 left-0 ">
        <div
          className={cn(
            "absolute bottom-0 left-1/2 top-full h-0.5 bg-foreground  -translate-x-1/2 transition-all duration-700 ease-out",
            scrollValue < 3 ? "w-1/12" : "w-full"
          )}
        />
        <div
          className={cn(
            "w-full  h-full flex items-end justify-center transition-all duration-300 ease-out py-5 md:py-8 absolute top-0 left-0",
            scrollValue < 3
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
            "w-full h-full flex flex-col items-start justify-start gap-3 transition-all duration-300 delay-200 ease-out p-5 md:p-10 absolute top-0 left-0 mt-32",
            scrollValue > 3
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
        <div
          className={cn(
            "w-full h-full flex flex-col items-start justify-center md:items-start md:justify-end gap-20 transition-all duration-300 delay-200 ease-out py-5 md:py-8 absolute top-0 left-0",
            currentStage === 1
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-0"
          )}
        >
          <div className="flex flex-col items-center justify-center md:items-start md:justify-end gap-2 p-5 md:p-10"></div>

          <div className="flex flex-col items-start justify-center p-5 md:p-10">
            <h1 className="max-w-lg gap-4 font-normal leading-tight text-center text-foreground font-heading text-primary_heading">
              Raw Data
            </h1>
            <p className="text-tertiary_heading mb-3 font-paragraph font-medium text-foreground">
              Structured and Unstructured
            </p>
            <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
              Textual | Tabular | Voice | Pictures | Emails | Videos
            </span>
          </div>
        </div>
        <div
          className={cn(
            "w-full h-full flex flex-col items-start justify-center md:items-start md:justify-end gap-20 transition-all duration-300 delay-200 ease-out py-5 md:py-8 absolute top-0 left-0",
            currentStage === 2
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-0"
          )}
        >
          <div className="flex flex-col items-start justify-center gap-2 p-5 md:p-10"></div>

          <div className="flex flex-col items-start justify-center p-5 md:p-10">
            <h1 className="max-w-lg gap-4 font-normal leading-tight text-center text-foreground font-heading text-primary_heading">
              Information
            </h1>
            <p className="text-tertiary_heading mb-3 font-paragraph font-medium text-foreground">
              Organised and Interpreted Raw Data
            </p>
            <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
              Lorem Ipsum
            </span>
          </div>
        </div>

        <div
          className={cn(
            "w-full h-full flex flex-col items-start justify-center md:items-start md:justify-end gap-20 transition-all duration-300 delay-200 ease-out py-5 md:py-8 absolute top-0 left-0",
            currentStage === 3
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-0"
          )}
        >
          <div className="flex flex-col items-start justify-center gap-2 p-5 md:p-10"></div>

          <div className="flex flex-col items-start justify-center p-5 md:p-10">
            <h1 className="max-w-lg gap-4 font-normal leading-tight text-center text-foreground font-heading text-primary_heading">
              Intelligence
            </h1>
            <p className="text-tertiary_heading mb-3 font-paragraph font-medium text-foreground">
              Answers To WHAT Happened
            </p>
            <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
              Data Visualisation | Descriptive Analysis.
            </span>
          </div>
        </div>

        <div
          className={cn(
            "w-full h-full flex flex-col items-start justify-center md:items-start md:justify-end gap-20 transition-all duration-300 delay-200 ease-out py-5 md:py-8 absolute top-0 left-0",
            currentStage === 4
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-0"
          )}
        >
          <div className="flex flex-col items-start justify-center gap-2 p-5 md:p-10"></div>

          <div className="flex flex-col items-start justify-center p-5 md:p-10">
            <h1 className="max-w-lg gap-4 font-normal leading-tight text-center text-foreground font-heading text-primary_heading">
              Insights
            </h1>
            <p className="text-tertiary_heading mb-3 font-paragraph font-medium text-foreground">
              WHAT And Also WHY It Happened
            </p>
            <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
              Diagnostic Analysis.
            </span>
          </div>
        </div>

        <div
          className={cn(
            "w-full h-full flex flex-col items-start justify-center md:items-start md:justify-end gap-20 transition-all duration-300 delay-200 ease-out py-5 md:py-8 absolute top-0 left-0",
            currentStage === 5
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-0"
          )}
        >
          <div className="flex flex-col items-start justify-center gap-2 p-5 md:p-10"></div>

          <div className="flex flex-col items-start justify-center p-5 md:p-10">
            <h1 className="max-w-lg gap-4 font-normal leading-tight text-center text-foreground font-heading text-primary_heading">
              Foresights
            </h1>
            <p className="text-tertiary_heading mb-3 font-paragraph font-medium text-foreground">
              WHAT Might Happen In The Future.
            </p>
            <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
              Predictive Analysis.
            </span>
          </div>
        </div>

        {scrollValue > 6 ? (
          <SvgTransition
            scrollProgress={scrollValue}
            currentValue={valueHandler}
          />
        ) : null}
      </div>

      {/* <RandomCircles /> */}
    </section>
  );
};

export default StickyHeroSection;
// before:absolute before:w-full before:h-screen before:bg-green-400 before:content-[''] before:top-0 before:left-0
