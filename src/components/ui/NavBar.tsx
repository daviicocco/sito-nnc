// components/ui/NavBar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[rgb(208,0,0)] text-white z-50 shadow-md">
      <div className="h-full px-6 flex items-center justify-between relative w-full">
        {/* Logo */}
        <img src="/images/LogoWhite.svg" alt="Logo NNC" className="h-12" />

        {/* Titolo centrato */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-tanker font-bold hover:no-underline"
        >
          NNC
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[rgb(208,0,0)] text-white z-40 flex flex-col items-center justify-center space-y-8 text-3xl font-bold"
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">
              Home
            </Link>
            <Link href="/Eventi" onClick={() => setMenuOpen(false)} className="hover:underline">
              Eventi
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
