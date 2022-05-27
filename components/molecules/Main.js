import React from "react";
import Menu from "./Menu";

export default function Main({ children }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Menu />
      {children}
    </div>
  );
}
