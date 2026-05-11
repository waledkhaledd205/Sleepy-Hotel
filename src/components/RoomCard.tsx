import React from "react";
import Image from "next/image";
import Room from "@/types/room";
import Link from "next/link";

interface Props {
  room: Room;
}

export default function RoomCard({ room }: Props) {
  return (
    <div className="p-4 rounded-xl shadow-lg bg-white hover:shadow-xl transform transition-transform duration-500 hover:scale-105">
      <Image
        src={room.image}
        alt={room.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-xl font-bold mt-3">{room.name}</h2>

      <p className="text-sm text-gray-500">
        Capacity: {room.capacity} guests
      </p>
      <Link
        href={`/rooms/${room.id}`}
        className="mt-3 inline-block text-blue-600 font-medium hover:underline"
      >
        More Info
      </Link>
    </div>
  );
}
