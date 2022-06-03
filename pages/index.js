/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Suraji } from "../assets/images";
import { DataHead, Main } from "../components";
import { getAllBlogs } from "../lib/blogs";
import { contacts } from "../utils/general";

export default function Home({ allPosts }) {
  return (
    <Main>
      <DataHead title="Home | Suraji" />
      <main className="flex gap-y-10 flex-col justify-center h-screen">
        <section className="flex items-center justify-between">
          <div className="gap-5 flex flex-col w-[43%]">
            <h1 className="text-gray-700 text-5xl font-bold text-center sm:text-left">
              Hi 👋 <br /> I&apos;m Suraji
            </h1>
            <p>
              Software engineer specializing in fronted development and I am
              currently looking for a Job.
              {/* I love exploring tech related stuff
              and now fall in love with react.js and javascript. */}
            </p>
          </div>
          <Image
            src={Suraji}
            alt="suraji"
            width={250}
            height={250}
            priority
            className="rounded-full border-8 border-green-500"
          />
        </section>
        <section className="gap-y-5 grid max-w-sm mx-auto">
          <div className="grid grid-flow-col gap-x-4">
            {contacts.map((contact, index) => (
              <Image
                key={index}
                src={contact.icon}
                width={25}
                height={25}
                alt={contact.alt}
              />
            ))}
          </div>
          <div className="grid grid-flow-col items-center gap-x-4">
            <button className="bg-green-500 hover:bg-transparent hover:border-2 hover:py-[6px] hover:border-green-500 hover:text-black py-2 px-5 text-white rounded-lg w-full">
              <Link href="/experience">Experiences</Link>
            </button>
            <button className="border-2 border-green-500 hover:bg-green-500 hover:text-white py-[6px] px-5 text-black rounded-lg w-full">
              <Link href="/about">Skill</Link>
            </button>
          </div>
        </section>
      </main>
    </Main>
  );
}

export async function getStaticProps() {
  const allPosts = getAllBlogs([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
