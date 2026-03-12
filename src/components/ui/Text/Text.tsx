import clsx from "clsx";
import styles from "./Text.module.scss";

export type TextVariant = "body" | "small" | "caption";
export type TextWeight = "regular" | "medium" | "bold";
export type TextColor = "default" | "muted" | "primary" | "inherit";

export type TextAs = "p" | "span" | "div";

export interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
  as?: TextAs;
  className?: string;
  children: React.ReactNode;
}

const defaultTag: Record<TextAs, TextAs> = {
  p: "p",
  span: "span",
  div: "div",
};

export function Text({
  variant = "body",
  weight = "regular",
  color = "default",
  as = "p",
  className,
  children,
  ...props
}: TextProps & Omit<React.HTMLAttributes<HTMLElement>, keyof TextProps>) {
  const Component = defaultTag[as];

  const classes = clsx(
    styles.text,
    styles[variant],
    styles[`weight-${weight}`],
    styles[`color-${color}`],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
