import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactLenis from "./_components/react-lenis";
import { Toaster } from "@/app/_components/ui/toaster";

const heading = Kanit({
  variable: "--heading",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const paragraph = Kanit({
  variable: "--paragraph",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROR Technologies",
  description: "Homepage | ROR Technologies",
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
        <ReactLenis>{children}</ReactLenis>
        <Toaster />
      </body>
    </html>
  );
}
