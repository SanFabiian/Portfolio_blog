import clsx from "clsx";
import styles from "./Card.module.scss";

export interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: boolean;
  shadow?: boolean;
  className?: string;
  as?: React.ElementType;
  onClick?: () => void;
}

export function Card({
  children,
  hover = false,
  padding = true,
  shadow = false,
  className,
  as: Component = "div",
  onClick,
}: CardProps) {
  return (
    <Component
      className={clsx(
        styles.card,
        padding && styles.padding,
        shadow && styles.shadow,
        hover && styles.hover,
        onClick && styles.clickable,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}