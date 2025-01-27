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
import Autoplay from "embla-carousel-autoplay";
import { InferModel } from "drizzle-orm";
import { caseStudiesTable } from "@/server/db/schema";

const colors = [
  "bg-red-500",
  "bg-violet-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-yellow-500",
];
type CaseStudy = InferModel<typeof caseStudiesTable>;
interface ResourcesCardDuplicateProps {
  caseStudy: CaseStudy[];
}

const ResourcesCardDuplicate: FC<ResourcesCardDuplicateProps> = ({
  caseStudy,
}) => {
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
        duration: 100,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          // stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="w-screen h-screen pl-0 ml-0">
        {Array.from(caseStudy).map((item, i) => (
          <CarouselItem key={i} className=" pl-0">
            <div
              className={cn(
                "w-full h-full border-b-primary-foreground flex items-center justify-center py-16 md:py-24 bg-cover bg-no-repeat bg-center absolute"
              )}
            >
              <Image
                src={item.fileUrl}
                alt={item.title}
                width="1620"
                priority
                quality={100}
                height="1400"
                className="w-full h-full object-cover absolute"
              />
              <div className="container h-full flex items-start justify-end flex-col z-10">
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex items-start justify-between gap-2 flex-col px-4 py-8">
                    <h4 className="text-paragraph_heading leading-tight font-heading font-normal  text-primary">
                      {item.title}
                    </h4>
                    <h4 className="text-paragraph_heading leading-tight font-heading font-normal hidden text-primary max-w-xl">
                      {item.description}
                    </h4>
                    <Link
                      className="underline font-paragraph font-normal text-primary "
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
        <CarouselPrevious className="translate-y-0 left-0 right-initial top-initial relative border-none bg-foreground/80 text-primary" />
        <h2 className="text-primary">{`${current}/${count}`}</h2>
        <CarouselNext className="translate-y-0 left-0 right-initial top-initial relative border-none bg-foreground/80 text-primary" />
      </div>

      <div className="flex flex-col container items-start justify-start gap-2 absolute top-0 left-1/2 -translate-x-[50%] w-full h-1/2 py-16 md:py-24">
        <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading ">
          Winning Strategies
        </h2>
        <span className="w-[300px] md:w-[700px] text-subtitle_heading font-paragraph text-left font-normal text-primary mb-16 mt-4 md:mb-12">
          Explore how our expertise has transformed challenges into success
          stories for our clients across various industries.
        </span>
      </div>
    </Carousel>
  );
};

export default ResourcesCardDuplicate;
