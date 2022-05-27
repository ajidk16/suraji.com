import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { DataHead, Header } from "../../components/Atoms";
import { Main, Menu } from "../../components/molecules";
import { getAllBlogs } from "../../lib/blogs";

export default function index({ allPosts }) {
  return (
    <Main>
      <DataHead title="Blogs | Suraji" />
      <Header
        title="blogs"
        subtitle="Some tech stuff and my random thoughts."
      />
      <div className="grid grid-cols-3 gap-4">
        {allPosts.map((blog, index) => {
          const { coverImage, excerpt, title, date, slug } = blog;

          return (
            <div
              key={index}
              className="border-2 border-dashed border-x-gray-200 rounded-md cursor-pointer"
            >
              <Link href={`/blogs/${encodeURIComponent(slug)}`}>
                <div>
                  <Image
                    src={coverImage}
                    alt={title}
                    width={500}
                    height={400}
                    className="rounded-md"
                  />
                  <div className="p-2">
                    <h1 className="text-lg font-bold leading-7 capitalize">
                      {title}
                    </h1>
                    <div className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                      <span>
                        {format(parseISO(date), "MMMM d, yyyy")} • 4 min red •
                        bendera{" "}
                      </span>
                    </div>
                    <p>{excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
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
