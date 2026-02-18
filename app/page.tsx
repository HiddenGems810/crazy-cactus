import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import AboutSection from "@/components/AboutSection";
import MenuGrid from "@/components/MenuGrid";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import MobileStickyNav from "@/components/MobileStickyNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <AboutSection />
      <MenuGrid />
      <EventsSection />
      <ContactSection />
      <MobileStickyNav />
    </main>
  );
}
