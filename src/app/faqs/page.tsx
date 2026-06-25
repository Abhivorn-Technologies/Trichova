import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Trichova Hair Studio",
  description: "Have questions about hair transplants? Read our comprehensive FAQ covering DHT, BIOFUE, recovery times, costs, and graft survival rates.",
};

export default function FAQPage() {
  return (
    <main>
      <PageHero 
        title="Frequently Asked Questions" 
        description="We believe in total transparency. Find answers to the most common questions about our procedures, recovery process, and long-term results."
        imageSrc="/images/clinic-interior.jpg"
      />
      <div className="py-10">
        <FAQ />
      </div>
    </main>
  );
}
