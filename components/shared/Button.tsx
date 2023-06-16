import React from "react";
import clsx from "clsx";

type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Button {
  variant?: "primary" | "secondary" | "transparent";
  size?: "md" | "lg" | "sm";
  rounded?: "lg" | "md";
  disabled?: boolean;
}

function Button({
  variant = "primary",
  size = "lg",
  rounded = "lg",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "w-full disabled:opacity-50",
        variant === "primary"
          ? "bg-yellow text-dark-light"
          : variant === "secondary"
          ? "bg-[#363740] text-white"
          : "bg-transparent text-white-dimmed",
        size === "lg" ? "py-4" : size === "md" ? "py-3" : "py-1",
        rounded === "lg" ? "rounded-lg" : "rounded-md"
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
