import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "NNC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
