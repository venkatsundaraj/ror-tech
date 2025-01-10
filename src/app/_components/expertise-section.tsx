"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ExpertiseCard } from "./expertise-card";
import { ExpertiseSectionProps } from "@/types";

export function ExpertiseSection({
  items,
}: {
  items: ExpertiseSectionProps[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(items.length / 2);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <section className="bg-[#3B4B8C] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-secondary_heading text-primary-foreground font-heading mb-4 md:mb-6 ">
          Our Areas of Expertise
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {items.slice(i * 2, (i + 1) * 2).map((item, index) => (
                    <ExpertiseCard key={index} item={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[40%] top-[100%] -translate-y-1/2 -translate-x-6 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#3B4B8C]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[40%] top-[100%] -translate-y-1/2 translate-x-6 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#3B4B8C]" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === i ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
