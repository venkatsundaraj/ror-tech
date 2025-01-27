import { db } from "@/server/db";
import { caseStudiesTable } from "@/server/db/schema";
import EditPostButton from "@/app/_components/edit-post-button";
import { FC } from "react";
import Link from "next/link";

interface pageProps {}
export const revalidate = 0; // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(caseStudiesTable);
  return data;
}

const page = async ({}: pageProps) => {
  const data = await getData();

  return (
    <main className="bg-background min-h-screen w-full flex items-start flex-col justify-center p-4 ">
      <section className="w-full flex items-start justify-center bg-background py-4 md:py-24  min-h-screen">
        <div className="container flex-col flex items-start justify-center gap-8">
          <h2 className="text-primary text-secondary_heading font-heading leading-[1.1]">
            Case Studies
          </h2>
          <ul className="w-full flex flex-col items-center justify-start gap-4">
            {data.length ? (
              data.map((item, i) => (
                <li key={i} className="w-full bg-primary rounded-lg">
                  <div className="flex w-full py-4 px-4 border border-foreground rounded-md items-center justify-between">
                    <h4 className="text-foreground">
                      {item.title} ({item.category})
                    </h4>
                    <EditPostButton post={item} type="case-studies" />
                  </div>
                </li>
              ))
            ) : (
              <p className="text-primary text-extra_paragraph_heading font-paragraph">
                No posts are updated.
              </p>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default page;
