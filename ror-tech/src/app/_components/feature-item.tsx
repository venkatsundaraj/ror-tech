import { whyChooseUsImageData } from "@/config/marketing";
import { Users } from "lucide-react";
import Image from "next/image";
import { Icon, Icons } from "@/app/_components/icons";

interface FeatureItemProps {
  title: string;
  description: string;
  className?: string;
  icon: Icon;
  value: number;
}

export function FeatureItem({
  title,
  description,
  className = "",
  icon,
}: FeatureItemProps) {
  const IconComponent = Icons[icon];
  return (
    <div
      className={`flex flex-col items-start p-6 ${className} bg-foreground/20 backdrop-blur-sm`}
    >
      <div className="mb-4">
        <IconComponent size={32} className="text-primary" />
      </div>
      <h3 className="text-tertiary_heading font-heading text-popover mb-3">
        {title}
      </h3>
      <p className="text-popover font-paragraph text-subtitle_heading font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
