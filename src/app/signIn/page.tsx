"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 via-blue-50 to-white">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center w-80">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign in</h1>
        
        <button
          onClick={() => signIn("google", { callbackUrl: "/account" })}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          <img
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
