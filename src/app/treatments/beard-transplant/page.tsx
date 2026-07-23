import { Metadata } from "next";

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
    <main>
            
      <div className="section-container py-10 md:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <span className="badge-gold">Facial Hair Artistry</span>
            <h2 className="heading-section mt-2 mb-2 text-3xl md:text-4xl text-left">
              Beard Transplant in <span className="gradient-text-gold">Hyderabad</span>
            </h2>
            <h3 className="text-xl font-serif text-gold font-medium mb-6">
              A Well-Defined Beard Can Change the Way You Look
            </h3>
          </div>
          
          <div className="gold-divider mb-8" />
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <p>
              A beard does more than add facial hair—it shapes your appearance. It can define your jawline, 
              highlight your facial features, and become part of your personal style. While some men naturally 
              grow a full beard, others may have uneven growth, visible patches, or areas where hair never 
              develops. In many cases, these patterns are influenced by genetics, previous scars, or 
              natural variations in hair growth.
            </p>
            
            <p>
              A beard transplant offers an opportunity to improve beard density by using your own healthy 
              hair follicles. The objective isn't simply to add more hair; it's to create a beard that suits 
              your facial structure and grows naturally over time. Every beard has its own direction, texture, 
              and pattern, so careful planning plays a significant role in achieving a balanced appearance.
            </p>
            
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
      </div>
    </main>
  );
}
