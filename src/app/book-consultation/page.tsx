import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "Book Consultation | Trichova Hair Studio",
  description: "Schedule your complimentary hair analysis and consultation at Trichova. Take the first step towards a permanent hair restoration solution.",
};

export default function BookConsultationPage() {
  return (
    <main>
      <PageHero 
        title="Book Your Consultation" 
        description="Take the first step toward restoring your hair and confidence. Schedule a complimentary, in-depth hair analysis with our senior transplant specialists."
        imageSrc="/images/hero-confidence.jpg"
      />
      <ConsultationCTA />
    </main>
  );
}
