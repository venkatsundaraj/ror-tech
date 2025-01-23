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
      <section className="w-screen min-h-screen flex py-5 items-center justify-center relative bg-black/10 before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:left-0 before:bg-foreground/10 before:z-10">
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
          videoSrc="https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoVMyma3Z3rS4qt7Wg80DQnNCd2ihuvs9b6BLy"
        />
      </section>
      <SolutionDropDown />
    </>
  );
};

export default page;
