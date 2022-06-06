import React from "react";

export default function Header({ className, title, subtitle }) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="text-2xl sm:text-3xl lg:text-4xl capitalize mb-2">{title}</div>
      <p>{subtitle}</p>
    </div>
  );
}
