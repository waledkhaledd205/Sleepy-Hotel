"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/api/auth/signout" })}
      className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg shadow-md 
                 hover:bg-red-700 active:scale-95 transition-transform duration-200"
    >
      <Image
        src="/icons/logout.svg" 
        alt="Logout Icon"
        width={20}
        height={20}
        className="inline-block"
      />
      <span>Sign Out</span>
    </button>
  );
}
