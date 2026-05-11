"use client";

interface Country {
  name: string;
}

interface CountrySelectorProps {
  countries: Country[];
  value: string;
  onChange: (val: string) => void;
}

export default function CountrySelector({
  countries,
  value,
  onChange,
}: CountrySelectorProps) {
  return (
    <select
      className="border p-2 rounded-lg w-full bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    >
      <option value="" disabled>
        -- Select Country --
      </option>
      {countries?.map((c) => (
        <option key={c.name} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
}