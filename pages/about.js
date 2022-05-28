/* eslint-disable @next/next/no-img-element */
import { DataHead } from "../components/Atoms";
import { Main } from "../components/molecules";

export default function About() {
  return (
    <Main>
      <DataHead title="About | Suraji" />

      <main className="flex flex-col gap-y-4 mt-16">
        <div className="flex items-center gap-x-20">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gjy29wgdj5H37sfoXKmvPOrGsQzDEyUf89bQYmKHg=s288-p-rw-no"
            alt="suraji"
            width={250}
            height={250}
            className="rounded-full border-8 border-green-500"
          />
          <div>
            <div className="text-gray-700 text-2xl font-bold text-center sm:text-left">
              My name is Suraji, I&apos;m a fronted developer
            </div>
            <br />
            <p>
              Hi, I’am Suraji from Metro Lampung, Mobile & Web Frontend Engineer
              with 2+ Years Experience in developing user interfaces. debugging
              and building a web and mobile applications incorporating a range
              of technologies.
            </p>
            <br />
            <p>
              Offering strong expertise in multiple programming languages,
              including HTML, CSS, and Javascript Seeking to secure a
              challenging position as a Mobile React Native or Web Frontend
              Enginee
            </p>
          </div>
        </div>
      </main>
    </Main>
  );
}
