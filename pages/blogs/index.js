import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { DataHead, Header } from "../../components/Atoms";
import { Menu } from "../../components/molecules";
import { getAllBlogs } from "../../lib/blogs";

export default function index({ allPosts }) {
  return (
    <div
      className={`w-full max-w-5xl mx-auto text-gray-800 flex flex-col font-mono`}
    >
      <DataHead title="Blogs" />
      <Menu />
      <main className="px-5 lg:px-0 mt-7">
        <Header
          title="blogs"
          subtitle="Some tech stuff and my random thoughts."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPosts.map((blog, index) => {
            const { coverImage, excerpt, title, date, slug } = blog;

            return (
              <div
                key={index}
                className="border-2 border-dashed border-x-gray-200 rounded-md cursor-pointer"
              >
                <Link href={`/blogs/${encodeURIComponent(slug)}`}>
                  <div>
                    {coverImage && (
                      <Image
                        src={coverImage || ""}
                        alt={title}
                        width={500}
                        height={400}
                        className="rounded-md bg-cover"
                        layout="responsive"
                      />
                    )}
                    <div className="p-2">
                      <h1 className="text-lg font-bold leading-7 capitalize">
                        {title}
                      </h1>
                      <div className="text-sm mb-2 text-gray-700 dark:text-gray-300">
                        <span>
                          {format(parseISO(date), "MMMM d, yyyy")} 
                          {/* • 4 min red •
                          bendera{" "} */}
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
      </main>
      <footer className="text-center mt-auto pt-10 pb-5">
        <p className="text-gray-600">
          💖 {format(new Date(), "yyyy")} - Suraji 💖
        </p>
      </footer>
    </div>
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
