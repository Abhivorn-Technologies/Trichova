import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Beard & Moustache Transplant | Trichova",
  description: "Achieve the dense, perfectly shaped beard you've always wanted. Our facial hair transplants utilize advanced extraction and precise angulation for completely natural results.",
};

export default function BeardTransplantPage() {
  return (
    <main>
      <PageHero 
        title="Beard & Moustache Transplant" 
        description="Mastering the art of facial hair restoration. We meticulously design and implant each follicle to match the natural angle and density of a perfect beard, completely undetectable as a transplant."
        imageSrc="/images/hero-confidence.jpg"
      />
      <div className="section-container py-10 md:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-center mb-10">The Art of Facial Hair Design</h2>
          <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
            <p>
              A beard transplant requires an extraordinary level of artistic skill. Facial hair grows at very specific, acute angles that vary depending on the zone (cheek, jawline, mustache, or goatee).
            </p>
            <p>
              Using our micro-precision tools, we extract the finest, softest hairs (typically from the nape of the neck or sides of the head) which most closely mimic natural facial hair texture. 
            </p>
            <p>
              Our surgeons meticulously implant these grafts one by one, ensuring the growth direction perfectly matches your natural facial hair pattern. The result is a dense, masculine beard that you can shave, trim, and style just like natural hair.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
