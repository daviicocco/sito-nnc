"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

const eventi = [
  { id: 1, nome: "Evento numero 1", data: "12/07/2025" },
  { id: 2, nome: "Evento numero 2", data: "20/08/2025" },
  { id: 3, nome: "Evento numero 3", data: "01/09/2025" },
  { id: 4, nome: "Evento numero 4", data: "15/10/2025" },
];

export default function EventsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 3000); // autoplay ogni 3 secondi

    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl font-tanker font-bold text-center text-Black]">
        I NOSTRI EVENTI
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {eventi.map((evento) => (
            <div
              key={evento.id}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px] pr-4"
            >
              <div className="relative bg-blue-500 aspect-[4/3] rounded-lg p-4 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-xl font-bold">{evento.nome}</h3>
                  <p className="text-sm">{evento.data}</p>
                </div>
                <div className="flex justify-end">
                  <Button variant="secondary" className="text-sm">
                    SCOPRI
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
