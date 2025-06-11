"use client";

import { SelectHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
};

const Select = forwardRef<HTMLSelectElement, Props>(({ label, className, children, ...props }, ref) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      ref={ref}
      className={clsx(
        "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200 focus:border-orange-400 transition",
        className
      )}
      {...props}
    >
      {children}
    </select>
  </div>
));

Select.displayName = "Select";
export default Select;
