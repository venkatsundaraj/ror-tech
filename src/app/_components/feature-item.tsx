import { Users } from "lucide-react";

interface FeatureItemProps {
  title: string;
  description: string;
  className?: string;
}

export function FeatureItem({
  title,
  description,
  className = "",
}: FeatureItemProps) {
  return (
    <div
      className={`flex flex-col items-start p-6 ${className} bg-foreground/20 backdrop-blur-sm`}
    >
      <div className="mb-4">
        <Users className="w-12 h-12 text-secondary" />
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
