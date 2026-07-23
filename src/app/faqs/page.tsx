import { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Trichova Hair Studio",
  description: "Have questions about hair transplants? Read our comprehensive FAQ covering DHT, BIOFUE, recovery times, costs, and graft survival rates.",
};

export default function FAQPage() {
  return (
    <main>
            <div className="pt-12 md:pt-14 pb-10 bg-ivory min-h-screen w-full">
        <FAQ />
      </div>
    </main>
  );
}
