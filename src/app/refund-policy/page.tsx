import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Refund Policy | Trichova",
  description: "Read the Refund Policy for Trichova Hair Studio services and procedures.",
};

export default function RefundPolicyPage() {
  return (
    <main>
      <PageHero 
        title="Refund Policy" 
        description="Our policies regarding service cancellations, booking amounts, and refunds."
        imageSrc="/images/clinic-interior.jpg"
      />
      <div className="section-container py-20">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gold/10">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              All services rendered are subject to levy of statutory taxes, for the time being in force, on the date of payment. Any additional tax as may be promulgated/ levied/ imposed by the State/ Central Government will be to the client&apos;s account. The Management will not refund any amount for services rendered, whether availed in full or not by the client and the refund of Booking Amount will be refunded only within 30 days from the date of Booking. Any Refund request for Booking post 30 days and refund requests for the service rendered will not be entertained.
            </p>
            <p>
              All refund requests have to be mailed by the Client to <a href="mailto:info@trichovahair.com" className="text-gold hover:underline font-medium">info@trichovahair.com</a> and if the refund request is approved, statutory taxes and charges will be deducted before we process the refund.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
