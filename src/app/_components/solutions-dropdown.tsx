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

            <TabsContent value="experience" className="py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6">
                  <div className="w-full px-4 py-8 aspect-square shadow-md flex items-center justify-center">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jol05SE7IM3WqncHBhbASCXrkRtF4E87J1PweL"
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="underline text-extra_subtitle_heading text-popover font-paragraph font-light flex items-center justify-center border-none hover:bg-transparent"
                            variant="outline"
                          >
                            <span>View All</span>
                            <Icons.ArrowRight className="-rotate-45" />{" "}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[325px] sm:max-w-[425px] md:max-w-[825px]">
                          <DialogTitle className="!text-tertiary_heading mb-4 font-heading text-primary font-normal">
                            Competencies
                          </DialogTitle>
                          <div className="flex flex-wrap items-center justify-between w-full gap-8">
                            {Array.from({
                              length: experienceAndEngageTechIcons.length,
                            }).map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-center flex-col gap-4"
                              >
                                <Image
                                  src={experienceAndEngageTechIcons[index]}
                                  width={120}
                                  height={120}
                                  quality={100}
                                  alt="Image"
                                  priority
                                />
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center flex-col gap-4"
                        >
                          <Image
                            src={experienceAndEngageTechIcons[index]}
                            width={120}
                            height={120}
                            quality={100}
                            alt="Image"
                            priority
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full  md:col-start-2 md:col-end-4">
                  <div className="px-8 py-6 flex items-start justify-start gap-6 h-full flex-col shadow-lg">
                    <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                      Solutions for superior stakeholder engagement and
                      experience
                    </h4>
                    <ul className="flex flex-col items-start justify-between w-full">
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
              </div>
            </TabsContent>

            <TabsContent value="automate" className="py-8 md:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6">
                  <div className="w-full px-4 py-8 aspect-square shadow-md flex items-center justify-center">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jonbk3jaowYUd8PNaxkbQMZDjCOh9TreziRGso"
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="underline text-extra_subtitle_heading text-popover font-paragraph font-light flex items-center justify-center border-none hover:bg-transparent"
                            variant="outline"
                          >
                            <span>View All</span>
                            <Icons.ArrowRight className="-rotate-45" />{" "}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[700px] overflow-y-scroll md:overflow-hidden max-w-[325px] sm:max-w-[425px] md:max-w-[825px]">
                          <DialogTitle className="!text-tertiary_heading mb-4 font-heading text-primary font-normal">
                            Competencies
                          </DialogTitle>
                          <div className="flex flex-wrap items-center justify-between w-full gap-8">
                            {Array.from({
                              length: AutomateAndOptimizeTechIcons.length,
                            }).map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-center flex-col gap-1"
                              >
                                <Image
                                  src={AutomateAndOptimizeTechIcons[index]}
                                  width={120}
                                  height={120}
                                  quality={100}
                                  alt="Image"
                                  priority
                                />
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center flex-col gap-4"
                        >
                          <Image
                            src={AutomateAndOptimizeTechIcons[index]}
                            width={120}
                            height={120}
                            quality={100}
                            alt="Image"
                            priority
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full md:col-start-2 md:col-end-4">
                  <div className="px-8 py-6 flex items-start justify-start gap-6 h-full flex-col shadow-lg">
                    <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                      Solutions for superior stakeholder engagement and
                      experience
                    </h4>
                    <ul className="flex flex-col items-start justify-between w-full">
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
              </div>
            </TabsContent>

            <TabsContent value="analyze" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6">
                  <div className="w-full px-4 py-8 aspect-square shadow-md flex items-center justify-center">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JojfDPBpJw8jHFuSTVfx07Pb2Z3B5N4iW16pCM"
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
                      {analizeVisualPredictData.map((item, index) => {
                        const Icon = Icons[item.icon];
                        return (
                          <li
                            key={index}
                            className="flex h-full flex-col items-start justify-start gap-4 md:gap-1 py-4 md:py-2 border-popover w-full border-b md:border-b-0 md:border-r border-r-popover border-b-popover p-3 last:border-r-0 last:border-b-0"
                          >
                            <Icon className="w-12 h-12 stroke-popover mb-4" />
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
                      <ul className="grid grid-cols-3 items-center justify-center gap-2">
                        {item.icons.map((icon, i) => {
                          // const Icon = Icons[icon.icon];
                          return (
                            <li
                              key={i}
                              className="flex flex-col gap-4 items-center justify-center font-paragraph"
                            >
                              <Image
                                src={icon.icon}
                                width={140}
                                height={140}
                                quality={100}
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
            </TabsContent>

            <TabsContent value="scale">
              <div className="grid grid-cols-1 md:grid-cols-10 py-6 gap-4">
                <div className="flex flex-col items-center justify-centerw-ful gap-6 md:col-start-1 md:col-end-5">
                  <div className="w-full px-4 py-8 aspect-square shadow-md flex items-center justify-center">
                    <Image
                      src={
                        "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JopFyW1K3cTLVPIyFzkuiaCOnK7jHv6DbBN1MR"
                      }
                      alt="Experience and Engage"
                      width={300}
                      className="w-[300px] h-[300px] aspect-square object-cover"
                      height={300}
                    />
                  </div>
                </div>
                <div className="w-full md:col-start-5 md:col-end-11">
                  <div className="px-8 py-6 flex items-start justify-start gap-6 h-full flex-col shadow-lg">
                    <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                      Solutions for superior stakeholder engagement and
                      experience
                    </h4>
                    <ul className="flex flex-col items-start justify-between w-full">
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
              </div>

              <div className="w-full shadow-md px-4 py-8 flex gap-6 md:gap-10 flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {scaleAndSecureTechIcon.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start justify-start gap-8"
                    >
                      <h4 className="text-popover text-paragraph_heading font-heading font-normal leading-normal">
                        {item.title}
                      </h4>
                      <ul className="grid grid-cols-3 items-center justify-center gap-2">
                        {item.icons.map((icon, i) => {
                          // const Icon = Icons[icon.icon];
                          return (
                            <li
                              key={i}
                              className="flex flex-col gap-4 items-center justify-center font-paragraph"
                            >
                              <Image
                                src={icon.icon}
                                width={140}
                                height={140}
                                quality={100}
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SolutionDropDown;
