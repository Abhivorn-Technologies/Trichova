import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Technology from "@/components/sections/Technology";

export const metadata: Metadata = {
  title: "FUE & Sapphire Hair Transplant | Trichova",
  description: "Advanced Follicular Unit Extraction (FUE) using precision Sapphire blades for minimal scarring, faster recovery, and high density.",
};

export default function FUEPage() {
  return (
    <main>
      <PageHero 
        title="Sapphire FUE Transplant" 
        description="Experience the gold standard in hair extraction. Our Sapphire FUE technique ensures minimal tissue trauma, accelerated healing, and undetectable, natural results."
        imageSrc="/images/clinic-interior.jpg"
      />
      <Technology />
    </main>
  );
}
