import StickyHeroSection from "@/app/_components/sticky-hero-section"
import { endToEndData } from "@/config/marketing"
import EndToEndServices from "@/app/_components/end-to-end-services"
import ResourcesCard from "@/app/_components/resources-card"
import CarouselStickyContainer from "@/app/_components/carousel-sticky-container"
import { cn } from "@/lib/utils"
import AnimatedIcon from "@/app/_components/animated-icon"

const artData = [
  "Search",
  "Store",
  "Compile and Consolidate",
  "Validate and Reconcile",
  "Analyse and Predice",
  "Upload and Update",
]

export default function Home() {
  return (
    <>
      <CarouselStickyContainer />
      <section className="w-screen flex flex-col items-center justify-center bg-background py-16 md:py-24 relative ">
        <div className="container flex flex-col items-start">
          <h2 className="max-w-3xl font-normal leading-tight text-left text-primary font-heading text-secondary_heading mb-6 md:mb-12">
            Using cutting edge digital technologies for state-of-the-art
            solutions and services to
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full py-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex relative items-center justify-center w-full  min-h-[260px]"
              >
                <div
                  key={i}
                  className="min-w-[140px] rounded-full border border-primary min-h-[140px]"
                ></div>
                <span
                  className={cn(
                    "text-subtitle_heading text-center font-paragraph font-bold text-primary absolute left-1/2 -translate-x-1/2",
                    i % 2 === 0 ? "top-[5px]" : "bottom-[5px]"
                  )}
                >
                  {artData[i]}
                </span>
              </div>
            ))}
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
              <div className="min-w-[300px]" />
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
              <div className="min-w-[300px]" />
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
              <div className="min-w-[300px]" />
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
              <div className="min-w-[300px]" />
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
          </div>
        </div>
      </section>
      <EndToEndServices endToEndData={endToEndData} />
      <ResourcesCard />
    </>
  )
}
