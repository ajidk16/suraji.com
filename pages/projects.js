/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Header } from "../components/Atoms";
import { Menu } from "../components/molecules";
import Skill from "../components/molecules/Skill";
import { IcPanah } from "../src/assets";
import { IcSource } from "../src/assets/icons/index copy";

export default function Projects() {
  const projects = [
    {
      img: "https://www.wisesa.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finterfest-2019.31556901.jpg&w=640&q=75",
      title: "Quoteit! twitter bot",
      date: "June 2019",
      content:
        "Quoteitbot is a bot that generates an image based on a tweet that you mentioned using an image from unsplash.",
      skill: [
        {
          title: "javascript",
          background: "bg-yellow-300",
        },
        {
          title: "php",
          // background: "",
        },
        {
          title: "html",
          // background: "",
        },
      ],
      linkVisit: "https://ajidk.vercel.app/",
      linkSource: "",
    },
    {
      img: "https://pbs.twimg.com/media/FTuYdtiaMAAOkKI?format=jpg&name=900x900",
      title: "Quoteit! twitter bot",
      date: "June 2019",
      content:
        "Quoteitbot is a bot that generates an image based on a tweet that you mentioned using an image from unsplash.",
      skill: [
        {
          title: "javascript",
          background: "bg-yellow-300",
        },
        {
          title: "php",
          // background: "",
        },
        {
          title: "html",
          // background: "",
        },
      ],
      linkVisit: "https://ajidk.vercel.app/",
      linkSource: "https://github.com/ajidk/tailwind-thebox",
    },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Menu />
      <Header title='projects' subtitle='Some collection of my past works.' />
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-2 border-2 border-dashed rounded border-gray-200 items-center mb-4"
          >
            <div>
              <img
                src={project.img}
                alt="random"
                className="h-80 w-full rounded"
              />
            </div>
            <div className="px-4 flex flex-col">
              <a
                className="text-4xl leading-10 font-bold hover:underline"
                href={project.linkVisit}
              >
                {project.title}
              </a>
              <p className="text-sm mt-2">Created {project.date}</p>
              <p className="mt-2">{project.content}</p>
              <div className="flex flex-wrap mt-2 space-x-2">
                {project.skill.map((skill, index) => {
                  return (
                    <Skill
                      background={skill.background}
                      title={skill.title}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="flex mt-4 space-x-4 items-center">
                <a
                  className="font-semibold text-lg flex items-center gap-x-2"
                  href={project.linkVisit}
                  target="__blank"
                >
                  <Image src={IcPanah} alt="panah" /> Visit Project
                </a>
                {project.linkSource && (
                  <a
                    className="font-semibold text-lg flex items-center gap-x-2"
                    href={project.linkSource}
                    target="__blank"
                  >
                    <Image src={IcSource} alt="source" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
