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
    <div className={`flex flex-col items-start p-6 ${className}`}>
      <div className="mb-4">
        <Users className="w-12 h-12 text-purple-700" />
      </div>
      <h3 className="text-xl font-semibold text-[#2D2F6A] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
