"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { mainNavContents } from "@/config/marketing";
import { buttonVariants } from "@/app/_components/ui/button";
import MobileNav from "@/app/_components/mobile-nav";
import { Icons } from "@/app/_components/icons";

interface DashboardHeaderProps {}

const DashboardHeader: FC<DashboardHeaderProps> = ({}) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <header
      className={cn(
        "flex flex-row backdrop-blur bg-foreground items-center justify-end gap-8 py-4 z-20 px-10 border-b fixed w-screen top-0 "
      )}
    >
      <Link href={"/"}>Home</Link>
    </header>
  );
};

export default DashboardHeader;
