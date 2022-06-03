import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Menu() {
  const router = useRouter();
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
      link: "/portfolio",
      title: "portfolio",
    },
    {
      link: "/contact",
      title: "contact",
    },
  ];


  return (
    <div className="flex justify-between items-center">
      <span className="uppercase text-base font-extrabold mr-10">
        <Link href="/">ajidk</Link>
      </span>
      <div className="flex gap-x-2 items-center">
        {menus.map((menu, index) => {
          const isActive = menu.exact
            ? menu.link === router.asPath
            : router.asPath.startsWith(menu.link);
            console.log(isActive);
          return (
            <Link href={menu.link} key={index}>
              <span className={`capitalize my-3 text-sm py-2 px-5 hover:rounded-md hover:bg-green-500 ${isActive?'bg-green-500 rounded-md text-white':null} hover:text-white cursor-pointer`}>
                {menu.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
