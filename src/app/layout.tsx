import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const heading = Kanit({
  variable: "--heading",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const paragraph = Kanit({
  variable: "--paragraph",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROR Technology",
  description: "Homepage | ROR Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${heading.variable} ${paragraph.variable}`,
          "antialiased grainy font-sans min-h-screen w-screen relative overflow-x-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
