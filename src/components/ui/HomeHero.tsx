"use client";

import { useEffect, useRef, useState } from "react";

export default function HomeHero() {
  const sloganRef = useRef<HTMLParagraphElement>(null);
  const [sloganOffsetTop, setSloganOffsetTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (sloganRef.current) {
      const rect = sloganRef.current.getBoundingClientRect();
      setSloganOffsetTop(rect.top + window.scrollY);
    }

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerPoint = sloganOffsetTop + 20;
  const maxAnimDistance = 100;
  const rawProgress = scrollY - triggerPoint;
  const progress = Math.max(0, Math.min(rawProgress / maxAnimDistance, 1));

  return (
    <div className="relative min-h-[120vh] text-[rgb(208,0,0)]">
      {/* Sticky red header */}
      <div
  className="fixed top-0 left-0 w-full h-20 flex items-center justify-center bg-[rgb(208,0,0)] text-white z-50 px-4"
  style={{
    transform: `translateY(-${(1 - progress) * 100}%)`,
    transition: "transform 0s linear",
  }}
>
  <div className="flex items-center w-full max-w-6xl">
    {/* Logo a sinistra */}
    <img src="./images/LogoWhite.svg" alt="Logo NNC" className="h-12" />

    {/* Titolo centrato */}
    <h1 className="text-2xl font-bold flex-1 text-center">
      NNC
    </h1>

    {/* Spazio a destra per bilanciare */}
    <div style={{ width: '48px' }} />
  </div>
</div>

      {/* Hero red background */}
      <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4 relative bg-[rgb(208,0,0)] text-white">
        <h1 className="text-7xl font-bold mb-4">NNC</h1>
        <p ref={sloganRef} className="text-3xl italic">
          "Vivi un'esperienza insieme a noi"
        </p>
      </div>
    </div>
  );
}
