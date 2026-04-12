import clsx from "clsx";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";
import { Spinner } from "../Spinner";
import { Stack } from "@/components/layout/index";

export function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  loading = false,
  active = false,
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
      [styles.loading]:   loading,
      [styles.fullWidth]: fullWidth,
      [styles.disabled]:  isDisabled,
      [styles.active]:    active,
    },
    className
  );

  const buttonOnlyProps = Component === "button"
    ? { type: "button", disabled: isDisabled, "aria-busy": loading }
    : {};

  return (
    <Component
      className={buttonClasses}
      {...buttonOnlyProps}
      {...props}
    >
      <Stack direction="row" align="center" justify="center" gap="sm">
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
      </Stack>
    </Component>
  );
}