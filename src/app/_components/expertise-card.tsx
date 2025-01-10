import Image from "next/image";
import { ExpertiseSectionProps } from "@/types";
import { Icons } from "./icons";

interface ExpertiseCardProps {
  item: ExpertiseSectionProps;
}

export function ExpertiseCard({ item }: ExpertiseCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg h-full">
      <div className="relative w-24 h-24 mb-6">
        <Icons.LaptopMinimalCheck className="w-20 h-20 stroke-secondary" />
      </div>
      <h3 className="text-tertiary_heading font-heading mb-4 text-popover">
        {item.title}
      </h3>
      <p className="text-extra_subtitle_heading font-paragraph font-light leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
