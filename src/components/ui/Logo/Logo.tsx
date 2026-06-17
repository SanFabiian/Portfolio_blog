import clsx from "clsx";
import styles from "./Logo.module.scss";
import Image from "next/image";

import logo from "@/assets/logo/logo.svg";
import isotipoSrc from "@/assets/logo/isotipo.svg";
import logoWhite from "@/assets/logo/logo-white.svg";
import isotipoWhite from "@/assets/logo/isotipo-white.svg";

export type LogoSize = "small" | "medium" | "large";
export type LogoVariant = "logo" | "isotipo";
export type LogoColor = "default" | "white";

export interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  color?: LogoColor;
  className?: string;
  "aria-label"?: string;
}

const logoMap: Record<LogoVariant, Record<LogoColor, string>> = {
  logo:    { default: logo,       white: logoWhite    },
  isotipo: { default: isotipoSrc, white: isotipoWhite },
};

export function Logo({
  size = "medium",
  variant = "isotipo",
  color = "default",
  className,
  "aria-label": ariaLabel = "SanFabiian home",
}: LogoProps) {
  const src = logoMap[variant][color];

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
