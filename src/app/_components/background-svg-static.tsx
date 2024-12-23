"use client";
import dynamic from "next/dynamic";

import { FC } from "react";

interface BackgroundSvgStaticProps {}

const BackgroundSVG = dynamic(
  () => import("@/app/_components/background-svg"),
  { ssr: false }
);

const BackgroundSvgStatic: FC<BackgroundSvgStaticProps> = ({}) => {
  return <BackgroundSVG />;
};

export default BackgroundSvgStatic;
