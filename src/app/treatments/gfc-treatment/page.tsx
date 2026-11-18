import { Metadata } from "next";
import { Droplets, ShieldCheck, Zap, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "GFC Treatment in Hyderabad | Growth Factor Concentrate | Trichova",
  description:
    "Experience advanced GFC Treatment in Hyderabad at Trichova Hair Studio. Highly concentrated autologous growth factors to stimulate dormant follicles and halt hair thinning without surgery.",
  keywords: [
    "GFC Treatment in Hyderabad",
    "GFC hair treatment",
    "growth factor concentrate",
    "hair fall treatment in Hyderabad",
    "non-surgical hair restoration",
    "PRP vs GFC",
    "Trichova",
  ],
};

const gfcSteps = [
  {
    step: "01",
    title: "Precision Blood Collection",
    desc: "A small sample of blood is collected using specialized, sterile GFC tubes engineered to maximize platelet yield without contamination.",
  },
  {
    step: "02",
    title: "Platelet Activation",
    desc: "The blood is incubated using a patented activation process that releases vital growth factors (PDGF, VEGF, EGF, IGF-1) directly from the platelets.",
  },
  {
    step: "03",
    title: "Centrifugation & Separation",
    desc: "High-precision centrifugation cleanly separates the concentrated growth factor serum from red blood cells (RBCs) and white blood cells (WBCs), preventing inflammatory pain.",
  },
  {
    step: "04",
    title: "Targeted Micro-Delivery",
    desc: "Pure, acellular growth factor concentrate is meticulously delivered into the thinning areas of your scalp using ultra-fine needles for maximum follicle absorption.",
  },
];

const benefits = [
  {
    icon: Droplets,
    title: "High Growth Factor Concentration",
    desc: "Delivers up to 3x higher concentrations of key growth factors compared to traditional PRP.",
  },
  {
    icon: ShieldCheck,
    title: "100% Autologous & Safe",
    desc: "Prepared entirely from your own blood, eliminating risks of allergic reactions, infections, or rejection.",
  },
  {
    icon: Zap,
    title: "Virtually Painless & Zero Downtime",
    desc: "Because it contains no inflammatory RBCs or WBCs, post-procedure discomfort and swelling are minimized.",
  },
  {
    icon: Sparkles,
    title: "Stimulates Natural Regrowth",
    desc: "Revitalizes miniaturized and dormant hair follicles, reverses thinning, and increases hair shaft diameter.",
  },
];

export default function GFCTreatmentPage() {
  return (
    <main className="pt-20 lg:pt-28 bg-white">
      {/* Hero / Overview */}
      <div className="section-container py-10 md:py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-left">
            <span className="badge-gold">Non-Surgical Protocol</span>
            <h1 className="heading-section mt-2 mb-2 text-3xl md:text-5xl text-left">
              GFC Treatment in <span className="gradient-text-gold">Hyderabad</span>
            </h1>
            <h2 className="text-xl font-serif text-gold font-medium mb-6">
              Advanced Growth Factor Concentrate for Natural Hair Regeneration
            </h2>
          </div>

          <div className="gold-divider" />

          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <p className="text-lg text-navy-900 font-medium leading-relaxed">
              If you are experiencing progressive hair thinning, excessive shedding, or early-stage hair 
              loss, surgical intervention may not always be necessary. At Trichova Hair Studio, 
              our <strong>GFC (Growth Factor Concentrate) Treatment in Hyderabad</strong> provides a refined, 
              medical-grade regenerative therapy designed to strengthen existing roots, boost volume, and 
              reinvigorate dormant hair follicles.
            </p>
            <p>
              Unlike conventional PRP (Platelet-Rich Plasma), which retains red and white blood cells that can cause 
              scalp inflammation and varying results, GFC is an engineered acellular formulation. It captures only pure, 
              biologically active growth factors—such as Platelet-Derived Growth Factor (PDGF), Vascular Endothelial 
              Growth Factor (VEGF), Epidermal Growth Factor (EGF), and Insulin-like Growth Factor 1 (IGF-1).
            </p>
            <p>
              These powerful biological messengers stimulate microvascular circulation around weakened follicles, 
              prolong the hair follicle's anagen (active growth) phase, and reverse the miniaturization process common in 
              androgenetic alopecia and stress-induced hair loss.
            </p>
            <p>
              At Trichova Hair Studio, every GFC treatment begins with an in-depth trichoscopic scalp evaluation by 
              our senior hair specialists. We calibrate session intervals, monitor graft health, and combine treatments 
              with personalized medical therapy to deliver consistent, clinically measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="w-full bg-ivory py-12 md:py-20 border-y border-gold/15">
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-gold">Why Choose GFC</span>
            <h2 className="heading-section mt-2">Key Advantages of GFC Therapy</h2>
            <p className="text-muted mt-2 max-w-2xl mx-auto">
              How Growth Factor Concentrate outclasses conventional therapies in safety, purity, and efficacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-gold/20 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="section-container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-gold">The Procedure</span>
            <h2 className="heading-section mt-2">How GFC Treatment Works</h2>
            <p className="text-muted mt-2">A streamlined 45-minute clinical protocol performed by certified specialists.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {gfcSteps.map((step) => (
              <div
                key={step.step}
                className="relative bg-white p-6 rounded-2xl border border-gold/20 shadow-sm hover:border-gold/50 transition-all"
              >
                <span className="font-serif font-bold text-2xl text-gold/40">{step.step}</span>
                <h3 className="text-base font-bold text-navy-900 mt-2 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who is it for */}
      <div className="w-full bg-slate-900 text-ivory py-14 md:py-20">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="badge-gold">Eligibility</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 text-ivory">
              Who Is an Ideal Candidate for GFC?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Men and women experiencing diffuse hair thinning or widening hair parting",
              "Patients in early to moderate stages of Androgenetic Alopecia",
              "Individuals experiencing stress-related or post-illness telogen effluvium",
              "Post-hair transplant patients seeking to accelerate graft recovery and density",
              "Individuals looking for 100% natural, drug-free hair restoration with zero downtime",
              "Patients whose hair loss is not responsive to standard topical solutions alone",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-gold/20">
                <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-ivory/90 leading-snug">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ConsultationCTA />
    </main>
  );
}
