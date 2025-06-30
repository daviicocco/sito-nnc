"use client";

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export default function HomeHero() {
  return (
    <div className="relative min-h-[120vh] text-[rgb(208,0,0)]">
      {/* Hero con sfondo rosso */}
      <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4 relative bg-[rgb(208,0,0)] text-white pt-20">
        <h1 className="text-7xl font-tanker font-bold mb-4">NNC</h1>
        <p className="text-3xl italic mb-8">"Vivi un'esperienza insieme a noi"</p>

        {/* Freccia doppia verso il basso animata, quasi alla fine del rettangolo rosso */}
        <div className="absolute bottom-30 md:bottom-10 left-1/2 transform -translate-x-1/2">
  <ChevronDoubleDownIcon
    className="h-8 w-8 animate-bounce text-white"
    aria-label="Scroll down"
  />
</div>

      </div>
    </div>
  );
}
