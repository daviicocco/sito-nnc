"use client";

import Image from "next/image";

type EventInfo = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  contacts: { name: string; phone: string }[];
  regulationPdfUrl: string;
  logoUrl: string;
};

export default function EventPage({ event }: { event: EventInfo }) {
  return (
    <div className="text-black">
      {/* Sticky header come in HomeHero */}
      <div className="fixed top-0 left-0 w-full h-20 flex items-center justify-center bg-[rgb(208,0,0)] text-white z-50 px-4">
        <div className="flex items-center w-full max-w-6xl">
          <img src="/images/LogoWhite.svg" alt="Logo NNC" className="h-12" />
          <h1 className="text-2xl font-tanker flex-1 text-center">NNC</h1>
          <div style={{ width: "48px" }} />
        </div>
      </div>

      {/* Spacer per evitare sovrapposizione col fixed header */}
      <div className="h-20" />

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Left section: Event info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-tanker text-[rgb(208,0,0)]">{event.title}</h2>
          <p className="text-lg text-gray-700">
            <strong>Data:</strong> {event.date}<br />
            <strong>Ora:</strong> {event.time}<br />
            <strong>Luogo:</strong> {event.location}
          </p>
          <p className="text-base text-gray-800">{event.description}</p>
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Contatti</h3>
            <ul className="space-y-1">
              {event.contacts.map((c, i) => (
                <li key={i}>
                  <span className="font-medium">{c.name}:</span> <a href={`tel:${c.phone}`} className="text-blue-600">{c.phone}</a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={event.regulationPdfUrl}
            download
            className="inline-block bg-[rgb(208,0,0)] text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Scarica regolamento
          </a>
        </div>

        {/* Right section: Event logo */}
        <div className="flex justify-center">
          <Image
            src={event.logoUrl}
            alt="Logo torneo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </main>

      {/* Footer semplice */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} NNC. Tutti i diritti riservati.
      </footer>
    </div>
  );
}
