import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { caseStudiesTable, contactFormTable } from "@/server/db/schema";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const [caseStudies] = await db
      .insert(caseStudiesTable)
      .values({
        category: "",
        content: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
        fileUrl: "",
        slug: "",
        title: "",
      })
      .returning({ id: caseStudiesTable.id });
    console.log(caseStudies);

    return NextResponse.json({
      id: JSON.stringify(caseStudies.id),
      message: "Blog Successfully Uploaded",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    if (err instanceof ZodError) {
      // Handle Zod validation errors
      const errorMessages = err.errors.map((error) => ({
        field: error.path.join("."),
        message: error.message,
      }));

      return NextResponse.json(
        {
          message: "Validation failed",
          errors: errorMessages,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
