import { Icon, Icons } from "@/app/_components/icons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import {
  automateAndOptimiseData,
  dataVisualizeTool,
  experienceAndEngageTechIcons,
  experiencetAndEngageData,
  ExperienceAndEngagementUsersIcon,
  analizeVisualPredictData,
  scaleSecureAndTest,
  AutomateAndOptimizeUsersIcon,
  AutomateAndOptimizeTechIcons,
  scaleAndSecureTechIcon,
  scaleAndSecureUsersIcon,
  solutionImpactData,
} from "@/config/marketing";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]"></DialogContent>
    </Dialog>
  );
}

interface SolutionDropDownProps {}

const SolutionDropDown: FC<SolutionDropDownProps> = ({}) => {
  return (
    <section
      className="w-screen min-h-screen flex items-start justify-center relative py-10"
      id="our-solutions"
    >
      <div className="container h-full flex items-center justify-center md:justify-start">
        <div className="w-full max-w-6xl mx-auto md:px-4">
          <Tabs defaultValue="experience" className="w-full">
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

            {/* First One */}
            <TabsContent value="experience" className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-4 md:gap-5">
                <div className="w-full flex flex-col items-start justify-start gap-3 md:gap-5 md:col-start-1 md:col-end-8 ">
                  <h3 className="text-tertiary_heading text-primary font-heading font-normal leading-tight">
                    Experience and Engage
                  </h3>
                  <span className="text-extra_subtitle_heading font-paragraph font-light text-popover mb-2 md:mb-1">
                    Digital solutions that help you to engage with your
                    stakeholders better and provide superior experiences.
                  </span>
                  <div className="flex items-center justify-center w-full p-2 md:p-4 rounded-md shadow-sm bg-[#EFF1F7]">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jogsg4jrU0SRx7ke5iucGIHoOqf9BhNJpYZWDA"
                      }
                      width={300}
                      className="w-[80%]"
                      height={300}
                      alt="Experience and Engage"
                    />
                  </div>
                </div>
                <div className="w-full h-full   md:col-start-8 md:col-end-13">
                  <div className="w-full h-full flex flex-col gap-6 md:gap-12 items-start justify-start bg-[#EFF1F7] shadow-sm rounded-md py-8 px-8 md:py-8">
                    <h4 className="text-popover text-paragraph_heading font-heading leading-normal font-semibold">
                      Competencies
                    </h4>
                    <ul className="grid grid-cols-3 gap-3 gap-y-12">
                      {Array.from({
                        length: experienceAndEngageTechIcons.length,
                      }).map((_, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-center flex-col "
                        >
                          <Image
                            src={experienceAndEngageTechIcons[index]}
                            width={180}
                            height={180}
                            quality={100}
                            className="scale-110"
                            alt="Image"
                            priority
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="px-8 py-6 flex items-start justify-start gap-6 h-full flex-col">
                  <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                    Solutions for superior stakeholder engagement and experience
                  </h4>
                  <ul className="flex flex-col items-start justify-between w-full md:px-10">
                    {experiencetAndEngageData.map((item, index) => {
                      const SelectedIcon =
                        Icons[ExperienceAndEngagementUsersIcon[index]];
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-start gap-12 md:gap-16 py-4 border-b border-popover w-full last:border-b-0"
                        >
                          <SelectedIcon className="fill-primary h-14 w-14" />
                          <span className="text-popover text-extra_subtitle_heading font-paragraph font-light leading-normal">
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Second One */}
            <TabsContent value="automate" className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-4 md:gap-5">
                <div className="w-full flex flex-col items-start justify-start gap-3 md:gap-5 md:col-start-1 md:col-end-8 ">
                  <h3 className="text-tertiary_heading text-primary font-heading font-normal leading-tight">
                    Automate and Optimize
                  </h3>
                  <span className="text-extra_subtitle_heading font-paragraph font-light text-popover mb-2 md:mb-1">
                    AI solutions that help you to automate your processes and
                    optimize your efforts and cost.
                  </span>
                  <div className="flex items-center justify-center w-full p-2 md:p-4 rounded-md shadow-sm bg-[#EFF1F7]">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JowJya559azNjsdfbS78XogvKc3YFTErMpmnAx"
                      }
                      width={300}
                      className="w-[80%]"
                      height={300}
                      alt="Experience and Engage"
                    />
                  </div>
                </div>
                <div className="w-full h-full   md:col-start-8 md:col-end-13">
                  <div className="w-full h-full flex flex-col gap-6 md:gap-12 items-start justify-start bg-[#EFF1F7] shadow-sm rounded-md py-8 px-8 md:py-8">
                    <h4 className="text-popover text-paragraph_heading font-heading leading-normal font-semibold">
                      Competencies
                    </h4>
                    <ul className="grid grid-cols-3 gap-3 gap-y-12">
                      {Array.from({
                        length: AutomateAndOptimizeTechIcons.length,
                      }).map((_, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-center flex-col "
                        >
                          <Image
                            src={AutomateAndOptimizeTechIcons[index]}
                            width={180}
                            height={180}
                            quality={100}
                            className="scale-110"
                            alt="Image"
                            priority
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="px-8 py-6 flex items-start justify-start gap-6 h-full flex-col ">
                  <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                    Solutions for superior stakeholder engagement and experience
                  </h4>
                  <ul className="flex flex-col items-start justify-between w-full md:px-10">
                    {automateAndOptimiseData.map((item, index) => {
                      const SelectedIcon =
                        Icons[AutomateAndOptimizeUsersIcon[index]];
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-start gap-12 md:gap-16 py-4 border-b border-popover w-full last:border-b-0"
                        >
                          <SelectedIcon className="fill-primary h-14 w-14" />
                          <span className="text-popover text-extra_subtitle_heading font-paragraph font-light leading-normal">
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Third One */}
            <TabsContent value="analyze" className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-4 md:gap-5">
                <div className="w-full flex flex-col items-start justify-start gap-3 md:gap-5 md:col-start-1 md:col-end-8 ">
                  <h3 className="text-tertiary_heading text-primary font-heading font-normal leading-tight">
                    Analyze, Visualize and Predict
                  </h3>
                  <span className="text-extra_subtitle_heading font-paragraph font-light text-popover mb-2 md:mb-1">
                    Cognitive solutions that help you look at the past and
                    visualize the future
                  </span>
                  <div className="flex items-center justify-center w-full p-2 md:p-4 rounded-md shadow-sm bg-[#EFF1F7]">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JogPgdomU0SRx7ke5iucGIHoOqf9BhNJpYZWDA"
                      }
                      width={300}
                      className="w-[80%]"
                      height={300}
                      alt="Experience and Engage"
                    />
                  </div>
                </div>
                <div className="w-full h-full   md:col-start-8 md:col-end-13">
                  <div className="w-full h-full flex flex-col gap-6 md:gap-8 items-start justify-start bg-[#EFF1F7] shadow-sm rounded-md py-8 px-8 md:py-8">
                    <h4 className="text-popover text-paragraph_heading font-heading leading-normal font-semibold">
                      Competencies
                    </h4>
                    <div className="flex flex-col items-center justify-start gap-8 w-full">
                      {dataVisualizeTool.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-start justify-start gap-3"
                        >
                          <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                            {item.title}
                          </h4>
                          <ul className="grid grid-cols-3 gap-1 gap-y-8">
                            {item.icons.map((icon, i) => {
                              // const Icon = Icons[icon.icon];
                              return (
                                <li
                                  key={i}
                                  className="flex items-center justify-center flex-col "
                                >
                                  <Image
                                    src={icon.icon}
                                    width={180}
                                    height={180}
                                    quality={100}
                                    className="scale-110"
                                    alt="Image"
                                    priority
                                  />
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="px-5 py-5 flex items-start justify-start gap-6 h-full flex-col">
                  <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                    Three pillars of Data and AI Solutions
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 items-start justify-between ">
                    {analizeVisualPredictData.map((item, index) => {
                      const Icon = Icons[item.icon];
                      return (
                        <li
                          key={index}
                          className="flex h-full flex-col items-start justify-start gap-4 md:gap-1 py-4 md:py-2 border-popover w-full border-b md:border-b-0 md:border-r border-r-popover border-b-popover p-3 last:border-r-0 last:border-b-0"
                        >
                          <Icon className="w-12 h-12 mb-2" />
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
              <div className="w-full">
                <div className="px-8 py-6 flex items-start justify-start gap-6 h-full flex-col">
                  <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                    Solutions for superior stakeholder engagement and experience
                  </h4>
                  <ul className="flex flex-col items-start justify-between w-full md:px-10">
                    {scaleSecureAndTest.map((item, index) => {
                      const SelectedIcon =
                        Icons[scaleAndSecureUsersIcon[index]];
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-start gap-12 md:gap-16 py-4 border-b border-popover w-full last:border-b-0"
                        >
                          <SelectedIcon className="fill-primary h-14 w-14" />
                          <span className="text-popover text-extra_subtitle_heading font-paragraph font-light leading-normal">
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Fourth One */}
            <TabsContent value="scale" className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-4 md:gap-5">
                <div className="w-full flex flex-col items-start justify-start gap-3 md:gap-5 md:col-start-1 md:col-end-8 ">
                  <h3 className="text-tertiary_heading text-primary font-heading font-normal leading-tight">
                    Scale, Secure and Test
                  </h3>
                  <span className="text-extra_subtitle_heading font-paragraph font-light text-popover mb-2 md:mb-1">
                    Solutions that help you scale your infrastructure and secure
                    them at every level
                  </span>
                  <div className="flex items-center justify-center w-full p-2 md:p-4 rounded-md shadow-sm bg-[#EFF1F7]">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JorDtYBdyiSyxDL6AsiGq9Ko2Vg7kzfI5EceXt"
                      }
                      width={300}
                      className="w-[80%]"
                      height={300}
                      alt="Experience and Engage"
                    />
                  </div>
                </div>
                <div className="w-full h-full   md:col-start-8 md:col-end-13">
                  <div className="w-full h-full flex flex-col gap-6 md:gap-8 items-start justify-start bg-[#EFF1F7] shadow-sm rounded-md py-8 px-8 md:py-8">
                    <h4 className="text-popover text-paragraph_heading font-heading leading-normal font-semibold">
                      Competencies
                    </h4>
                    <div className="flex flex-col items-center justify-start gap-8 w-full">
                      {scaleAndSecureTechIcon.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-start justify-start gap-3"
                        >
                          <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                            {item.title}
                          </h4>
                          <ul className="grid grid-cols-3 gap-1 gap-y-8">
                            {item.icons.map((icon, i) => {
                              // const Icon = Icons[icon.icon];
                              return (
                                <li
                                  key={i}
                                  className="flex items-center justify-center flex-col "
                                >
                                  <Image
                                    src={icon.icon}
                                    width={180}
                                    height={180}
                                    quality={100}
                                    className="scale-110"
                                    alt="Image"
                                    priority
                                  />
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-screen min-h-screen flex py-5 items-center justify-center relative bg-[#384D89] rounded-xl rounded-b-none">
                  <div className="container flex flex-col gap-5 md:gap-10 items-start justify-center">
                    <h2 className="text-tertiary_heading font-heading text-foreground leading-tight max-w-2xl font-semibold">
                      Scalable, Secured and quality driven solutions
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                      {solutionImpactData.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-start justify-start gap-4 p-5 bg-foreground rounded-lg"
                        >
                          <span className="font-heading font-normal text-primary_heading leading-tight">{`0${
                            i + 1
                          }`}</span>
                          <p className="font-paragraph font-light text-subtitle_heading leading-normal">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
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
