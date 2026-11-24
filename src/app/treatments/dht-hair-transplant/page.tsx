import { Metadata } from "next";
import Image from "next/image";
import DHTFeature from "@/components/sections/DHTFeature";

export const metadata: Metadata = {
  title: "DHT Hair Transplant in Hyderabad | Trichova",
  description:
    "Direct Hair Transplantation (DHT) in Hyderabad at Trichova Hair Studio. Advanced, precise, and natural-looking hair regrowth treatments planned around your unique needs.",
  keywords: [
    "DHT Hair Transplant in Hyderabad",
    "DHT hair transplant",
    "hair regrowth treatment",
    "hair implants",
    "best hair loss treatment in Hyderabad",
    "Trichova",
  ],
};

export default function DHTPage() {
  return (
    <main className="pt-20 lg:pt-28 bg-white">
      
      <div className="section-container py-10 md:py-16 bg-white">
        {/* Split Hero: Matter on one side, Image on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Matter / Text side */}
          <div className="space-y-4 text-left">
            <span className="badge-gold">Direct Implantation</span>
            <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl text-left leading-tight">
              DHT Hair Transplant in <span className="gradient-text-gold">Hyderabad</span>
            </h1>
            <h2 className="text-lg md:text-xl font-serif text-gold font-medium">
              Hair Restoration Planned Around Your Individual Needs
            </h2>
            <div className="gold-divider" />
            <p className="text-slate-600 leading-relaxed text-base pt-2">
              Hair loss is a gradual process, and the right treatment should never be based on guesswork. 
              Every person has a different hair pattern, scalp condition, and expectation from a hair 
              transplant. At Trichova Hair Studio, we take the time to understand these differences 
              before suggesting any treatment.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              If you're considering a <strong>DHT Hair Transplant in Hyderabad</strong>, the first step is a detailed 
              consultation. Our specialists examine your hair loss, evaluate the donor area, discuss your 
              concerns, and explain whether DHT is the right choice for your condition.
            </p>
          </div>

          {/* Image side */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-card-hover border border-gold/25">
            <Image
              src="/images/treatments/dht-hair-transplant.jpg"
              alt="DHT Hair Transplant in Hyderabad - Trichova Hair Studio"
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
            Direct Hair Transplantation (DHT) is a method in which healthy hair follicles are carefully 
            extracted one by one and implanted directly into areas affected by hair loss or reduced hair 
            growth. This precise approach allows every graft to be positioned according to the natural 
            direction, angle, and pattern of your existing hair, creating balanced coverage that blends 
            seamlessly over time. As part of a comprehensive approach to hair regrowth treatment, DHT is 
            often recommended for individuals seeking a long-term solution through hair implants that are 
            planned around their unique hair restoration needs.
          </p>
          <p>
            At Trichova Hair Studio, every procedure is designed with careful planning rather than 
            following a standard technique. Hairline design, graft placement, and overall hair density are 
            evaluated together to achieve results that complement your facial features and existing hair 
            pattern. Recognized by many patients looking for the best hair loss treatment in Hyderabad, 
            our team focuses on personalized treatment planning, clear communication, and continuous 
            support from your first consultation through every stage of recovery.
          </p>
          <p>
            Whether you're dealing with early hair thinning or more noticeable hair loss, choosing the 
            right clinic is just as important as choosing the right procedure. If you're looking for a trusted 
            destination for DHT Hair Transplant in Hyderabad, Trichova Hair Studio offers personalized care, 
            careful planning, and treatment designed around your long-term hair restoration goals.
          </p>
        </div>
      </div>

      <DHTFeature />
    </main>
  );
}
