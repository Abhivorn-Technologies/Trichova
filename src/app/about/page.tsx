import { Metadata } from "next";
import ClinicSection from "@/components/sections/ClinicSection";
import Journey from "@/components/sections/Journey";
import Doctors from "@/components/sections/Doctors";

export const metadata: Metadata = {
  title: "About Trichova | Luxury Hair Restoration Clinic",
  description: "Learn about Trichova Hair Studio, our mission, vision, and the world-class doctors who deliver natural, permanent hair restoration results.",
};

export default function AboutPage() {
  return (
    <main className="pt-12 md:pt-14 bg-ivory min-h-screen">
      <ClinicSection />
      <Doctors />
      <Journey />
    </main>
  );
}
