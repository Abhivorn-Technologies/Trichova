import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BIOFUE Hair Transplant in Hyderabad | Trichova",
  description:
    "Experience BIOFUE Hair Transplant in Hyderabad at Trichova Hair Studio. A refined, individualized approach combining precision follicular extraction and bioactive restoration.",
  keywords: [
    "BIOFUE Hair Transplant in Hyderabad",
    "hair thinning treatment",
    "best doctors for hair loss",
    "best hair care clinic near me",
    "BIOFUE",
    "Trichova",
  ],
};

export default function BioFUEPage() {
  return (
    <main className="pt-20 lg:pt-28 bg-white">
      
      <div className="section-container py-10 md:py-16 bg-white">
        {/* Split Hero: Matter on one side, Image on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Matter / Text side */}
          <div className="space-y-4 text-left">
            <span className="badge-gold">Specialized Protocol</span>
            <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl text-left leading-tight">
              BIOFUE Hair Transplant in <span className="gradient-text-gold">Hyderabad</span>
            </h1>
            <h2 className="text-lg md:text-xl font-serif text-gold font-medium">
              A Refined Approach to Hair Restoration with BIOFUE
            </h2>
            <div className="gold-divider" />
            <p className="text-slate-600 leading-relaxed text-base pt-2">
              Every hair transplant procedure follows the same objective—to restore healthy hair growth in 
              areas affected by thinning or baldness. The difference lies in how the procedure is planned, 
              how the follicles are handled, and how the treatment is personalized for each individual. At 
              Trichova Hair Studio, our BIOFUE approach is designed to combine precision, careful 
              planning, and individualized care to support long-term hair restoration.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              BIOFUE is Trichova's specialized hair restoration protocol that combines meticulous follicular 
              extraction with precise implantation techniques. Instead of focusing only on replacing lost 
              hair, the procedure is planned to improve overall hair density while preserving the quality of 
              healthy follicles.
            </p>
          </div>

          {/* Image side */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-card-hover border border-gold/25">
            <Image
              src="/images/treatments/bio-fue.jpg"
              alt="BIOFUE Hair Transplant in Hyderabad - Trichova Hair Studio"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Detailed matter below */}
        <div className="max-w-4xl mx-auto space-y-6 text-slate-600 leading-relaxed text-base border-t border-gold/15 pt-10">
          <p>
            Every BIOFUE treatment begins with a detailed evaluation of your scalp, donor hair 
            availability, hair density, and hair loss pattern. This comprehensive assessment helps our 
            specialists determine whether BIOFUE is the right choice for your condition and allows us to 
            develop a treatment plan based entirely on your individual requirements. Patients searching 
            for the best doctors for hair loss often value this personalized approach because every 
            recommendation is made after careful clinical assessment rather than following a standard 
            treatment protocol.
          </p>
          <p>
            People looking for <strong>BIOFUE Hair Transplant in Hyderabad</strong> are often searching for more 
            than just a procedure—they want trusted guidance and long-term care. From consultation 
            and hairline planning to follicle implantation and recovery, our team remains focused on 
            delivering a seamless treatment experience with continuous support at every stage.
          </p>
          <p>
            If you've been searching for the best hair care clinic near me, Trichova Hair Studio offers 
            personalized hair restoration solutions designed around your needs, expectations, and 
            long-term hair health. Our commitment is to provide thoughtful care, transparent guidance, 
            and treatment plans that help you achieve fuller, healthier-looking hair.
          </p>
        </div>
      </div>

      <div className="section-container py-10 md:py-20 bg-ivory">
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
