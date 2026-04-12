"use client";
import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { isDark, toggle, mounted } = useTheme();

  return (
    <button
      onClick={toggle}
      className={styles.toggle}
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <span className={styles.icon} aria-hidden suppressHydrationWarning>
        {mounted ? (isDark ? "☀️" : "🌙") : "🌙"}
      </span>
    </button>
  );
}