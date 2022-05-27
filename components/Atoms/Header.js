import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <div className="my-8">
      <div className="text-4xl md:text-6xl capitalize">{title}</div>
      <p>{subtitle}</p>
    </div>
  );
}
