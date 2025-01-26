import { contactUsSchema } from "@/lib/validation/auth";
import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactFormTable } from "@/server/db/schema";
import { Resend } from "resend";
import { env } from "@/env";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const validatedBody = contactUsSchema.parse(body);

    const returnedValue = await db
      .insert(contactFormTable)
      .values(validatedBody);

    const resend = new Resend(env.RESEND_API_KEY);
    const response = await resend.emails.create({
      from: "venkat@jeyakumarjeyaraj.in",
      to: validatedBody.email,
      subject: "Thank you for contacting us",
      text: `Thank you for contacting us. We will get back to you soon.`,
      headers: {
        "X-Entity-Ref-ID": new Date().getTime() + "",
      },
    });

    console.log(response);
    return NextResponse.json({
      message: "Message Received Successfully",
      status: 200,
      data: returnedValue,
    });
  } catch (err) {
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
  }
}
