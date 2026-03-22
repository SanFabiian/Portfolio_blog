"use client";
import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { isDark, toggle, mounted } = useTheme();

  return (
    <button
      onClick={toggle}
      className={styles.toggle}
      // Valores estáticos en SSR — nunca cambian entre server y client
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <span className={styles.icon} aria-hidden suppressHydrationWarning>
        {/* Solo renderiza el ícono dinámico después del mount */}
        {mounted ? (isDark ? "☀️" : "🌙") : "🌙"}
      </span>
    </button>
  );
}