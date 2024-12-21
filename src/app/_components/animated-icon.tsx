"use client";

import { FC } from "react";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  icon: any;
  className?: string;
}

const AnimatedIcon: FC<AnimatedIconProps> = ({ icon, className }) => {
  return (
    <Lottie
      className={cn("bg-transparent", className)}
      animationData={icon}
      loop={true}
    />
  );
};

export default AnimatedIcon;
