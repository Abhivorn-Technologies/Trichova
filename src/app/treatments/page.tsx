import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import Comparison from "@/components/sections/Comparison";

export const metadata: Metadata = {
  title: "Treatments | Advanced Hair Transplant Services",
  description: "Explore our world-class hair restoration treatments including DHI, BIOFUE, Sapphire FUE, Female Hair Transplant, and Beard Restoration.",
};

export default function TreatmentsPage() {
  return (
    <main>
      <PageHero 
        title="Our Treatments" 
        description="Comprehensive hair restoration solutions customized to your unique needs, utilizing the most advanced surgical and non-surgical technologies available globally."
        imageSrc="/images/hero-confidence.jpg"
      />
      <Services />
      <Comparison />
    </main>
  );
}
