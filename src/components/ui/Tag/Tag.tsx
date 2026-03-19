import clsx from "clsx";
import styles from "./Tag.module.scss";

export interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span className={clsx(styles.tag, className)}>
      {children}
    </span>
  );
}