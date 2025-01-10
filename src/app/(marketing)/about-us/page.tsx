import { FC } from "react";
import { ExpertiseSection } from "../../_components/expertise-section";
import { WhyChooseUs } from "../../_components/why-choose-us";
import StickySlider from "../../_components/StickySlider";
import { DataValueSection } from "../../_components/data-value-section";
import WavePattern from "../../_components/wave-pattern";
import { ExpertiseSectionProps } from "@/types";

interface pageProps {}
const expertiseItems: ExpertiseSectionProps[] = [
  {
    title: "Digital and AI Solutions",
    description:
      "We offer a comprehensive suite of digital solutions designed to streamline processes, enhance transparency, and ensure compliance. Our solutions cover everything both at the strategic and operational level. Our team of experts works closely with your CXOs, business and IT teams to transform your operations, leveraging latest technologies such as RPA, Intelligent Document Processing, Computer Vision, Natural Language Processing, Gen AI, Machine and Deep learning, Business Intelligence, Digital Experience Management etc.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Cost Optimization",
    description:
      "We understand the importance of cost management in today's competitive landscape. Our solutions are designed to help organizations reduce operational costs without compromising on quality. By automating repetitive tasks and optimizing resource allocation and providing managed services (Automation, Analytics, Infosec and Testing – As -A -Service), we enable your business teams to focus on strategic initiatives that drive growth.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Efficiency and Speed",
    description:
      "Time is the essence of this world. Our digital transform services ensure that your operations are not also efficient but also fast. We help organisation implement real time reporting, accelerate closing process, and enhance overall agility.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Compliance and Risk Management",
    description:
      "In an era of increasing regulatory scrutiny, we provide robust compliance and risk management solutions. Our services help organizations stay ahead of regulatory changes, mitigate risks, and ensure that you operations are secure and compliant.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Engagement and Experience",
    description:
      "Irrespective of the industry or function; stakeholder delight is the mantra. Organizations are striving to ensure they provide best of the engagement experience to their internal and external stakeholders. We in ROR technologies help you with the best of Digital Experience Solutions.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Scale and Security",
    description:
      "Considering data being the lifeline for your business, you need to protect them from cyber-attack, malware, insider risks, unintentional exposure, phising, ransomeware etc. We help you with end to end data and information services right from advisory to implementation to managing your data security.",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <section className="relative min-h-screen bg-[#4A0D4A] flex flex-col items-center justify-center overflow-hidden mt-[102px]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block  p-2 mb-3">
            <h1 className="font-semibold leading-tight text-foreground font-heading text-secondary_heading max-w-prose">
              We are Data Management Experts Helping Organisations Achieve
              Digital Transformation
            </h1>
          </div>
          <p className="text-foreground text-subtitle_heading mx-auto font-paragraph leading-relaxed font-normal max-w-prose">
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
      {/* <StickySlider /> */}
    </div>
  );
};

export default page;
