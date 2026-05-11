"use client";

export default function SelectCountry({
  countries,
  value,
  onChange,
}: {
  countries: any[];
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <select
      className="border p-2 rounded w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">-- Select Country --</option>
      {countries.map((c: any) => (
        <option key={c.name} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
