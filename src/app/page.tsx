import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  achievements,
  education,
  experience,
  projects,
  publications,
  site,
  skills,
  type Project,
} from "@/content/site";
import { formatDate, getPosts } from "@/lib/posts";
import { Section, SectionLabel, Tag } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import { CountUp, LocalTime, Reveal, Spotlight } from "@/components/motion";
import { ProjectArt } from "@/components/project-art";
import { ArrowRight, ArrowUpRight, Plus, SocialIcon } from "@/components/icons";

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  // Section numbers follow render order, so hiding Writing doesn't leave a gap.
  let n = 0;
  const next = () => ++n;

  return (
    <>
      <Hero />

      <Section id="about" index={next()} label="About">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <blockquote className="relative font-serif text-3xl leading-[1.2] text-balance sm:text-4xl">
              <span className="absolute -left-1 -top-6 font-serif text-7xl leading-none text-accent/40 sm:-left-6" aria-hidden>
                &ldquo;
              </span>
              {site.statement}
            </blockquote>
          </Reveal>
          <div className="space-y-5 text-[17px] leading-relaxed text-muted">
            {site.intro.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delay={i * 90}>
                <p className={i === 0 ? "text-fg" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" index={next()} label="Experience" title="Where I’ve worked">
        <ol className="relative ml-1.5 border-l border-line">
          {experience.map((role, i) => (
            <Reveal as="li" key={role.company} delay={Math.min(i, 3) * 60} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              <span
                className={`absolute -left-[5px] top-2 size-2.5 rounded-full ring-4 ring-bg ${i === 0 ? "bg-accent" : "bg-faint"}`}
                aria-hidden
              >
                {i === 0 && <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />}
              </span>
              <div className="group rounded-2xl border border-transparent p-0 transition-colors sm:-m-5 sm:p-5 sm:hover:border-line sm:hover:bg-surface">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-lg font-medium leading-snug sm:text-xl">
                    {role.title} <span className="text-muted">· {role.company}</span>
                  </h3>
                  <p className="shrink-0 font-mono text-xs whitespace-nowrap text-muted">
                    {role.start} — {role.end}
                  </p>
                </div>
                <p className="mt-1 text-sm text-faint">{role.location}</p>
                <p className="mt-3 max-w-3xl text-muted">{role.summary}</p>
                <details className="group/d mt-3" open={i === 0}>
                  <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                    <Plus className="size-3.5 transition-transform group-open/d:rotate-45" />
                    <span className="group-open/d:hidden">Show highlights</span>
                    <span className="hidden group-open/d:inline">Hide highlights</span>
                  </summary>
                  <ul className="mt-4 grid max-w-3xl gap-2.5 text-[15px] leading-relaxed">
                    {role.highlights.map((h) => (
                      <li key={h} className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-0.5 before:w-2.5 before:bg-accent">
                        {h}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section
        id="projects"
        index={next()}
        label="Projects"
        title="Selected work"
        intro="Things I’ve built at work and on my own — many of them designed to run entirely on local models."
      >
        <div className="space-y-20 sm:space-y-28">
          {featured.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-24 sm:mt-32">
          <h3 className="mb-6 font-serif text-3xl">More projects</h3>
        </Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {more.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 70}>
              <Spotlight className="h-full rounded-2xl">
                <a
                  href={p.live ?? p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-medium">{p.title}</span>
                    <ArrowUpRight className="mt-1 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                  <span className="mt-1.5 text-sm text-muted">{p.tagline}</span>
                  <span className="mt-auto pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                    {p.stack.slice(0, 3).join(" · ")}
                  </span>
                </a>
              </Spotlight>
            </Reveal>
          ))}
        </ul>
        <a
          href={`${site.socials[0].href}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
        >
          Everything else on GitHub
          <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Section>

      <Section id="skills" index={next()} label="Toolkit" title="What I reach for" band>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 80} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{s.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line px-2.5 py-1 text-sm transition-colors hover:border-accent/50 hover:bg-accent-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {posts.length > 0 && (
        <Section id="writing" index={next()} label="Writing" title="Notes from the work">
          <ul className="divide-y divide-line border-y border-line">
            {posts.map((post) => (
              <Reveal as="li" key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group grid gap-1 py-5 sm:grid-cols-[9.5rem_1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <time dateTime={post.date} className="font-mono text-xs text-muted">
                    {formatDate(post.date)}
                  </time>
                  <span className="font-serif text-2xl transition-colors group-hover:text-accent">
                    {post.title}
                    {post.draft && <span className="ml-2 align-middle font-mono text-[11px] text-accent">draft</span>}
                  </span>
                  <span className="hidden font-mono text-xs text-faint sm:inline">{post.readingMinutes} min</span>
                </Link>
              </Reveal>
            ))}
          </ul>
          <Link href="/writing" className="group mt-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
            All writing
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Section>
      )}

      <Section id="recognition" index={next()} label="Research & recognition" title="Along the way">
        {publications.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-accent">Peer-reviewed publications</h3>
            <ul className="grid gap-4 lg:grid-cols-2">
              {publications.map((pub, i) => (
                <Reveal as="li" key={pub.doi} delay={i * 90}>
                  <Spotlight className="h-full rounded-2xl">
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:p-7"
                    >
                      <span className="flex items-center justify-between gap-4 font-mono text-xs text-muted">
                        <span>
                          {pub.venue} · {pub.year}
                        </span>
                        <ArrowUpRight className="shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                      </span>
                      <span className="mt-4 font-serif text-2xl leading-snug text-balance transition-colors group-hover:text-accent">
                        {pub.title}
                      </span>
                      <span className="mt-4 text-sm leading-relaxed text-muted">
                        {pub.authors.map((a, j) => (
                          <span key={a}>
                            {j > 0 && ", "}
                            {a === pub.me ? <span className="font-medium text-fg">{a}</span> : a}
                          </span>
                        ))}
                      </span>
                      <span className="mt-auto pt-5 font-mono text-[11px] text-faint">doi:{pub.doi}</span>
                    </a>
                  </Spotlight>
                </Reveal>
              ))}
            </ul>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal as="li" key={a.title} delay={(i % 2) * 70} className="rounded-2xl border border-line p-5">
                <p className="font-medium leading-snug">{a.title}</p>
                <p className="mt-1.5 text-sm text-muted">{a.detail}</p>
                {a.year && <p className="mt-3 font-mono text-xs text-faint">{a.year}</p>}
              </Reveal>
            ))}
          </ul>
          <Reveal className="self-start rounded-2xl border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Education</p>
            <p className="mt-4 font-serif text-2xl leading-snug">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.degree}</p>
            <p className="mt-4 font-mono text-xs text-faint">
              {education.years} · {education.location}
            </p>
          </Reveal>
        </div>
      </Section>

      <Contact index={next()} />
    </>
  );
}

function Hero() {
  const current = experience[0];
  const countries = new Set(experience.map((r) => r.location.split(", ").at(-1))).size;
  const stats = [
    { value: experience.length, label: "roles in AI, backend and research" },
    { value: projects.length, label: "open-source projects" },
    { value: publications.length, label: "peer-reviewed papers" },
    { value: countries, label: "countries worked across" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow pointer-events-none absolute -right-56 -top-56 size-[46rem]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pb-24 lg:pt-24">
        <div>
          <p
            className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3 py-1 text-[13px] text-muted backdrop-blur"
            style={{ "--i": 0 } as CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability.open ? site.availability.label : `${current.title} at ${current.company}`}
          </p>
          <h1
            className="rise mt-7 font-serif text-[clamp(3.5rem,11vw,8rem)] leading-[0.92] tracking-[-0.01em]"
            style={{ "--i": 1 } as CSSProperties}
          >
            Muhamed <span className="italic text-accent">Adil</span>
          </h1>
          <p
            className="rise mt-7 max-w-xl text-xl leading-snug text-balance text-muted sm:text-2xl"
            style={{ "--i": 2 } as CSSProperties}
          >
            <span className="text-fg">{site.role}</span> in {site.location}. {site.headline}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ "--i": 3 } as CSSProperties}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-5 py-3 text-sm font-medium backdrop-blur transition-[border-color,transform] hover:-translate-y-0.5 hover:border-fg/30"
            >
              Résumé
              <ArrowUpRight className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="ml-1 flex items-center">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-fg"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </span>
          </div>
        </div>

        <Portrait />
      </div>

      <Marquee items={site.marquee} />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="flex flex-col-reverse justify-end bg-bg p-6 sm:p-8">
              <dt className="mt-2 text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="font-serif text-5xl leading-none sm:text-6xl">
                <CountUp value={s.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <figure className="rise relative mx-auto w-52 sm:w-72 lg:w-80" style={{ "--i": 2 } as CSSProperties}>
      <div className="group rotate-[2.5deg] overflow-hidden rounded-[2rem] border border-line bg-[#f6ead9] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:rotate-0">
        <Image
          src={site.avatar}
          width={460}
          height={460}
          alt={`Illustrated portrait of ${site.name}`}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 320px, 288px"
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <span className="absolute -right-4 -top-4 rotate-[8deg] rounded-full bg-accent px-3.5 py-1.5 font-serif text-lg italic text-white shadow-lg sm:-right-6">
        Hello!
      </span>
      <figcaption className="absolute -bottom-6 -left-4 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] backdrop-blur sm:-left-8">
        <p className="flex items-center gap-2 text-sm font-medium">
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
          {site.city}, UAE
        </p>
        <p className="mt-0.5 font-mono text-xs text-muted">
          <LocalTime timeZone={site.timeZone} /> local time
        </p>
      </figcaption>
    </figure>
  );
}

function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-surface/60 py-4 backdrop-blur-sm">
      <div className="marquee-track flex w-max">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length ? true : undefined}
            className="flex items-center gap-8 pr-8 font-mono text-[13px] uppercase tracking-[0.16em] text-muted"
          >
            {t}
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedProject({ project: p, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <article id={`project-${p.slug}`} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <Spotlight className="rounded-2xl">
          <a
            href={p.live ?? p.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.title}
            className="group block overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_60px_-40px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="aspect-[16/10] overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
              <ProjectArt slug={p.slug} title={p.title} />
            </div>
          </a>
        </Spotlight>
      </Reveal>

      <Reveal delay={120} className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">{p.title}</h3>
        <p className="mt-2 text-lg text-fg">{p.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {p.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-5 text-sm">
          {p.live && <ProjectLink href={p.live}>Visit site</ProjectLink>}
          {p.repo && <ProjectLink href={p.repo}>Source code</ProjectLink>}
        </div>
      </Reveal>
    </article>
  );
}

function ProjectLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 border-b border-line pb-0.5 font-medium transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Contact({ index }: { index: number }) {
  return (
    <section id="contact" aria-label="Contact" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal>
        {/* The .dark class pins this panel to the dark palette in both themes. */}
        <div className="dark relative overflow-hidden rounded-[2rem] border border-line bg-surface text-fg">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
          <div className="glow pointer-events-none absolute -bottom-48 -left-48 size-[40rem]" aria-hidden />
          <div className="relative grid gap-12 p-7 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-16">
            <div className="flex flex-col">
              <SectionLabel index={index}>Contact</SectionLabel>
              <h2 className="mt-6 font-serif text-5xl leading-[1.02] text-balance sm:text-6xl">
                Building something with LLMs? <em className="text-accent">Let’s talk.</em>
              </h2>
              <p className="mt-6 max-w-sm text-muted">
                Always happy to talk through RAG, agents, fine-tuning or serving models on GPUs — or whatever you&apos;re
                building. Email is the fastest way to reach me.
              </p>
              <div className="mt-8">
                <CopyEmail email={site.email} />
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm lg:mt-auto lg:pt-10">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
                    >
                      <SocialIcon label={s.label} />
                      {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-bg/60 p-5 backdrop-blur sm:p-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
