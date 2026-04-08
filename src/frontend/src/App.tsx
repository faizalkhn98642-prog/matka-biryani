import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BrandStorySection from "@/pages/sections/BrandStorySection";
import CtaSection from "@/pages/sections/CtaSection";
import HeroSection from "@/pages/sections/HeroSection";
import SignatureDishesSection from "@/pages/sections/SignatureDishesSection";
import TestimonialsSection from "@/pages/sections/TestimonialsSection";
import WhyUsSection from "@/pages/sections/WhyUsSection";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <SignatureDishesSection />
        <BrandStorySection />
        <WhyUsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
