import { format } from "date-fns";
import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

export default function Main({ height = "lg:h-screen", children }) {
  return (
    <div
      className={`w-full max-w-5xl mx-auto text-gray-800 ${height} flex flex-col font-mono`}
    >
      <Menu />
      <main className={`flex gap-y-10 flex-col justify-center mt-10 px-5 lg:px-0 ${height} lg:mt-0`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
