import clsx from "clsx";
import styles from "./Section.module.scss";

type SectionSpacing = "sm" | "md" | "lg" | "xl";

export interface SectionProps {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  gap?: SectionSpacing;
  background?: string;
  className?: string;
  id?: string;
  // Allows rendering as <section> (default) or <div> when nesting
  as?: "section" | "div";
}

export function Section({
  children,
  spacing = "lg",
  gap,
  background,
  className,
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={clsx(
        styles.section,
        styles[`spacing-${spacing}`],
        gap && styles[`gap-${gap}`],
        className
      )}
      style={background ? { background } : undefined}
    >
      {children}
    </Component>
  );
}