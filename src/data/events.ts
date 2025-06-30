// src/data/events.ts
export interface Evento {
  slug: string;
  titolo: string;
  dataOra: string;
  luogo: string;
  descrizione: string;
  contatti: { nome: string; telefono: string }[];
  logo: string;
  regolamentoUrl: string;
}

export const eventi: Evento[] = [
  {
    slug: "le-notti-dei-re",
    titolo: "LE NOTTI DEI RE",
    dataOra: "14-19 Luglio 2025, 20:00 - 23:00",
    luogo: "via Sebastiano Satta, Nuraminis (SU)",
    descrizione: "Descrizione dettagliata del torneo di prova.",
    contatti: [
      { nome: "Matteo", telefono: "1234567890" },
      { nome: "Simone", telefono: "0987654321" }
    ],
    logo: "/images/torneo-prova-logo.svg",
    regolamentoUrl: "/files/regolamento-torneo-prova.pdf"
  },
  // altri eventi qui
];
