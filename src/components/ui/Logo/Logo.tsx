import clsx from "clsx";
import styles from "./Logo.module.scss";
import Image from "next/image";

import logo from "@/assets/logo/logo.svg"
import isotipo from "@/assets/logo/isotipo.svg"
import logo_dark from "@/assets/logo/logo-dark.svg"
import isotipo_dark from "@/assets/logo/logo-dark.svg"

export type LogoSize = "small" | "medium" | "large";
export type LogoVariant = "logo" | "isotipo" | "logo_dark" | "isotipo_dark";

export interface LogoProps {
  size?: LogoSize;
  className?: string;
  "aria-label"?: string;
  "url"?: string;
  variant?: LogoVariant;
}

const logoMap = {
  logo: logo,
  isotipo: isotipo,
  logo_dark: logo_dark,
  isotipo_dark: isotipo_dark
}

export function Logo({
  size = "medium",
  variant = "isotipo",
  className,
  "aria-label": ariaLabel = "SanFabiian home",
}: LogoProps) {
  const src  = logoMap[variant]
  return (
    <span className={clsx(styles.logo, styles[size], className)}>
      <Image
        src={src}
        alt=""
        width="193"
        height="227"
        aria-hidden
        className={styles.image}
      />
      <span className={styles.visuallyHidden}>{ariaLabel}</span>
    </span>
  );
}
