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
        <Icons.Brain className="w-20 h-20" />
      </div>
      <h3 className="text-tertiary_heading font-heading font-normal mb-4 text-popover">
        {item.title}
      </h3>
      <p className="text-extra_subtitle_heading font-paragraph leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
