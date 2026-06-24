import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ClinicSection from "@/components/sections/ClinicSection";
import Journey from "@/components/sections/Journey";
import Doctors from "@/components/sections/Doctors";

export const metadata: Metadata = {
  title: "About Trichova | Luxury Hair Restoration Clinic",
  description: "Learn about Trichova Hair Studio, our mission, vision, and the world-class doctors who deliver natural, permanent hair restoration results.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero 
        title="About Trichova" 
        description="Pioneering the future of hair restoration with world-class medical expertise, advanced technology, and a commitment to luxury patient care."
        imageSrc="/images/clinic-interior.jpg"
      />
      <ClinicSection />
      <Doctors />
      <Journey />
    </main>
  );
}
