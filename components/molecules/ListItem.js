import React from "react";

export default function ListItem({
  start_date,
  end_date,
  company,
  position,
  duty,
}) {
  return (
    <section className="flex justify-start flex-col mb-10">
      <div className="text-xs capitalize">
        {start_date} – {end_date}
      </div>
      <div className="text-xl font-semibold capitalize">{company}</div>
      <div className="text-xs capitalize">{position} developer</div>
      {duty && (
        <ul className="list-decimal ml-5 list-inside mt-4">
          {duty.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
