import React from "react";

export default function Skill({ background = "bg-gray-300", title }) {
  return (
    <span
      className={`rounded-sm text-xs uppercase px-1 font-bold ${background}`}
    >
      {title}
    </span>
  );
}
