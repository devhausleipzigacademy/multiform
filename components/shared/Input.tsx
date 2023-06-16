// Input.tsx
import clsx from "clsx";
import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends Input {
  icon: React.ReactElement;
  rounded?: boolean;
  className?: string;
  id: string;
  error?: FieldError | undefined;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ icon, rounded = false, className, id, error, ...props }, ref) => {
    return (
      <div>
        <label
          className={clsx(
            "flex items-center bg-dark-light py-3 px-5 gap-5 border-2 border-transparent",
            rounded ? "rounded-full" : "rounded-md",
            error?.message
              ? "border-red"
              : "focus-within:border-white-dimmed-heavy",
            className
          )}
          htmlFor={id}
        >
          {React.cloneElement(icon, {
            className: clsx(
              "w-6 h-6",
              error?.message ? "text-red" : "text-white-dimmed"
            ),
          })}
          <input
            id={id}
            ref={ref} // Hinzufügen
            className={clsx(
              "bg-transparent flex-1 placeholder:text-white-dimmed outline-none",
              error?.message ? "text-red" : "text-white"
            )}
            {...props}
          />
        </label>
        {error?.message && <small className="text-red">{error.message}</small>}
      </div>
    );
  }
);

export default Input;
