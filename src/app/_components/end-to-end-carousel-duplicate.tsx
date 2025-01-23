import * as React from "react";
import { endToEndData } from "@/config/marketing";
import Image from "next/image";
import Link from "next/link";
import { EndToEndData } from "@/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";

interface EndToEndCarouselDuplicateProps {
  endToEndData: EndToEndData;
}

const EndToEndCarouselDuplicate: React.FC<EndToEndCarouselDuplicateProps> =
  function ({ endToEndData }) {
    return (
      <section className="w-screen md:h-screen flex flex-col items-center justify-center bg-transparent py-24 md:py-24 relative">
        <div className="container flex flex-col items-start">
          <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading ">
            End to End Playbook
          </h2>
          <span className="w-[300px] md:w-[800px] text-subtitle_heading font-paragraph text-left font-normal text-primary mb-16 mt-4 md:mb-12">
            Seamless, end-to-end data management services, ensuring every step
            from data collection to insightful decision-making is expertly
            handled.
          </span>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1 gap-4 cursor-grab">
              {endToEndData.length
                ? Array.from(endToEndData).map((item, i) => (
                    <CarouselItem
                      key={i}
                      className="pl-1 md:basis-1/2 lg:basis-1/3 bg-background shadow-none"
                    >
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center rounded-lg shadow-lg min-w-[340px] md:min-w-[450px]"
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
                            className="underline hidden font-paragraph font-normal text-popover"
                            href={item.link}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))
                : null}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 absolute bottom-[-64px] right-[44px]">
              <CarouselPrevious className="translate-y-0 left-0 right-initial top-initial relative border-none bg-primary text-white" />
              <CarouselNext className="translate-y-0 left-0 right-initial top-initial relative border-none bg-primary text-white" />
            </div>
          </Carousel>
        </div>
      </section>
    );
  };

export default EndToEndCarouselDuplicate;
