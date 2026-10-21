"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme";

// Floating pill navigation. A highlight slides under the link for the section in view.
export function Header({ showWriting }: { showWriting: boolean }) {
  const links = [
    // Experience is dropped on narrow screens so the pill fits at 360px.
    { id: "experience", href: "/#experience", label: "Experience", className: "hidden sm:block" },
    { id: "projects", href: "/#projects", label: "Projects" },
    ...(showWriting ? [{ id: "writing", href: "/writing", label: "Writing" }] : []),
    { id: "contact", href: "/#contact", label: "Contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Track whichever section crosses the upper third of the viewport.
    const sections = ["experience", "projects", "writing", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    const onTop = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onTop);
      io.disconnect();
    };
  }, []);

  // Measure the active link so the highlight can slide to it.
  useLayoutEffect(() => {
    const measure = () => {
      const el = active ? navRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`) : null;
      setIndicator(el && el.offsetWidth > 0 ? { left: el.offsetLeft, width: el.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <header className="pointer-events-none sticky top-0 z-40 flex justify-center px-3 pt-3 sm:pt-4">
      <div
        className={`pointer-events-auto relative flex items-center gap-1 overflow-hidden rounded-full border p-1.5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-line bg-surface/80 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)]"
            : "border-line/70 bg-surface/55 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full py-0.5 pl-0.5 pr-1 sm:pr-3"
          aria-label={`${site.name}, home`}
        >
          <Image
            src={site.avatar}
            alt=""
            width={64}
            height={64}
            className="size-8 rounded-full border border-line object-cover transition-transform group-hover:-rotate-6"
          />
          <span className="hidden text-sm font-medium tracking-tight md:inline">{site.name}</span>
        </Link>

        <span className="mx-0.5 h-5 w-px bg-line" aria-hidden />

        <nav ref={navRef} aria-label="Primary" className="relative flex items-center">
          <span
            className="absolute inset-y-0 rounded-full bg-fg transition-[left,width,opacity] duration-300 ease-out"
            style={{
              left: indicator?.left ?? 0,
              width: indicator?.width ?? 0,
              opacity: indicator ? 1 : 0,
            }}
            aria-hidden
          />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-id={l.id}
              aria-current={active === l.id ? "true" : undefined}
              className={`relative rounded-full px-3 py-1.5 text-[13px] transition-colors duration-300 sm:px-3.5 sm:text-sm ${
                active === l.id ? "text-bg" : "text-muted hover:text-fg"
              } ${"className" in l ? l.className : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <span className="mx-0.5 h-5 w-px bg-line" aria-hidden />
        <ThemeToggle />

        <div className="scroll-progress absolute inset-x-4 bottom-0 h-px bg-accent" aria-hidden />
      </div>
    </header>
  );
}
