"use server";

import { eq } from "drizzle-orm";
import { caseStudiesTable } from "@/server/db/schema";
import { db } from "@/server/db";

export async function deletePost(id: number, type: string) {
  try {
    if (type === "case-study") {
      await db.delete(caseStudiesTable).where(eq(caseStudiesTable.id, id));
    } else {
      throw new Error("Invalid post type");
    }
    return { success: true };
  } catch (error) {
    console.error("Failed to delete post:", error);
    return { success: false, error: "Failed to delete post" };
  }
}
