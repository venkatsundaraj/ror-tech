import SolutionDropDown from "@/app/_components/solutions-dropdown";
import { buttonVariants } from "@/app/_components/ui/button";
import VideoBackground from "@/app/_components/video-background";
import { solutionImpactData } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Footer from "@/app/_components/footer";

import Link from "next/link";

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
              Our solutions help you derive maximum value from your ecosystem
              data.
            </h1>
            <p className="text-paragraph_heading font-light text-popover font-paragraph max-w-2xl hidden">
              We help your value discovery of data by handling the entire
              journey of raw data to insights and foresights using next-gen
              digital technologies.
            </p>
            <a
              href="/our-solutions#our-solutions"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-3xl bg-gradient-to-tl from-primary to-secondary font-normal !text-foreground font-paragraph text-subtitle_heading px-8 py-3 mt-4 transition-all duration-300 hover:bg-gradient-to-br"
              )}
            >
              View Our Solutions
            </a>
          </div>
        </div>
        <VideoBackground
          className="absolute left-0 top-0 w-full h-full z-0"
          videoSrc="https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOo0UkQaAN2xy7u8gkcnHmWrtVoJiaswfYqBK"
        />
      </section>
      <SolutionDropDown />
      <Footer>
        <div className="container flex items-start justify-start flex-col z-[2]">
          <div className="flex items-start justify-between gap-4 flex-col  py-8">
            <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-2xl mb-6">
              Learn More about the end-to-end services we offer for efficient
              data management.
            </h4>
            <span className="text-extra_subtitle_heading font-paragraph font-normal text-foreground max-w-xl hidden">
              At ROR Technologies, part of Ducont Systems, we are global leaders
              in digital transformation, specializing in turning your data into
              a game-changing asset. Our expertise helps organizations adapt,
              thrive, and lead in an ever-evolving market—maximizing business
              value with every move.
            </span>
            <span className="text-paragraph_heading font-paragraph font-normal text-foreground max-w-2xl hidden">
              Contact us today to learn more about our services and how we can
              support your digital finance journey.
            </span>
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-background text-secondary font-semibold rounded-3xl hover:bg-background/80 hover:text-secondary"
              )}
              href={"/our-services"}
            >
              Our Services
            </Link>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default page;
