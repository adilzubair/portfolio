import { site } from "@/content/site";
import { SocialIcon } from "./icons";

// Cached so the year is captured at build time instead of erroring during prerender.
async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pt-8 pb-[calc(2rem_+_env(safe-area-inset-bottom))] text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © <Year /> {site.fullName}
        </p>
        <ul className="flex items-center gap-1">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-full transition-colors hover:bg-line/60 hover:text-fg"
              >
                <SocialIcon label={s.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
