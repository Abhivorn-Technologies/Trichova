"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap } from "lucide-react";

const technologies = [
  {
    id: "traditional",
    name: "Traditional",
    subtitle: "Strip Surgery (FUT)",
    color: "from-wood to-wood/80",
    bgLight: "bg-ivory",
    border: "border-wood/20",
    textColor: "text-wood",
    active: false,
    features: {
      trauma: false,
      healing: false,
      density: false,
      direction: false,
      survival: false,
      scar: false,
    },
    stats: { survival: "85–90%", healing: "10–14 days", density: "Standard", scar: "Linear Scar" },
  },
  {
    id: "fue",
    name: "FUE",
    subtitle: "Follicular Unit Extraction",
    color: "from-navy-800 to-navy-700",
    bgLight: "bg-ivory",
    border: "border-navy-800/20",
    textColor: "text-navy-800",
    active: false,
    features: {
      trauma: true,
      healing: true,
      density: false,
      direction: false,
      survival: false,
      scar: true,
    },
    stats: { survival: "90–93%", healing: "5–7 days", density: "Good", scar: "Minimal Dots" },
  },
  {
    id: "dht",
    name: "DHT",
    subtitle: "Direct Hair Implantation",
    color: "from-navy-950 to-navy-900",
    bgLight: "bg-ivory",
    border: "border-navy-900/20",
    textColor: "text-navy-900",
    active: false,
    features: {
      trauma: true,
      healing: true,
      density: true,
      direction: true,
      survival: true,
      scar: true,
    },
    stats: { survival: "93–96%", healing: "3–5 days", density: "High", scar: "No Visible Scar" },
  },
  {
    id: "biofue",
    name: "BIOFUE",
    subtitle: "BIO Integrated FUE",
    color: "from-gold to-gold-light",
    bgLight: "bg-ivory",
    border: "border-gold/40",
    textColor: "text-gold",
    active: true,
    features: {
      trauma: true,
      healing: true,
      density: true,
      direction: true,
      survival: true,
      scar: true,
    },
    stats: { survival: "95–98%", healing: "2–4 days", density: "Maximum", scar: "Invisible" },
  },
];

const featureLabels = [
  { key: "trauma", label: "Less Trauma to Grafts" },
  { key: "healing", label: "Faster Healing Time" },
  { key: "density", label: "Better Hair Density" },
  { key: "direction", label: "Natural Growth Direction" },
  { key: "survival", label: "Higher Graft Survival" },
  { key: "scar", label: "No Visible Scarring" },
];

export default function Technology() {
  const [selected, setSelected] = useState("biofue");

  const selectedTech = technologies.find((t) => t.id === selected)!;

  return (
    <section id="technology" className="section-padding bg-ivory-dark">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">Technology Excellence</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-4"
          >
            Why Our Technology{" "}
            <span className="gradient-text-gold">Outperforms</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Not all hair transplant techniques are equal. See why BIOFUE and DHT deliver 
            dramatically superior outcomes compared to conventional methods.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Tech Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setSelected(tech.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selected === tech.id
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-gold`
                  : "bg-ivory text-slate-600 border border-gold/20 hover:border-gold/50"
              }`}
            >
              {tech.name}
              {tech.active && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gold border-2 border-ivory-dark flex items-center justify-center">
                  <Zap size={8} className="text-navy-950" />
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Feature Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-ivory rounded-3xl p-8 shadow-card border border-gold/20"
          >
            <h3 className="font-bold text-navy-950 text-lg mb-6 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedTech.color} flex items-center justify-center`}>
                <Zap size={18} className="text-white" />
              </div>
              {selectedTech.name} — Feature Comparison
            </h3>
            <div className="space-y-3">
              {featureLabels.map(({ key, label }) => {
                const hasFeature = selectedTech.features[key as keyof typeof selectedTech.features];
                return (
                  <div
                    key={key}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      hasFeature
                        ? "bg-gold/10 border border-gold/20"
                        : "bg-ivory-dark border border-gold/10"
                    }`}
                  >
                    {hasFeature ? (
                      <CheckCircle2 size={20} className="text-gold flex-shrink-0" />
                    ) : (
                      <XCircle size={20} className="text-slate-300 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        hasFeature ? "text-navy-950" : "text-slate-400"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main stat */}
            <div className={`bg-gradient-to-br ${selectedTech.color} rounded-3xl p-8 text-white`}>
              <div className="font-serif font-bold text-5xl mb-2">{selectedTech.stats.survival}</div>
              <div className="text-white/80 font-medium">Graft Survival Rate</div>
              <div className="mt-4 h-2 rounded-full bg-white/20">
                <motion.div
                  key={selected}
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      selected === "traditional" ? "87%"
                      : selected === "fue" ? "91%"
                      : selected === "dht" ? "94%"
                      : "96%",
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-white/60"
                />
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Recovery", value: selectedTech.stats.healing },
                { label: "Density", value: selectedTech.stats.density },
                { label: "Scarring", value: selectedTech.stats.scar },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-ivory rounded-2xl p-5 text-center shadow-card border border-gold/20"
                >
                  <div className="font-bold text-navy-950 text-sm leading-tight mb-1">{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-ivory rounded-2xl p-6 shadow-card border border-gold/20">
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedTech.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <Zap size={14} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-navy-950 text-sm mb-1">{selectedTech.name} — {selectedTech.subtitle}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {selected === "traditional" && "Traditional strip surgery (FUT) removes a strip of scalp, leaving a linear scar. It has the lowest graft survival rate and longest recovery time."}
                    {selected === "fue" && "FUE extracts individual follicles, leaving minimal dot scars. Better than strip surgery but lacks precision implantation control."}
                    {selected === "dht" && "DHT uses the Choi Implanter Pen for direct implantation, enabling precise angle control and higher density without channel-making step."}
                    {selected === "biofue" && "BIOFUE combines FUE extraction with bioactive growth factors applied to grafts during the procedure, dramatically boosting survival rates and accelerating recovery."}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-booking-modal"));
              }}
              className="block"
            >
              <button className="w-full btn-gold justify-center rounded-2xl">
                Get {selectedTech.name} Treatment
                <ArrowRight size={16} />
              </button>
            </a>
          </motion.div>
        </div>

        {/* Timeline progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-ivory rounded-3xl p-8 shadow-card border border-gold/20"
        >
          <h3 className="font-bold text-navy-950 text-lg mb-8 text-center">Technology Evolution</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-wood/30 via-gold to-gold-light rounded-full hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, i) => (
                <div key={tech.id} className="flex flex-col items-center text-center relative">
                  {/* Circle */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelected(tech.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 border-4 transition-all duration-300 z-10 ${
                      selected === tech.id
                        ? `bg-gradient-to-br ${tech.color} border-ivory shadow-gold`
                        : "bg-ivory border-gold/20 hover:border-gold/50"
                    }`}
                  >
                    <span className={`font-bold text-xs ${selected === tech.id ? "text-white" : "text-slate-400"}`}>
                      0{i + 1}
                    </span>
                  </motion.button>
                  <div className="font-bold text-navy-950 text-sm">{tech.name}</div>
                  <div className="text-slate-400 text-xs mt-1">{tech.subtitle}</div>
                  <div className={`text-xs font-semibold mt-2 ${tech.textColor}`}>{tech.stats.survival}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
