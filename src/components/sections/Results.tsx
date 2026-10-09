"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Male", "Crown", "Hairline", "Advanced Cases"];

const results = [
  {
    id: 1,
    category: "Crown",
    name: "Anil Kumar",
    technique: "SAPPHIRE",
    grade: "GRADE 4",
    beforeDesc: "Crown vertex thinning and hairline loss",
    afterDesc: "Natural dense follicular coverage",
    splitImage: "/images/before-after/split_card_4.jpg",
  },
  {
    id: 2,
    category: "Advanced Cases",
    name: "Suresh Reddy",
    technique: "BIOFUE",
    grade: "GRADE 7",
    beforeDesc: "Complete crown and mid-scalp baldness",
    afterDesc: "Remarkable density restoration across crown",
    splitImage: "/images/before-after/split_card_5.jpg",
  },
  {
    id: 3,
    category: "Hairline",
    name: "Vikram Singh",
    technique: "SAPPHIRE",
    grade: "GRADE 3",
    beforeDesc: "Receded hairline and thinning frontal core",
    afterDesc: "Naturally lowered dense hairline and crown",
    splitImage: "/images/before-after/split_card_6.jpg",
  },
];

// Static Before-After card component matching new design
function BeforeAfterCard({
  result,
}: {
  result: (typeof results)[0];
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
      {/* Image comparison area */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        {result.splitImage && (
          <img
            src={result.splitImage}
            alt={`${result.name} - Before and After`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        
        {/* Before & After Labels */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-gold/90 backdrop-blur-md text-navy-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
          After
        </div>
      </div>

      {/* Info Footer */}
      <div className="p-4 flex items-center justify-between bg-white">
        <h3 className="font-medium text-slate-700 text-sm">{result.name}</h3>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-orange-50 text-[#FF6B35] text-[9px] font-bold uppercase tracking-wider">
            {result.technique}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-500 text-[9px] font-bold uppercase tracking-wider">
            {result.grade}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [zoomed, setZoomed] = useState<null | number>(null);

  const filtered = results.filter(
    (r) => activeCategory === "All" || activeCategory === "Male" || r.category === activeCategory
  );

  return (
    <section id="results" className="section-padding bg-ivory">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">Real Results</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-4"
          >
            Patient{" "}
            <span className="gradient-text-gold">Transformations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Real results from real patients. Verified before and after hair restoration transformations.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((result, i) => (
              <motion.div
                key={result.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <BeforeAfterCard result={result} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4">
            Ready to write your own transformation story?
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            className="btn-gold"
            id="results-cta"
          >
            Book Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
