"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Filter() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  function handleFilter(filter: string) {
    setLoading(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    setTimeout(() => {
      router.replace(`${pathname}?${params.toString()}`);
      setLoading(false);
    }, 500); 
  }

  const buttons = [
    { label: "All", color: "bg-blue-400", hover: "hover:bg-blue-500" },
    { label: "Small", color: "bg-sky-400", hover: "hover:bg-sky-500" },
    { label: "Medium", color: "bg-cyan-400", hover: "hover:bg-cyan-500" },
    { label: "Large", color: "bg-blue-300", hover: "hover:bg-blue-400" },
  ];

  return (
    <div className="flex gap-4 justify-center mb-6">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={() => handleFilter(btn.label.toLowerCase())}
          disabled={loading}
          className={`${btn.color} ${btn.hover} text-white font-semibold px-6 py-3 rounded-lg shadow-md transform transition-all duration-200 
            hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-wait`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
