"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { mainNavContents } from "@/config/marketing";
import { buttonVariants } from "@/app/_components/ui/button";
import MobileNav from "@/app/_components/mobile-nav";
import { Icons } from "@/app/_components/icons";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <header
      className={cn(
        "flex flex-row items-center justify-between gap-8 py-4 z-20 px-10 border-b fixed w-screen top-0 ",
        true && "justify-between"
      )}
    >
      <Link
        href="/"
        className="inline-flex z-40 font-semibold items-center justify-center flex-nowrap gap-2"
      >
        {/* <Image
          height={200}
          width={300}
          className="w-[100px] md:w-[200px]"
          src={
            "https://utfs.io/f/QRaE9TmLS8JoW0GskAzV93iJm0k54l8QjZnxIufGLthXdgER"
          }
          alt="Logo"
        /> */}
        <Icons.RORLogo className="w-[300px] h-auto" />
      </Link>
      {mainNavContents.length ? (
        <nav className="hidden xl:flex min-h-16 items-center justify-center overflow-hidden relative gradient-border-t border-gradient-r-purple-blue p-3">
          {/* I shouldn't have learnt the CSS at all */}

          <div className="absolute top-0 w-1/12 h-0.5 left-0 bg-foreground z-10" />
          <div className="absolute top-0 w-11/12 -me-1 h-0.5 right-0 bg-foreground z-10" />

          <div className="absolute bottom-0 w-11/12 -ms-1 h-0.5 left-0 bg-foreground z-10" />
          <div className="absolute bottom-0 w-1/12   h-0.5 right-0 bg-foreground z-10" />

          <div className="absolute left-0 w-0.5 h-2/6 top-0 bg-foreground z-10" />
          <div className="absolute left-0 w-0.5  h-4/6 -mb-1 bottom-0 bg-foreground z-10" />

          <div className="absolute right-0 w-0.5 h-4/6 top-0 bg-foreground z-10" />
          <div className="absolute right-0 w-0.5  h-2/6 -mb-1 bottom-0 bg-foreground z-10" />

          <ul className="flex items-center justify-between gap-6 backdrop-blur bg-foreground/5 ps-4">
            {mainNavContents.map((item, i) => (
              <li key={i}>
                <Link
                  className={cn(
                    "inline-flex bg-transparent items-center text-foreground flex-row justify-center hover:text-primary-foreground/60 text-sm font-medium font-paragraph",
                    {
                      "cursor-not-allowed text-foreground/50": item.disabled,
                    },
                    item.href.startsWith(`/${segment}`)
                      ? "text-secondary-foreground font-bold"
                      : "text-foreground"
                  )}
                  href={item.href}
                >
                  {item.title}{" "}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className={cn(
                  "inline-flex bg-transparent items-center text-foreground flex-row justify-center text-sm font-medium font-paragraph  !rounded-none",
                  buttonVariants({ variant: "secondary" })
                )}
                href={"#contact-us"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 xl:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <Icons.CircleX className="text-foreground" />
        ) : (
          <Icons.Menu className="text-foreground" />
        )}
        <span className="font-bold hidden">Menu</span>
      </button>
      {showMobileMenu && mainNavContents && (
        <MobileNav
          removeHandler={() => setShowMobileMenu(!showMobileMenu)}
          items={mainNavContents}
        />
      )}
    </header>
  );
};

export default Header;
