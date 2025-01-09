"use client";

import { Search } from "lucide-react";

export function DataValueSection() {
  const searchItems = Array(12).fill("Search");
  const sections = Array(3).fill(null);

  return (
    <>
      {/* Existing content - unchanged */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Sticky */}
            <div className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] space-y-6">
              <h2 className="text-[30px] md:text-[38px] font-bold text-[#2D2F6A]  leading-tight">
                Your data is as valuable as
                <span className="block bg-[#54145C] text-[25px] text-white md:text-[34px] p-4 mt-2">
                  The money in your bank.
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
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
                  <div className="bg-[] card-container">
                    <h3 className="text-2xl font-semibold text-[#2D2F6A] mb-4 ">
                      What we do
                    </h3>
                    <p className="text-gray-700">
                      We help your value discovery of data by handling the
                      entire journey of raw data to insights and foresights
                      using next-gen digital technologies.
                    </p>
                  </div>

                  {/* What can you do section */}
                  <div className="card-container">
                    <h3 className="text-2xl font-semibold text-[#2D2F6A] mb-6">
                      What can you do with your data?
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {searchItems.map((item, index) => (
                        <button
                          key={`${sectionIndex}-${index}`}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Search className="w-4 h-4" />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Our Mission section */}
                  <div className="card-container">
                    <h3 className="text-2xl font-semibold text-[#2D2F6A] mb-4">
                      Our Mission
                    </h3>
                    <p className="text-gray-700">
                      At ROR Technologies, our mission is to drive innovation
                      and
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
