import { format } from "date-fns";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-auto pt-10 pb-5">
      <p className="text-gray-600">
        💖 {format(new Date(), "yyyy")} - Suraji 💖
      </p>
    </footer>
  );
}
