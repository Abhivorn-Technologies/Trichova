import { Metadata } from "next";
import WhyTrichova from "@/components/sections/WhyTrichova";
import Technology from "@/components/sections/Technology";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Why Choose Trichova | Luxury Hair Clinic",
  description: "Discover why Trichova is India's most advanced hair restoration studio. 25-year warranty, 95-98% graft survival, and doctor-led procedures.",
};

export default function WhyTrichovaPage() {
  return (
    <main className="pt-12 md:pt-14 bg-ivory min-h-screen">
      <div className="pb-10">
        <WhyTrichova />
      </div>
      <Technology />
      <Testimonials />
    </main>
  );
}
