import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const blogsDirectory = join(process.cwd(), 'contents/_blogs')

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory)
}

export function getblogBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(blogsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllBlogs(fields = []) {
  const slugs = getBlogSlugs()
  const blogs = slugs
    .map((slug) => getblogBySlug(slug, fields))
    // sort blogs by date in descending order
    .sort((blog1, blog2) => (blog1.date > blog2.date ? -1 : 1))
  return blogs
}
