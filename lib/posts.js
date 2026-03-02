import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

function getPostFiles() {
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));
}

export function getAllPosts() {
  const files = getPostFiles();
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8');
    const { data } = matter(raw);
    return { slug, ...data };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  return getPostFiles().map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export async function getPostBySlug(slug) {
  const filepath = path.join(postsDir, `${slug}.md`);
  const raw = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { slug, ...data, contentHtml: processed.toString() };
}
