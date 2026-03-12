import styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: boolean;
  shadow?: boolean;
}

export function Card({
  children,
  hover = false,
  padding = true,
  shadow = true
}: CardProps) {
  const classNames = [
    styles.card,
    padding && styles.padding,
    shadow && styles.shadow,
    hover && styles.hover
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
}