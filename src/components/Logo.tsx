import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} alt="Logo" width={100} height={100} />
    </Link>
  );
}
