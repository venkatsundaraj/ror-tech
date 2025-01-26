import { FC } from "react";
import UpdateCaseStudy from "@/app/_components/update-case-study";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { caseStudiesTable } from "@/server/db/schema";
import { notFound } from "next/navigation";

interface pageProps {
  params: { caseStudiesId: string };
}

const page = async ({ params }: pageProps) => {
  const { caseStudiesId } = await params;
  if (!caseStudiesId) notFound();

  const [caseStudy] = await db
    .select()
    .from(caseStudiesTable)
    .where(eq(caseStudiesTable.id, Number(caseStudiesId)))
    .limit(1);

  if (!caseStudy) notFound();

  return (
    <main className="bg-background min-h-screen w-full flex items-center justify-center">
      <UpdateCaseStudy caseStudy={caseStudy} />
    </main>
  );
};

export default page;
