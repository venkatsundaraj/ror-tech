import StickyHeroSection from "@/app/_components/sticky-hero-section";
import { endToEndData, transformationSolution } from "@/config/marketing";

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

import BackgroundSvgStatic from "@/app/_components/background-svg-static";

const iconArray = [Icon3, Icon4, Icon2, Icon6, Icon1, Icon5];

export default function Home() {
  return (
    <>
      <StickyScaleContainer />
      <ScrollToHash />
      <BackgroundSvgStatic />
      <section
        id="our-solution"
        className="w-screen flex min-h-screen flex-col items-center justify-center bg-transparent py-16 md:py-24 relative"
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
      <section className="w-screen flex flex-col items-center justify-center bg-transparent py-16 md:py-24 relative ">
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
      <section className="w-screen flex-col items-center justify-center bg-transparent py-16 md:py-24 relative">
        <div className="container flex flex-col items-center">
          <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading mb-6 md:mb-12">
            Using Next Generation Digital Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {transformationSolution.length
              ? transformationSolution.map((item, i) => (
                  <div className="flex items-center flex-col justify-start gap-4 ">
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
      <EndToEndCarousel endToEndData={endToEndData} />
      <ResourcesCard />
    </>
  );
}
