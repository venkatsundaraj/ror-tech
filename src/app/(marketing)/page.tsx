import StickyHeroSection from "@/app/_components/sticky-hero-section";
import { endToEndData } from "@/config/marketing";
import EndToEndServices from "@/app/_components/end-to-end-services";
import ResourcesCard from "@/app/_components/resources-card";
import CarouselStickyContainer from "@/app/_components/carousel-sticky-container";
import { cn } from "@/lib/utils";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import { Icons } from "@/app/_components/icons";

import { artData } from "@/config/marketing";

export default function Home() {
  return (
    <>
      <CarouselStickyContainer />
      <ScrollToHash />
      <section
        id="our-solution"
        className="w-screen flex flex-col items-center justify-center bg-background py-16 md:py-24 relative "
      >
        <div className="container flex flex-col items-start">
          <h2 className="max-w-3xl font-normal leading-tight text-left text-primary font-heading text-secondary_heading mb-6 md:mb-12">
            Using cutting-edge technologies to build state-of-the-art solutions
            and services to
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full py-6">
            {Array.from(artData).map((item, i) => {
              const Icon = Icons[item.icon];
              return (
                <div className="flex relative items-center justify-center w-full  min-h-[260px]">
                  <div
                    key={i}
                    className="min-w-[140px] rounded-full border border-primary min-h-[140px] flex items-center justify-center"
                  >
                    <Icon className="w-16 h-16 stroke-secondary" />
                  </div>
                  <span
                    className={cn(
                      "text-subtitle_heading text-center font-paragraph font-bold text-primary absolute left-1/2 -translate-x-1/2",
                      i % 2 === 0 ? "top-[5px]" : "bottom-[5px]"
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-screen flex flex-col items-center justify-center bg-background py-16 md:py-24 relative bg-gradient-to-r from-primary to-secondary">
        <div className="container flex flex-col items-start">
          <h2 className="max-w-xl font-normal leading-tight text-left text-foreground font-heading text-secondary_heading mb-6 md:mb-12">
            Transformational Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between w-full flex-wrap md:flex-nowrap min-h-[400px] shadow-lg backdrop-blur bg-foreground/5 p-4 md:p-8 rounded-md">
              <div className="min-w-[300px] flex items-center justify-center">
                <Icons.Brain className="w-48 h-48 stroke-background" />
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  Experience and Engage
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                  Digital solutions that help you to engage with your
                  stakeholders better and provide superior experiences.
                </span>
                <span className="text-extra_paragraph_heading font-paragraph font-normal text-foreground">
                  SmartCafe: Virtual Employee Hangout Place | Marketplaces |
                  Portals | Mobile App Development | ChatBots | Low Code | GenAI
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full flex-wrap md:flex-nowrap min-h-[400px] shadow-lg backdrop-blur bg-foreground/5 p-4 md:p-8 rounded-md">
              <div className="min-w-[300px] flex items-center justify-center">
                <Icons.MonitorCog className="w-48 h-48 stroke-background" />
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  Automate and Optimize
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                  AI solutions that help you to automate your processes and
                  optimize your efforts and cost
                </span>
                <span className="text-extra_paragraph_heading font-paragraph font-normal text-foreground">
                  Insurance Claims Settlement Platform | Automation Hub:
                  Automation Command and Control center | RPA | Intelligent
                  Document Processing | Process Mining | Communications Mining |
                  Automated Testing
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full flex-wrap md:flex-nowrap min-h-[400px] shadow-lg backdrop-blur bg-foreground/5 p-4 md:p-8 rounded-md">
              <div className="min-w-[300px] flex items-center justify-center">
                <Icons.ChartPie className="w-48 h-48 stroke-background" />
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  Analyse and predict
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                  Cognitive solutions that help you look at the past and
                  visualize the future
                </span>
                <span className="text-extra_paragraph_heading font-paragraph font-normal text-foreground">
                  SmartLytics HR: Pre-packaged HR Analytics | Professional
                  Services Analytics | CFO Cockpit Data | Engineering Data
                  Science | Data Visualization | Enterprise Performance
                  Management
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full flex-wrap md:flex-nowrap min-h-[400px] shadow-lg backdrop-blur bg-foreground/5 p-4 md:p-8 rounded-md">
              <div className="min-w-[300px] flex items-center justify-center">
                <Icons.Scale className="w-48 h-48 stroke-background" />
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  Scale , Secure and test
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground">
                  Solutions that help you scale your infrastructure and secure
                  them at every level
                </span>
                <span className="text-extra_paragraph_heading font-paragraph font-normal text-foreground">
                  Guardian | DevSecOps | Cloud Engineering | Platform | Platform
                  Engineering | Cloud Engineering | DevSecOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EndToEndServices endToEndData={endToEndData} />
      <ResourcesCard />
    </>
  );
}
