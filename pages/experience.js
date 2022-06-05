import React from "react";
import { DataHead, Header, Menu } from "../components";
import ListItem from "../components/molecules/ListItem";
import { experiences } from "../utils/experience";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto font-mono">
      <DataHead title="Experience" />
      <Menu />
      <main className="px-5 sm:mx-20">
        <Header title="Experiences 🔥" className="text-center mt-7 mb-10" />
        {experiences.map((experience, index) => {
          const { start_date, end_date, company, position, duty } = experience;
          return (
            <ListItem
              key={index}
              start_date={start_date}
              end_date={end_date}
              company={company}
              position={position}
              duty={duty}
            />
          );
        })}
      </main>
    </div>
  );
}
