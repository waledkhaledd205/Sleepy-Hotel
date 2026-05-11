"use client";
import React, { useState } from "react";
import SelectCountry from "@/components/Country";

export default function Form({ countries }: { countries: any[] }) {
  const [country, setCountry] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const idRegex = /^\d{16}$/;
    if (!idRegex.test(nationalId)) {
      setError("National ID must be exactly 16 digits (numbers only).");
      setSuccess("");
      return;
    }
    // test
    setError("");
    setSuccess("Profile updated successfully ✅");

    console.log({
      country,
      nationalId,
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* User Name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          User Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Select Your Country
        </label>
        <SelectCountry
          countries={countries}
          value={country}
          onChange={setCountry}
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          National ID Number
        </label>
        <input
          type="text"
          inputMode="numeric"
          maxLength={16}
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
          placeholder="Enter your 16-digit ID"
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
          }`}
          required
        />
        {error && (
          <p className="text-sm text-red-500 mt-1 font-medium">{error}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
      >
        Update Profile
      </button>
      {success && (
        <p className="text-sm text-green-600 mt-3 font-medium">{success}</p>
      )}
    </form>
  );
}
