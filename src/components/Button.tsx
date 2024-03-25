import React, { ForwardedRef, forwardRef, ButtonHTMLAttributes } from "react";

type ButtonVariant = "orange" | "creme" | "white" | "gray";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = "button",
      className,
      variant = "orange",
      size = "sm",
      disabled = false,
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-[5px] text-sm font-semibold focus:outline-none transition ease-in-out duration-300";
    const variantClasses = {
      orange: "bg-orange text-orange-foreground shadow hover:bg-orange/90",
      creme: "bg-creme text-creme-foreground shadow hover:bg-orange",
      white: "bg-white shadow hover:bg-orange",
      gray: "bg-stone-600 text-white shadow hover:bg-orange",
    }[variant];

    const sizeClasses =
      size === "sm"
        ? "h-8 px-3 text-xs"
        : size === "md"
          ? "h-9 px-4"
          : "h-10 px-5";

    const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "";

    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
