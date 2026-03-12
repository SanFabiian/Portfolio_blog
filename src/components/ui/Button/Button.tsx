import clsx from "clsx";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import { Spinner } from "../Spinner";

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) {
  const isDisabled = disabled ?? loading;

  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.loading]: loading,
      [styles.fullWidth]: fullWidth,
      [styles.disabled]: isDisabled,
    },
    className
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      {...props}
      disabled={isDisabled}
      aria-busy={loading}
    >
      {loading && (
        <span className={styles.icon}>
          <Spinner size={16} />
        </span>
      )}

      {!loading && iconLeft && (
        <span className={styles.icon}>
          {iconLeft}
        </span>
      )}

      {children}

      {!loading && iconRight && (
        <span className={styles.icon}>
          {iconRight}
        </span>
      )}
    </button>
  );
}