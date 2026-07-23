import { Metadata } from "next";
import Results from "@/components/sections/Results";

export const metadata: Metadata = {
  title: "Before & After Results | Trichova Hair Studio",
  description: "View our gallery of life-changing hair transformations. See real before and after photos of our DHT and BIOFUE hair transplant patients.",
};

export default function ResultsPage() {
  return (
    <main className="pt-12 md:pt-14 bg-ivory min-h-screen">
      <Results />
    </main>
  );
}
