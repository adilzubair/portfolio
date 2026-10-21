"use client";

import { useState } from "react";
import { Check, Copy } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line bg-surface py-1 pl-4 pr-1">
      <a href={`mailto:${email}`} className="font-mono text-sm hover:text-accent">
        {email}
      </a>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        }}
        className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-fg"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? <Check className="text-accent" /> : <Copy />}
      </button>
    </div>
  );
}
