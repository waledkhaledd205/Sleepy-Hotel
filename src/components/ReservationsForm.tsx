"use client";

import { useState } from "react";
import Room from "@/types/room";
import { useRouter } from "next/navigation";

interface Props {
  room: Room;
}

function ReservationForm({ room }: Props) {
  const { capacity } = room; 
  const router = useRouter();

  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const reservation = {
      roomId: room.id,
      roomName: room.name,
      roomImage: room.image,
      roomPrice: room.price,
      roomDescription: room.description,
      guests,
      checkIn,
      checkOut,
    };

    localStorage.setItem("reservation", JSON.stringify(reservation));
    router.push("/account/reservation");
  }

  return (
    <div className="max-w-md w-full bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
        <p className="font-semibold">Make a Reservation</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Number of Guests
          </label>
          <input
            type="number"
            max={capacity} 
            min={1}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            placeholder={`Max ${capacity}`}
            className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Check-in Date
          </label>
          <input
            type="date"
            value={checkIn}
            min={new Date().toISOString().split("T")[0]} 
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Check-out Date
          </label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || new Date().toISOString().split("T")[0]} 
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
