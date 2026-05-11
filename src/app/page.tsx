import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative group overflow-hidden">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        priority
      />

      <div className="absolute inset-0 bg-black/60 transition-all duration-500 group-hover:bg-black/20"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg mb-8">
          Welcome to <span className="text-teal-400">Sleepy Hotel</span>
        </h1>

        <Link
          href="/rooms"
          className="px-8 py-4 bg-teal-400 text-white rounded-full text-xl font-semibold shadow-lg hover:bg-teal-500 transition"
        >
          View Rooms
        </Link>
      </div>
      {/* {jkf} */}

    </div>
  );
}
