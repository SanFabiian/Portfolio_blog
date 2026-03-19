import clsx from "clsx";
import styles from "./Section.module.scss";

type SectionSpacing = "sm" | "md" | "lg" | "xl";

export interface SectionProps {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  className?: string;
  id?: string;
  // Allows rendering as <section> (default) or <div> when nesting
  as?: "section" | "div";
}

export function Section({
  children,
  spacing = "lg",
  className,
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={clsx(styles.section, styles[`spacing-${spacing}`], className)}
    >
      {children}
    </Component>
  );
}