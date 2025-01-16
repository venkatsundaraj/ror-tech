import React, { FC } from "react";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
