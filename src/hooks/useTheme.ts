"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const initial = stored ?? system;
    setTheme(initial);
    setMounted(true);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggle = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

  return { theme, toggle, isDark: theme === "dark", mounted };
}