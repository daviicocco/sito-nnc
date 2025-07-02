"use client";
import Link from "next/link";
import { useEffect } from "react";
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
  const eventiOrdinati = [...eventi].sort((a, b) => b.data.getTime() - a.data.getTime());

  return (
    <section className="max-w-6xl mx-auto px-6 py-8 space-y-8 mt-10">
      <h2 className="text-3xl font-tanker font-bold text-center text-black">
        I NOSTRI EVENTI
      </h2>
      
      <div className="px-16 pb-8">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {eventiOrdinati.map((evento) => (
              <CarouselItem 
                key={evento.slug} 
                className="pl-8 pb-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="
                  bg-white
                  rounded-lg
                  shadow-lg
                  aspect-[4/3]
                  p-5
                  flex
                  flex-col
                  justify-between
                  w-full
                  max-w-[320px]
                  mx-auto
                ">
                  <div className="flex justify-between items-start mb-3">
                    <div className="max-w-[60%]">
                      <h3 className="text-2xl font-tanker font-bold text-black leading-tight">
                        {evento.titolo}
                      </h3>
                      <p className="text-xs text-black whitespace-pre-wrap mt-1 leading-snug">
                        {evento.data.toLocaleDateString("it-IT", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={evento.logo}
                        alt={`Logo di ${evento.titolo}`}
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link 
                      href={`/Eventi/${evento.slug}`} 
                      aria-label={`Vai ai dettagli di ${evento.titolo}`}
                    >
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
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}