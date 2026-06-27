import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import InfoStrip from "@/components/sections/InfoStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DoctorsSection from "@/components/sections/DoctorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import BackToTop from "@/components/ui/BackToTop";
import ScrollRevealProvider from "@/components/ui/ScrollRevealProvider";

export default function HomePage() {
  return (
    <ScrollRevealProvider>
      <Navbar />
      <main>
        <HeroSection />
        <InfoStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <DoctorsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </ScrollRevealProvider>
  );
}
