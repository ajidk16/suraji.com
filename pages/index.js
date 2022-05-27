import Head from "next/head";
import Image from "next/image";
import { DataHead } from "../components/Atoms";
import { Main } from "../components/molecules";
import { getAllBlogs } from "../lib/blogs";

export default function Home({ allPosts }) {
  // console.log(allPosts);
  return (
    <Main>
      <DataHead title="Home | Suraji" />
      <main>
        <div>Hi 👋 I'm Suraji</div>
        <p>
          Software engineer specializing in backend development and I am
          currently looking for a Job.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-green-500 py-2 px-5 text-white rounded-lg">
            Contact me
          </button>
          <button className="border-2 border-green-500 py-[6px] px-5 text-black rounded-lg">
            Learn more
          </button>
        </div>
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
