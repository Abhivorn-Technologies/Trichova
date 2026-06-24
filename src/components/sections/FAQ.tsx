"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How much does a hair transplant cost at Trichova?",
    answer:
      "Hair transplant cost at Trichova is customized based on the number of grafts required, the technique chosen (DHI, Sapphire, BIOFUE), and the complexity of your case. Pricing is determined after a thorough consultation and hair analysis. We offer transparent, all-inclusive pricing with no hidden charges. Book a free consultation to get a personalized quote.",
    category: "Cost",
  },
  {
    id: 2,
    question: "How many grafts will I need for my hair transplant?",
    answer:
      "The number of grafts required depends on your degree of hair loss (Norwood/Ludwig scale), the size of the area to be covered, desired density, and donor hair availability. Typical ranges: Hairline restoration: 1,500–2,500 grafts; Crown coverage: 1,000–2,500 grafts; Full head restoration: 3,000–6,000+ grafts. Our doctors will determine the exact graft count during your consultation using advanced trichoscopy.",
    category: "Procedure",
  },
  {
    id: 3,
    question: "Are the results of a hair transplant permanent?",
    answer:
      "Yes — hair transplants at Trichova deliver permanent results. The transplanted hair follicles are taken from your DHT-resistant donor area (typically the back and sides of the scalp) and are genetically programmed to be permanent. Once transplanted, these hairs will grow naturally for life. Our 25-year warranty reflects our absolute confidence in the longevity of results.",
    category: "Results",
  },
  {
    id: 4,
    question: "What is the recovery time after a hair transplant?",
    answer:
      "Recovery at Trichova is minimal: Day 1–3: Mild redness and tiny scabs at the graft sites — completely normal. Day 4–7: Scabs begin to shed naturally. Week 2–3: Transplanted hair may shed (shock loss) — this is expected and temporary. Month 1–3: New hair growth begins. Month 6–12: Significant density visible. Full results: 12–18 months. Most patients return to work within 2–4 days.",
    category: "Recovery",
  },
  {
    id: 5,
    question: "Is the hair transplant procedure painful?",
    answer:
      "The procedure is virtually painless. We use advanced local anaesthesia with the finest micro-needles to numb the scalp completely before any extraction or implantation. Once numb, patients typically feel only mild pressure — many patients watch movies or listen to music during the procedure. Post-procedure discomfort is minimal and managed with standard pain relief.",
    category: "Procedure",
  },
  {
    id: 6,
    question: "Where is Trichova Hair Studio located?",
    answer:
      "Trichova Hair Studio is conveniently located at our premium clinic address in the city. We have ample parking and are well-connected by public transport. Our clinic is designed to the highest international standards of hygiene and comfort. Contact us for exact directions or to arrange a complimentary pickup for your consultation.",
    category: "Location",
  },
  {
    id: 7,
    question: "What is the difference between DHI and Sapphire FUE?",
    answer:
      "Both are advanced minimally invasive techniques, but they differ in the implantation method. Sapphire FUE uses ultra-sharp sapphire crystal blades to create micro-channels, then individually places grafts — offering excellent density and minimal scarring. DHI (Direct Hair Implantation) uses the Choi Implanter Pen to extract and implant in one step without creating channels first — allowing no-shave procedures and superior density control. Our doctors will recommend the best technique for your specific hair loss pattern.",
    category: "Procedure",
  },
  {
    id: 8,
    question: "Can women undergo hair transplant surgery?",
    answer:
      "Absolutely. Female hair transplant is one of our specialized services. Women typically experience diffuse thinning (Ludwig pattern) rather than receding hairlines. DHI is particularly excellent for female patients as it allows no-shave procedures and precise graft placement in thinning areas without disturbing existing hair. Our female hair transplant protocols are customized to preserve natural hair distribution while restoring density.",
    category: "Procedure",
  },
];

const categories = ["All", "Cost", "Procedure", "Results", "Recovery", "Location"];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = faqs.filter(
    (f) => activeCategory === "All" || f.category === activeCategory
  );

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-ivory">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">FAQs</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-4"
          >
            Frequently Asked{" "}
            <span className="gradient-text-gold">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Everything you need to know before making your decision. Can&apos;t find your answer? 
            Book a free consultation with our experts.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-gold text-white shadow-gold"
                  : "bg-ivory text-slate-600 border border-gold/20 hover:border-gold/50 hover:bg-ivory-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          <AnimatePresence>
            {filtered.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openId === faq.id
                    ? "border-gold shadow-gold"
                    : "border-gold/20 hover:border-gold/50 shadow-card"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  id={`faq-${faq.id}`}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                    openId === faq.id ? "bg-gold/10" : "bg-ivory hover:bg-ivory-dark"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 ${
                        openId === faq.id ? "bg-gold" : "bg-gold/10"
                      }`}
                    >
                      <HelpCircle
                        size={14}
                        className={openId === faq.id ? "text-navy-950" : "text-gold"}
                      />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm leading-snug ${openId === faq.id ? "text-gold" : "text-navy-900"}`}>
                        {faq.question}
                      </div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
                        {faq.category}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={18}
                      className={openId === faq.id ? "text-gold" : "text-gold/50"}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 bg-ivory">
                        <div className="pl-10">
                          <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
}
