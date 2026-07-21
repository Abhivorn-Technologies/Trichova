import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Female Hair Loss Treatment in Hyderabad | Trichova",
  description:
    "If you're searching for Female Hair Loss Treatment in Hyderabad, Trichova Hair Studio offers thoughtful diagnosis, medical therapies, and customized hair transplants without shaving.",
  keywords: [
    "Female Hair Loss Treatment in Hyderabad",
    "female hair loss treatment",
    "female hair transplant",
    "hair restoration for women",
    "Trichova",
  ],
};

export default function FemaleTransplantPage() {
  return (
    <main>
      <PageHero 
        title="Female Hair Restoration" 
        description="Hair loss in women requires a specialized, delicate approach. We offer advanced, no-shave DHT and regenerative treatments specifically designed to restore density and volume naturally."
        imageSrc="/images/clinic-interior.jpg"
      />
      
      <div className="section-container py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <span className="badge-gold">Specialized Care</span>
            <h2 className="heading-section mt-2 mb-2 text-3xl md:text-4xl text-left">
              Female Hair Loss Treatment in <span className="gradient-text-gold">Hyderabad</span>
            </h2>
          </div>
          
          <div className="gold-divider mb-8" />
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-base">
            <p className="text-lg font-serif italic text-navy-900 border-l-4 border-gold pl-4">
              "Hair has always been more than appearance. It reflects health, personality, and confidence. So, 
              when you notice your hair becoming thinner than it once was, shedding more than usual, or losing 
              volume over time, it's natural to have questions. Is it temporary? Will it grow back? Should I 
              be worried?"
            </p>
            
            <p>
              The answer isn't always straightforward because female hair loss doesn't have a single 
              cause. It can be linked to hormonal fluctuations, nutritional deficiencies, stress, genetics, 
              thyroid disorders, lifestyle changes, or certain medical conditions. Understanding why your 
              hair is changing is often more important than deciding how to treat it.
            </p>
            
            <p>
              At Trichova Hair Studio, we don't believe in recommending treatments before 
              understanding the complete picture. We begin by listening to your concerns, reviewing your 
              medical and hair history, and examining your scalp and hair growth pattern. This detailed 
              evaluation helps us identify the possible cause of hair loss and recommend a treatment plan 
              that aligns with your needs.
            </p>
            
            <p>
              If you're searching for <strong>Female Hair Loss Treatment in Hyderabad</strong>, you'll find that our 
              approach is centered on thoughtful diagnosis rather than assumptions. Some women may 
              benefit from medical hair restoration therapies, while others may require advanced treatment 
              options depending on the stage and cause of hair loss. Every recommendation is made after 
              careful assessment—not as part of a standard package.
            </p>
            
            <p>
              Our goal is simple: to help you make informed decisions about your hair health. Whether 
              your concern is mild thinning, reduced hair volume, or progressive hair loss, our team is 
              committed to providing clear guidance, personalized care, and ongoing support throughout 
              your treatment journey.
            </p>
            
            <p className="font-semibold text-navy-950">
              Healthy hair starts with understanding the cause—not just treating the symptoms. At 
              Trichova Hair Studio, we're here to help you take that first step with confidence and clarity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
