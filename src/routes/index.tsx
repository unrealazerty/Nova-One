import { createFileRoute } from "@tanstack/react-router";
import { Navbar, ScrollProgress } from "@/components/nova/Navbar";
import { Hero } from "@/components/nova/Hero";
import {
  DesignSection,
  CameraSection,
  PerfSection,
  AISection,
  GallerySection,
  VideoSection,
  TestimonialsSection,
  PricingSection,
  FaqSection,
  ContactSection,
  Footer,
} from "@/components/nova/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <DesignSection />
      <CameraSection />
      <PerfSection />
      <AISection />
      <GallerySection />
      <VideoSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
