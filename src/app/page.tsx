import HomeHero from "@/components/ui/HomeHero"
import AboutSection from "@/components/ui/AboutSection";
import EventsSection from "@/components/ui/EventsSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <EventsSection />
      <Footer />
    </>
  );
}