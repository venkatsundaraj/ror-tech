"use client";

// import { contentLists } from "@/config/marketing";
import Link from "next/link";
import { FC } from "react";
import { cn } from "@/lib/utils";

// import CreatePost from "@/app/_components/create-post";
import SignoutButton from "@/app/_components/signout-button";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <nav className="max-w-[280px] w-full flex flex-col items-start justify-between border-e border-e-foreground h-screen overflow-hidden p-4 sticky top-0 left-0">
      <ul className="flex list-none items-center flex-col justify-between w-full">
        {Array.from({ length: 1 }).map((item, i) => (
          <li className="text-subtitle_heading w-full text-center" key={i}>
            <Link href="/dashboard/case-studies/add"> </Link>
          </li>
        ))}
      </ul>
      <SignoutButton />
    </nav>
  );
};

export default Sidebar;
