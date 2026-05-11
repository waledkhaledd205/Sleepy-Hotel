

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  name: string;
  path: string;
}

export default function NavLink({ name, path }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`text-lg font-medium ${
          pathname === path
            ? "text-teal-400 border-b-2 border-teal-400 pb-1"
            : "text-black hover:text-teal-300"
        }`}
      >
        {name}
      </Link>
    </li>
  );
}
