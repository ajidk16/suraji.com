/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { portofolio1 } from "../assets";
import { IcPanah, IcSource } from "../assets/icons";
import { DataHead, Header } from "../components/Atoms";
import { Main } from "../components/molecules";
import Skill from "../components/molecules/Skill";

export default function Projects() {
  const projects = [
    {
      img: portofolio1,
      title: "Quoteit! twitter bot",
      date: "June 2019",
      content:
        "Quoteitbot is a bot that generates an image based on a tweet that you mentioned using an image from unsplash.",
      skill: [
        {
          title: "tailwind",
          background: "bg-[#38BDF8]",
        },
        {
          title: "next.js",
          background: "bg-white",
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
      img: portofolio1,
      title: "My first portfolio using next.JS",
      date: "June 2020",
      content:
        "this project contains dashboard, about, resume, project, contact. This UI is from MICHAEL D'ANGELO for a tailwind slicing practice.",
      skill: [
        {
          title: "tailwind",
          background: "bg-[#38BDF8]",
        },
        {
          title: "next.js",
          background: "bg-black text-white",
        },
        {
          title: "react",
          background: "bg-[#61DAFB]",
        },
      ],
      // linkVisit: "",
      linkSource: "https://github.com/ajidk/portofolio",
    },
  ];
  return (
    <Main>
      <DataHead title="Project | Suraji" />
      <Header title="projects" subtitle="Some collection of my past works." />
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-2 border-2 border-dashed rounded border-gray-200 items-center mb-4"
          >
            <div>
              <Image
                src={project.img}
                alt="random"
                className="h-80 w-full rounded"
                height={300}
                width={500}
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
                {project.linkVisit && (
                  <a
                    className="font-semibold text-lg flex items-center gap-x-2"
                    href={project.linkVisit}
                    target="__blank"
                  >
                    <Image src={IcPanah} alt="panah" /> Visit Project
                  </a>
                )}
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
    </Main>
  );
}
