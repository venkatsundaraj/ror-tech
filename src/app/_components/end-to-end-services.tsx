"use client";

import { FC } from "react";
import React, { useRef } from "react";
import Image from "next/image";

import Link from "next/link";
import { EndToEndData } from "@/types";
interface EndToEndServicesProps {
  endToEndData: EndToEndData;
}

const EndToEndServices: FC<EndToEndServicesProps> = ({ endToEndData }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - scrollContainerRef.current!.offsetLeft;
    scrollLeft = scrollContainerRef.current!.scrollLeft;
    scrollContainerRef.current!.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollContainerRef.current!.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollContainerRef.current!.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 1; // scroll-fastness
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };
  return (
    <section
      id="our-terrain"
      className="w-screen flex flex-col items-center justify-center bg-background py-16 md:py-24 relative"
    >
      <div className="container flex items-start">
        <h2 className="max-w-lg font-semibold mb-6 md:mb-12 leading-tight text-left text-primary font-heading text-secondary_heading px-4 md:px-0">
          End-to-End Services
        </h2>
      </div>
      <div className="container flex items-center justify-center">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto space-x-8 px-4 py-6 scrollbar-hide"
        >
          {endToEndData.length
            ? Array.from(endToEndData).map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-lg shadow-lg min-w-[250px] md:min-w-[450px]"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={300}
                    draggable="false"
                    height={200}
                    className="w-full max-h-[220px] object-cover"
                  />
                  <div className="flex items-start justify-between gap-2 flex-col px-4 py-8">
                    <h4 className="text-paragraph_heading leading-tight font-heading font-normal text-popover">
                      {item.title}
                    </h4>
                    <span className="text-extra_paragraph_heading font-paragraph font-normal text-popover">
                      {item.description}
                    </span>
                    <Link
                      className="underline font-paragraph font-normal text-popover"
                      href={item.link}
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default EndToEndServices;
