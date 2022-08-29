import Script from "next/script";
import React from "react";
import { DataHead, Footer, Header, Menu } from "../components";
import ListItem from "../components/molecules/ListItem";
import { experiences } from "../utils/experience";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto font-mono">
      <DataHead title="Experience" />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Menu />
      <main className="px-5 lg:mx-20">
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
      <Footer />
    </div>
  );
}
