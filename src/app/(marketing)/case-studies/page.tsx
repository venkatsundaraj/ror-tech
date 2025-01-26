import { FC } from "react";
import EndToEndCarousel from "@/app/_components/end-to-end-carousel";
import { endToEndData } from "@/config/marketing";
import CaseStudyCarousel from "@/app/_components/case-study-carousel";
import { db } from "@/server/db";
import { caseStudiesTable } from "@/server/db/schema";
import Footer from "@/app/_components/footer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/_components/ui/button";

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
      <section className="w-screen min-h-screen flex-col items-start justify-center bg-transparent py-16 md:py-36 relative ">
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
          </div>
        </div>
      </Footer>
    </>
  );
};

export default page;
