import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;

  iconLeft?: ReactNode;
  iconRight?: ReactNode;

  fullWidth?: boolean;
}