import { auth } from "@/data/auth"; 
import Image from "next/image";

export default async function Page() {
  const session = await auth(); 

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">You are not logged in</p>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm text-center transform transition-transform hover:scale-105">
        {user?.image && (
          <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-300 shadow-md">
            <Image
              src={user.image}
              alt={user.name || "Profile"}
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          {user?.name || "No Name"}
        </h2>

        <p className="text-gray-500 mb-0">{user?.email || "No Email"}</p>
      </div>
    </div>
  );
}
