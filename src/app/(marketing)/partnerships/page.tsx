import { Icons } from "@/app/_components/icons";
import {
  businessPartners,
  campusPartners,
  ourPartnershipTenets,
  solutionPartners,
  technologyPartners,
  typeOfPartnerships,
} from "@/config/marketing";
import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordian";
import Image from "next/image";
import Footer from "@/app/_components/footer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/_components/ui/button";

interface pageProps {}

const bgColors = ["#501C69B3", "#501C69CC", "#501C69E6", "#501C69FF"];

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <section className="w-screen  flex items-center justify-center bg-foreground pt-40 pb-16 md:pt-36 md:pb-8 relative ">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <div className="w-full flex-col flex items-start justify-start gap-6 md:gap-8">
            <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading">
              Partnerships
            </h2>
            <div className="w-full flex-col flex items-start justify-center gap-3 md:gap-5">
              <p className="font-paragraph font-light text-left text-extra_subtitle_heading text-popover">
                ROR Technologies and its parent company Ducont Systems have a
                very strong partner framework. ROR believes in the overall
                ecosystem success and always thrives for mutual value creation.
              </p>
              <div className="flex flex-col items-start justify-center gap-4 md:gap-2">
                <p className="text-extra_paragraph_heading font-paragraph font-semibold text-[#252525] md:mb-2">
                  Our Partnership Tenets
                </p>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 ">
                  {ourPartnershipTenets.map((item, i) => {
                    const Icon = Icons[item.icon];

                    return (
                      <div
                        className={cn(
                          "flex items-center justify-start gap-2 bg-[#E2D9E7] rounded-md px-4 py-2"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <p className="text-extra_subtitle_heading font-paragraph font-normal text-[#252525]">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="font-paragraph font-light text-left text-extra_subtitle_heading text-popover">
                ROR Technologies employs a 4-dimensional partnership approach to
                meet diverse customer needs. In today’s globalized business
                environment, with the vast digital landscape and rapid
                technological growth, it’s challenging for organizations to
                maintain dedicated teams across geographies and specialized
                expertise in every technology. This approach enables ROR to
                expand regionally, deliver holistic solutions, and build a
                future-ready team.
              </p>
            </div>
          </div>
          <div className="bg-[#805D963B] rounded-md px-5 md:px-10 py-6 md:py-1 flex items-center justify-center flex-col gap-4">
            <Image
              src={
                "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JokGFZX6KT9fWpjiqn4FdXvS2etCZc8TIHVR1A"
              }
              alt="Partnerships"
              priority
              quality={100}
              width={300}
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-screen flex items-center justify-center bg-foreground py-8 md:py-16 relative ">
        <div className="container flex flex-col items-start justify-center">
          <h4 className="text-tertiary_heading font-paragraph font-semibold leading-tighter text-primary">
            View our Partners
          </h4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="py-2 md:py-3">
              <AccordionTrigger>
                <h4 className="text-tertiary_heading font-paragraph font-light leading-tighter text-primary">
                  Technology Partners
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
                  {technologyPartners.map((item, i) => (
                    <li
                      className="bg-foreground shadow-lg flex flex-col items-start justify-start gap-4 w-full p-4 rounded-md"
                      key={i}
                    >
                      <div className="flex w-full py-1 items-center justify-between border-b border-b-popover">
                        <p className="font-paragraph font-light  text-extra_paragraph_heading text-popover">
                          {item.company}
                        </p>
                        <Link
                          href={item.companyWebsite}
                          target="_blank"
                          className="font-paragraph font-light  text-extra_paragraph_heading text-popover"
                        >
                          Visit Website
                        </Link>
                      </div>
                      <Image
                        alt={item.company}
                        src={item.image}
                        width={240}
                        height={120}
                        priority
                        quality={100}
                        className="w-[220px] h-auto self-center"
                      />
                      <p className="font-paragraph font-light  text-extra_subtitle_heading text-popover leading-normal md:min-h-[200px]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h4 className="text-tertiary_heading font-paragraph font-light leading-tighter text-primary">
                  Solution Partners
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
                  {solutionPartners.map((item, i) => (
                    <li
                      className="bg-foreground shadow-lg flex flex-col items-start justify-start gap-4 w-full p-4 rounded-md"
                      key={i}
                    >
                      <div className="flex w-full py-1 items-center justify-between border-b border-b-popover">
                        <p className="font-paragraph font-light  text-extra_paragraph_heading text-popover">
                          {item.company}
                        </p>
                        <Link
                          href={item.companyWebsite}
                          target="_blank"
                          className="font-paragraph font-light  text-extra_paragraph_heading text-popover"
                        >
                          Visit Website
                        </Link>
                      </div>
                      <Image
                        alt={item.company}
                        src={item.image}
                        width={240}
                        height={120}
                        priority
                        quality={100}
                        className="w-[220px] h-auto self-center"
                      />
                      <p className="font-paragraph font-light  text-extra_subtitle_heading text-popover leading-normal  md:min-h-[200px]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h4 className="text-tertiary_heading font-paragraph font-light leading-tighter text-primary">
                  Business Partners
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
                  {businessPartners.map((item, i) => (
                    <li
                      className="bg-foreground shadow-lg flex flex-col items-start justify-start gap-4 w-full p-4 rounded-md"
                      key={i}
                    >
                      <div className="flex w-full py-1 items-center justify-between border-b border-b-popover">
                        <p className="font-paragraph font-light  text-extra_paragraph_heading text-popover">
                          {item.company}
                        </p>
                        <Link
                          href={item.companyWebsite}
                          target="_blank"
                          className="font-paragraph font-light  text-extra_paragraph_heading text-popover"
                        >
                          Visit Website
                        </Link>
                      </div>
                      <Image
                        alt={item.company}
                        src={item.image}
                        width={240}
                        height={120}
                        priority
                        quality={100}
                        className="w-[220px] h-auto self-center"
                      />
                      <p className="font-paragraph font-light  text-extra_subtitle_heading text-popover leading-normal  md:min-h-[200px]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h4 className="text-tertiary_heading font-paragraph font-light leading-tighter text-primary ">
                  Campus Connects
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
                  {campusPartners.map((item, i) => (
                    <li
                      className="bg-foreground shadow-lg flex flex-col items-start justify-start gap-4 w-full p-4 rounded-md"
                      key={i}
                    >
                      <div className="flex w-full py-1 items-center justify-between border-b border-b-popover">
                        <p className="font-paragraph font-light  text-extra_paragraph_heading text-popover">
                          {item.company}
                        </p>
                        <Link
                          href={item.companyWebsite}
                          target="_blank"
                          className="font-paragraph font-light  text-extra_paragraph_heading text-popover"
                        >
                          Visit Website
                        </Link>
                      </div>
                      <Image
                        alt={item.company}
                        src={item.image}
                        width={240}
                        height={120}
                        priority
                        quality={100}
                        className="w-[220px] h-auto self-center"
                      />
                      <p className="font-paragraph font-light   text-extra_subtitle_heading text-popover leading-normal  md:min-h-[200px]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer>
        <div className="container flex items-start justify-start flex-col z-[2]">
          <div className="flex items-start justify-between gap-4 flex-col  py-8">
            <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-2xl mb-6">
              Interested in managing your business’ data to increase your
              efficiency?
            </h4>

            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-background text-secondary font-semibold rounded-3xl hover:bg-background/80 hover:text-secondary"
              )}
              href={"/contact-us"}
            >
              Contact Us
            </Link>
            <a
              href={"https://www.ducont.com/"}
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-sm font-light border border-foreground !text-foreground font-paragraph text-subtitle_heading px-8 py-3 mt-4 transition-all duration-300"
              )}
            >
              Ducont - Our Parent Organisation
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default page;

//  {
//    typeOfPartnerships.map((item, i) => (
//      <div
//        style={{
//          backgroundColor: `${bgColors[i]}`,
//        }}
//        className="flex flex-col items-start justify-center gap-2 p-3 rounded-md"
//      >
//        <p className="font-paragraph font-normal text-left text-extra_subtitle_heading text-foreground">
//          {item.title}
//        </p>
//        <span className="font-paragraph font-light text-left text-extra_paragraph_heading text-foreground">
//          {item.description}
//        </span>
//      </div>
//    ));
//  }
