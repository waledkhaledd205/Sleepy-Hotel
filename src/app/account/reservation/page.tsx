"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ReservationPage() {
  const [reservation, setReservation] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("reservation");
    if (data) {
      setReservation(JSON.parse(data));
    }
  }, []);

  if (!reservation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">No reservation found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 via-blue-50 to-white p-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Reservation Details
        </h1>

        <Image
          src={reservation.roomImage}
          alt={reservation.roomName}
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <p><strong>Room:</strong> {reservation.roomName}</p>
        <p><strong>Guests:</strong> {reservation.guests}</p>
        <p><strong>Check-in:</strong> {reservation.checkIn}</p>
        <p><strong>Check-out:</strong> {reservation.checkOut}</p>
        <p><strong>Price:</strong> ${reservation.roomPrice}</p>
        <p className="text-sm text-gray-600 mt-2">{reservation.roomDescription}</p>
      </div>
    </div>
  );
}
