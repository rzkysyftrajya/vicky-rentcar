import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type MedanButtonVariant = "primary" | "secondary" | "text";
type MedanButtonSize = "default" | "small";

export interface MedanButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MedanButtonVariant;
  size?: MedanButtonSize;
  asChild?: boolean;
}

export function MedanButton({
  variant = "primary",
  size = "default",
  asChild = false,
  className,
  children,
  ...props
}: MedanButtonProps) {
  const classNames = cn(
    "medan-button",
    `medan-button-${variant}`,
    size === "small" && "medan-button-small",
    className,
  );

  const Component = asChild ? Slot : "button";
  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}
