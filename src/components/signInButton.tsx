"use client";
import { signInAction } from "@/utils/signInAction";
import Image from "next/image";

export default function SignInButton() {
  return (
    <form action={signInAction} >
    <button
      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md 
                 hover:bg-blue-700 active:scale-95 transition-transform duration-200"
    >
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google Logo"
        width={20}
        height={20}
        className="inline-block"
      />
      <span>Continue with Google</span>
    </button>
    </form>
  );
}
