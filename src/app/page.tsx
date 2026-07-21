import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import WhyTrichova from "@/components/sections/WhyTrichova";
import HomeSEOSection from "@/components/sections/HomeSEOSection";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "Best Hair Transplant Clinic in Hyderabad | Trichova Hair Studio",
  description:
    "Trichova Hair Studio is the best hair transplant clinic in Hyderabad, offering personalized hair fall, hair thinning, and hair loss treatments with advanced BIOFUE and DHT solutions.",
  keywords: [
    "Best Hair Transplant Clinic in Hyderabad",
    "hair loss treatment in Hyderabad",
    "hair fall treatment in Hyderabad",
    "hair thinning treatment in Hyderabad",
    "hair regrowth treatment",
    "hair implants in Hyderabad",
    "female hair loss treatment in Hyderabad",
    "beard transplant in Hyderabad",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Results />
      <WhyTrichova />
      <HomeSEOSection />
      <ConsultationCTA />
    </main>
  );
}
