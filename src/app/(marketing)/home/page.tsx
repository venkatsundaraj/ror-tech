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
import AnimatedIcon from "@/app/_components/animated-icon";
import Icon1 from "@/config/animated-svg/datajumpbox.json";
import Icon2 from "@/config/animated-svg/datamulticube.json";
import ExperienceAndEngage from "@/config/animated-svg/datamultilogo1.json";
import AutomateAndOptimise from "@/config/animated-svg/datarob-2.json";
import AnalyzeAndPredict from "@/config/animated-svg/databrianwire2.json";
import ScaleAndSecure from "@/config/animated-svg/datapiechart10.json";
import Icon3 from "@/config/animated-svg/datatri1.json";
import Icon4 from "@/config/animated-svg/databox-2.json";
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

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <BackgroundSvgStatic />
      <StickyScaleContainerDuplicate />
      <section
        id="our-solution"
        className="w-screen hidden min-h-screen flex-col items-center justify-end  bg-transparent py-16 md:py-16 relative"
      >
        <div className="absolute top-0 left-0 pointer-events-none h-full w-full max-w-full  overflow-hidden z-10 min-w-[200px]">
          <div className="w-full h-full md:h-screen overflow-hidden">
            <div className="pointer-events-none">
              <iframe
                src="https://player.vimeo.com/video/985697257?loop=true&amp;autoplay=true&amp;muted=false&amp;gesture=media&amp;playsinline=true&amp;h=2e363519db&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=false&amp;customControls=true"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
                title="Player for KOMIS_Website_video_v2"
                className="absolute top-[-100%] left-[-100%] md:left-auto h-[300%] w-[400%] md:w-[100%] max-w-none md:max-w-[100%]"
                data-ready="true"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="container z-10 ">
          <h2 className="text-primary_heading font-paragraph leading-tight font-bold text-foreground">
            Empowering
            <br /> Positive Change
          </h2>
        </div>
      </section>
      <HorizontalSectionDuplicate />
      <section
        id="our-solution"
        className="w-screen hidden min-h-screen flex-col items-center justify-center bg-transparent py-16 md:py-24 relative"
      >
        {/* <BackgroundSVG /> */}
        <div className="container flex flex-col items-start justify-start">
          <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading mb-6 md:mb-32 z-10">
            Using cutting-edge technologies to build state-of-the-art{" "}
            <br className="hidden md:flex" /> solutions and services to manage
            data
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-14 md:gap-12 w-full py-6 relative ">
            {/* <AnimatedPath /> */}
            {/* Looping the icons */}
            {Array.from(artData).map((item, i) => {
              const Icon = Icons[item.icon];
              return (
                <div
                  key={i}
                  className="flex relative items-center justify-center w-full min-h-[200px] md:min-h-[260px]"
                >
                  <div className="p-8 rounded-full border border-primary  flex items-center justify-center">
                    <AnimatedIcon
                      icon={iconArray[i]}
                      className="min-w-[80px] md:min-w-[120px]"
                    />
                  </div>
                  <div
                    className={cn(
                      "w-full h-[100px] flex items-center justify-center  absolute",
                      i % 2 === 0
                        ? "bottom-[-74px] md:bottom-[-70px]"
                        : "bottom-[-74px] md:bottom-[-70px]"
                    )}
                  >
                    <span
                      className={cn(
                        "text-subtitle_heading text-center font-paragraph font-bold text-primary absolute leading-tight left-1/2 -translate-x-1/2 max-w-lg"
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <EndToEndPaths /> */}
        </div>
      </section>

      <section className="w-screen hidden flex-col items-center justify-center bg-transparent py-16 md:py-24 relative ">
        <div className="container flex flex-col items-start">
          <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading mb-6 md:mb-12">
            Transformational Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center group justify-between w-full flex-wrap gap-4 md:flex-nowrap py-16 md:py-16 shadow-lg backdrop-blur bg-[#263C7B] p-4 md:p-8 rounded-md">
              <div className=" flex items-center justify-center">
                <AnimatedIcon
                  icon={ExperienceAndEngage}
                  className="max-w-[300px] md:max-w-[600px]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  Experience and Engage
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                  Digital solutions that help you to engage with your
                  stakeholders better and provide superior experiences.
                </span>
                <Link
                  href={"#experience-and-engage"}
                  className="opacity-0 group-hover:opacity-100 text-foreground underline"
                >
                  Read About Our Technologies
                </Link>
                <span className="text-extra_paragraph_heading hidden font-paragraph font-normal text-foreground">
                  SmartCafe: Virtual Employee Hangout Place | Marketplaces |
                  Portals | Mobile App Development | ChatBots | Low Code | GenAI
                </span>
              </div>
            </div>
            <div className="flex group items-center justify-between w-full flex-wrap gap-4 md:flex-nowrap py-16 md:py-16 shadow-lg backdrop-blur bg-[#322A5E] p-4 md:p-8 rounded-md">
              <div className=" flex items-center justify-center">
                <AnimatedIcon
                  icon={AutomateAndOptimise}
                  className="max-w-[300px] md:max-w-[600px]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  Automate and Optimize
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                  AI solutions that help you to automate your processes and
                  optimize your efforts and cost
                </span>
                <Link
                  href={"#automate-and-optimize"}
                  className="opacity-0 group-hover:opacity-100 text-foreground underline"
                >
                  Read About Our Technologies
                </Link>
                <span className="text-extra_paragraph_heading hidden font-paragraph font-normal text-foreground">
                  Insurance Claims Settlement Platform | Automation Hub:
                  Automation Command and Control center | RPA | Intelligent
                  Document Processing | Process Mining | Communications Mining |
                  Automated Testing
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full flex-wrap gap-4 md:flex-nowrap py-16 md:py-16 shadow-lg backdrop-blur bg-[#84357B] p-4 md:p-8 rounded-md">
              <div className=" flex items-center justify-center">
                <AnimatedIcon
                  icon={AnalyzeAndPredict}
                  className="max-w-[300px] md:max-w-[600px]"
                />
              </div>
              <div className="flex flex-col group items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  Analyse and predict
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                  Cognitive solutions that help you look at the past and
                  visualize the future
                </span>
                <Link
                  href={"#analyse-and-predict"}
                  className="opacity-0 group-hover:opacity-100 text-foreground underline"
                >
                  Read About Our Technologies
                </Link>
                <span className="text-extra_paragraph_heading hidden font-paragraph font-normal text-foreground">
                  SmartLytics HR: Pre-packaged HR Analytics | Professional
                  Services Analytics | CFO Cockpit Data | Engineering Data
                  Science | Data Visualization | Enterprise Performance
                  Management
                </span>
              </div>
            </div>
            <div className="flex items-center group justify-between w-full flex-wrap gap-4 md:flex-nowrap py-16 md:py-16 shadow-lg backdrop-blur bg-[#4A4A48] p-4 md:p-8 rounded-md">
              <div className=" flex items-center justify-center">
                <AnimatedIcon
                  icon={ScaleAndSecure}
                  className="max-w-[300px] md:max-w-[600px]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  Scale , Secure and Test
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                  Solutions that help you scale your infrastructure and secure
                  them at every level
                </span>
                <Link
                  href={"#scale-secure-and-test"}
                  className="opacity-0 group-hover:opacity-100 text-foreground underline"
                >
                  Read About Our Technologies
                </Link>
                <span className="text-extra_paragraph_heading hidden font-paragraph font-normal text-foreground">
                  Guardian | DevSecOps | Cloud Engineering | Platform | Platform
                  Engineering | Cloud Engineering | DevSecOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen hidden items-center justify-center bg-transparent py-16 md:py-24 relative">
        <div className="container flex flex-col items-center">
          <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading mb-6 md:mb-12">
            Using Next Generation Digital Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {transformationSolution.length
              ? transformationSolution.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center flex-col justify-start gap-4 "
                  >
                    <div
                      id={`${item.id}`}
                      key={i}
                      className="flex rounded-lg flex-col items-start justify-start gap-0 bg-[#384D89] py-6 px-6 md:px-8 min-h-[280px] md:min-h-[680px] w-full"
                    >
                      <h4 className="text-tertiary_heading flex  mb-6 max-w-[230px] py-2 leading-tight font-heading font-normal text-foreground border-b border-b-foreground">
                        {item.title}
                      </h4>
                      <ul className="flex flex-col items-start justify-between w-full">
                        {item.items.map((listItem, i) => (
                          <li
                            className="text-foreground text-paragraph_heading font-heading last:border-0 py-4 border-b border-foreground w-full"
                            key={i}
                          >
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 flex items-center justify-center bg-foreground border rounded-lg border-primary min-h-[160px]">
                      <p className="font-paragraph text-center text-paragraph_heading text-primary">
                        {item.stackData}
                      </p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
      <EndToEndCarouselDuplicate endToEndData={endToEndData} />
      <ResourcesCardDuplicate />
      <Footer>
        <div className="container flex items-start justify-start flex-col z-[2]">
          <div className="flex items-start justify-between gap-4 flex-col  py-8">
            <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-2xl mb-6">
              Driving Digital Transformation Through Data
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
                buttonVariants({ variant: "default" }),
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
}
