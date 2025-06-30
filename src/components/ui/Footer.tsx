"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(22,26,29)] text-white py-10 px-4 text-center space-y-4">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-tanker font-bold">NNC</h1>
      </div>

      {/* Social */}
      <div className="flex justify-center space-x-6 text-xl">
        <Link
          href="https://www.instagram.com/newnuraminiscompany/"
          className="hover:no-underline"
        >
          Instagram
        </Link>
        <Link
          href="https://www.facebook.com/share/1CcCFsNiSh/?mibextid=wwXIfr"
          className="hover:no-underline"
        >
          Facebook
        </Link>
        
      </div>

      {/* Email e PEC */}
      <div className="text-sm space-y-1">
        <p>newnuraminiscompany@gmail.com</p>
        <p>newnuraminiscompany@pec.it</p>
      </div>
      {/* Sede */}
      <div className="text-xs">
        SEDE: Nuraminis (SU) - Sardegna
      </div>

      {/* Linea separatrice */}
      <hr className="border-t border-white w-2 mx-auto" />

      {/* Privacy e policy */}
      <div className="text-xs mt-2">
        Privacy & Policy
      </div>
    </footer>
  );
}
