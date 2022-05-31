const readLine = require("readline");
const util = require("util");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const indexer = require("./index");

const blog_post_template = `---
title: "%s"
excerpt: "%s"
coverImage: "/assets/blog/%s"
date: "%s"
author:
  name: "%s"
  picture: "/assets/blog/authors/%s"
ogImage:
  url: "/assets/blog/%s"
---
`;

function ask(query) {
  const input = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    input.question(query, (asnwer) => {
      input.close();
      resolve(asnwer);
    })
  );
}

async function createPost() {
  const slug = await ask("slug: ");
  const title = await ask("title: ");
  const excerpt = await ask("excerpt: ");
  const coverImage = await ask("coverImage: ");
  const authorName = await ask("authorName: ");
  const authorPicture = await ask("authorPicture: ");
  const ogImageURL = await ask("ogImageURL: ");
  const date = new Date();
  const out = util.format(
    blog_post_template,
    title,
    excerpt,
    coverImage,
    date,
    authorName,
    authorPicture,
    ogImageURL
  );
  console.log(out);

  const filePath = util.format(
    "./contents/_blogs/%s.md",
    slug.replace(" ", "-")
  );

  fs.writeFileSync(filePath, out);
  console.log(filePath);
  process.exit(0);
}

(async function () {
  const flag = process.argv[2];
  switch (flag) {
    default:
      await createPost();
  }
})();
