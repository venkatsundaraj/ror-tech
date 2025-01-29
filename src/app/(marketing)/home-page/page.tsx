import StickyHeroSection from "@/app/_components/sticky-hero-section";
import { endToEndData, transformationSolution } from "@/config/marketing";
import type { Variants } from "motion/react";
import EndToEndServices from "@/app/_components/end-to-end-services";
import EndToEndCarousel from "@/app/_components/end-to-end-carousel";
import ResourcesCard from "@/app/_components/resources-card";
import CarouselStickyContainer from "@/app/_components/carousel-sticky-container";
import { cn } from "@/lib/utils";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import { Icons } from "@/app/_components/icons";

import { artData } from "@/config/marketing";
import StickyScaleContainer from "@/app/_components/sticky-scale-container";
import { FC } from "react";
import AnimatedIcon from "@/app/_components/animated-icon";
import Icon1 from "@/config/animated-svg/datajumpbox.json";
import Icon2 from "@/config/animated-svg/datamulticube.json";
import ExperienceAndEngage from "@/config/animated-svg/datamultilogo1.json";
import AutomateAndOptimise from "@/config/animated-svg/datarob-2.json";
import AnalyzeAndPredict from "@/config/animated-svg/databrianwire2.json";
import ScaleAndSecure from "@/config/animated-svg/datapiechart10.json";
import Icon3 from "@/config/animated-svg/datatri1.json";
import Icon4 from "@/config/animated-svg/databox-2.json";
import StickyScaleContainerDuplicateTwo from "@/app/_components/sticky-scroll-container-duplicate-two";
import Icon5 from "@/config/animated-svg/datalinebox1.json";
import Icon6 from "@/config/animated-svg/dataheight1.json";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/app/_components/footer";
import { buttonVariants } from "@/app/_components/ui/button";

import BackgroundSvgStatic from "@/app/_components/background-svg-static";
import HorizontalSection from "@/app/_components/horizontal-section";
import StickyScaleContainerDuplicate from "@/app/_components/sticky-scale-container-duplicate";
import HorizontalSectionDuplicate from "@/app/_components/horizontal-section-duplicate";
import EndToEndCarouselDuplicate from "@/app/_components/end-to-end-carousel-duplicate";
import ResourcesCardDuplicate from "@/app/_components/resource-card-duplicate";
import { db } from "@/server/db";
import { caseStudiesTable } from "@/server/db/schema";
import SvgTabAnimation from "@/app/_components/svg-tab-animation";
import StickyScaleContainerDuplicateThree from "@/app/_components/sticky-scroll-container-three";

const iconArray = [Icon3, Icon4, Icon2, Icon6, Icon1, Icon5];

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const revalidate = 0; // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(caseStudiesTable);
  return data;
}

interface pageProps {}
const page = async function ({}: pageProps) {
  const data = await getData();

  return (
    <>
      <ScrollToHash />
      <BackgroundSvgStatic />
      <StickyScaleContainerDuplicateThree />
      <SvgTabAnimation />
      <HorizontalSectionDuplicate />
      <EndToEndCarouselDuplicate endToEndData={endToEndData} />
      <ResourcesCardDuplicate caseStudy={data} />
      <Footer>
        <div className="container flex items-start justify-start flex-col z-[2]">
          <div className="flex items-start justify-between gap-4 flex-col  py-8">
            <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-2xl ">
              Driving Digital Transformation
            </h4>
            <span className="text-extra_subtitle_heading font-paragraph font-normal text-foreground max-w-xl">
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
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-background text-secondary font-semibold rounded-3xl hover:bg-background/80 hover:text-secondary"
              )}
              href={"/about-us"}
            >
              About Us
            </Link>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default page;
