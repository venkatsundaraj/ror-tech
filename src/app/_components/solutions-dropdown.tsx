import { FC } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/app/_components/ui/tabs";
import { Settings2, LineChart, PieChart } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/app/_components/icons";
import { exportAndEngageData } from "@/config/marketing";

interface SolutionDropDownProps {}

const SolutionDropDown: FC<SolutionDropDownProps> = ({}) => {
  return (
    <section className="w-screen min-h-screen flex items-start justify-center relative py-10">
      <div className="container h-full flex items-center justify-center md:justify-start">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Tabs defaultValue="analyze" className="w-full">
            <TabsList className="w-full justify-between p-0 bg-background border-b rounded-none">
              <TabsTrigger
                value="experience"
                className="text-popover font-paragraph font-light  !text-paragraph_heading data-[state=active]:text-popover data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Experience and Engage
              </TabsTrigger>
              <TabsTrigger
                value="automate"
                className="text-popover font-paragraph font-light  !text-paragraph_heading data-[state=active]:text-popover data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Automate and Optimize
              </TabsTrigger>
              <TabsTrigger
                value="analyze"
                className="text-popover font-paragraph font-light  !text-paragraph_heading data-[state=active]:text-popover data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Analyze, Visualize and Predict
              </TabsTrigger>
              <TabsTrigger
                value="scale"
                className="text-popover font-paragraph font-light  !text-paragraph_heading data-[state=active]:text-popover data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Scale, Secure and Test
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analyze" className="mt-6">
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-center">
                  Three pillars of Data and AI Solutions
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="pt-6">
                      <div className="flex flex-col items-center space-y-4">
                        <Settings2 className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Data Engineering
                        </h3>
                        <p className="text-center text-muted-foreground">
                          Solutions and technologies that help in designing and
                          building systems for the aggregation, storage and
                          analysis of data at scale.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="pt-6">
                      <div className="flex flex-col items-center space-y-4">
                        <LineChart className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">Data Science</h3>
                        <p className="text-center text-muted-foreground">
                          Solutions and technologies that help in to uncover
                          actionable insights hidden in an organization's data.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="pt-6">
                      <div className="flex flex-col items-center space-y-4">
                        <PieChart className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Data Visualization
                        </h3>
                        <p className="text-center text-muted-foreground">
                          Data visualization is the graphical representation of
                          data by using visual elements like charts, graphs and
                          maps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6">
                  <div className="w-full px-4 py-8 aspect-square shadow-md" />
                  <div className="w-full aspect-square shadow-md px-4 py-8 flex gap-6 md:gap-10 flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between">
                      <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                        Competencies
                      </h4>
                      <Link
                        href="/our-solutions"
                        className="underline text-extra_subtitle_heading text-popover font-paragraph font-light flex items-center justify-center"
                      >
                        <span>View All</span>
                        <Icons.ArrowRight className="-rotate-45" />{" "}
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center flex-col gap-4"
                        >
                          <Icons.LayoutGrid className="fill-popover" />
                          <span className="text-popover text-center text-[14px] font-paragraph font-normal leading-normal">
                            Microsoft Power Apps
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full  col-start-2 col-end-4">
                  <div className="px-8 py-8 flex items-start justify-start gap-6 h-full flex-col shadow-lg">
                    <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                      Solutions for superior stakeholder engagement and
                      experience
                    </h4>
                    <ul className="flex flex-col items-start justify-between ">
                      {exportAndEngageData.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-start gap-12 md:gap-16 py-6 border-b border-popover w-full"
                        >
                          <Icons.User className="fill-primary" />
                          <span className="text-popover text-extra_subtitle_heading font-paragraph font-light leading-normal">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="automate" className="py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6">
                  <div className="w-full px-4 py-8 aspect-square shadow-md" />
                  <div className="w-full aspect-square shadow-md px-4 py-8 flex gap-6 md:gap-10 flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between">
                      <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                        Competencies
                      </h4>
                      <Link
                        href="/our-solutions"
                        className="underline text-extra_subtitle_heading text-popover font-paragraph font-light flex items-center justify-center"
                      >
                        <span>View All</span>
                        <Icons.ArrowRight className="-rotate-45" />{" "}
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center flex-col gap-4"
                        >
                          <Icons.LayoutGrid className="fill-popover" />
                          <span className="text-popover text-center text-[14px] font-paragraph font-normal leading-normal">
                            Microsoft Power Apps
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full  col-start-2 col-end-4">
                  <div className="px-8 py-8 flex items-start justify-start gap-6 h-full flex-col shadow-lg">
                    <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                      Solutions for superior stakeholder engagement and
                      experience
                    </h4>
                    <ul className="flex flex-col items-start justify-between ">
                      {exportAndEngageData.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-start gap-12 md:gap-16 py-6 border-b border-popover w-full"
                        >
                          <Icons.User className="fill-primary" />
                          <span className="text-popover text-extra_subtitle_heading font-paragraph font-light leading-normal">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scale">
              <div className="p-4 text-center text-muted-foreground">
                Scale, Secure and Test content
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SolutionDropDown;
