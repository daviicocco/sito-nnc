// AboutSection
"use client";

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 px-6 py-8">
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-tanker font-bold text-black mt-0 mb-2">CHI SIAMO</h2>
        <p className="text-lg">
          Siamo un gruppo di ragazzi giovanissimi con una grande voglia di creare qualcosa di unico.
          Tutto è iniziato nel 2022, quando un gruppo di amici ha deciso di organizzare un torneo di calcetto per divertirsi e coinvolgere più persone possibili.
          Da quel momento abbiamo cercato di migliorarci a ogni evento, e non ci siamo più fermati!
          Ora non puntiamo solo sullo sport, abbiamo conosciuto nuove realtà in cui ci piacerebbe mettere il nostro tocco.
          <br />
          Benvenuto nel mondo <b>NNC</b>!
        </p>
      </div>

      <div className="flex-1 aspect-[4/3] rounded-lg overflow-hidden">
        <img
          src="/images/foto-gruppo-nnc.jpg"
          alt="Foto gruppo NNC"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
