import { FC } from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import Image from "next/image";
import { menuLinks, socialMediaIcons } from "@/config/marketing";
import { Icons } from "./icons";
import Link from "next/link";
import WavePattern from "./wave-pattern";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-gradient-to-tr from-primary to-secondary flex items-center justify-center flex-col pt-16 md:pt-24">
      <div className="container flex items-start justify-start flex-col">
        <div className="flex items-start justify-between gap-2 flex-col  py-8">
          <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-2xl mb-6">
            We specialize in end-to-end data management using next generation
            digital solution
          </h4>
          <span className="text-extra_subtitle_heading font-paragraph font-normal text-foreground max-w-xl">
            ROR Technologies, a part of the 21 year old Ducont system is a
            premier global digital transformation company over 500 consultants,
            HQ in UAE and a global presence.
          </span>
          <span className="text-extra_subtitle_heading font-paragraph font-normal text-foreground max-w-xl">
            Get in touch with us at rortechnology@gmail.com or call us at +871
            9389 0383 to know more.
          </span>
        </div>
      </div>
      <WavePattern />
      <div className="container flex items-start justify-start flex-col">
        <div className="w-full gap-4 flex items-center justify-between flex-wrap md:flex-nowrap py-8 md:py-12">
          <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground max-w-xl">
            Join our newsletter to stay updated.
          </h4>
          <form className="flex items-center justify-center flex-row h-12">
            <Input
              className="h-full px-2 rounded-none text-extra_paragraph_heading bg-background placeholder:text-secondary font-medium font-heading min-w-[260px] md:min-w-[360px]"
              type="email"
              placeholder="Enter your email address"
            />
            <Button variant={"secondary"} className="!rounded-none h-full">
              Submit Now
            </Button>
          </form>
        </div>
        <div className="flex gap-4 items-start justify-between flex-wrap md:flex-nowrap py-12 md:py-16 border-y border-foreground w-full">
          <div className="flex flex-col items-start justify-between gap-4">
            <Image
              height={100}
              width={200}
              className="w-[100px] md:w-[200px]"
              src={
                "https://utfs.io/f/QRaE9TmLS8JoW0GskAzV93iJm0k54l8QjZnxIufGLthXdgER"
              }
              alt="Logo"
            />
            <p className="text-extra_paragraph_heading max-w-[280px] font-paragraph font-normal text-foreground">
              We help you derive maximum value from you ecosystem data.
            </p>
            <ul className="flex items-center justify-center gap-4">
              {socialMediaIcons.length
                ? socialMediaIcons.map((item, i) => {
                    const Icon = Icons[item.image];

                    return (
                      <li key={i} className="flex items-center justify-center">
                        <Link href={item.url}>
                          <Icon className="w-8 h-8 p-1 rounded-full bg-foreground cursor-pointer" />
                        </Link>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {menuLinks.map((item, i) => (
              <li key={i} className="min-w-[200px]">
                <Link className="text-foreground" href={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap md:flex-nowrap py-6">
          <span className="text-extra_paragraph_heading font-paragraph font-normal text-foreground max-w-xl">
            Copyright @ 2024
          </span>
          <Link
            className="text-extra_paragraph_heading font-paragraph font-normal text-foreground max-w-xl"
            href={"#"}
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
