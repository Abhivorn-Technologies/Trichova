import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beard Transplant in Hyderabad | Trichova",
  description:
    "Improve facial hair density with a precise Beard Transplant in Hyderabad at Trichova Hair Studio. Custom hair follicle placement designed to complement your facial structure.",
  keywords: [
    "Beard Transplant in Hyderabad",
    "beard transplant",
    "beard restoration",
    "facial hair transplant",
    "Trichova",
  ],
};

export default function BeardTransplantPage() {
  return (
    <main className="pt-20 lg:pt-28 bg-ivory">
      <div className="section-container py-12 md:py-16 bg-ivory">
        {/* Split Hero: Matter on one side, Image on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Matter / Text side */}
          <div className="space-y-4 text-left">
            <span className="badge-gold">Facial Hair Artistry</span>
            <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl text-left leading-tight">
              Beard Transplant in <span className="gradient-text-gold">Hyderabad</span>
            </h1>
            <h2 className="text-lg md:text-xl font-serif text-gold font-medium">
              A Well-Defined Beard Can Change the Way You Look
            </h2>
            <div className="gold-divider" />
            <p className="text-slate-600 leading-relaxed text-base pt-2">
              A beard does more than add facial hair—it shapes your appearance. It can define your jawline, 
              highlight your facial features, and become part of your personal style. While some men naturally 
              grow a full beard, others may have uneven growth, visible patches, or areas where hair never 
              develops.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              A beard transplant offers an opportunity to improve beard density by using your own healthy 
              hair follicles. The objective isn't simply to add more hair; it's to create a beard that suits 
              your facial structure and grows naturally over time.
            </p>
          </div>

          {/* Image side */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-card-hover border border-gold/25">
            <Image
              src="/images/treatments/beard-transplant.jpg"
              alt="Beard Transplant in Hyderabad - Trichova Hair Studio"
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
            At Trichova Hair Studio, beard restoration is approached with attention to detail rather than 
            a standard template. Before planning the procedure, we study your facial proportions, 
            existing beard growth, hair texture, and the style you wish to achieve. Whether you're looking 
            to fill small patchy areas, define your beard line, strengthen your moustache, or create a 
            fuller beard, every plan is designed around your individual preferences.
          </p>
          <p>
            Choosing a <strong>Beard Transplant in Hyderabad</strong> is about more than improving facial hair. 
            It's about achieving a look that feels natural and complements your features without appearing 
            artificial or overdone. Our team focuses on thoughtful planning, precise follicle placement, 
            and results that continue to look consistent as your beard grows and can be trimmed or styled 
            just like the rest of your facial hair.
          </p>
          <p className="font-semibold text-navy-950">
            Every face tells a different story, and every beard should be designed to match it. At 
            Trichova Hair Studio, we help you achieve facial hair that looks authentic, feels natural, and 
            reflects your own style—not someone else's.
          </p>
        </div>
      </div>
    </main>
  );
}
