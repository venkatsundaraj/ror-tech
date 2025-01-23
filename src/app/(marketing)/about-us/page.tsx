import { FC } from "react";
import { ExpertiseSection } from "@/app/_components/expertise-section";
import { WhyChooseUs } from "@/app/_components/why-choose-us";
import StickySlider from "@/app/_components/StickySlider";
import { DataValueSection } from "@/app/_components/data-value-section";
import Footer from "@/app/_components/footer";
import { buttonVariants } from "@/app/_components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import WavePattern from "@/app/_components/wave-pattern";
import { ExpertiseSectionProps } from "@/types";
import BackgroundSvgStatic from "@/app/_components/background-svg-static";

interface pageProps {}
const expertiseItems: ExpertiseSectionProps[] = [
  {
    title: "Digital and AI Solutions",
    description:
      "We offer a comprehensive suite of digital solutions designed to streamline processes, enhance transparency, and ensure compliance. Our solutions cover everything both at the strategic and operational level. Our team of experts works closely with your CXOs, business and IT teams to transform your operations, leveraging latest technologies such as RPA, Intelligent Document Processing, Computer Vision, Natural Language Processing, Gen AI, Machine and Deep learning, Business Intelligence, Digital Experience Management etc.",
    image: "/images/digital-and-ai-solutions.svg",
  },
  {
    title: "Cost Optimization",
    description:
      "We understand the importance of cost management in today's competitive landscape. Our solutions are designed to help organizations reduce operational costs without compromising on quality. By automating repetitive tasks and optimizing resource allocation and providing managed services (Automation, Analytics, Infosec and Testing – As -A -Service), we enable your business teams to focus on strategic initiatives that drive growth.",
    image: "/images/cost-optimisation.svg",
  },
  {
    title: "Efficiency and Speed",
    description:
      "Time is the essence of this world. Our digital transform services ensure that your operations are not also efficient but also fast. We help organisation implement real time reporting, accelerate closing process, and enhance overall agility.",
    image: "/images/efficiency-and-speed.svg",
  },
  {
    title: "Compliance and Risk Management",
    description:
      "In an era of increasing regulatory scrutiny, we provide robust compliance and risk management solutions. Our services help organizations stay ahead of regulatory changes, mitigate risks, and ensure that you operations are secure and compliant.",
    image: "/images/compliance-and-risk-management.svg",
  },
  {
    title: "Engagement and Experience",
    description:
      "Irrespective of the industry or function; stakeholder delight is the mantra. Organizations are striving to ensure they provide best of the engagement experience to their internal and external stakeholders. We in ROR technologies help you with the best of Digital Experience Solutions.",
    image: "/images/engagement-and-experience.svg",
  },
  {
    title: "Scale and Security",
    description:
      "Considering data being the lifeline for your business, you need to protect them from cyber-attack, malware, insider risks, unintentional exposure, phising, ransomeware etc. We help you with end to end data and information services right from advisory to implementation to managing your data security.",
    image: "/images/scale-and-security.svg",
  },
];

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <BackgroundSvgStatic />
      <section className="relative min-h-screen bg-[#4A0D4A] flex flex-col items-center justify-center overflow-hidden mt-[102px]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block  p-2 mb-3">
            <h1 className="font-semibold leading-tight text-foreground font-heading text-secondary_heading max-w-prose">
              We are Data Management Experts Helping Organisations Achieve
              Digital Transformation
            </h1>
          </div>
          <p className="text-foreground text-subtitle_heading mx-auto font-paragraph font-extralight leading-relaxed max-w-prose">
            ROR Technologies, part of Ducont systems, is a premier global
            provider of Digital Transformation solutions and services, with a
            distinct emphasis on harnessing your data for you to derive maximum
            business value— to adapt, thrive and lead in the market.
          </p>
        </div>
        <WavePattern />
      </section>
      <DataValueSection />
      <ExpertiseSection items={expertiseItems} />
      <WhyChooseUs />
      <Footer>
        <div className="container flex items-start justify-start flex-col z-[2]">
          <div className="flex items-start justify-between gap-4 flex-col  py-8">
            <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-2xl mb-6">
              Make most of your organizational data with ROR Technologies.
            </h4>
            <span className="text-extra_subtitle_heading font-paragraph font-normal text-foreground max-w-xl">
              Join the ranks of leading organizations that have transformed
              their operations with ROR technologies. Let us help you stay ahead
              in the digital age.
            </span>
            <span className="text-paragraph_heading font-paragraph font-normal text-foreground max-w-2xl">
              Contact us today to learn more about our services and how we can
              support your digital finance journey.
            </span>
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-background text-secondary font-semibold rounded-3xl hover:bg-background/80 hover:text-secondary hidden"
              )}
              href={"/about-us"}
            >
              About Us
            </Link>
          </div>
        </div>
      </Footer>
      {/* <StickySlider /> */}
    </>
  );
};

export default page;
