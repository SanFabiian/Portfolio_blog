import styles from "./Stack.module.scss";
import clsx from "clsx";

type StackProps = {
  children: React.ReactNode;
  direction?: "row" | "column";
  gap?: "sm" | "md" | "lg";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between";
  className?: string;
};

export function Stack({
  children,
  direction = "column",
  gap = "md",
  align = "start",
  justify = "start",
  className,
}: StackProps) {
  return (
    <div
      className={clsx(
        styles.stack,
        styles[direction],
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        className
      )}
    >
      {children}
    </div>
  );
}