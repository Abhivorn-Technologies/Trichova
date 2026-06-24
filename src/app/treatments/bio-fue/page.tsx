import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "BIO Integrated FUE | Trichova",
  description: "BIO Integrated FUE combines advanced Follicular Unit Extraction with bioactive growth factors for accelerated healing and superior graft survival.",
};

export default function BioFUEPage() {
  return (
    <main>
      <PageHero 
        title="BIO Integrated FUE" 
        description="The perfect synergy of surgical precision and regenerative medicine. By integrating bioactive growth factors during the FUE procedure, we maximize graft survival and significantly accelerate your healing process."
        imageSrc="/images/hero-confidence.jpg"
      />
      <div className="section-container py-20 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-center mb-10">How BIOFUE Works</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10">
              <h3 className="text-xl font-bold text-navy-900 mb-4">1. Extraction & Preservation</h3>
              <p className="text-slate-600">Hair follicles are extracted using ultra-precise punches and immediately placed into a specialized bioactive solution rich in growth factors to maintain vitality outside the body.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10">
              <h3 className="text-xl font-bold text-navy-900 mb-4">2. Bioactive Implantation</h3>
              <p className="text-slate-600">The recipient area is treated with regenerative serum before the follicles are implanted. This nutrient-rich environment stimulates rapid vascularization and strong root attachment.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
