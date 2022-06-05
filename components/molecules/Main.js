import { format } from "date-fns";
import React from "react";
import Menu from "./Menu";

export default function Main({ height = "sm:h-screen", children }) {
  return (
    <div
      className={`w-full max-w-5xl mx-auto text-gray-800 ${height} flex flex-col font-mono`}
    >
      <Menu />
      <main className={`flex gap-y-10 flex-col justify-center mt-10 px-5 sm:px-0 ${height} sm:mt-0`}>
        {children}
      </main>
      <footer className="text-center mt-auto pt-10 pb-5">
        <p className="text-gray-600">
          💖 {format(new Date(), "yyyy")} - Suraji 💖
        </p>
      </footer>
    </div>
  );
}
