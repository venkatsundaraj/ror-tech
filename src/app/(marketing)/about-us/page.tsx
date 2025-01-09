import { FC } from "react";
import { ExpertiseSection } from "../../_components/expertise-section";
import { WhyChooseUs } from "../../_components/why-choose-us";
import StickySlider from "../../_components/StickySlider";
import { DataValueSection } from "../../_components/data-value-section";
import WavePattern from "../../_components/wave-pattern";

interface pageProps {}
const expertiseItems = [
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
    title: "Digital Transformation",
    description:
      "Transform your business with our comprehensive digital solutions. We help organizations embrace digital technologies to improve efficiency, enhance customer experience, and drive innovation across all business functions.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Cloud Services",
    description:
      "Leverage the power of cloud computing with our expert cloud services. We provide end-to-end cloud solutions including migration, optimization, and managed services to help you achieve scalability and flexibility.",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <section className="relative min-h-screen bg-[#4A0D4A] flex flex-col items-center justify-center overflow-hidden mt-[102px]">
        {/* Static Network Pattern */}
        {/* <div
          className="absolute inset-0 w-full h-full opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='%2350FFFF'/%3E%3Cstop offset='1' stop-color='%2350FFFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 30 Q 40 20, 50 30 T 90 40 M20 50 Q 40 40, 60 50 T 80 60 M30 70 Q 50 60, 70 70 T 90 80' stroke='url(%23a)' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        /> */}

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block  p-8 mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              We are Data
              <br />
              Management Experts.
            </h1>
          </div>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
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
