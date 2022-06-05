import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="text-4xl sm:text-5xl capitalize mb-2">{title}</div>
      <p>{subtitle}</p>
    </div>
  );
}
