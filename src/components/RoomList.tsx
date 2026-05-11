import React from "react";
import RoomCard from "./RoomCard";
import rooms from "@/data/rooms.json";
import Room from "@/types/room";

interface Props {
  capacityFilter?: string; 
}

export default function RoomList({ capacityFilter = "all" }: Props) {
  let filteredRooms: Room[] = [];

  if (capacityFilter === "all") {
    filteredRooms = rooms;
  } else if (capacityFilter.toLowerCase() === "small") {
    filteredRooms = rooms.filter((r) => r.capacity <= 2);
  } else if (capacityFilter.toLowerCase() === "medium") {
    filteredRooms = rooms.filter((r) => r.capacity > 2 && r.capacity <= 4);
  } else if (capacityFilter.toLowerCase() === "large") {
    filteredRooms = rooms.filter((r) => r.capacity > 4);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRooms.map((room: Room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
