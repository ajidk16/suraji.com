/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { bootcampMei, portofolio1 } from "../assets";
import { IcPanah, IcSource } from "../assets/icons";
import { DataHead, Header } from "../components/Atoms";
import { Main } from "../components/molecules";
import Skill from "../components/molecules/Skill";

export default function Projects() {
  const projects = [
    {
      img: bootcampMei,
      title: "Slicing Company by. Kawah Edukasi",
      date: "Mei 2022",
      content:
        "bootcamp bulan kedua dapat tugas dari kawah edukasi untuk membuat ui tentang perusahaan. ini menggunakan tailwind. react,js, javascript",
      skill: [
        {
          title: "tailwind",
          background: "bg-[#38BDF8]",
        },
        {
          title: "react.js",
          background: "bg-[#61DAFB]",
        },
        {
          title: "javascript",
          background: "bg-[#FCDC00]",
        },
      ],
      linkVisit: "https://ajidk.vercel.app/",
      linkSource: "",
    },
    {
      img: bootcampMei,
      title: "Slicing Company by. Kawah Edukasi",
      date: "Mei 2022",
      content:
        "bootcamp bulan kedua dapat tugas dari kawah edukasi untuk membuat ui tentang perusahaan. ini menggunakan tailwind. react,js, javascript",
      skill: [
        {
          title: "tailwind",
          background: "bg-[#38BDF8]",
        },
        {
          title: "react.js",
          background: "bg-[#61DAFB]",
        },
        {
          title: "javascript",
          background: "bg-[#FCDC00]",
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
          title: "react.js",
          background: "bg-[#61DAFB]",
        },
      ],
      // linkVisit: "",
      linkSource: "https://github.com/ajidk/portofolio",
    },
  ];
  return (
    <Main height="h-auto">
      <DataHead title="Portfolio" />
      <main className="mt-7">
        <Header
          title="portfolio"
          subtitle="Some collection of my past works."
        />
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="grid sm:grid-cols-2 border-2 border-dashed rounded border-gray-200 items-center mb-4 gap-y-4"
            >
              <div className="justify-center flex sm:block">
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
      </main>
    </Main>
  );
}
