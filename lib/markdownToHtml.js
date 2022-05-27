import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify/lib";
import remarkParse from "remark-parse/lib";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);

  // return result.toString();
  return String(result);
}
