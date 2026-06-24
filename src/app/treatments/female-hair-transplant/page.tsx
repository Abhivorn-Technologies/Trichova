import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Female Hair Transplant | Trichova",
  description: "Specialized, minimally invasive hair restoration protocols for women. Restore density without shaving your head with our female hair transplant solutions.",
};

export default function FemaleTransplantPage() {
  return (
    <main>
      <PageHero 
        title="Female Hair Transplant" 
        description="Hair loss in women requires a specialized, delicate approach. We offer advanced, no-shave DHI and regenerative treatments specifically designed to restore density and volume naturally."
        imageSrc="/images/clinic-interior.jpg"
      />
      <div className="section-container py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-center mb-10">Our Approach to Female Hair Restoration</h2>
          <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
            <p>
              Unlike male pattern baldness, female hair loss often involves diffuse thinning rather than receding hairlines. This requires a much more nuanced diagnostic and treatment protocol.
            </p>
            <p>
              At Trichova, our No-Shave DHI technique allows us to implant grafts seamlessly between your existing hair without requiring you to shave your head. This ensures maximum privacy and minimal disruption to your daily life.
            </p>
            <p>
              We often combine surgical transplants with regenerative therapies like Exosome Therapy and GFC (Growth Factor Concentrate) to stimulate dormant follicles and halt further thinning, providing a comprehensive solution.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
