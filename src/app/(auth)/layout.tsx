import React, { FC } from "react";
import Navbar from "@/app/_components/header";

import Footer from "@/app/_components/footer";
import { Toaster } from "@/app/_components/ui/toaster";
import Header from "@/app/_components/header";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background">
      {/* <Navbar items={marketingConfig} /> */}
      <Header />
      {children}
      <Footer />
      <Toaster />
    </main>
  );
};

export default layout;
