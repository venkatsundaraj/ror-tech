import React, { FC } from "react";
import Header from "@/app/_components/header";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background">
      <Header />
      {children}
    </main>
  );
};

export default layout;
