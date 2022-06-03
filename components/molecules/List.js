import React from "react";

export default function List({ title, content }) {
  return (
    <section>
      <h1 className="font-bold text-xl uppercase">{title}</h1>
      <ul className="list-disc list-inside gap-y-4 mt-4 flex flex-col">
        {content.map((data, i) => (
          <li key={i} className="capitalize">
            {data}
          </li>
        ))}
      </ul>
    </section>
  );
}
