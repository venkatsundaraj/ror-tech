import { FC } from "react";
import EndToEndCarousel from "@/app/_components/end-to-end-carousel";
import { endToEndData } from "@/config/marketing";
import CaseStudyCarousel from "@/app/_components/case-study-carousel";
import { db } from "@/server/db";
import { caseStudiesTable } from "@/server/db/schema";
import Footer from "@/app/_components/footer";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/_components/ui/button";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import { Icons } from "@/app/_components/icons";
import BackgroundSVG from "@/app/_components/background-svg";

interface pageProps {}

export const revalidate = 0; // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(caseStudiesTable);
  return data;
}

const page = async ({}: pageProps) => {
  const data = await getData();
  return (
    <>
      <BackgroundSVG />
      <section className="w-screen min-h-screen flex-col items-start justify-center bg-transparent py-32 md:pt-36 relative ">
        <div className="container flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <p className="text-paragraph_heading font-paragraph uppercase font-normal  text-popover md:mb-2">
              CASE STUDIES
            </p>
            <h3 className="text-secondary_heading font-heading max-w-4xl font-normal leading-tight text-primary">
              See our Solutions and Services in Practice
            </h3>
          </div>
          <CaseStudyCarousel caseStudy={data} />
        </div>
      </section>
      <section className="w-screen min-h-screen flex-col items-start justify-center bg-transparent py-16 relative ">
        <div className="container">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-2">
            {data.map((item, i) => (
              <li className="bg-foreground shadow-lg  p-4 rounded-md" key={i}>
                <Link
                  href={`/case-studies/${slugify(item.title)}`}
                  className="flex flex-col items-start justify-start gap-4 w-full group"
                >
                  <Image
                    alt={item.title}
                    src={item.fileUrl}
                    width={340}
                    height={220}
                    priority
                    quality={100}
                    className="w-full h-[260px] object-cover self-center rounded-sm"
                  />

                  <p className="font-paragraph font-light  text-paragraph_heading text-popover group-hover:underline">
                    {item.title}
                  </p>
                  <Link
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      " font-paragraph bg-transparent border border-primary  font-normal  text-primary rounded-full  "
                    )}
                    href={`/case-studies/${slugify(item.title)}`}
                  >
                    Read More
                    <Icons.ArrowRight className="-rotate-45" />
                  </Link>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer>
        <div className="container flex items-start justify-start flex-col z-[2]">
          <div className="flex items-start justify-between gap-4 flex-col  py-8">
            <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-2xl mb-6">
              Make most of your organizational data with ROR Technologies.
            </h4>
            <span className="text-extra_subtitle_heading font-paragraph font-normal text-foreground max-w-xl ">
              Join the ranks of leading organizations that have transformed
              their operations with ROR technologies. Let us help you stay ahead
              in the digital age.
            </span>
            <span className="text-paragraph_heading font-paragraph font-normal text-foreground max-w-2xl ">
              Contact us today to learn more about our services and how we can
              support your digital finance journey.
            </span>
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-background text-secondary hidden font-semibold rounded-3xl hover:bg-background/80 hover:text-secondary"
              )}
              href={"/contact-us"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default page;
