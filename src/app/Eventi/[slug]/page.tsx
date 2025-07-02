"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Phone, Download, ArrowLeft, Users } from "lucide-react";
import { eventi, Evento } from "../../../data/events";

export default function EventoPage() {
  const { slug } = useParams();
  const evento: Evento | undefined = eventi.find((e) => e.slug === slug);

  if (!evento) {
    return (
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 pt-24">
        <div className="text-center py-16">
          <div className="text-gray-400 mb-6">
            <Calendar className="w-24 h-24 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Evento non trovato
          </h1>
          <p className="text-gray-600 mb-8">
            L'evento che stai cercando non esiste o è stato rimosso.
          </p>
          <Link href="/Eventi">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna agli eventi
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const getEventStatus = (data: Date) => {
    const oggi = new Date();
    const treGiorni = new Date();
    treGiorni.setDate(oggi.getDate() + 3);
    
    if (data < oggi) {
      return { status: 'passato', variant: 'secondary' as const, text: 'Evento concluso' };
    } else if (data <= treGiorni) {
      return { status: 'imminente', variant: 'destructive' as const, text: 'Evento imminente' };
    } else {
      return { status: 'futuro', variant: 'default' as const, text: 'Evento in programma' };
    }
  };

  const eventStatus = getEventStatus(evento.data);

  return (
    <main className="flex-grow max-w-6xl mx-auto px-4 py-8 pt-20 sm:px-6 sm:py-16 sm:pt-24">
      {/* Breadcrumb */}
      <div className="mb-6 sm:mb-8">
        <Link 
          href="/Eventi" 
          className="inline-flex items-center text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna agli eventi
        </Link>
      </div>

      <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Contenuto principale */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Header con logo */}
          <div className="space-y-4">
            <Badge variant={eventStatus.variant} className="mb-2 sm:mb-4">
              {eventStatus.text}
            </Badge>
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-tanker font-bold text-black leading-tight">
                  {evento.titolo}
                </h1>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={evento.logo}
                  alt={`Logo ${evento.titolo}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Informazioni principali */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Dettagli dell'evento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Data</p>
                    <p className="font-semibold text-sm sm:text-base">
                      {evento.data.toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Orario</p>
                    <p className="font-semibold text-sm sm:text-base">
                      {evento.data.toLocaleTimeString("it-IT", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:col-span-2">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Luogo</p>
                    <p className="font-semibold text-sm sm:text-base">{evento.luogo}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Descrizione */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Descrizione</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                {evento.descrizione}
              </p>
            </CardContent>
          </Card>

          {/* Contatti */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <Users className="w-5 h-5 mr-2" />
                Contatti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {evento.contatti.map(({ nome, telefono }, index) => (
                  <div key={telefono}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{nome}</p>
                        <p className="text-gray-600 text-xs sm:text-sm">Responsabile evento</p>
                      </div>
                      <a
                        href={`tel:${telefono}`}
                        className="self-start sm:self-auto"
                      >
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          <Phone className="w-4 h-4 mr-2" />
                          {telefono}
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documenti - Mobile, alla fine */}
          <div className="lg:hidden">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Download className="w-5 h-5 mr-2" />
                  Documenti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={evento.regolamentoUrl}
                  download
                  className="w-full block"
                >
                  <Button className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Scarica regolamento
                  </Button>
                </a>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Documento PDF con tutte le informazioni
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar - Desktop con documenti allineati ai dettagli */}
        <div className="hidden lg:block space-y-6">
          {/* Spazio per allineare con i dettagli evento */}
          <div className="h-32"></div>
          
          {/* Documenti */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Download className="w-5 h-5 mr-2" />
                Documenti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={evento.regolamentoUrl}
                download
                className="w-full block"
              >
                <Button className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Scarica regolamento
                </Button>
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Documento PDF con tutte le informazioni
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}