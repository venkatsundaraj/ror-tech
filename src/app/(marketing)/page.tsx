import StickyHeroSection from "@/app/_components/sticky-hero-section";
import { endToEndData } from "@/config/marketing";
import EndToEndServices from "@/app/_components/end-to-end-services";
import ResourcesCard from "@/app/_components/resources-card";
import CarouselStickyContainer from "@/app/_components/carousel-sticky-container";

export default function Home() {
  return (
    <>
      {/* <StickyHeroSection /> */}
      <CarouselStickyContainer />
      <EndToEndServices endToEndData={endToEndData} />
      <ResourcesCard />
    </>
  );
}
