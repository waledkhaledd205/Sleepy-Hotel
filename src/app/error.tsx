"use client";
import React from "react";

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 via-blue-50 to-white text-center p-6">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Error"
        className="w-80 mb-6"
      />

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Error 404</h1>
      <p className="text-red-500 mb-4">{error.message}</p>
    </div>
  );
}
