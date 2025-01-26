import { db } from "@/server/db";
import { caseStudiesTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

import { caseStudySchema } from "@/lib/validation/auth";
import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

const routerContext = z.object({
  params: z.object({
    caseStudyId: z.string(),
  }),
});

type routerContextSchema = z.infer<typeof routerContext>;

export async function PATCH(req: NextRequest, context: routerContextSchema) {
  try {
    const body = await req.json();

    const { params } = await context;

    // const { params } = routerContext.parse(context);

    const parsedPost = caseStudySchema.parse(body);

    console.log(parsedPost);

    const blog = await db
      .update(caseStudiesTable)
      .set(parsedPost)
      .where(eq(caseStudiesTable.id, Number(params.caseStudyId)));

    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (err) {
    console.log(err);
    if (err instanceof ZodError) {
      return new NextResponse(JSON.stringify(err.message), { status: 422 });
    }
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
