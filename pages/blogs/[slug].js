import { getAllBlogs, getblogBySlug } from "../../lib/blogs";
import markdownToHtml from "../../lib/markdownToHtml";

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { BlogGithub, Menu } from "../../components/molecules";

export default function Blog({ blog, morePost, preview }) {
  const router = useRouter();
  !router.isFallback && !blog?.slug ? "error" : null;
  console.log(blog);
  console.log(`router : ${router}`);
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Menu />
      <div className="flex flex-col">
        <div className="text-4xl md:text-6xl hover:underline">
          <Link href={`${encodeURIComponent(blog.slug)}/`}>{blog.title}</Link>
        </div>
        <p className="mt-4">{blog.excerpt}</p>
        <div className="flex justify-between mt-4 text-sm items-center">
          <div>
            <span className="font-extrabold">
              <Link href="/about">{blog.author.name}</Link>{" "}
            </span>
            / {format(parseISO(blog.date), "MMMM d, yyyy")}
          </div>
          <div>4 min red • bendera</div>
        </div>
        <BlogGithub content={blog.content} />
      </div>
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

  const content = await markdownToHtml(blog.content || "");

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
          slug: blog.slug,
        },
      };
    }),
    fallback: false,
  };
}
