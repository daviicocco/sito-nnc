"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import { eventi } from "@/data/events";

export default function EventiPage() {
  const [sortBy, setSortBy] = useState<'data' | 'titolo'>('data');
  const [filterBy, setFilterBy] = useState<'tutti' | 'futuri' | 'passati'>('tutti');

  const now = new Date();
  
  // Filtra gli eventi
  const eventiFiltrati = eventi.filter(evento => {
    if (filterBy === 'futuri') return evento.data > now;
    if (filterBy === 'passati') return evento.data < now;
    return true;
  });

  // Ordina gli eventi
  const eventiOrdinati = [...eventiFiltrati].sort((a, b) => {
    if (sortBy === 'data') {
      return b.data.getTime() - a.data.getTime();
    } else {
      return a.titolo.localeCompare(b.titolo);
    }
  });

  const getEventStatus = (data: Date) => {
    const oggi = new Date();
    const treGiorni = new Date();
    treGiorni.setDate(oggi.getDate() + 3);
    
    if (data < oggi) {
      return { status: 'passato', variant: 'secondary' as const, text: 'Concluso' };
    } else if (data <= treGiorni) {
      return { status: 'imminente', variant: 'destructive' as const, text: 'Imminente' };
    } else {
      return { status: 'futuro', variant: 'default' as const, text: 'In programma' };
    }
  };

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 py-8 pt-20 sm:px-6 sm:py-16 sm:pt-24">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-black">
          I NOSTRI EVENTI
        </h1>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
          Scopri tutti gli eventi passati e futuri della nostra organizzazione
        </p>
      </div>

      {/* Filtri e Ordinamento */}
      <div className="flex flex-col gap-4 justify-between items-stretch sm:items-center mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 sm:items-center">
          <span className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-0 sm:mr-2">Mostra:</span>
          <div className="flex flex-wrap gap-2">
            {(['tutti', 'futuri', 'passati'] as const).map((filter) => (
              <Button
                key={filter}
                variant={filterBy === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterBy(filter)}
                className="capitalize text-xs sm:text-sm flex-1 sm:flex-none"
              >
                {filter === 'tutti' ? 'Tutti' : 
                 filter === 'futuri' ? 'Futuri' : 'Passati'}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
          <span className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-0">Ordina per:</span>
          <div className="flex gap-2">
            <Button
              variant={sortBy === 'data' ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy('data')}
              className="flex-1 sm:flex-none text-xs sm:text-sm"
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Data
            </Button>
            <Button
              variant={sortBy === 'titolo' ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy('titolo')}
              className="flex-1 sm:flex-none text-xs sm:text-sm"
            >
              Titolo
            </Button>
          </div>
        </div>
      </div>

      {/* Contatore risultati */}
      <div className="mb-4 sm:mb-6">
        <p className="text-gray-600 text-sm sm:text-base px-1">
          {eventiOrdinati.length} {eventiOrdinati.length === 1 ? 'evento trovato' : 'eventi trovati'}
        </p>
      </div>

      {/* Grid degli eventi */}
      {eventiOrdinati.length === 0 ? (
        <div className="text-center py-12 sm:py-16">
          <div className="text-gray-400 mb-4">
            <Calendar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
            Nessun evento trovato
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            Non ci sono eventi che corrispondono ai filtri selezionati.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {eventiOrdinati.map((evento) => {
            const eventStatus = getEventStatus(evento.data);
            
            return (
              <div
                key={evento.slug}
                className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Badge di stato */}
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant={eventStatus.variant} className="text-xs">
                    {eventStatus.text}
                  </Badge>
                </div>

                <Link
                  href={`/eventi/${evento.slug}`}
                  className="block p-4 sm:p-6 aspect-[4/3] flex flex-col justify-between"
                  aria-label={`Vai ai dettagli di ${evento.titolo}`}
                >
                  <div className="flex justify-between items-start mt-6 sm:mt-8">
                    <div className="flex-1 pr-3 sm:pr-4">
                      <h3 className="text-lg sm:text-xl font-tanker text-black leading-tight mb-2 sm:mb-3">
                        {evento.titolo}
                      </h3>
                      
                      <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span>
                            {evento.data.toLocaleDateString("it-IT", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span>
                            {evento.data.toLocaleTimeString("it-IT", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <img
                        src={evento.logo}
                        alt={`Logo di ${evento.titolo}`}
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-3 sm:mt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                    >
                      SCOPRI
                    </Button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}