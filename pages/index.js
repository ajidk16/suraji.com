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
      <section className="flex items-center gap-y-4 sm:gap-y-0 flex-col-reverse sm:flex-row sm:justify-between">
        <div className="sm:gap-5 flex flex-col sm:w-[43%]">
          <h1 className="text-gray-700 text-4xl sm:text-5xl mb-4 sm:mb-0 font-bold text-center sm:text-left hidden sm:flex">
            Hi 👋 <br /> I&apos;m Suraji
          </h1>
          <p className="text-center sm:text-left">
            Software engineer specializing in fronted development and I am
            currently looking for a Job.
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
        <h1 className="text-gray-700 text-4xl sm:text-5xl mb-4 sm:mb-0 font-bold text-center sm:text-left sm:hidden">
          Hi 👋 <br /> I&apos;m Suraji
        </h1>
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
