import { country } from "@/api/country";
import Form from "@/components/form";
export default async function ProfilePage() {
  const countries = await country();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 via-blue-50 to-white">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Update Profile
        </h2>

        <Form countries={countries} />
      </div>
    </div>
  );
}
