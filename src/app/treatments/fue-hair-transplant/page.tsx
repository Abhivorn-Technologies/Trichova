import { Metadata } from "next";
import Technology from "@/components/sections/Technology";

export const metadata: Metadata = {
  title: "FUE Hair Transplant in Hyderabad | Trichova",
  description:
    "Get natural-looking, permanent results with advanced FUE Hair Transplant in Hyderabad at Trichova Hair Studio. Minimally invasive follicular extraction with fast recovery.",
  keywords: [
    "FUE Hair Transplant in Hyderabad",
    "FUE hair transplant",
    "Sapphire FUE",
    "hair restoration",
    "Trichova",
  ],
};

export default function FUEPage() {
  return (
    <main>
      
      <div className="w-full bg-white">
        <div className="section-container py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-left">
            <span className="badge-gold">Modern Procedure</span>
            <h2 className="heading-section mt-2 mb-2 text-3xl md:text-4xl text-left">
              FUE Hair Transplant in <span className="gradient-text-gold">Hyderabad</span>
            </h2>
            <h3 className="text-xl font-serif text-gold font-medium mb-6">
              A Modern Approach to Natural Hair Restoration
            </h3>
          </div>
          
          <div className="gold-divider" />
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <p>
              Losing your hair doesn't happen overnight, and neither should the decision to undergo a hair 
              transplant. Whether you've noticed a gradually receding hairline, thinning at the crown, or 
              visible bald patches, finding the right treatment begins with understanding your hair loss and 
              choosing a solution that suits your individual needs.
            </p>
            <p>
              At Trichova Hair Studio, we offer <strong>FUE Hair Transplant in Hyderabad</strong> for individuals 
              looking for a minimally invasive procedure that delivers natural-looking, long-lasting results. 
              Every treatment is carefully planned after evaluating your scalp, donor hair quality, hair 
              density, and future hair loss pattern. Instead of following a standard approach, we create a 
              personalized treatment plan designed specifically for you.
            </p>
            <p>
              Follicular Unit Extraction (FUE) is one of the most preferred hair restoration methods 
              because it involves extracting individual hair follicles from the donor area and implanting 
              them into areas with thinning or no hair. Since each follicle is placed with precision, the 
              restored hair grows in a way that blends naturally with your existing hair. The procedure 
              leaves tiny, almost unnoticeable extraction points and allows most people to return to their 
              daily routine within a short period.
            </p>
            <p>
              At Trichova, we understand that a successful hair transplant is not measured only by the 
              number of grafts implanted. It is about designing a hairline that suits your facial features, 
              maintaining natural hair density, and ensuring every stage of the treatment is carried out with 
              care and precision. From your first consultation to post-treatment follow-up, our team is 
              committed to making your experience comfortable, transparent, and well-informed.
            </p>
            <p>
              If you are looking for a reliable FUE Hair Transplant in Hyderabad, Trichova Hair Studio 
              combines clinical expertise, personalized care, and meticulous treatment planning to help 
              you achieve results that look natural today and continue to look natural in the years to come.
            </p>
          </div>
          </div>
        </div>
      </div>

      <Technology />
    </main>
  );
}
