import HomeHero from "@/components/ui/HomeHero"
import AboutSection from "@/components/ui/AboutSection";
import EventsSection from "@/components/ui/EventsSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <AboutSection />
      <EventsSection />
      <Footer />
    </>
  );
}