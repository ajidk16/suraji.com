import { getAllBlogs, getblogBySlug } from "../../lib/blogs";
import markdownToHtml from "../../lib/markdownToHtml";

import { format, parseISO } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { BlogGithub, Footer, Menu } from "../../components/molecules";
import { DataHead } from "../../components/Atoms";

export default function Blog({ blog }) {
  const router = useRouter();
  !router.isFallback && !blog?.slug ? "error" : null;

  return (
    <div className="w-full bg-gray-50">
      <DataHead title={blog?.title} />
      <Menu className='max-w-5xl mx-auto' />
      <div className="flex flex-col px-5 mt-7 lg:mt-0 lg:py-7 max-w-2xl mx-auto bg-white">
        <div className="text-4xl hover:underline capitalize font-bold outline-hidden">
          <Link href={`${encodeURIComponent(blog?.slug)}/`}>{blog?.title}</Link>
        </div>
        <p className="mt-4">{blog?.excerpt}</p>
        <div className="flex justify-between mt-4 text-sm items-center">
          <div>
            <span className="font-extrabold capitalize">
              <Link href="/about">{blog?.author.name}</Link>{" "}
            </span>
            / {format(parseISO(blog?.date), "MMMM d, yyyy")}
          </div>
          <div>4 min red • bendera</div>
        </div>
        <BlogGithub content={blog?.content} />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const blog = getblogBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(blog?.content || "");

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const blogs = getAllBlogs(["slug"]);
  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog?.slug,
        },
      };
    }),
    fallback: false,
  };
}
