"use client";
import { ChevronsDown } from "lucide-react";

export default function HomeHero() {
  return (
    <div className="relative min-h-[75vh] text-black">
      <div className="h-[75vh] w-full flex flex-col items-center justify-center text-center px-4 relative bg-[rgb(208,0,0)] text-white pt-10 mb-15">
        <h1 className="text-7xl font-tanker font-bold mb-1">NNC</h1>
        <p className="text-3xl italic mb-2">
          "Vivi un'esperienza insieme a noi"
        </p>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronsDown
            className="h-8 w-8 animate-bounce text-white"
            aria-label="Scroll down"
          />
        </div>
      </div>
    </div>
  );
}