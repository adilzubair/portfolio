import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">404</p>
      <h1 className="mt-4 font-serif text-5xl sm:text-6xl">This page doesn&apos;t exist.</h1>
      <Link href="/" className="group mt-10 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
        <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </div>
  );
}
