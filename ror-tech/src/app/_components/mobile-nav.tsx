import { FC } from "react";
import { MainNavItems } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MobileNavProps {
  items: MainNavItems;
  children?: React.ReactNode;
  removeHandler: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ items, children, removeHandler }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 top-24 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 xl:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.length
            ? items.map((item, i) => (
                <Link
                  key={i}
                  href={item.disabled ? "#" : item.href}
                  onClick={removeHandler}
                  className={cn(
                    "flex w-full items-center rounded-md p-2 text-extra_subtitle_heading font-medium hover:underline",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  {item.title}
                </Link>
              ))
            : null}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
