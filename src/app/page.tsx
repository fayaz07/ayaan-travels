import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import BookingCalculator from "@/components/sections/BookingCalculator";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DriversSection from "@/components/sections/DriversSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BookingCalculator />
        <WhyUsSection />
        <TestimonialsSection />
        <DriversSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
