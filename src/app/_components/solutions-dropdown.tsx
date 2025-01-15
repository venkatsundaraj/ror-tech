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
import { dataVisualizeTool, exportAndEngageData } from "@/config/marketing";
import { pillersOfData } from "@/config/marketing";
import Image from "next/image";

interface SolutionDropDownProps {}

const SolutionDropDown: FC<SolutionDropDownProps> = ({}) => {
  return (
    <section className="w-screen min-h-screen flex items-start justify-center relative py-10">
      <div className="container h-full flex items-center justify-center md:justify-start">
        <div className="w-full max-w-6xl mx-auto md:px-4">
          <Tabs defaultValue="analyze" className="w-full">
            <TabsList className="w-full justify-between p-0 bg-background border-b rounded-none">
              <TabsTrigger
                value="experience"
                className="text-popover font-paragraph font-light py-4  !text-paragraph_heading data-[state=active]:text-popover data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Experience and Engage
              </TabsTrigger>
              <TabsTrigger
                value="automate"
                className="text-popover font-paragraph font-light py-4 !text-paragraph_heading data-[state=active]:text-popover data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Automate and Optimize
              </TabsTrigger>
              <TabsTrigger
                value="analyze"
                className="text-popover font-paragraph font-light py-4 !text-paragraph_heading data-[state=active]:text-popover data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Analyze, Visualize and Predict
              </TabsTrigger>
              <TabsTrigger
                value="scale"
                className="text-popover font-paragraph font-light py-4 !text-paragraph_heading data-[state=active]:text-popover data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Scale, Secure and Test
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6">
                  <div className="w-full px-4 py-8 aspect-square shadow-md flex items-center justify-center">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoohtNQyVT8rIHWv7BJMYazNZbEA2phydeqPVU"
                      }
                      alt="Experience and Engage"
                      width={300}
                      className="w-[300px] h-[300px] aspect-square object-cover"
                      height={300}
                    />
                  </div>
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
                <div className="w-full  md:col-start-2 md:col-end-4">
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
                  <div className="w-full px-4 py-8 aspect-square shadow-md flex items-center justify-center">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoyfahG6dUGDbyzcPt5aIElLJ6SxmBdQChFqfv"
                      }
                      alt="Experience and Engage"
                      width={300}
                      className="w-[300px] h-[300px] aspect-square object-cover"
                      height={300}
                    />
                  </div>
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
                <div className="w-full md:col-start-2 md:col-end-4">
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

            <TabsContent value="analyze" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6">
                  <div className="w-full px-4 py-8 aspect-square shadow-md flex items-center justify-center">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoohtNQyVT8rIHWv7BJMYazNZbEA2phydeqPVU"
                      }
                      alt="Experience and Engage"
                      width={300}
                      className="w-[300px] h-[300px] aspect-square object-cover"
                      height={300}
                    />
                  </div>
                </div>
                <div className="w-full  md:col-start-2 md:col-end-4 shadow-md">
                  <div className="px-5 py-5 flex items-start justify-start gap-6 h-full flex-col shadow-md">
                    <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                      Three pillars of Data and AI Solutions
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 items-start justify-between ">
                      {pillersOfData.map((item, index) => {
                        const Icon = Icons[item.icon];
                        return (
                          <li
                            key={index}
                            className="flex flex-col items-start justify-start gap-4 md:gap-1 py-4 md:py-2 border-popover w-full border-b md:border-b-0 md:border-r border-r-popover border-b-popover p-3 last:border-r-0 last:border-b-0"
                          >
                            <Icon className="w-8 h-8 stroke-popover mb-4" />
                            <h4 className="text-popover text-subtitle_heading font-heading font-normal leading-normal">
                              {item.title}
                            </h4>
                            <span className="text-extra_subtitle_heading text-popover font-light font-paragraph">
                              {item.description}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full shadow-md px-4 py-8 flex gap-6 md:gap-10 flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {dataVisualizeTool.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start justify-start gap-8"
                    >
                      <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                        {item.title}
                      </h4>
                      <ul className="grid grid-cols-3 items-center justify-center gap-4">
                        {item.icons.map((icon, i) => {
                          const Icon = Icons[icon.icon];
                          return (
                            <li
                              key={i}
                              className="flex flex-col gap-2 items-center justify-center font-paragraph"
                            >
                              <Icon className="w-6 h-6 stroke-popover" />
                              <h4 className="text-popover text-center text-[10px] ">
                                {icon.name}
                              </h4>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scale">
              <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6">
                  <div className="w-full px-4 py-8 aspect-square shadow-md flex items-center justify-center">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoohtNQyVT8rIHWv7BJMYazNZbEA2phydeqPVU"
                      }
                      alt="Experience and Engage"
                      width={300}
                      className="w-[300px] h-[300px] aspect-square object-cover"
                      height={300}
                    />
                  </div>
                </div>
                <div className="w-full  md:col-start-2 md:col-end-4 shadow-md">
                  <div className="px-5 py-5 flex items-start justify-start gap-6 h-full flex-col shadow-md">
                    <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                      Three pillars of Data and AI Solutions
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 items-start justify-between ">
                      {pillersOfData.map((item, index) => {
                        const Icon = Icons[item.icon];
                        return (
                          <li
                            key={index}
                            className="flex flex-col items-start justify-start gap-4 md:gap-1 py-4 md:py-2 border-popover w-full border-b md:border-b-0 md:border-r border-r-popover border-b-popover p-3 last:border-r-0 last:border-b-0"
                          >
                            <Icon className="w-8 h-8 stroke-popover mb-4" />
                            <h4 className="text-popover text-subtitle_heading font-heading font-normal leading-normal">
                              {item.title}
                            </h4>
                            <span className="text-extra_subtitle_heading text-popover font-light font-paragraph">
                              {item.description}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full shadow-md px-4 py-8 flex gap-6 md:gap-10 flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {dataVisualizeTool.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start justify-start gap-8"
                    >
                      <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                        {item.title}
                      </h4>
                      <ul className="grid grid-cols-3 items-center justify-center gap-4">
                        {item.icons.map((icon, i) => {
                          const Icon = Icons[icon.icon];
                          return (
                            <li
                              key={i}
                              className="flex flex-col gap-2 items-center justify-center font-paragraph"
                            >
                              <Icon className="w-6 h-6 stroke-popover" />
                              <h4 className="text-popover text-center text-[10px] ">
                                {icon.name}
                              </h4>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SolutionDropDown;
