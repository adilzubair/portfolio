"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect, type ReactNode } from "react";
import { Moon, Sun } from "./icons";

// Same values as --bg in globals.css and themeColor in layout.tsx.
const themeColors = { light: "#fafaf8", dark: "#0d0d0c" };

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ThemeColor />
      {children}
    </NextThemesProvider>
  );
}

// The theme-color tags follow the OS scheme; point them at the chosen theme so the browser bar matches the page.
function ThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return;
    for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
      meta.setAttribute("content", themeColors[resolvedTheme]);
    }
  }, [resolvedTheme]);

  return null;
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // Both icons render on the server; CSS picks the visible one so there is no hydration flash.
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-fg"
      aria-label="Toggle color theme"
    >
      <Sun className="hidden dark:block" />
      <Moon className="dark:hidden" />
    </button>
  );
}
