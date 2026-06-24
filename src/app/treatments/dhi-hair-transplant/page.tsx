import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import DHIFeature from "@/components/sections/DHIFeature";

export const metadata: Metadata = {
  title: "DHI Hair Transplant | Trichova Hair Studio",
  description: "Direct Hair Implantation (DHI) at Trichova. Advanced, precise, and natural-looking hair transplants without shaving. Learn more and book a consultation.",
};

export default function DHIPage() {
  return (
    <main>
      <PageHero 
        title="DHI Hair Transplant" 
        description="The ultimate precision in hair restoration. Direct Hair Implantation offers maximum density, total angle control, and the option to restore your hair without shaving your head."
        imageSrc="/images/hero-confidence.jpg"
      />
      <DHIFeature />
    </main>
  );
}
