"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Star } from "lucide-react";

const features = [
  "Doctor-Performed Surgeries",
  "DHT & Sapphire Techniques",
  "95–98% Graft Survival Rate",
  "Artistic Hairline Design",
  "Imported Premium Instruments",
  "No-Shave DHT Available",
  "Dedicated 24/7 Support",
  "25-Year Written Warranty",
  "Bio-Enhanced Graft Protocols",
  "Minimal Downtime (<4 Days)",
];

export default function Comparison() {
  return (
    <section id="comparison" className="section-padding bg-ivory">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">Clinic Comparison</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-4"
          >
            Trichova vs{" "}
            <span className="gradient-text-gold">Other Clinics</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            The difference is clear. See exactly what sets Trichova apart from conventional hair clinics.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="col-span-1" />
            {/* Trichova header */}
            <div className="col-span-1 bg-gradient-premium-dark rounded-t-2xl p-4 text-center shadow-gold relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
              <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/20 border border-gold/30 mb-2">
                  <Star size={10} className="text-gold fill-gold" />
                  <span className="text-gold text-[10px] font-semibold">Recommended</span>
                </div>
                <div className="font-serif font-bold text-white text-lg leading-none">Trichova</div>
                <div className="text-gold text-xs mt-1">Hair Studio</div>
              </div>
            </div>
            {/* Others header */}
            <div className="col-span-1 bg-ivory-dark border border-gold/10 border-b-0 rounded-t-2xl p-4 text-center">
              <div className="font-bold text-navy-900 text-lg">Other Clinics</div>
              <div className="text-slate-400 text-xs mt-1">Typical experience</div>
            </div>
          </div>

          {/* Feature rows */}
          <div className="bg-ivory border border-gold/20 rounded-b-2xl overflow-hidden shadow-card">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-3 gap-3 items-center ${
                  i % 2 === 0 ? "bg-ivory" : "bg-ivory-dark"
                } ${i < features.length - 1 ? "border-b border-gold/10" : ""}`}
              >
                {/* Feature label */}
                <div className="col-span-1 py-4 pl-5 pr-2">
                  <span className="text-navy-900 text-sm font-medium">{feature}</span>
                </div>

                {/* Trichova — check first 8, cross last 2 */}
                <div className="col-span-1 py-4 flex justify-center relative">
                  <div className="absolute inset-0 bg-gold/5" />
                  {i < 8 ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ type: "spring", delay: 0.2 + i * 0.03 }}
                      className="relative z-10 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center"
                    >
                      <CheckCircle2 size={18} className="text-gold" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ type: "spring", delay: 0.2 + i * 0.03 }}
                      className="relative z-10 w-8 h-8 rounded-full bg-slate-100 border border-slate-200/60 flex items-center justify-center"
                    >
                      <XCircle size={18} className="text-slate-400" />
                    </motion.div>
                  )}
                </div>

                {/* Others — mostly cross */}
                <div className="col-span-1 py-4 flex justify-center">
                  {i < 6 ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ type: "spring", delay: 0.2 + i * 0.03 }}
                      className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center"
                    >
                      <XCircle size={18} className="text-red-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ type: "spring", delay: 0.2 + i * 0.03 }}
                      className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center"
                    >
                      <span className="text-amber-500 text-xs font-bold">?</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer summary */}
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="col-span-1" />
            <div className="col-span-1 bg-gradient-to-br from-[#0E1A2B] to-[#162B4D] rounded-b-2xl p-5 text-center">
              <div className="text-gold font-bold text-lg">8 / 10</div>
              <div className="text-ivory/60 text-xs">Features</div>
              <button
                onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
                className="mt-3 w-full btn-gold rounded-xl py-2.5 text-xs justify-center"
              >
                Choose Trichova
              </button>
            </div>
            <div className="col-span-1 bg-ivory-dark border border-gold/10 border-t-0 rounded-b-2xl p-5 text-center">
              <div className="text-slate-500 font-bold text-lg">4 / 10</div>
              <div className="text-slate-400 text-xs">Features</div>
              <div className="mt-3 w-full py-2.5 rounded-xl text-xs font-medium text-slate-500 bg-gold/10">
                Settle for Less?
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
