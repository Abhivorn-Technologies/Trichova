import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WhyTrichova from "@/components/sections/WhyTrichova";
import Technology from "@/components/sections/Technology";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Why Choose Trichova | Luxury Hair Clinic",
  description: "Discover why Trichova is India's most advanced hair restoration studio. 25-year warranty, 95-98% graft survival, and doctor-led procedures.",
};

export default function WhyTrichovaPage() {
  return (
    <main>
      <PageHero 
        title="Why Choose Us" 
        description="We don't just restore hair; we restore confidence. Discover the medical excellence, cutting-edge technology, and luxury care that makes Trichova the premier choice for hair restoration."
        imageSrc="/images/hero-confidence.jpg"
      />
      <div className="py-10">
        <WhyTrichova />
      </div>
      <Technology />
      <Testimonials />
    </main>
  );
}
