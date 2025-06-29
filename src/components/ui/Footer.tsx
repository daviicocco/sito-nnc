"use client"

export default function Footer() {
  return (
    <footer className="bg-[rgb(208,0,0)] text-white py-10 px-4 text-center space-y-4">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold">NNC</h1>
      </div>

      {/* Social */}
      <div className="flex justify-center space-x-6 text-xl">
        <span>Instagram</span>
        <span>Facebook</span>
      </div>

      {/* Email e PEC */}
      <div className="text-sm space-y-1">
        <p>info@nnc.it</p>
        <p>pec@nncpec.it</p>
      </div>

      {/* Sede */}
      <div className="text-xs">
        SEDE: Nuraminis (SU) - Sardegna
      </div>

      {/* Linea separatrice */}
      <hr className="border-t border-white w-2/3 mx-auto" />

      {/* Privacy e policy */}
      <div className="text-xs mt-2">
        Privacy & Policy
      </div>
    </footer>
  );
}
