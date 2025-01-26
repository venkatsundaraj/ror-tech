"use client";
import { FC, useState } from "react";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import { NavItem, SubNavItem } from "@/types";
import { cn, slugify } from "@/lib/utils";
import axios from "axios";
import { toast } from "@/app/_components/ui/use-toast";
import { useRouter } from "next/navigation";

interface CreatePostProps {
  subItem: SubNavItem;
}

const CreatePost: FC<CreatePostProps> = ({ subItem }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const addCaseStudiesHandler = async function () {
    try {
      setIsLoading(true);
      const response = await fetch("/api/post/case-study", {
        method: "POST",
      });
      console.log(response);

      if (response.statusText !== "OK") {
        if (response.status !== 200) {
          return toast({
            title: "Something Went Wrong",
            description: "Try afte some time Please",
            variant: "destructive",
          });
        }
      }
      const data = await response.json();

      if (!data.id) {
        return toast({
          title: "Something Went Wrong",
          description: "Try afte some time Please",
          variant: "destructive",
        });
      }

      toast({
        title: "New Case Study is created",
        description: "Please enter your data",
        variant: "default",
      });
      router.refresh();
      return router.push(`/dashboard/case-studies/${data.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const postCreateHandler = function (e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    console.log(target.value);
    if (target.value === "add-case-study") {
      addCaseStudiesHandler();
    }
  };

  return (
    <Button
      onClick={(e) => postCreateHandler(e)}
      value={slugify(subItem.title)}
      disabled={isLoading}
      className={cn(
        "inline-flex bg-transparent p-0 hover:bg-transparent items-center text-secondary_heading text-primary flex-row justify-center hover:text-primary/80 text-sm font-medium font-paragraph",
        {
          "cursor-not-allowed text-foreground/50": subItem.disabled,
        }
      )}
    >
      {subItem.title}
    </Button>
  );
};

export default CreatePost;
