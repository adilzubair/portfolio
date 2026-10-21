import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role} in ${site.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fonts = join(process.cwd(), "node_modules", "@fontsource");
const serif = await readFile(join(fonts, "fraunces/files/fraunces-latin-400-normal.woff"));
const serifItalic = await readFile(join(fonts, "fraunces/files/fraunces-latin-400-italic.woff"));
const mono = await readFile(join(fonts, "fragment-mono/files/fragment-mono-latin-400-normal.woff"));
const avatar = `data:image/png;base64,${await readFile(join(process.cwd(), "src/assets/avatar-og.png"), "base64")}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0d0d0c",
          color: "#ecebe8",
          fontFamily: "Fragment Mono",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img tags */}
        <img
          src={avatar}
          width={260}
          height={260}
          alt=""
          style={{ position: "absolute", right: 72, top: 170, borderRadius: 40, transform: "rotate(3deg)" }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#9b988f" }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#ff8a4c" }} />
          muhamedadil.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Fraunces", fontSize: 100, lineHeight: 1, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontFamily: "Fraunces", fontSize: 44, color: "#9b988f" }}>
            <span style={{ fontStyle: "italic", color: "#ff8a4c", marginRight: 16 }}>{site.role}</span>
            in {site.location}
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#9b988f", textTransform: "uppercase", letterSpacing: 3 }}>
          <span>RAG</span>
          <span style={{ color: "#66635c" }}>/</span>
          <span>Agents</span>
          <span style={{ color: "#66635c" }}>/</span>
          <span>Fine-tuning</span>
          <span style={{ color: "#66635c" }}>/</span>
          <span>GPU serving</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: serif, style: "normal", weight: 400 },
        { name: "Fraunces", data: serifItalic, style: "italic", weight: 400 },
        { name: "Fragment Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
