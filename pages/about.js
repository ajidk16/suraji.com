/* eslint-disable @next/next/no-img-element */
import { DataHead } from "../components/Atoms";
import { Main } from "../components/molecules";

export default function About() {
  return (
    <Main>
      <DataHead title="About | Suraji" />
      <img
        src="https://lh3.googleusercontent.com/a-/AOh14Gjy29wgdj5H37sfoXKmvPOrGsQzDEyUf89bQYmKHg=s288-p-rw-no"
        alt="suraji"
        width={250}
        height={250}
        className="rounded-full"
      />
      <div>About</div>
    </Main>
  );
}
