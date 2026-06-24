"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Male", "Female", "Beard", "Advanced Cases"];

const results = [
  {
    id: 1,
    category: "Male",
    grafts: 2800,
    technique: "DHI",
    months: 12,
    label: "Grade III Alopecia",
    beforeDesc: "Significant frontal recession",
    afterDesc: "Full frontal hairline restored",
    splitImage: "/images/split_1.png",
  },
  {
    id: 2,
    category: "Male",
    grafts: 3500,
    technique: "BIOFUE",
    months: 14,
    label: "Grade V Alopecia",
    beforeDesc: "Extensive crown thinning",
    afterDesc: "Dense crown coverage",
    splitImage: "/images/split_2.png",
  },
  {
    id: 3,
    category: "Female",
    grafts: 1800,
    technique: "DHI",
    months: 10,
    label: "Diffuse Hair Loss",
    beforeDesc: "Significant density loss",
    afterDesc: "Full density restored",
    splitImage: "/images/split_3.png",
  },
  {
    id: 4,
    category: "Beard",
    grafts: 1200,
    technique: "Sapphire",
    months: 8,
    label: "Patchy Beard",
    beforeDesc: "Patchy beard growth",
    afterDesc: "Full uniform beard",
    splitImage: "/images/split_4.png",
  },
  {
    id: 5,
    category: "Advanced Cases",
    grafts: 5000,
    technique: "BIOFUE",
    months: 18,
    label: "Grade VII Alopecia",
    beforeDesc: "Complete crown and mid-scalp baldness",
    afterDesc: "Remarkable density restoration",
    splitImage: "/images/split_5.png",
  },
  {
    id: 6,
    category: "Male",
    grafts: 2200,
    technique: "Sapphire",
    months: 11,
    label: "Hairline Redesign",
    beforeDesc: "High receded hairline",
    afterDesc: "Naturally lowered dense hairline",
    splitImage: "/images/split_6.png",
  },
];

// Before-After slider component
function BeforeAfterCard({
  result,
  onZoom,
}: {
  result: (typeof results)[0];
  onZoom: () => void;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.min(Math.max((x / rect.width) * 100, 5), 95);
      setSliderPos(pct);
    },
    []
  );

  return (
    <div className="bg-ivory-dark rounded-2xl overflow-hidden shadow-card border border-gold/20 hover:border-gold/50 hover:shadow-card-hover transition-all duration-300">
      {/* Image comparison area */}
      <div
        ref={containerRef}
        className="relative h-64 cursor-col-resize select-none overflow-hidden bg-ivory"
        onMouseDown={() => setIsDragging(true)}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* BEFORE - Shows left half of the split image */}
        <div className="absolute inset-0 overflow-hidden">
          {result.splitImage && (
            <img
              src={result.splitImage}
              alt={result.beforeDesc}
              className="absolute top-0 left-0 h-full w-[200%] max-w-none object-cover"
              draggable={false}
            />
          )}
          <div className="absolute bottom-3 left-3 px-2 py-1 rounded-lg bg-navy-950/60 text-ivory text-xs font-semibold backdrop-blur-sm z-10 pointer-events-none border border-gold/30">
            BEFORE
          </div>
        </div>

        {/* AFTER - Shows right half of the split image, clipped by slider */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          {result.splitImage && (
            <img
              src={result.splitImage}
              alt={result.afterDesc}
              className="absolute top-0 left-[-100%] h-full w-[200%] max-w-none object-cover"
              draggable={false}
            />
          )}
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-navy-950/60 text-ivory text-xs font-semibold backdrop-blur-sm z-10 pointer-events-none border border-gold/30">
            AFTER
          </div>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gold-light z-10 pointer-events-none shadow-[0_0_8px_rgba(201,161,90,0.6)]"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory shadow-gold flex items-center justify-center border border-gold/40">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 rounded-full bg-gold/50" />
              <div className="w-0.5 h-4 rounded-full bg-gold/50" />
              <div className="w-0.5 h-4 rounded-full bg-gold/50" />
            </div>
          </div>
        </div>

        {/* Zoom button */}
        <button
          onClick={onZoom}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-lg bg-navy-950/40 text-ivory backdrop-blur-sm flex items-center justify-center hover:bg-navy-950/60 transition-colors border border-gold/30"
        >
          <ZoomIn size={14} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-navy-900 text-sm">{result.label}</h3>
            <div className="text-slate-400 text-xs mt-0.5">{result.category} • {result.months} months</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-navy-900 text-sm">{result.grafts.toLocaleString()}</div>
            <div className="text-slate-400 text-xs">grafts</div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="px-2.5 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-semibold border border-gold/20">
            {result.technique}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-semibold border border-gold/20">
            Natural Results
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
    (r) => activeCategory === "All" || r.category === activeCategory
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
            Real results from real patients. Drag the slider on each card to compare before and after.
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
                <BeforeAfterCard result={result} onZoom={() => setZoomed(result.id)} />
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
