"use client"

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6 py-12">
      {/* Testo a sinistra */}
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold text-Black">CHI SIAMO</h2>
        <p className="text-lg">
          Siamo un team appassionato di motori ed eventi. Offriamo esperienze uniche e indimenticabili per ogni appassionato.
        </p>
      </div>
      {/* Riquadro blu a destra */}
      <div className="flex-1 aspect-[4/3] bg-blue-500 rounded-lg" />
    </section>
  );
}