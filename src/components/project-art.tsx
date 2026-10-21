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
function scatter(n: number, seed: number, box: { x: number; y: number; w: number; h: number }) {
  let s = seed;
  const rand = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: n }, () => ({ x: box.x + rand() * box.w, y: box.y + rand() * box.h }));
}

// A portable drive whose photos, video, documents, audio and faces share one vector space.
function FindIt() {
  const tiles = [
    { y: 230, label: "photo" },
    { y: 360, label: "video" },
    { y: 490, label: "document" },
    { y: 620, label: "audio" },
    { y: 750, label: "face" },
  ];
  const tx = 430;
  const space = { cx: 1150, cy: 560, r: 230 };
  const pts = scatter(40, 11, { x: space.cx - 190, y: space.cy - 170, w: 380, h: 340 }).filter(
    (p) => Math.hypot(p.x - space.cx, p.y - space.cy) < space.r - 24,
  );
  const hits = pts.slice(0, 3);

  return (
    <g>
      {/* Drive */}
      <rect x={90} y={380} width={190} height={260} rx={28} className="fill-bg stroke-line" strokeWidth={2} />
      <rect x={120} y={420} width={130} height={14} rx={7} className="fill-line" />
      <rect x={120} y={448} width={90} height={14} rx={7} className="fill-line" />
      <circle cx={245} cy={600} r={9} className="art-pulse fill-accent" />
      <Label x={185} y={690}>
        portable drive
      </Label>
      {tiles.map((t) => (
        <path
          key={`in-${t.label}`}
          d={`M280 510 C 340 510, 350 ${t.y + 40}, ${tx} ${t.y + 40}`}
          className="fill-none stroke-line"
          strokeWidth={2}
        />
      ))}

      {/* Modality tiles */}
      {tiles.map((t, i) => (
        <g key={t.label}>
          <rect x={tx} y={t.y} width={230} height={80} rx={18} className="fill-bg stroke-line" strokeWidth={2} />
          <g transform={`translate(${tx + 22} ${t.y + 18})`}>
            {i === 0 && (
              <>
                <rect width={44} height={44} rx={8} className="fill-accent-soft stroke-accent" strokeWidth={2} />
                <path d="M6 36 l12 -14 9 9 6 -6 6 11 z" className="fill-accent" />
              </>
            )}
            {i === 1 && (
              <>
                <rect width={44} height={44} rx={8} className="fill-accent-soft stroke-accent" strokeWidth={2} />
                <path d="M17 13 l14 9 -14 9 z" className="fill-accent" />
              </>
            )}
            {i === 2 &&
              [8, 18, 28].map((y) => <rect key={y} x={4} y={y} width={y === 28 ? 24 : 36} height={6} rx={3} className="fill-accent" />)}
            {i === 3 &&
              [16, 30, 10, 36, 22, 14, 28].map((h, j) => (
                <rect key={j} x={j * 6.5} y={22 - h / 2} width={4} height={h} rx={2} className="fill-accent" />
              ))}
            {i === 4 && (
              <>
                <circle cx={22} cy={15} r={10} className="fill-accent" />
                <path d="M4 44 c0 -14 36 -14 36 0 z" className="fill-accent" />
              </>
            )}
          </g>
          <text x={tx + 84} y={t.y + 50} className="fill-fg font-sans text-[30px]">
            {t.label}
          </text>
          <path
            d={`M${tx + 230} ${t.y + 40} C ${tx + 340} ${t.y + 40}, ${space.cx - 300} ${space.cy}, ${space.cx - space.r} ${space.cy}`}
            className="art-dash fill-none stroke-accent"
            strokeWidth={2.5}
            opacity={0.75}
            style={{ animationDelay: `${i * -0.25}s` }}
          />
        </g>
      ))}

      {/* Shared embedding space */}
      <circle cx={space.cx} cy={space.cy} r={space.r} className="fill-accent" opacity={0.05} />
      <circle cx={space.cx} cy={space.cy} r={space.r} className="fill-none stroke-accent" strokeWidth={2} strokeDasharray="6 10" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={hits.includes(p) ? 12 : 7} className={hits.includes(p) ? "fill-accent" : "fill-faint"} opacity={hits.includes(p) ? 1 : 0.6} />
      ))}
      <Label x={space.cx} y={space.cy + space.r + 44} className="fill-accent">
        one vector space
      </Label>

      {/* Query */}
      <rect x={890} y={120} width={560} height={84} rx={42} className="fill-bg stroke-line" strokeWidth={2} />
      <circle cx={940} cy={160} r={16} className="fill-none stroke-accent" strokeWidth={5} />
      <line x1={951} y1={171} x2={966} y2={186} className="stroke-accent" strokeWidth={5} strokeLinecap="round" />
      <text x={985} y={173} className="fill-fg font-sans text-[32px]">
        sunset at the harbour
      </text>
      <rect x={1314} y={142} width={3} height={38} className="art-blink fill-accent" />
      {hits.map((h, i) => (
        <line key={i} x1={1170} y1={204} x2={h.x} y2={h.y} className="stroke-fg" strokeWidth={2} opacity={0.35} />
      ))}

      <Chip x={1060} y={900}>ann + full-text · rrf</Chip>
      <Chip x={60} y={60}>offline · on-device models</Chip>
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
  findit: FindIt,
  "loomin-docs": Loomin,
};
