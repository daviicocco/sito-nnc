"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { eventi } from "@/data/events";

export default function EventsSection() {
  const autoplayDelay = 4000;
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Funzione per determinare la dimensione del font in base alla lunghezza del titolo
  const getTitleFontSize = (title: string) => {
    const length = title.length;
    if (length <= 15) return "text-xl sm:text-2xl";
    if (length <= 25) return "text-lg sm:text-xl";
    if (length <= 35) return "text-base sm:text-lg";
    return "text-sm sm:text-base";
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-8 space-y-8 mt-10">
      <h2 className="text-3xl font-bold text-center text-black">
        I NOSTRI EVENTI
      </h2>

      <div className="px-4 sm:px-12 lg:px-24 pb-8">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: autoplayDelay,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: 1,
            skipSnaps: false,
            dragFree: false,
          }}
          className="w-full overflow-hidden sm:overflow-visible"
        >
          <CarouselContent className="-ml-4 sm:-ml-8">
            {eventi.map((evento, index) => {
              return (
                <CarouselItem
                  key={`${evento.slug}-${index}`}
                  className="pl-4 sm:pl-8 pb-8 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="
                      bg-white
                      rounded-lg
                      shadow-lg
                      aspect-[3/2]
                      p-6
                      flex
                      flex-col
                      w-full
                      hover:shadow-xl
                      transition-all
                      duration-300
                      relative
                    "
                    style={{ minHeight: 200 }}
                  >
                    {/* Header con titolo e logo */}
                    <div className="flex justify-between items-start mb-4 flex-1">
                      <div className="flex-1 pr-4">
                        <h3 className={`${getTitleFontSize(evento.titolo)} font-tanker text-black leading-tight`}>
                          {evento.titolo}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <img 
                          src={evento.logo} 
                          alt={`Logo ${evento.titolo}`}
                          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                        />
                      </div>
                    </div>

                    {/* Bottone fisso in basso */}
                    <div className="flex justify-end mt-auto">
                      <Link href={`/eventi/${evento.slug}`}>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          SCOPRI
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselNext className="hidden sm:flex -right-8 lg:-right-12" />
          <CarouselPrevious className="hidden sm:flex -left-8 lg:-left-12" />
        </Carousel>

        <div className="mt-4 flex flex-col items-center space-y-4">
          {/* Dots indicator - per tutte le dimensioni */}
          <div className="flex space-x-2">
            {eventi.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-[rgb(208,0,0)] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Pulsante "Scopri tutti" - visibile su tutti i dispositivi */}
          <div>
            <Link href="/eventi">
              <Button
                variant="outline"
                size="sm"
                className="text-[rgb(208,0,0)] border-[rgb(208,0,0)] hover:bg-[rgb(208,0,0)] hover:text-white"
              >
                SCOPRI TUTTI GLI EVENTI
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}