import { format } from "date-fns";
import React from "react";
import Menu from "./Menu";

export default function Main({ children }) {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 text-gray-800 h-screen flex flex-col">
      <Menu />
      {children}
      <footer className="text-center mt-auto pt-10">
        <p className="text-gray-600">
          💖 {format(new Date(), "yyyy")} - Suraji 💖
        </p>
      </footer>
    </div>
  );
}
