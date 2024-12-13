"use client";

import { FC } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import SvgAnimation from "@/app/_components/svg-animation";
import SvgTransition from "@/app/_components/svg-animation";

interface StickyHeroSectionProps {}

const StickyHeroSection: FC<StickyHeroSectionProps> = ({}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollValue, setScrollValue] = useState<number>(0);
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
        console.log(filteredValue, scrollValue);
      }
    }
  });

  return (
    <section
      ref={sectionRef}
      className="w-l min-h-[300vh] overflow-x-hidden bg-gradient-to-tr from-primary to-secondary bg-fixed flex items-start justify-center relative"
    >
      <div className=" flex-col w-full h-[67.5vh]  flex items-start justify-between fixed top-0 left-0">
        <div
          className={cn(
            "absolute bottom-0 left-1/2 top-full h-0.5 bg-foreground  -translate-x-1/2 transition-all duration-700 ease-out",
            scrollValue < 3 ? "w-1/12" : "w-full"
          )}
        />
        <div
          className={cn(
            "w-full h-full flex items-end justify-center transition-all duration-200 ease-out py-5 md:py-8 absolute top-0 left-0",
            scrollValue < 3
              ? "opacity-1 translate-y-0"
              : "opacity-0 translate-y-5"
          )}
        >
          <h1 className="max-w-lg font-normal leading-tight text-center text-foreground font-heading text-secondary_heading">
            We help you derive maximum value from your ecosystem data.
          </h1>
        </div>
        <div
          className={cn(
            "w-full h-full flex flex-col items-start justify-end gap-20 transition-all duration-200 ease-out py-5 md:py-8 absolute top-0 left-0",
            scrollValue > 25
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-5"
          )}
        >
          <div className="flex flex-col items-start justify-center gap-2 p-5 md:p-10">
            <h1 className="max-w-lg font-normal leading-tight text-left text-foreground font-heading text-secondary_heading">
              Get into an exciting data journey.
            </h1>
            <p className="max-w-lg leading-tight text-left font-extralight text-foreground font-paragraph text-paragraph_heading">
              Simple. Scalable. Secure. Compliant. Cost-Effective.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center p-5 md:p-10">
            <h1 className="max-w-lg gap-4 font-normal leading-tight text-center text-foreground font-heading text-secondary_heading">
              Get into an exciting data journey.
            </h1>
          </div>
        </div>
        {scrollValue > 6 ? (
          <SvgTransition scrollProgress={scrollValue} />
        ) : null}
      </div>
    </section>
  );
};

export default StickyHeroSection;
