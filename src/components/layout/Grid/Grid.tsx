import clsx from "clsx";
import styles from "./Grid.module.scss";

type GridCols = 1 | 2 | 3 | 4 | 6 | 12;
type GridGap  = "sm" | "md" | "lg";

export interface GridProps {
  children: React.ReactNode;
  cols?: GridCols;
  // Responsive: overrides cols at md/lg breakpoints
  colsMd?: GridCols;
  colsLg?: GridCols;
  gap?: GridGap;
  className?: string;
}

export function Grid({
  children,
  cols = 1,
  colsMd,
  colsLg,
  gap = "md",
  className,
}: GridProps) {
  return (
    <div
      className={clsx(
        styles.grid,
        styles[`cols-${cols}`],
        colsMd && styles[`cols-md-${colsMd}`],
        colsLg && styles[`cols-lg-${colsLg}`],
        styles[`gap-${gap}`],
        className
      )}
    >
      {children}
    </div>
  );
}