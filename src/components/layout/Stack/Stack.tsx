import styles from "./Stack.module.scss";
import clsx from "clsx";

type StackDirection = "row" | "column";
type StackGap       = "xs" | "sm" | "md" | "lg" | "xl";
type StackAlign     = "start" | "center" | "end" | "stretch";
type StackJustify   = "start" | "center" | "end" | "between";
type StackWrap      = "wrap" | "nowrap";

export interface StackProps {
  children: React.ReactNode;
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: StackWrap;
  className?: string;
  as?: React.ElementType;
}

export function Stack({
  children,
  direction = "column",
  gap = "md",
  align = "start",
  justify = "start",
  wrap = "nowrap",
  className,
  as: Component = "div",
}: StackProps) {
  return (
    <Component
      className={clsx(
        styles.stack,
        styles[direction],
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        styles[wrap],
        className
      )}
    >
      {children}
    </Component>
  );
}