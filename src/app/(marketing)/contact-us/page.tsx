import { FC } from "react";
import Footer from "@/app/_components/footer";
import Link from "next/link";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/lib/utils";
import { companyLocation, contactUsData } from "@/config/marketing";
import dynamic from "next/dynamic";
import ContactUsForm from "@/app/_components/contact-us-form";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <section className="w-screen min-h-screen flex items-center justify-center bg-[#F2F2F2] py-40 md:py-36 relative ">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <div className="w-full flex flex-col items-center justify-start gap-4 md:gap-8 h-full ">
            {contactUsData.map((data, index) => (
              <div
                className="flex flex-col items-start justify-start gap-4 md:gap-4 bg-foreground rounded-md p-4 "
                key={index}
              >
                <h3 className="text-tertiary_heading text-popover font-heading font-light">
                  {data.title}
                </h3>
                <p className="text-extra_subtitle_heading font-paragraph text-popover font-light text-left md:min-h-[200px]">
                  {data.description}
                </p>
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-transparent rounded-none text-left items-center justify-start text-popover font-normal  hover:bg-transparent hover:text-popover/80 pt-4 w-full border-t border-t-popover"
                  )}
                  target="_blank"
                  href={`mailto:${data.mailId}`}
                >
                  {data.reachOutToUs}
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-[#384D89] h-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 rounded-md md:col-start-2 md:col-end-4">
            <div className="flex flex-col items-start justify-center gap-12 md:gap-1 md:justify-between">
              <div className="flex flex-col items-center justify-center gap-3 md:gap-8">
                <h3 className="text-tertiary_heading font-heading font-light text-foreground mb-4 md:mb-0">
                  Interested in working with us and connecting with us?
                </h3>
                {companyLocation.map((data, index) => (
                  <div
                    className="flex flex-col items-start justify-center gap-2"
                    key={index}
                  >
                    <h4 className="text-extra_paragraph_heading font-paragraph font-light uppercase leading-tighter text-foreground">
                      {data.location}
                    </h4>
                    <p className="text-extra_paragraph_heading font-paragraph font-light text-foreground">
                      {data.address}
                    </p>
                    <Link
                      href={`tel:${data.tel}`}
                      className="text-extra_paragraph_heading font-paragraph font-light text-foreground"
                    >
                      {data.tel}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <p className="text-extra_paragraph_heading font-paragraph uppercase font-light text-foreground md:mb-2">
                  Write to us at
                </p>
                <Link
                  href={"mailto:careers@rortechnology.com"}
                  className="text-extra_paragraph_heading font-paragraph font-light text-foreground"
                >
                  careers@rortechnology.com
                </Link>
                <Link
                  href={"mailto:info@rortechnology.com"}
                  className="text-extra_paragraph_heading font-paragraph font-light text-foreground"
                >
                  info@rortechnology.com
                </Link>
              </div>
            </div>
            <ContactUsForm />
          </div>
        </div>
      </section>
      <Footer>
        <div className="container flex items-start justify-start flex-col z-[2]">
          <div className="flex items-start justify-between gap-4 flex-col  py-8">
            <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-2xl mb-6">
              Make most of your organizational data with ROR Technologies.
            </h4>
            <span className="text-extra_subtitle_heading font-paragraph font-normal text-foreground max-w-xl">
              Join the ranks of leading organizations that have transformed
              their operations with ROR technologies. Let us help you stay ahead
              in the digital age.
            </span>
            <span className="text-paragraph_heading font-paragraph font-normal text-foreground max-w-2xl">
              Contact us today to learn more about our services and how we can
              support your digital finance journey.
            </span>
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-background text-secondary font-semibold rounded-3xl hover:bg-background/80 hover:text-secondary hidden"
              )}
              href={"/about-us"}
            >
              About Us
            </Link>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default page;
