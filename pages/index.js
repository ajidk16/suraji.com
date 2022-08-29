/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Suraji } from "../assets/images";
import { DataHead, Main } from "../components";
import { getAllBlogs } from "../lib/blogs";
import { contacts } from "../utils/general";

export default function Home({ allPosts }) {
  return (
    <Main>
      <DataHead title="Home" />
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
      <section className="flex items-center gap-y-4 lg:gap-y-0 flex-col-reverse lg:flex-row lg:justify-between">
        <div className="lg:gap-5 flex flex-col lg:w-[43%]">
          <h1 className="text-gray-700 text-4xl lg:text-5xl mb-4 lg:mb-0 font-bold text-center lg:text-left hidden lg:flex">
            Hi 👋 <br /> I&apos;m Suraji
          </h1>
          <p className="text-center lg:text-left">
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
        <h1 className="text-gray-700 text-4xl lg:text-5xl mb-4 lg:mb-0 font-bold text-center lg:text-left lg:hidden">
          Hi 👋 <br /> I&apos;m Suraji
        </h1>
      </section>
      <section className="gap-y-5 grid max-w-sm mx-auto">
        <div className="grid grid-flow-col gap-x-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="cursor-pointer outline-none"
              target="__blank"
            >
              <Image
                src={contact.icon}
                width={25}
                height={25}
                alt={contact.alt}
              />
            </a>
          ))}
        </div>
        <div className="grid grid-flow-col items-center gap-x-4 outline-none">
          <button className="bg-green-500 hover:bg-transparent hover:border-2 hover:py-[6px] hover:border-green-500 hover:text-black py-2 px-5 text-white rounded-lg w-full outline-none">
            <Link href="/experience">Experiences</Link>
          </button>
          <button className="border-2 border-green-500 hover:bg-green-500 hover:text-white py-[6px] px-5 text-black rounded-lg w-full outline-none">
            <Link href="/skill">Skill</Link>
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
