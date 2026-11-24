import { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Dna, Activity, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "Exosome Hair Therapy in Hyderabad | Cell Signaling Restoration | Trichova",
  description:
    "Discover next-generation Exosome Hair Therapy in Hyderabad at Trichova Hair Studio. Powerful cellular nanovesicles to awaken dormant follicles, reverse thinning, and boost hair density.",
  keywords: [
    "Exosome Hair Therapy in Hyderabad",
    "exosome treatment for hair",
    "stem cell hair restoration",
    "regenerative hair therapy",
    "cutting edge hair loss treatment",
    "Trichova",
  ],
};

const exosomeAdvantages = [
  {
    icon: Dna,
    title: "Billions of Cellular Messengers",
    desc: "Exosomes contain thousands of signaling proteins, mRNA, microRNA, and growth factors that directly signal dermal papilla cells to regenerate.",
  },
  {
    icon: Sparkles,
    title: "Awakens Dormant Follicles",
    desc: "Re-triggers the biological signals that reactivate dormant follicles trapped in the telogen (resting) phase, moving them back to active growth.",
  },
  {
    icon: Activity,
    title: "Potent Anti-Inflammatory Action",
    desc: "Suppresses scalp micro-inflammation and cellular senescence that contribute to follicle shrinkage and progressive pattern baldness.",
  },
  {
    icon: Zap,
    title: "No Blood Draw Required",
    desc: "Unlike PRP or GFC, exosomes are lab-purified biological solutions, eliminating the need for blood draws while offering vastly higher potency.",
  },
];

const procedureSteps = [
  {
    step: "01",
    title: "Trichoscopic Scalp Diagnostic",
    desc: "Digital microscopic analysis to map follicular miniaturization, density patterns, and determine optimal application zones.",
  },
  {
    step: "02",
    title: "Scalp Preparation & Sanitization",
    desc: "Medical cleansing and topical numbing of the target treatment area to ensure complete comfort throughout the session.",
  },
  {
    step: "03",
    title: "Precision Micro-Channeling & Infusion",
    desc: "Exosome solution is delivered into the dermal papilla layer using specialized microneedle infusion for deep and uniform penetration.",
  },
  {
    step: "04",
    title: "Cellular Activation & Immediate Resumption",
    desc: "Soothing regenerative mist is applied. Patients resume their daily schedule immediately with zero downtime or restrictions.",
  },
];

export default function ExosomeTherapyPage() {
  return (
    <main className="pt-20 lg:pt-28 bg-white">
      {/* Hero / Overview: Split side-by-side */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Matter / Text side */}
          <div className="space-y-4 text-left">
            <span className="badge-gold">Cutting-Edge Biotechnology</span>
            <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl text-left leading-tight">
              Exosome Hair Therapy in <span className="gradient-text-gold">Hyderabad</span>
            </h1>
            <h2 className="text-lg md:text-xl font-serif text-gold font-medium">
              Revolutionary Cell-Signaling Nanotechnology for Hair Follicle Regeneration
            </h2>
            <div className="gold-divider" />
            <p className="text-lg text-navy-900 font-medium leading-relaxed pt-2">
              Exosome therapy represents the pinnacle of modern regenerative trichology. At Trichova Hair 
              Studio, our <strong>Exosome Hair Therapy in Hyderabad</strong> harnesses nanoscale extracellular 
              vesicles that act as microscopic messengers, commanding dormant hair cells to repair, rejuvenate, 
              and resume vigorous hair production.
            </p>
          </div>

          {/* Image side */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-card-hover border border-gold/25">
            <Image
              src="/images/treatments/exosome-therapy.jpg"
              alt="Exosome Hair Therapy in Hyderabad - Trichova Hair Studio"
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
            Hair loss occurs when the communication between stem cells and hair follicles breaks down due to genetics, 
            aging, or environmental stress. Miniaturized follicles stop receiving instructions to grow. Exosomes bridge 
            this cellular gap by delivering a concentrated cargo of over 1,000 regulatory proteins, growth factors, and 
            genetic instructions (mRNA and microRNA) directly to the root of the hair follicle.
          </p>
          <p>
            Unlike conventional treatments that merely stimulate surface blood flow, exosome therapy operates at the 
            cellular signaling level. It accelerates cellular turnover, reduces scalp inflammation, prolongs the anagen 
            (growth) phase, and prompts miniaturized hair follicles to produce noticeably thicker, healthier hair shafts.
          </p>
          <p>
            At Trichova Hair Studio, our medical team uses rigorously tested, ultra-pure exosome preparations 
            administered with precision micro-channeling techniques, delivering safe, non-invasive, and groundbreaking 
            hair restoration without surgery or recovery downtime.
          </p>
        </div>
      </div>

      {/* Advantages Grid */}
      <div className="w-full bg-ivory py-12 md:py-20 border-y border-gold/15">
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-gold">Biotech Advantage</span>
            <h2 className="heading-section mt-2">Why Exosome Therapy is Groundbreaking</h2>
            <p className="text-muted mt-2 max-w-2xl mx-auto">
              How cellular nanovesicles provide an unprecedented level of follicle revitalization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {exosomeAdvantages.map((item, idx) => {
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

      {/* The Protocol */}
      <div className="section-container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-gold">Treatment Protocol</span>
            <h2 className="heading-section mt-2">The Exosome Therapy Journey</h2>
            <p className="text-muted mt-2">Seamless, physician-administered 4-step cellular restoration.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {procedureSteps.map((step) => (
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

      {/* Candidacy */}
      <div className="w-full bg-slate-900 text-ivory py-14 md:py-20">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="badge-gold">Who Can Benefit</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 text-ivory">
              Is Exosome Therapy Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Men and women with early to advanced thinning seeking non-surgical intervention",
              "Patients who have not responded adequately to PRP, GFC, or topical medications",
              "Individuals experiencing chronic shedding, patchy thinning, or diffuse loss",
              "Hair transplant patients wanting to supercharge donor and recipient scalp healing",
              "Anyone seeking maximum regenerative power without having blood drawn",
              "Patients looking for a fast-acting biological therapy with zero lifestyle downtime",
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
