import Image from "next/image";
import { ExpertiseItem } from "../types/expertise";

interface ExpertiseCardProps {
  item: ExpertiseItem;
}

export function ExpertiseCard({ item }: ExpertiseCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg h-full">
      <div className="relative w-24 h-24 mb-6">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        {item.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  );
}
