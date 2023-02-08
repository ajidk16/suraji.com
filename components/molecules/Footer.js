import { format } from "date-fns";
import React from "react";

export default function Footer({className}) {
  return (
    <footer className={`text-center pt-10 pb-5 ${className}`}>
      <p className="text-gray-600">
      😍 2022 - {format(new Date(), "yyyy")} by Suraji 😍
      </p>
    </footer>
  );
}
