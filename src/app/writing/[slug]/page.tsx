import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/content/site";
import { formatDate, getAllPostSlugs, getPost } from "@/lib/posts";
import { ArrowLeft } from "@/components/icons";
import { Tag } from "@/components/section";

// Every post file is prerendered; drafts resolve to a 404 in production builds.
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

async function loadPost(slug: string) {
  "use cache";
  return getPost(slug);
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">): Promise<Metadata> {
  "use cache";
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return {};
  const url = `/writing/${slug}`;
  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.date,
      authors: [site.fullName],
    },
  };
}

export default function PostPage({ params }: PageProps<"/writing/[slug]">) {
  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-0 sm:py-24">
      <Link href="/writing" className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
        <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
        Writing
      </Link>
      <Suspense>
        <Post params={params} />
      </Suspense>
    </article>
  );
}

async function Post({ params }: { params: PageProps<"/writing/[slug]">["params"] }) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    url: `${site.url}/writing/${slug}`,
    author: { "@type": "Person", name: site.fullName, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="mt-10 border-b border-line pb-8">
        <p className="font-mono text-xs text-muted">
          <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time> · {post.meta.readingMinutes} min read
          {post.meta.draft && <span className="ml-2 text-accent">draft</span>}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-balance sm:text-5xl">
          {post.meta.title}
        </h1>
        {post.meta.description && <p className="mt-4 text-lg text-muted">{post.meta.description}</p>}
        {post.meta.tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tags">
            {post.meta.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>
        )}
      </header>
      <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}
