import clsx from "clsx";
import styles from "./Heading.module.scss";

export type HeadingLevel = "h1" | "h2" | "h3";

export type HeadingAlign = "left" | "center" | "right";

export interface HeadingProps {
  level?: HeadingLevel;
  align?: HeadingAlign;
  className?: string;
  children: React.ReactNode;
}

const headingTag: Record<HeadingLevel, HeadingLevel> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

export function Heading({
  level = "h1",
  align = "left",
  className,
  children,
  ...props
}: HeadingProps &
  Omit<
    React.HTMLAttributes<HTMLHeadingElement>,
    keyof HeadingProps
  >) {
  const Component = headingTag[level];

  const classes = clsx(
    styles.heading,
    styles[level],
    styles[`align-${align}`],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
