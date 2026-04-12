import { ReactNode, ElementType } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "line" | "rounded";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  // Polymorphic — renders as button, a, or any element
  as?: ElementType;

  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;

  // Allows any valid HTML attribute for the rendered element
  [key: string]: unknown;
}