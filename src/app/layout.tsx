import type { Metadata, Viewport } from "next";
import { Fragment_Mono, Fraunces, Schibsted_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { experience, projects, publications, site, skills } from "@/content/site";
import { getPosts } from "@/lib/posts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme";
import "./globals.css";

const sans = Schibsted_Grotesk({ variable: "--font-body", subsets: ["latin"] });
const mono = Fragment_Mono({ variable: "--font-code", subsets: ["latin"], weight: "400" });
// Variable Fraunces: optical size adapts per text size, SOFT rounds the terminals a little.
const serif = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const description = `${site.fullName} is an applied AI engineer in ${site.location} building production LLM systems — RAG, agentic workflows, fine-tuning (LoRA/QLoRA) — and serving models on GPU-backed Kubernetes.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} in ${site.location}`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  keywords: [
    site.name,
    site.fullName,
    ...site.alternateNames.slice(0, 11),
    "Applied AI Engineer",
    "AI Engineer Dubai",
    "AI Engineer Abu Dhabi",
    "LLM Engineer",
    "RAG",
    "LangGraph",
    "Agentic AI",
    "Fine-tuning",
    "QLoRA",
    "Kubernetes",
    "GPU",
    "Model serving",
    "FastAPI",
    "Python",
    "Go",
    "Dubai",
    "UAE",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${site.name}`,
    title: `${site.name} — ${site.role}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  // Draw edge to edge, under the iPhone status bar; globals.css and the header pad by the safe-area insets.
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0c" },
  ],
};

const current = experience[0];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.fullName,
      alternateName: [site.name, ...site.alternateNames],
      url: site.url,
      image: `${site.url}/opengraph-image`,
      email: `mailto:${site.email}`,
      jobTitle: site.role,
      description,
      worksFor: { "@type": "Organization", name: current.company },
      address: { "@type": "PostalAddress", addressCountry: "AE" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Saintgits College of Engineering" },
      knowsAbout: skills.flatMap((s) => s.items),
      sameAs: site.socials.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: `${site.name}`,
      url: site.url,
      inLanguage: "en",
      author: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ItemList",
      name: `Projects by ${site.name}`,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: p.title,
          description: p.description,
          codeRepository: p.repo,
          keywords: p.stack.join(", "),
          author: { "@id": `${site.url}/#person` },
        },
      })),
    },
    ...publications.map((pub) => ({
      "@type": "ScholarlyArticle",
      headline: pub.title,
      datePublished: pub.year,
      url: pub.href,
      sameAs: `https://doi.org/${pub.doi}`,
      isPartOf: { "@type": "Periodical", name: pub.venue.split(" ")[0] },
      author: pub.authors.map((a) => (a === pub.me ? { "@id": `${site.url}/#person` } : { "@type": "Person", name: a })),
    })),
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const showWriting = getPosts().length > 0;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${mono.variable} ${serif.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        {/* Lets CSS hide scroll-reveal content only when JS will run to reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
          >
            Skip to content
          </a>
          <Header showWriting={showWriting} />
          <main id="main" className="w-full flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
