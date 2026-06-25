import clsx from "clsx";
import styles from "./Section.module.scss";

type SectionSpacing = "inherit" | "none" | "sm" | "md" | "lg" | "xl";
type SectionType = "full" | "reading";
export interface SectionProps {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  gap?: SectionSpacing;
  background?: string;
  className?: string;
  id?: string;
  type?: SectionType;
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
  type,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={clsx(
        styles.section,
        styles[`spacing-${spacing}`],
        gap && styles[`gap-${gap}`],
        type && styles[`type-${type}`],
        className
      )}
      style={background ? { background } : undefined}
    >
      {children}
    </Component>
  );
}