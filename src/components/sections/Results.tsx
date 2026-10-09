"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Male", "Crown", "Hairline", "Advanced Cases"];

const results = [
  {
    id: 1,
    categories: ["Crown", "Hairline"],
    name: "Natural Hair Growth",
    technique: "BIO-FUE",
    grade: "ADVANCED",
    image: "/images/trichova-1.jpg",
  },
  {
    id: 2,
    categories: ["Advanced Cases", "Crown"],
    name: "4500 Grafts Restoration",
    technique: "BIOFUE",
    grade: "4500 GRAFTS",
    image: "/images/trichova-2.jpg",
  },
  {
    id: 3,
    categories: ["Hairline", "Crown"],
    name: "3000 Grafts Restoration",
    technique: "SAPPHIRE",
    grade: "3000 GRAFTS",
    image: "/images/trichova-3.jpg",
  },
  {
    id: 4,
    categories: ["Advanced Cases", "Crown"],
    name: "5500 Grafts Restoration",
    technique: "BIO-FUE",
    grade: "5500 GRAFTS",
    image: "/images/trichova-4.jpg",
  },
];

// Patient transformation card component
function BeforeAfterCard({
  result,
  onZoom,
}: {
  result: (typeof results)[0];
  onZoom: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Image comparison showcase area */}
      <div 
        className="relative w-full aspect-[1080/1240] overflow-hidden bg-slate-50 cursor-pointer"
        onClick={onZoom}
      >
        <img
          src={result.image}
          alt={result.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />

        {/* Hover zoom overlay indicator */}
        <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-3 rounded-full bg-white/95 text-navy-950 shadow-md backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold px-4 py-2">
            <ZoomIn className="w-4 h-4 text-gold" />
            <span>Click to View</span>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="p-4 flex items-center justify-between bg-white border-t border-slate-50">
        <h3 className="font-semibold text-slate-800 text-sm">{result.name}</h3>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-orange-50 text-[#FF6B35] text-[9px] font-bold uppercase tracking-wider">
            {result.technique}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-wider">
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
    (r) =>
      activeCategory === "All" ||
      activeCategory === "Male" ||
      r.categories.includes(activeCategory)
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
              type="button"
              suppressHydrationWarning
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                <BeforeAfterCard
                  result={result}
                  onZoom={() => setZoomed(result.id)}
                />
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
            type="button"
            suppressHydrationWarning
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            className="btn-gold"
            id="results-cta"
          >
            Book Free Consultation
          </button>
        </motion.div>
      </div>

      {/* High-Resolution Zoom Modal */}
      <AnimatePresence>
        {zoomed !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setZoomed(null)}
          >
            <div
              className="relative max-w-3xl max-h-[92vh] bg-navy-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomed(null)}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-colors border border-white/20"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              {(() => {
                const active = results.find((r) => r.id === zoomed);
                if (!active) return null;
                return (
                  <div className="overflow-auto max-h-[92vh] flex flex-col items-center p-2 bg-navy-950">
                    <img
                      src={active.image}
                      alt={active.name}
                      className="max-h-[82vh] w-auto object-contain rounded-xl"
                    />
                    <div className="w-full px-4 py-3 flex items-center justify-between text-white border-t border-white/10 mt-2">
                      <span className="font-medium text-sm text-ivory">{active.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#FF6B35] text-xs font-semibold">
                          {active.technique}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
                          {active.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
