import { desc } from "drizzle-orm";
import { title } from "process";
import { z } from "zod";

export const userAuthSchema = z.object({
  email: z
    .string()
    .email()
    .refine((val) => val === "venkatesh@firebrandlabs.in", {
      message: "Please enter correct email",
    }),
});

export type UserAuthSchema = z.infer<typeof userAuthSchema>;

export const contactUsSchema = z.object({
  typeOfUser: z.string().min(1),
  name: z.string().min(2, "First name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  typeOfEnquiry: z.string().min(1),
  email: z.string().email("Please enter a valid email address"),
});

export type ContactUsSchema = z.infer<typeof contactUsSchema>;

export const caseStudyBaseSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1),
  date: z.string().min(1),
  content: z.string().min(1),
  slug: z.string().optional(),
});

export const caseStudySchema = caseStudyBaseSchema.extend({
  fileUrl: z.string().url("Invalid URL format"),
});
