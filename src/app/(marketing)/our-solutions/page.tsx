import SolutionDropDown from "@/app/_components/solutions-dropdown";
import { buttonVariants } from "@/app/_components/ui/button";
import VideoBackground from "@/app/_components/video-background";
import { solutionImpactData } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ScrollToHash />
      <section className="w-screen min-h-screen flex py-5 items-center justify-center relative bg-black/10">
        <div className="container static z-10 h-full flex items-center justify-center md:justify-start">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <h1 className="text-secondary_heading font-heading text-secondary leading-tight max-w-2xl font-semibold mb-2">
              Our solution help you derive maximum value from your ecosystem
              data.
            </h1>
            <p className="text-paragraph_heading font-light text-popover font-paragraph max-w-2xl ">
              We help your value discovery of data by handling the entire
              journey of raw data to insights and foresights using next-gen
              digital technologies.
            </p>
            <a
              href="/our-solutions#our-solutions"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-3xl bg-gradient-to-tl from-primary to-secondary font-normal !text-foreground font-paragraph text-subtitle_heading px-8 py-3 mt-4"
              )}
            >
              View Our Solutions
            </a>
          </div>
        </div>
        <VideoBackground
          className="absolute left-0 top-0 w-full h-full z-0"
          videoSrc="https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JocIpyy7viChW1Q34Jaq0rPl9vMtyISbNZBg8x"
        />
      </section>
      <SolutionDropDown />
      <section className="w-screen min-h-screen flex py-5 items-center justify-center relative bg-[#384D89] rounded-xl rounded-b-none">
        <div className="container flex flex-col gap-5 md:gap-10 items-start justify-center">
          <h2 className="text-tertiary_heading font-heading text-foreground leading-tight max-w-2xl font-semibold">
            Scalable, Secured and quality driven solutions
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {solutionImpactData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-start gap-4 p-5 bg-foreground rounded-lg"
              >
                <span className="font-heading font-normal text-primary_heading leading-tight">{`0${
                  i + 1
                }`}</span>
                <p className="font-paragraph font-light text-subtitle_heading leading-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
