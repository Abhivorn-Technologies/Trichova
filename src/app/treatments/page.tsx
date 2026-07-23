import { Metadata } from "next";
import Services from "@/components/sections/Services";
import Comparison from "@/components/sections/Comparison";

export const metadata: Metadata = {
  title: "Treatments | Advanced Hair Transplant Services",
  description: "Explore our world-class hair restoration treatments including DHT, BIOFUE, Sapphire FUE, Female Hair Transplant, and Beard Restoration.",
};

export default function TreatmentsPage() {
  return (
    <main>
            <Services />
      <Comparison />
    </main>
  );
}
