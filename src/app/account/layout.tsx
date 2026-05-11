  "use client";

  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import { Suspense } from "react";
  import Spinner from "@/components/Spinner"; // ✅ اعمل كومبوننت بسيط للسبينر

  export default function AccountLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const pathname = usePathname();

    const links = [
      { name: "Home", href: "/account" },
      { name: "Reservation", href: "/account/reservation" },
      { name: "Guest Profile", href: "/account/profile" }
    ];

    return (
      <div className="min-h-screen flex bg-gradient-to-b from-blue-500 via-blue-50 to-white">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">Dashboard</h2>
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg font-medium transition ${
                  pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </main>
      </div>
    );
  }
