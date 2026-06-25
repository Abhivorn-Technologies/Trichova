import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import DHTFeature from "@/components/sections/DHTFeature";

export const metadata: Metadata = {
  title: "DHT Hair Transplant | Trichova Hair Studio",
  description: "Direct Hair Implantation (DHT) at Trichova. Advanced, precise, and natural-looking hair transplants without shaving. Learn more and book a consultation.",
};

export default function DHTPage() {
  return (
    <main>
      <PageHero 
        title="DHT Hair Transplant" 
        description="The ultimate precision in hair restoration. Direct Hair Implantation offers maximum density, total angle control, and the option to restore your hair without shaving your head."
        imageSrc="/images/hero-confidence.jpg"
      />
      <DHTFeature />
    </main>
  );
}
