import { Metadata } from "next";
import Image from "next/image";
import Technology from "@/components/sections/Technology";

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
    <main className="pt-20 lg:pt-28 bg-white">
      <div className="w-full bg-white">
        <div className="section-container py-12 md:py-16">
          {/* Split Hero: Matter on one side, Image on the other */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Matter / Text side */}
            <div className="space-y-4 text-left">
              <span className="badge-gold">Specialized Care</span>
              <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl text-left leading-tight">
                Female Hair Loss Treatment in <span className="gradient-text-gold">Hyderabad</span>
              </h1>
              <div className="gold-divider" />
              <p className="text-lg font-serif italic text-navy-900 border-l-4 border-gold pl-4 py-1">
                "Hair has always been more than appearance. It reflects health, personality, and confidence. When volume decreases or shedding increases, thoughtful diagnosis is key."
              </p>
              <p className="text-slate-600 leading-relaxed text-base pt-2">
                At Trichova Hair Studio, we don't believe in recommending treatments before 
                understanding the complete picture. We begin by listening to your concerns, reviewing your 
                medical and hair history, and examining your scalp and hair growth pattern.
              </p>
            </div>

            {/* Image side */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-card-hover border border-gold/25">
              <Image
                src="/images/treatments/female-hair-transplant.jpg"
                alt="Female Hair Loss Treatment in Hyderabad - Trichova Hair Studio"
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
              The answer isn't always straightforward because female hair loss doesn't have a single 
              cause. It can be linked to hormonal fluctuations, nutritional deficiencies, stress, genetics, 
              thyroid disorders, lifestyle changes, or certain medical conditions. Understanding why your 
              hair is changing is often more important than deciding how to treat it.
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
      
      <Technology />
    </main>
  );
}
