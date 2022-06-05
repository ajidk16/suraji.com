import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
  const [Menu, setMenu] = useState(false);
  console.log(Menu);

  return (
    <main className="sticky top-0 z-50 bg-white">
      {Menu === true && (
        <div className="absolute bg-green-500 w-full h-screen py-2 sm:hidden">
          <div className="flex justify-between px-5 items-center text-white">
            <div
              className={`uppercase font-extrabold text-2xl mr-10`}
              onClick={() => setMenu(!Menu)}
            >
              <Link href="/">ajidk</Link>
            </div>
            <button onClick={() => setMenu(!Menu)} className="text-2xl">
              X
            </button>
          </div>
          <div className="flex justify-center flex-col gap-y-6 items-center h-screen">
            {menus.map((menu, index) => {
              const isActive = menu.exact
                ? menu.link === router.asPath
                : router.asPath.startsWith(menu.link);

              return (
                <div
                  key={index}
                  className={`capitalize text-xl ${
                    isActive ? "text-black" : "text-white"
                  }`}
                  onClick={() => setMenu(!Menu)}
                >
                  <Link href={menu.link}>{menu.title}</Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="flex justify-between py-2 sm:hidden px-5 items-center">
        <div className={`uppercase font-extrabold text-2xl mr-10`}>
          <Link href="/">ajidk</Link>
        </div>
        <button onClick={() => setMenu(!Menu)} className="text-3xl">
          ☰
        </button>
      </div>
      <div className="hidden sm:flex justify-between items-center">
        <span className="uppercase text-base font-extrabold mr-10">
          <Link href="/">ajidk</Link>
        </span>
        <div className="flex gap-x-2 items-center">
          {menus.map((menu, index) => {
            const isActive = menu.exact
              ? menu.link === router.asPath
              : router.asPath.startsWith(menu.link);
            return (
              <Link href={menu.link} key={index}>
                <span
                  className={`capitalize my-3 text-sm py-2 px-5 hover:rounded-md hover:bg-green-500 ${
                    isActive ? "bg-green-500 rounded-md text-white" : null
                  } hover:text-white cursor-pointer`}
                >
                  {menu.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
