import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on building LLM systems: retrieval, agents, fine-tuning and evaluation.",
  alternates: { canonical: "/writing" },
};

export default function WritingIndex() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-serif text-5xl sm:text-6xl">Writing</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Notes on building LLM systems — retrieval, agents, fine-tuning and evaluation.
      </p>

      {posts.length === 0 ? (
        <p className="mt-16 text-muted">Nothing published yet.</p>
      ) : (
        <ul className="mt-16 divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group grid gap-1 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8"
              >
                <time dateTime={post.date} className="font-mono text-xs leading-7 text-muted">
                  {formatDate(post.date)}
                </time>
                <div>
                  <h2 className="font-serif text-2xl leading-snug transition-colors group-hover:text-accent">
                    {post.title}
                    {post.draft && <span className="ml-2 align-middle font-mono text-[11px] text-accent">draft</span>}
                  </h2>
                  {post.description && <p className="mt-1.5 text-muted">{post.description}</p>}
                  <p className="mt-2 font-mono text-xs text-faint">{post.readingMinutes} min read</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
