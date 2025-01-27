"use client";

import { Search } from "lucide-react";
import TileTextSection from "./tile-text-section";
import { searchItems } from "@/config/marketing";
import { Icons } from "./icons";
import TypingAnimation from "./typing-animation";
import { tileContent } from "@/config/marketing";

export function DataValueSection() {
  const sections = Array(1).fill(null);

  return (
    <>
      {/* Existing content - unchanged */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Sticky */}
            <div className="lg:sticky lg:top-56 lg:h-[calc(100vh-4rem)] space-y-6">
              <h2 className="text-[30px] font-heading md:text-[38px] font-semibold text-[#2D2F6A]  leading-tight">
                Your data is as valuable as
                {/* <TileTextSection /> */}
                <TypingAnimation tileContent={tileContent} />
              </h2>
              <p className="text-popover text-subtitle_heading font-paragraph text-lg font-light leading-normal">
                We recognise that data is the most valuable asset for any
                growing enterprise. It isn't just a byproduct of business
                activity but a critical resource that can drive growth, improve
                efficiency, and create opportunities for enterprises across
                various industries. Properly harnessed, it becomes a strategic
                asset that can help businesses adapt, thrive, and lead in the
                market.
              </p>
            </div>

            {/* Right Column - Scrollable with duplicate content */}
            <div className="space-y-24 overflow-hidden pb-[20px]">
              {sections.map((_, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="space-y-12  px-[10px] py-[ 20px]"
                >
                  {/* What we do section */}
                  <div className="card-container bg-foreground/20 backdrop-blur-sm">
                    <h3 className="text-tertiary_heading text-popover font-heading mb-4 ">
                      What we do
                    </h3>
                    <p className="text-paragraph_heading font-light text-popover font-heading">
                      We help your value discovery of data by handling the
                      entire journey of raw data to insights and foresights
                      using next-gen digital technologies.
                    </p>
                  </div>

                  {/* What can you do section */}
                  <div className="card-container bg-foreground/20 backdrop-blur-sm">
                    <h3 className="text-tertiary_heading text-popover font-heading mb-4 ">
                      With our technology offerings, your data management just
                      got cheaper, faster and better
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {searchItems.map((item, index) => {
                        const Icon = Icons[item.icon];
                        return (
                          <button
                            key={`${sectionIndex}-${index}`}
                            className="flex items-center justify-center min-w-[160px] gap-2 px-4 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <Icon className="w-6" />

                            <span className="w-[100px] text-left">
                              {item.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Our Mission section */}
                  <div className="card-container bg-foreground/20 backdrop-blur-sm">
                    <h3 className="text-tertiary_heading text-popover font-heading mb-4 ">
                      Our Mission
                    </h3>
                    <p className="text-paragraph_heading font-light text-popover font-heading mb-4">
                      At ROR Technologies, our mission is to drive innovation
                      and excellence in data management, enabling organizations
                      to derive maximum value from their ecosystem data.
                    </p>
                    <p className="text-paragraph_heading font-light text-popover font-heading">
                      We strive to provide cutting-edge solutions that imporve
                      operations, refine decision-making and enhance
                      experiences.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
