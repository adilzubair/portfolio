import type { ReactNode } from "react";

// Generated illustrations for featured projects, drawn with theme tokens so they follow light/dark mode.
// Each one sketches what the project does rather than how its UI looks.

const W = 1600;
const H = 1000;

export function ProjectArt({ slug, title }: { slug: string; title: string }) {
  const art = ARTS[slug];
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="size-full"
      role="img"
      aria-label={`Illustration for ${title}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={`dots-${slug}`} width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" className="fill-line" />
        </pattern>
        <radialGradient id={`glow-${slug}`} cx="78%" cy="18%" r="70%">
          <stop offset="0%" className="[stop-color:var(--accent-soft)]" />
          <stop offset="100%" className="[stop-color:var(--surface)]" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#glow-${slug})`} />
      <rect width={W} height={H} fill={`url(#dots-${slug})`} opacity="0.7" />
      {art ? art() : <Fallback title={title} />}
    </svg>
  );
}

function Label({ x, y, children, anchor = "middle", className = "fill-muted" }: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
  className?: string;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} className={`font-mono text-[26px] tracking-[0.08em] ${className}`}>
      {children}
    </text>
  );
}

function Chip({ x, y, children }: { x: number; y: number; children: string }) {
  const w = children.length * 17 + 48;
  return (
    <g>
      <rect x={x} y={y} width={w} height={52} rx={26} className="fill-bg stroke-line" strokeWidth={2} />
      <Label x={x + w / 2} y={y + 34}>
        {children}
      </Label>
    </g>
  );
}

// Orchestrator directing four sub-agents over an indexed repo.
function Cortex() {
  const cx = 800;
  const cy = 500;
  const agents = [
    { x: 330, y: 230, name: "planner" },
    { x: 1270, y: 230, name: "explorer" },
    { x: 330, y: 770, name: "builder" },
    { x: 1270, y: 770, name: "general" },
  ];
  return (
    <g>
      <circle cx={cx} cy={cy} r={230} className="fill-none stroke-line" strokeWidth={2} strokeDasharray="4 12" />
      <circle cx={cx} cy={cy} r={360} className="fill-none stroke-line" strokeWidth={2} opacity={0.6} />
      {agents.map((a) => (
        <line key={a.name} x1={cx} y1={cy} x2={a.x} y2={a.y} className="art-dash stroke-accent" strokeWidth={3} />
      ))}
      {agents.map((a, i) => (
        <g key={a.name} className="art-float" style={{ animationDelay: `${i * -1.2}s` }}>
          <rect x={a.x - 140} y={a.y - 56} width={280} height={112} rx={24} className="fill-bg stroke-line" strokeWidth={2} />
          <circle cx={a.x - 92} cy={a.y} r={12} className="fill-accent" opacity={0.85} />
          <text x={a.x - 62} y={a.y - 4} className="fill-fg font-sans text-[34px] font-medium">
            {a.name}
          </text>
          <Label x={a.x - 62} y={a.y + 32} anchor="start" className="fill-faint">
            sub-agent
          </Label>
        </g>
      ))}
      <circle cx={cx} cy={cy} r={110} className="fill-accent" opacity={0.15} />
      <circle cx={cx} cy={cy} r={76} className="art-pulse fill-accent" />
      <path
        d={`M${cx - 26} ${cy - 22} l-22 22 22 22 M${cx + 26} ${cy - 22} l22 22 -22 22`}
        className="stroke-bg"
        strokeWidth={9}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Label x={cx} y={cy + 150} className="fill-fg">
        orchestrator
      </Label>
      <Chip x={60} y={60}>sha-256 incremental index</Chip>
      <Chip x={1150} y={888}>lsp + rerank</Chip>
    </g>
  );
}

// A launcher query over radar rings, local results ranked first.
function Scout() {
  const rows = [
    { w: 420, hot: true, tag: "pdf" },
    { w: 360, hot: false, tag: "folder" },
    { w: 300, hot: false, tag: "app" },
  ];
  return (
    <g>
      {[160, 300, 450, 610].map((r) => (
        <circle key={r} cx={800} cy={1000} r={r} className="fill-none stroke-line" strokeWidth={2} />
      ))}
      <circle cx={800} cy={1000} r={160} className="art-ping fill-none stroke-accent" strokeWidth={3} />
      <g>
        <rect x={330} y={190} width={940} height={124} rx={62} className="fill-bg stroke-line" strokeWidth={2} />
        <circle cx={410} cy={248} r={22} className="fill-none stroke-accent" strokeWidth={6} />
        <line x1={426} y1={264} x2={446} y2={284} className="stroke-accent" strokeWidth={6} strokeLinecap="round" />
        <text x={480} y={265} className="fill-fg font-sans text-[44px]">
          the pdf I just downloaded
        </text>
        <rect x={1032} y={222} width={4} height={54} className="art-blink fill-accent" />
      </g>
      {rows.map((r, i) => (
        <g key={r.tag}>
          <rect
            x={370}
            y={362 + i * 112}
            width={860}
            height={92}
            rx={20}
            className={r.hot ? "fill-accent-soft stroke-accent" : "fill-bg stroke-line"}
            strokeWidth={2}
          />
          {r.hot && <rect x={370} y={362} width={8} height={92} rx={4} className="fill-accent" />}
          <rect x={406} y={385 + i * 112} width={46} height={46} rx={12} className={r.hot ? "fill-accent" : "fill-line"} />
          <rect x={480} y={392 + i * 112} width={r.w} height={14} rx={7} className={r.hot ? "fill-fg" : "fill-line"} opacity={r.hot ? 0.8 : 1} />
          <rect x={480} y={418 + i * 112} width={r.w * 0.55} height={10} rx={5} className="fill-line" />
          <Label x={1196} y={418 + i * 112} anchor="end" className={r.hot ? "fill-accent" : "fill-faint"}>
            {r.tag}
          </Label>
        </g>
      ))}
      <Chip x={60} y={888}>ctrl + space</Chip>
      <Chip x={1120} y={60}>runs locally</Chip>
    </g>
  );
}

// Deterministic scatter so prerendered output never changes between builds.
function scatter(n: number, seed: number) {
  let s = seed;
  const rand = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: n }, () => ({ x: 860 + rand() * 640, y: 150 + rand() * 700 }));
}

// Documents chunked into a vector space, the query pulling its nearest neighbours.
function LocalRag() {
  const pts = scatter(46, 7);
  const q = { x: 1170, y: 470 };
  const near = [...pts]
    .sort((a, b) => Math.hypot(a.x - q.x, a.y - q.y) - Math.hypot(b.x - q.x, b.y - q.y))
    .slice(0, 4);
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${120 + i * 34} ${260 + i * 40})`}>
          <path d="M0 0 h210 l60 60 v300 h-270 z" className="fill-bg stroke-line" strokeWidth={2} />
          <path d="M210 0 v60 h60" className="fill-none stroke-line" strokeWidth={2} />
          {[110, 150, 190, 230, 270].map((y, j) => (
            <rect key={y} x={34} y={y} width={j % 2 ? 150 : 200} height={12} rx={6} className={i === 2 && j === 2 ? "fill-accent" : "fill-line"} />
          ))}
        </g>
      ))}
      <path d={`M520 500 C 700 500, 800 ${q.y}, ${q.x - 190} ${q.y}`} className="art-dash fill-none stroke-accent" strokeWidth={3} />
      <circle cx={q.x} cy={q.y} r={190} className="fill-accent" opacity={0.06} />
      <circle cx={q.x} cy={q.y} r={190} className="fill-none stroke-accent" strokeWidth={2} strokeDasharray="6 10" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={near.includes(p) ? 11 : 8} className={near.includes(p) ? "fill-fg" : "fill-faint"} opacity={near.includes(p) ? 1 : 0.55} />
      ))}
      {near.map((p, i) => (
        <line key={i} x1={q.x} y1={q.y} x2={p.x} y2={p.y} className="stroke-fg" strokeWidth={2.5} opacity={0.7} />
      ))}
      <circle cx={q.x} cy={q.y} r={20} className="art-pulse fill-accent" />
      <Label x={q.x} y={q.y - 214} className="fill-accent">
        query · top-4
      </Label>
      <Label x={250} y={760}>
        private docs
      </Label>
      <Chip x={1090} y={888}>grounded only</Chip>
      <Chip x={60} y={60}>offline · ollama</Chip>
    </g>
  );
}

// One request refracted into multiple models and modalities.
function Prism() {
  const rays = [
    { y: 230, label: "openai" },
    { y: 390, label: "gemini" },
    { y: 550, label: "vision" },
    { y: 710, label: "streaming" },
    { y: 860, label: "cost / user" },
  ];
  return (
    <g>
      <line x1={0} y1={560} x2={600} y2={520} className="stroke-fg" strokeWidth={6} opacity={0.85} />
      {rays.map((r, i) => (
        <g key={r.label}>
          <line
            x1={760}
            y1={520}
            x2={1330}
            y2={r.y}
            className="art-dash stroke-accent"
            strokeWidth={4}
            opacity={1 - i * 0.14}
            style={{ animationDelay: `${i * -0.3}s` }}
          />
          <circle cx={1330} cy={r.y} r={10} className="fill-accent" opacity={1 - i * 0.14} />
          <Label x={1360} y={r.y + 9} anchor="start" className="fill-fg">
            {r.label}
          </Label>
        </g>
      ))}
      <path d="M680 250 L880 700 L480 700 Z" className="fill-bg stroke-fg" strokeWidth={3} strokeLinejoin="round" />
      <path d="M680 250 L880 700 L480 700 Z" className="fill-accent" opacity={0.08} />
      <path d="M680 330 L800 610" className="stroke-line" strokeWidth={2} />
      <Label x={680} y={770}>
        one chat
      </Label>
      <Chip x={60} y={60}>fastapi · react</Chip>
    </g>
  );
}

// Collaborative document with a grounded AI sidebar, air-gapped.
function Loomin() {
  return (
    <g>
      <rect x={200} y={140} width={1200} height={720} rx={28} className="fill-bg stroke-line" strokeWidth={2} />
      <line x1={200} y1={210} x2={1400} y2={210} className="stroke-line" strokeWidth={2} />
      {[240, 276, 312].map((x) => (
        <circle key={x} cx={x} cy={175} r={11} className="fill-line" />
      ))}
      <Label x={360} y={184} anchor="start">
        loomin-docs
      </Label>
      <line x1={960} y1={210} x2={960} y2={860} className="stroke-line" strokeWidth={2} />
      <rect x={960} y={210} width={440} height={650} className="fill-surface" />
      <text x={260} y={310} className="fill-fg font-serif text-[64px]">
        Field report
      </text>
      {[
        [380, 600],
        [420, 560],
        [460, 520, true],
        [500, 600],
        [540, 430],
        [600, 580],
        [640, 500],
      ].map(([y, w, hot]) => (
        <rect key={String(y)} x={260} y={y as number} width={w as number} height={16} rx={8} className={hot ? "fill-accent" : "fill-line"} opacity={hot ? 0.5 : 1} />
      ))}
      <rect x={258} y={452} width={4} height={34} className="art-blink fill-accent" />
      <rect x={700} y={372} width={4} height={34} className="fill-fg" />
      <rect x={700} y={330} width={150} height={40} rx={8} className="fill-fg" />
      <text x={716} y={358} className="fill-bg font-mono text-[22px]">
        co-editor
      </text>
      <rect x={1100} y={260} width={260} height={64} rx={20} className="fill-accent" />
      <rect x={1000} y={350} width={360} height={130} rx={20} className="fill-bg stroke-line" strokeWidth={2} />
      <rect x={1030} y={384} width={240} height={12} rx={6} className="fill-line" />
      <rect x={1030} y={414} width={290} height={12} rx={6} className="fill-line" />
      <rect x={1030} y={444} width={170} height={12} rx={6} className="fill-accent" opacity={0.6} />
      <rect x={1160} y={510} width={200} height={56} rx={20} className="fill-accent" />
      <Label x={1180} y={830}>
        grounded · pii masked
      </Label>
      <Chip x={60} y={900}>air-gapped · rhel 9</Chip>
    </g>
  );
}

function Fallback({ title }: { title: string }) {
  return (
    <text x={120} y={860} className="fill-fg font-serif text-[160px]">
      {title}
    </text>
  );
}

const ARTS: Record<string, () => ReactNode> = {
  cortex: Cortex,
  scout: Scout,
  "local-rag": LocalRag,
  prism: Prism,
  "loomin-docs": Loomin,
};
