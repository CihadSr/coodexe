"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(({ label, required, className, ...props }, ref) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && "*"}
    </label>
    <input
      ref={ref}
      required={required}
      className={clsx(
        "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200 focus:border-orange-400 transition",
        className
      )}
      {...props}
    />
  </div>
));

Input.displayName = "Input";
export default Input;
