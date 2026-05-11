import React from "react";
import Logo from "./Logo";
import { auth } from "@/data/auth";
import NavLink from "./NavLink";
import Image from "next/image";

const navItem = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "About", path: "/about" },
  { name: "Account", path: "/account" },
];

export default async function Nav() {
  const session = await auth();
  console.log(session);

  const nav = [
    ...navItem,
    !session && { name: "Login", path: "/signIn" },
    session && { name: "Logout", path: "/signOut" },
  ].filter(Boolean);
  

  return (
    <nav className="top-0 left-0 w-full z-10 bg-white shadow h-25">
      <div className="mx-auto flex items-center justify-between px-8 h-full">
        <Logo />
        <ul className="flex items-center gap-8">
          {nav.map(({ name, path }) => (
            <NavLink key={name} name={name} path={path} />
          ))}

          {session && (
            <li>
              <Image
                src={session.user?.image || "/default-avatar.png"}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
