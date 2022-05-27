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
      <div className="flex gap-x-2 items-center">
        <span className="uppercase text-base mr-10">
          <Link href="/">ajidk</Link>
        </span>
        {menus.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <span className="capitalize my-3 text-sm py-2 px-5 hover:rounded-md hover:bg-green-500 hover:text-white cursor-pointer">
              {menu.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
