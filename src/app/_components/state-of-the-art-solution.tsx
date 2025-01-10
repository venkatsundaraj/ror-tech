import { FC } from "react";
import { cn } from "@/lib/utils";
import AnimatedIcon from "@/app/_components/animated-icon";
import Icon1 from "@/config/animated-svg/datajumpbox.json";

interface StateOfTheArtSolutionSectionProps {}

const StateOfTheArtSolutionSection: FC<
  StateOfTheArtSolutionSectionProps
> = ({}) => {
  return (
    <section
      id="our-solution"
      className="w-screen min-h-screen flex flex-col items-center justify-center bg-background py-16 md:py-24 relative "
    >
      {/* <BackgroundSVG /> */}
      <div className="container flex flex-col items-start justify-start">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-14 md:gap-4 w-full py-6">
          <div className="flex relative items-center justify-center w-full min-h-[200px] md:min-h-[260px] p-4">
            <div className="p-8 rounded-full border border-primary  flex items-center justify-center relative">
              <AnimatedIcon
                icon={Icon1}
                className="min-w-[80px] md:min-w-[120px]"
              />
              <div className="absolute w-[60%] h-[60%] top-[-15px] right-[-15px] border-t border-r bg-transparent p-4 rounded-tr-full " />
            </div>
            <div
              className={cn(
                "w-full h-[100px] flex items-center justify-center absolute"
              )}
            >
              <span
                className={cn(
                  "text-subtitle_heading hidden text-center font-paragraph font-bold text-primary absolute leading-tight left-1/2 -translate-x-1/2"
                )}
              >
                Search
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateOfTheArtSolutionSection;
