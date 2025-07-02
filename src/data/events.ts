export interface Evento {
  slug: string;
  titolo: string;
  data: Date;         // qui usiamo Date, non stringa
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
    data: new Date("2025-07-14T20:00:00"),
    luogo: "via Sebastiano Satta, Nuraminis (SU)",
    descrizione: "Descrizione dettagliata del torneo di prova.",
    contatti: [
      { nome: "Matteo", telefono: "1234567890" },
      { nome: "Simone", telefono: "0987654321" }
    ],
    logo: "/images/LogoClassic.svg",
    regolamentoUrl: "/files/regolamento-torneo-prova.pdf"
  },
  {
    slug: "prova",
    titolo: "prova",
    data: new Date("2025-08-20T20:00:00"),
    luogo: "via Sebastiano Satta, Nuraminis (SU)",
    descrizione: "Descrizione dettagliata del torneo di prova.",
    contatti: [
      { nome: "Matteo", telefono: "1234567890" },
      { nome: "Simone", telefono: "0987654321" }
    ],
    logo: "/images/LogoClassic.svg",
    regolamentoUrl: "/files/regolamento-torneo-prova.pdf"
  },
  {
    slug: "prova2",
    titolo: "prova2",
    data: new Date("2025-09-01T20:00:00"),
    luogo: "via Sebastiano Satta, Nuraminis (SU)",
    descrizione: "Descrizione dettagliata del torneo di prova.",
    contatti: [
      { nome: "Matteo", telefono: "1234567890" },
      { nome: "Simone", telefono: "0987654321" }
    ],
    logo: "/images/LogoClassic.svg",
    regolamentoUrl: "/files/regolamento-torneo-prova.pdf"
  },
  {
    slug: "prova3",
    titolo: "prova3",
    data: new Date("2025-09-01T20:00:00"),
    luogo: "via Sebastiano Satta, Nuraminis (SU)",
    descrizione: "Descrizione dettagliata del torneo di prova.",
    contatti: [
      { nome: "Matteo", telefono: "1234567890" },
      { nome: "Simone", telefono: "0987654321" }
    ],
    logo: "/images/LogoClassic.svg",
    regolamentoUrl: "/files/regolamento-torneo-prova.pdf"
  },
  {
    slug: "prova4",
    titolo: "prova4",
    data: new Date("2025-09-01T20:00:00"),
    luogo: "via Sebastiano Satta, Nuraminis (SU)",
    descrizione: "Descrizione dettagliata del torneo di prova.",
    contatti: [
      { nome: "Matteo", telefono: "1234567890" },
      { nome: "Simone", telefono: "0987654321" }
    ],
    logo: "/images/LogoClassic.svg",
    regolamentoUrl: "/files/regolamento-torneo-prova.pdf"
  }
];
