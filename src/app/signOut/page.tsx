"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

export default function SignOutButton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 via-blue-50 to-white">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center w-80">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign Out</h1>

        <button
          onClick={() => signOut({ callbackUrl: "/signIn" })}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg
                     hover:bg-red-700 hover:shadow-xl active:scale-95 transition-all duration-200 ease-in-out"
        >
         
          Confirm Sign Out
        </button>
      </div>
    </div>
  );
}
