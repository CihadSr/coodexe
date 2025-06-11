"use client";

import Link from "next/link";
import clsx from "clsx";

type Props = {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function NavLink({ href, label, active, onClick }: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "px-3 py-2 text-sm font-medium transition-colors",
        active ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
      )}
    >
      {label}
    </Link>
  );
}
