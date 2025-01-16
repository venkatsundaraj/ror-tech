"use client";

import React, { FC, useEffect, useState, useCallback, useRef } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { tailSectionData } from "@/config/marketing";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/_components/ui/carousel";
import { tileContent } from "@/config/marketing";

interface TileTextSectionProps {
  className?: string;
}

const TileTextSection: FC<TileTextSectionProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [api, setApi] = React.useState<any>();

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        active: true,
        direction: "ltr",
        skipSnaps: false,
        duration: 100,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true,
        }),
      ]}
      orientation="vertical"
      className={cn(
        "w-full flex items-center justify-start relative ",
        className
      )}
    >
      <CarouselContent className="-mt-1 h-[80px] md:h-[80px]">
        {tileContent.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex items-start  justify-start w-full"
          >
            <div className="p-1">
              <span className="text-[30px] font-heading md:text-[34px] bg-secondary p-2 text-foreground">
                {item}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TileTextSection;
