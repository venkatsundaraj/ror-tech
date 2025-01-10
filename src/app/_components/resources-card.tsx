"use client";
import { FC } from "react";

import * as React from "react";
import Image from "next/image";
import { caseStudyData } from "@/config/marketing";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  type CarouselApi,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
import { cn, slugify } from "@/lib/utils";

const colors = [
  "bg-red-500",
  "bg-violet-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-yellow-500",
];

interface ResourcesCardProps {}

const ResourcesCard: FC<ResourcesCardProps> = ({}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      id="resources"
      className=""
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        active: true,
      }}
    >
      <CarouselContent className="w-screen h-screen pl-0 ml-0">
        {Array.from(caseStudyData).map((item, i) => (
          <CarouselItem key={i} className=" pl-0">
            <div
              className={cn(
                "w-full h-full border-b-primary-foreground flex items-center justify-center py-16 md:py-24 bg-cover bg-no-repeat bg-center absolute"
              )}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={1900}
                draggable="false"
                height={900}
                className="w-full h-full object-cover absolute"
              />
              <div className="container h-full flex items-start justify-end flex-col z-10">
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex items-start justify-between gap-2 flex-col px-4 py-8">
                    <h4 className="text-paragraph_heading leading-tight font-heading font-normal hidden text-foreground">
                      {item.title}
                    </h4>
                    <h4 className="text-paragraph_heading leading-tight font-heading font-normal text-foreground max-w-xl">
                      {item.description}
                    </h4>
                    <Link
                      className="underline font-paragraph font-normal text-foreground "
                      href={`/case-studies/${slugify(item.title)}`}
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-2 absolute bottom-[24px] right-[24px] z-10">
        <CarouselPrevious className="translate-y-0 left-0 right-initial top-initial relative border-none bg-transparent text-white" />
        <h2 className="text-white">{`${current}/${count}`}</h2>
        <CarouselNext className="translate-y-0 left-0 right-initial top-initial relative border-none bg-transparent text-white" />
      </div>

      <div className="flex container items-start justify-start gap-2 absolute top-0 left-1/2 -translate-x-[50%] w-full h-1/2 py-16 md:py-24">
        <h2 className="max-w-lg font-semibold mb-6 md:mb-12 leading-tight text-left text-foreground font-heading text-secondary_heading px-4 md:px-0">
          Case Studies
        </h2>
      </div>
    </Carousel>
  );
};

export default ResourcesCard;
