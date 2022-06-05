/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Suraji } from "../assets/images";
import { DataHead } from "../components/Atoms";
import { Main } from "../components/molecules";
import List from "../components/molecules/List";
import { dream, likes } from "../utils/about";

export default function About() {
  return (
    <Main height={null}>
      <DataHead title="About | Suraji" />
      <section>
        <div className="flex justify-center">
          <Image
            src={Suraji}
            alt="suraji"
            width={250}
            height={250}
            className="rounded-full border-8 border-green-500"
          />
        </div>
        <div className="text-gray-700 text-3xl sm:text-5xl font-bold text-center capitalize">
          Hi 👋, thanks for <br />
          stoping by.
        </div>
      </section>
      <section>
        <p>
          I&apos;am Suraji from Metro Lampung, Mobile & Web Frontend Engineer
          with 2+ Years Experience in developing user interfaces. debugging and
          building a web and mobile applications incorporating a range of
          technologies.
        </p>
        <br />
        <p>
          Offering strong expertise in multiple programming languages, including
          HTML, CSS, and Javascript Seeking to secure a challenging position as
          a Mobile React Native or Web Frontend Engineer
        </p>
      </section>
      <List title="i like" content={likes} />
      <List title="i dream of" content={dream} />
    </Main>
  );
}
