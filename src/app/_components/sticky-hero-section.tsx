import { FC } from "react";

interface StickyHeroSectionProps {}

const StickyHeroSection: FC<StickyHeroSectionProps> = ({}) => {
  return (
    <section className="w-l h-dvh overflow-x-hidden flex items-start justify-center">
      <div className="bg-primary w-full min-h-[70%] max-h-[50vh] py-5 md:py-16 flex flex-col items-start justify-between"></div>
    </section>
  );
};

export default StickyHeroSection;
