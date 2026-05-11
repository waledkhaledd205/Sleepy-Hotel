import RoomType from "@/types/room";
import ReservationForm from "@/components/Reservationsform";

interface Props {
  room: RoomType;
}

function Reservation({ room }: Props) {
  return (
    <div className="border border-gray-800 min-h-[400px]">
      <ReservationForm room={room} />
    </div>
  );
}

export default Reservation;
