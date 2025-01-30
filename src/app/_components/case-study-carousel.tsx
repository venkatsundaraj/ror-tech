"use client";
import { FC } from "react";

import * as React from "react";
import Image from "next/image";
import { caseStudyData } from "@/config/marketing";
import Link from "next/link";
import { InferModel } from "drizzle-orm";
import { caseStudiesTable } from "@/server/db/schema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  type CarouselApi,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn, slugify } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { Icon } from "lucide-react";

const colors = [
  "bg-red-500",
  "bg-violet-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-yellow-500",
];

type CaseStudy = InferModel<typeof caseStudiesTable>;

interface CaseStudyCarouselProps {
  caseStudy: CaseStudy[];
}

const CaseStudyCarousel: FC<CaseStudyCarouselProps> = ({ caseStudy }) => {
  if (caseStudy.length === 0) {
    return <p>Blogs are yet to be uploaded</p>;
  }
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
      className="w-full"
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        active: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent className="w-full h-[70vh] max-h-[700px] pl-0 ml-0 ">
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
                  className="flex flex-col items-center  justify-center"
                >
                  <div className="flex items-start justify-between gap-2 md:gap-4 flex-col px-4 py-8">
                    <div className="flex items-center justify-center  gap-2 flex-nowrap">
                      {item.category
                        .split("-")
                        .map((word) => word.trim())
                        .filter((item) => item)
                        .map((item, i) => (
                          <span
                            key={i}
                            className="text-extra_paragraph_heading leading-tight font-heading font-normal flex items-center justify-center gap-1 bg-primary/90 rounded-sm p-2 text-foreground"
                          >
                            {/* {item.length ? <Icons.Dot /> : null} */}
                            {item}
                          </span>
                        ))}
                    </div>
                    <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-primary max-w-md">
                      {item.title}
                    </h4>
                    <h4 className="text-paragraph_heading leading-tight font-heading font-light text-primary max-w-md">
                      {item.description}
                    </h4>
                    <Link
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        " font-paragraph font-normal text-primary rounded-full  "
                      )}
                      href={`/case-studies/${slugify(item.title)}`}
                    >
                      Read More
                      <Icons.ArrowRight className="-rotate-45" />
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
        <h2 className="max-w-lg uppercase font-normal mb-6 md:mb-12 leading-tight text-left text-primary font-heading text-paragraph_heading px-4 md:px-4">
          Featured Case Studies
        </h2>
      </div>
    </Carousel>
  );
};

export default CaseStudyCarousel;
