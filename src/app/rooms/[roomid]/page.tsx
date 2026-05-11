import React from "react";
import rooms from "@/data/rooms.json";
import Image from "next/image";
import Link from "next/link";
import ReservationForm from "@/components/ReservationsForm";
import TextExpander from "@/components/TextExpander";
import { auth } from "@/data/auth";
interface Props {
  params: { roomid: string };
}

export const metadata = {
  title: "Rent Room",
  description: "This is the rooms page",
};

export default async function Page({ params }: Props) {
  const session = await auth(); 
  const room = rooms.find((r) => r.id.toString() === params.roomid);

  if (!room) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-blue-500 via-blue-50 to-white text-center p-6">
        <Image
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Not Found"
          width={400}
          height={300}
          className="w-80 mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Room not found !
        </h2>
        <p className="text-gray-500 mb-6">
          The room you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/rooms"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-50 to-white flex flex-col items-center p-4 overflow-hidden">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl overflow-hidden mb-6">
        <Image
          src={room.image}
          alt={room.name}
          width={1000}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-extrabold text-gray-800 mb-3">
            {room.name}
          </h1>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            <TextExpander>{room.description}</TextExpander>
          </p>

          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-teal-600">
              ${room.price} / night
            </p>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              Capacity: {room.capacity} guests
            </span>
          </div>

          <Link
            href="/rooms"
            className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm"
          >
            Back to Rooms
          </Link>
        </div>
      </div>

      {session ? (
        <div className="max-w-md w-full">
          <ReservationForm room={room} />
        </div>
      ) : (
        <p className="text-gray-600 text-sm">
          Please{" "}
          <Link href="/signIn" className="text-blue-600 font-medium underline">
            login
          </Link>{" "}
          to make a reservation.
        </p>
      )}
    </div>
  );
}
