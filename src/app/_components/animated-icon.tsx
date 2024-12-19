"use client";

import { FC } from "react";
import Lottie from "lottie-react";
import icon from "@/config/animated-svg/datajumpbox.json";

interface AnimatedIconProps {}

const AnimatedIcon: FC<AnimatedIconProps> = ({}) => {
  return <Lottie animationData={icon} loop={true} />;
};

export default AnimatedIcon;
