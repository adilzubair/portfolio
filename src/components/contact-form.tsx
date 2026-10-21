"use client";

import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/content/site";
import { ArrowRight, Check } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

// 16px on phones: iOS Safari zooms the page into any field with smaller text.
const field =
  "w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-base text-fg sm:text-[15px] placeholder:text-faint transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(site.contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
      track("contact_form_submit", { success: true });
    } catch {
      setStatus("error");
      track("contact_form_submit", { success: false });
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-xl border border-line bg-surface p-6">
        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-bg">
          <Check width={14} height={14} />
        </span>
        <div>
          <p className="font-medium">Message sent.</p>
          <p className="mt-1 text-sm text-muted">Thanks for reaching out — I usually reply within a couple of days.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm text-muted">Name</span>
          <input name="name" required minLength={2} autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm text-muted">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-sm text-muted">Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="What are you working on?"
          className={`${field} resize-y`}
        />
      </label>
      {/* Honeypot for bots; Getform discards submissions that fill it. */}
      <input type="hidden" name="_gotcha" />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-accent">
            Something went wrong. Email me directly at {site.email}.
          </p>
        )}
      </div>
    </form>
  );
}
