import type { ReactNode } from "react";
import { Reveal } from "./motion";

export function Section({
  id,
  index,
  label,
  title,
  intro,
  band = false,
  children,
}: {
  id: string;
  index: number;
  label: string;
  title?: ReactNode;
  intro?: ReactNode;
  // Tinted full-bleed background, used to break up the page rhythm.
  band?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-label={label} className={band ? "border-y border-line bg-band" : undefined}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <header className="mb-12 sm:mb-16">
            <SectionLabel index={index}>{label}</SectionLabel>
            {title && (
              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-[3.5rem]">
                {title}
              </h2>
            )}
            {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({ index, children }: { index: number; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
      <span className="text-accent">{String(index).padStart(2, "0")}</span>
      <span className="h-px w-8 bg-line" aria-hidden />
      {children}
    </p>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line bg-bg/60 px-2.5 py-0.5 font-mono text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-fg">
      {children}
    </li>
  );
}
