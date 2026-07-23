import { Metadata } from "next";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "Book Consultation | Trichova Hair Studio",
  description: "Schedule your complimentary hair analysis and consultation at Trichova. Take the first step towards a permanent hair restoration solution.",
};

export default function BookConsultationPage() {
  return (
    <main>
            <ConsultationCTA />
    </main>
  );
}
