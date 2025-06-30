"use client";

import { useParams } from "next/navigation";
import { eventi, Evento } from "../../../data/events";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";

export default function EventoPage() {
  const { slug } = useParams();
  const evento: Evento | undefined = eventi.find(e => e.slug === slug);

  if (!evento) {
    return <div className="p-8 text-center text-red-600">Evento non trovato</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main contenuto */}
      <main className="flex-grow pt-24 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <section className="flex-1 space-y-6">
          <h2 className="text-4xl font-tanker font-bold">{evento.titolo}</h2>
          <p className="text-lg font-semibold">
            {evento.dataOra} - {evento.luogo}
          </p>
          <p>{evento.descrizione}</p>

          <div>
            <h3 className="font-bold mb-2">Contatti</h3>
            {evento.contatti.map(({ nome, telefono }) => (
              <div key={telefono} className="flex items-center gap-2 mb-1">
                <span>{nome}:</span>
                <a href={`tel:${telefono}`} className="text-blue-600 underline">
                  {telefono}
                </a>
              </div>
            ))}
          </div>

          <a
            href={evento.regolamentoUrl}
            download
            className="inline-block px-6 py-3 bg-[rgb(208,0,0)] text-white font-bold rounded hover:bg-red-700 transition"
          >
            Scarica regolamento
          </a>
        </section>

        <aside className="flex-1 flex justify-center items-center">
          <img src={evento.logo} alt={`Logo ${evento.titolo}`} className="max-w-full max-h-64 object-contain" />
        </aside>
      </main>

      {/* Footer sempre in fondo */}
      <Footer />
    </div>
  );
}
