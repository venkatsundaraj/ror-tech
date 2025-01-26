"use client";

import Link from "next/link";
import { FC } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordian";
import CreatePost from "@/app/_components/create-post";
import SignoutButton from "@/app/_components/signout-button";
import { contentLists } from "@/config/marketing";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <nav className="max-w-[280px] w-full flex border-r shadow-sm border-r-popover flex-col items-start justify-between border-e border-e-foreground h-screen overflow-hidden p-4 sticky top-0 left-0">
      <ul className="flex list-none items-center flex-col justify-between w-full">
        {contentLists.map((item, i) => (
          <li className="text-subtitle_heading w-full text-center" key={i}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-primary ">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex items-start px-14 justify-center gap-2 text-subtitle_heading flex-col">
                    {item.subItems.map((subItem, i) =>
                      subItem.type !== "button" ? (
                        <li key={i}>
                          <Link
                            key={i}
                            href={subItem.disabled ? "#" : subItem.href}
                            className={cn(
                              "inline-flex bg-transparent items-center text-secondary_heading text-primary flex-row justify-center hover:text-primary/80 text-sm font-medium font-paragraph",
                              {
                                "cursor-not-allowed text-foreground/50":
                                  subItem.disabled,
                              }
                            )}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ) : (
                        <li key={i}>
                          <CreatePost subItem={subItem} />
                        </li>
                      )
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
      <SignoutButton />
    </nav>
  );
};

export default Sidebar;
