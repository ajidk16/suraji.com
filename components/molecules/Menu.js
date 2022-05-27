import Link from "next/link";
import React from "react";

export default function Menu() {
  const menus = [
    {
      link: "/about",
      title: "about",
    },
    {
      link: "/blogs",
      title: "blogs",
    },
    {
      link: "/projects",
      title: "projects",
    },
  ];
  return (
    <div className="flex justify-between items-center">
      <span className="uppercase">
        <Link href="/">~~ ajidk</Link>
      </span>
      <div className="flex gap-x-4">
        {menus.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <span className="capitalize my-3 py-2 px-4 hover:rounded-md hover:bg-green-300 cursor-pointer">
              {menu.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
