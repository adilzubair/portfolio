import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  tags: string[];
  readingMinutes: number;
};

// Drafts are visible while developing locally and hidden from production builds.
const showDrafts = process.env.NODE_ENV === "development";

function readPostFile(file: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    slug: file.replace(/\.mdx?$/, ""),
    title: String(data.title),
    description: String(data.description ?? ""),
    date: new Date(data.date).toISOString().slice(0, 10),
    draft: Boolean(data.draft),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingMinutes: Math.max(1, Math.ceil(content.split(/\s+/).length / 200)),
  };
  return { meta, content };
}

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => readPostFile(f).meta)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

// Includes drafts: generateStaticParams needs at least one entry, and drafts 404 in production anyway.
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export async function getPost(slug: string) {
  const file = ["md", "mdx"].map((ext) => `${slug}.${ext}`).find((f) => fs.existsSync(path.join(POSTS_DIR, f)));
  if (!file) return null;
  const { meta, content } = readPostFile(file);
  if (meta.draft && !showDrafts) return null;

  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, { theme: { light: "github-light", dark: "github-dark-dimmed" }, keepBackground: true })
    .use(rehypeStringify)
    .process(content);

  return { meta, html: String(html) };
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
