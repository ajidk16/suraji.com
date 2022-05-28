// const readLine = require("readline");
// const util = require("util");

// const blog_post_template = `---
// title: "%s"
// date: "%s"
// image: "/images/"
// tags: "%s"
// published: true
// ---
// `;

// function ask(query) {
//   const input = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   return new Promise((resolve) =>
//     input.question(query, (answer) => {
//       input.close();
//       resolve(answer);
//     })
//   );
// }

// async function createPost() {
//   const slug = await ask("Slug: ");
//   const title = await ask("Title: ");
//   const tags = await ask("Tags: ");
//   const date = new Date();
//   const out = util.format(blog_post_template, title, tags, date);
//   const filePath = util;
// }
const readLine = require("readline");
const util = require("util");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const indexer = require("./index");

const blog_post_template = `---
title: "%s"
date: "%s"
image: "/images/"
tags: "%s"
published: true
---
`;

const cheatsheet_template = `---
title: "%s"
lang: "%s"
date: "%s"
published: true
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
  const slug = await ask("Slug: ");
  const title = await ask("Title: ");
  const tags = await ask("Tags: ");
  const date = new Date();
  const out = util.format(blog_post_template, title, date, tags);
  const filePath = util.format("./contents/_blogs/%s.md", slug.replace(" ", "-"));
  fs.writeFileSync(filePath, out);
  console.log(filePath);
  process.exit(0);
}

async function createCheatheet() {
  const slug = await ask("Slug: ");
  const title = await ask("Title: ");
  const lang = await ask("Language [go, rs, js]: ");
  const date = new Date();
  const out = util.format(cheatsheet_template, title, lang, date);
  const filePath = util.format(
    "./cheatsheets/%s/%s.md",
    lang,
    slug.replace(" ", "-")
  );
  const dirName = util.format("./cheatsheets/%s", lang);
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
  }
  fs.writeFileSync(filePath, out);
  console.log(util.format("File created: %s\n%s", filePath, out));
  process.exit(0);
}

async function updateCheatheetIndex() {
  let dir = "./cheatsheets";
  let data = new Object();
  let id = 0;
  for await (const dirPath of walk(dir)) {
    let actualDir = dirPath.slice(dir.length - 1, dirPath.length);
    if (actualDir.split("/").length < 2) {
      continue;
    }
    let [key, val] = actualDir.split("/");
    let item = {
      lang: key,
      slug: val.slice(0, val.length - 3),
    };
    id++;
    indexer.add({ ...item, id: id });
    if (data[key]) {
      data[key].push(item);
    } else {
      data[key] = [item];
    }
  }
  let filePath = "./cheatsheets/cheatsheets.json";
  fs.writeFileSync(filePath, JSON.stringify(data));

  filePath = "./cheatsheets/index.json";
  fs.writeFileSync(filePath, JSON.stringify(indexer.docs));

  filePath = "./cheatsheets/store.json";
  fs.writeFileSync(filePath, JSON.stringify(indexer.store));

  console.log(
    util.format(
      "Cheatsheet total index: %s\n",
      Object.keys(indexer.docs).length
    )
  );
}

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

function getPosts() {
  const blogDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(blogDirectory);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(blogDirectory, fileName);
    const id = fileName.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);
    return { id, content, ...data };
  });

  return posts;
}

function getUnPublishedPost() {
  const posts = getPosts();

  return posts
    .filter((item) => item.published === undefined)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((item) => item.id);
}

function updateLatestPosts() {
  const posts = getPosts()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((item) => item.published || item.published == undefined)
    .map((item) => {
      return {
        title: item.title,
        link: `/blog/${item.id}`,
        image: item.image,
        description: item.content.substr(0, 70) + "...",
      };
    })
    .slice(0, 6);

  console.log("Latest posts: ");
  posts.forEach((item, i) => console.log(`${i + 1}. ${item.title}`));

  fs.writeFileSync("./src/lib/_blogs.json", JSON.stringify(posts));
}

(async function () {
  const flag = process.argv[2];
  switch (flag) {
    case "-p":
      console.log(getUnPublishedPost());
      return;
    case "-up":
      updateLatestPosts();
      return;
    case "-uc":
      await updateCheatheetIndex();
      return;
    case "-c":
      await createCheatheet();
      return;
    default:
      await createPost();
  }
})();
