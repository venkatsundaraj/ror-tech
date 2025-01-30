import { notFound } from "next/navigation";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { db } from "@/server/db";

import { caseStudiesTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { slugify } from "@/lib/utils";
import Footer from "@/app/_components/footer";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/_components/ui/button";
import { Icons } from "@/app/_components/icons";
import { caseStudiesData } from "@/config/marketing";

interface pageProps {
  params: { caseStudiesId: string };
}

const page = async ({ params }: pageProps) => {
  const { caseStudiesId } = await params;
  if (!caseStudiesId) notFound();
  const [post] = await db
    .select()
    .from(caseStudiesTable)
    .where(eq(caseStudiesTable.slug, caseStudiesId))
    .limit(1);

  if (!post) notFound();

  const filteredCaseStudy = caseStudiesData.find(
    (item, i) => slugify(item.title) === post.slug
  );

  return (
    <>
      <section className="w-screen min-h-screen  items-center justify-center bg-background py-10 md:pt-64 md:pb-16 flex relative">
        {post.fileUrl ? (
          <Image
            alt={post.category}
            src={post.fileUrl}
            className="w-screen h-screen object-cover overflow-hidden absolute left-0 top-0"
            width="1620"
            priority
            quality={100}
            height="1400"
          />
        ) : null}

        <div className="flex items-center justify-between absolute bottom-[25px] md:bottom-[100px] left-[25px] md:left-[100px]">
          <div className="flex items-start flex-col justify-center gap-4 md:gap-4">
            <div className="flex items-center justify-center  gap-2 md:flex-nowrap">
              {post.category
                .split("-")
                .map((word) => word.trim())
                .filter((item) => item)
                .map((item, i) => (
                  <span
                    key={i}
                    className="text-extra_paragraph_heading leading-tight font-heading font-normal  flex items-center justify-center gap-1 bg-primary/90 rounded-sm p-2 text-foreground"
                  >
                    {/* {item.length ? <Icons.Dot /> : null} */}
                    {item}
                  </span>
                ))}
            </div>
            <h2 className="font-heading text-secondary_heading text-primary leading-tight md:leading-[55px] max-w-sm md:max-w-5xl">
              {post.title ? post.title : ""}
            </h2>
            <span className="text-paragraph_heading text-primary font-paragraph bg-transparent max-w-sm md:max-w-2xl">
              {post.description ? post.description : ""}
            </span>
          </div>
        </div>
      </section>

      <section className="w-screen  items-center justify-center bg-background py-5 flex">
        <div className="container flex items-start justify-center flex-col">
          <div
            className="ProseMirror text-foreground border-slate-700 px-2 md:px-6 py-4 rounded-lg"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full px-2 md:px-6 mb-4">
            {filteredCaseStudy?.benefitsData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-start gap-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={260}
                  height={260}
                  className="w-full h-auto rounded-md"
                  priority
                  quality={100}
                />
                <p className="font-heading font-normal text-subtitle_heading leading-normal text-popover">
                  {item.title}
                </p>
                <p className="font-heading font-light text-extra_paragraph_heading leading-tight text-popover">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
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
