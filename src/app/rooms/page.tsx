import React, { Suspense } from "react";
import Counter from "@/components/Counter";
import RoomList from "@/components/RoomList";
import Spinner from "@/components/Spinner";
import Filter from "@/components/Filter";
import ReservationForm from "@/components/Reservationsform";

export const metadata = {
  title: "Rooms Page",
  description: "This is the rooms page",
};

interface Props {
  searchParams: { capacity?: string };
}

export const revalidate = 15;

export default function Page({ searchParams }: Props) {

  const capacityFilter = searchParams.capacity?.toLowerCase() || "all";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-50 to-white p-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our Available Rooms
        </h1>
        <p className="text-white text-lg">
          Discover our selection of cozy and comfortable rooms designed to make
          your stay unforgettable. Choose the perfect space that suits your
          needs.
        </p>
      </div>
      <Filter/>

      <Suspense fallback={<Spinner />}>
        <RoomList capacityFilter={capacityFilter} />
      </Suspense>

      <div className="mt-16 max-w-3xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Guests Stayed With Us
        </h2>
        <p className="text-gray-500 mb-6">
          Join our growing family of happy guests who enjoyed a memorable stay.
        </p>
        {/* <Counter /> */}
      </div>
    </div>
  );
}
