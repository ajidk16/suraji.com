import { format } from "date-fns";
import React from "react";

export default function Footer({className}) {
  return (
    <footer className={`text-center pt-10 pb-5 ${className}`}>
      <p className="text-gray-600">
        💖 {format(new Date(), "yyyy")} - Suraji 💖
      </p>
    </footer>
  );
}
