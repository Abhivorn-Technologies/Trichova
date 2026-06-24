import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Results from "@/components/sections/Results";

export const metadata: Metadata = {
  title: "Before & After Results | Trichova Hair Studio",
  description: "View our gallery of life-changing hair transformations. See real before and after photos of our DHI and BIOFUE hair transplant patients.",
};

export default function ResultsPage() {
  return (
    <main>
      <PageHero 
        title="Transformations" 
        description="Every image here represents a life changed and confidence restored. Browse our gallery of real patient results, showcasing the density and natural hairlines we achieve at Trichova."
        imageSrc="/images/clinic-interior.jpg"
      />
      <Results />
    </main>
  );
}
