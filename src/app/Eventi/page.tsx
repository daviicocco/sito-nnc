"use client";

import Link from "next/link";
import Navbar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { eventi } from "../../data/events";

export default function EventiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-tanker font-bold mb-10 text-center text-black">
          I NOSTRI EVENTI
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {eventi.map((evento) => (
            <Link
              key={evento.slug}
              href={`/Eventi/${evento.slug}`}
              className="relative bg-[rgb(208,0,0)] aspect-[4/3] rounded-lg p-6 flex flex-col justify-between text-white hover:bg-red-700 transition"
            >
              <div>
                <h3 className="text-xl font-bold">{evento.titolo}</h3>
                <p className="text-sm">{evento.dataOra}</p>
              </div>

              <div className="flex justify-end">
                <button
                  className="border border-white rounded px-3 py-1 text-sm font-semibold hover:bg-white hover:text-[rgb(208,0,0)] transition"
                  aria-label={`Scopri dettagli di ${evento.titolo}`}
                >
                  SCOPRI
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
