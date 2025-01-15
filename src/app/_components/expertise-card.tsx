import Image from "next/image";
import { ExpertiseSectionProps } from "@/types";
import { Icons } from "./icons";

interface ExpertiseCardProps {
  item: ExpertiseSectionProps;
}

export function ExpertiseCard({ item }: ExpertiseCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg h-full">
      <div className="relative mb-6">
        <Image
          src={item.image}
          alt={item.title}
          width={280}
          height={180}
          className="w-32"
        />
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
