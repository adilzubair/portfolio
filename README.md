# muhamedadil.com

Personal site of Muhamed Adil Edavana Valappil, applied AI engineer in Dubai. Live at [muhamedadil.com](https://muhamedadil.com).

## Stack

Next.js 16 (App Router, Cache Components, fully prerendered) · Tailwind CSS 4 · TypeScript · deployed on Vercel.

## Editing content

- **Profile, experience, projects, skills, publications, achievements:** `src/content/site.ts`. Everything on the homepage, plus the SEO metadata and JSON-LD, reads from this file.
- **Writing:** add Markdown files to `content/posts/`. Frontmatter needs `title`, `description`, `date`, and optionally `draft: true`. Drafts show in `npm run dev` only. The Writing nav link and homepage section appear once a non-draft post exists.
- **Publications:** add entries to `publications` in `site.ts` to show them under Recognition.
- **Project screenshots:** `public/images/projects/*.webp`. Set `width`/`height` in `site.ts` to match.
- **Résumé:** replace `public/resume.pdf`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint
```

`/.well-known/nostr.json` (NIP-05) and the Google site-verification file are served from `public/`. The sitemap, robots.txt, web manifest and Open Graph image are generated from `src/app/`.
