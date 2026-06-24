"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Microscope,
  Scissors,
  Activity,
  TrendingUp,
  Smile,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Consultation",
    desc: "Free in-depth consultation with our senior hair surgeon. Understand your hair loss pattern and best treatment options.",
    detail: "60-min session",
    color: "from-gold to-gold-light",
    lightBg: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "border-gold/30",
    badge: "Day 1",
  },
  {
    id: 2,
    icon: Microscope,
    title: "Hair Analysis",
    desc: "Advanced trichoscopy and scalp analysis to determine graft count, donor density, and hairline design.",
    detail: "Digital mapping",
    color: "from-gold to-gold-light",
    lightBg: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "border-gold/30",
    badge: "Day 1",
  },
  {
    id: 3,
    icon: Scissors,
    title: "Procedure",
    desc: "Doctor-led DHI or BIOFUE procedure under local anaesthesia. Comfortable, precise, and completely painless.",
    detail: "6–8 hours",
    color: "from-gold to-gold-light",
    lightBg: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "border-gold/30",
    badge: "Day 2",
  },
  {
    id: 4,
    icon: Activity,
    title: "Recovery",
    desc: "Minimal downtime with our post-care protocol. Most patients resume normal activities within 2–4 days.",
    detail: "2–14 days",
    color: "from-gold to-gold-light",
    lightBg: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "border-gold/30",
    badge: "Week 1–2",
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Growth Phase",
    desc: "New hair begins emerging from month 3. By month 6, significant density is visible. Full results by month 12.",
    detail: "3–12 months",
    color: "from-gold to-gold-light",
    lightBg: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "border-gold/30",
    badge: "Month 3–9",
  },
  {
    id: 6,
    icon: Smile,
    title: "Final Results",
    desc: "Complete, natural, permanent hair. A transformation that boosts confidence and is guaranteed for 25 years.",
    detail: "Permanent",
    color: "from-gold to-gold-light",
    lightBg: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "border-gold/30",
    badge: "Month 12+",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-ivory-dark">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">Patient Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-4"
          >
            Your Transformation{" "}
            <span className="gradient-text-gold">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            From your first consultation to your final results — every step is guided, 
            supported, and designed around your comfort and confidence.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-wood/30 via-gold to-gold-light rounded-full opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Arrow for desktop (between steps) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute right-0 top-[52px] translate-x-1/2 z-10 items-center justify-center w-6 h-6 rounded-full bg-ivory shadow-card border border-gold/20">
                      <ChevronRight size={12} className="text-gold" />
                    </div>
                  )}

                  {/* Step circle */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-ivory border-2 border-gold/30 flex items-center justify-center shadow-card">
                      <span className="text-navy-900 text-[10px] font-bold">{step.id}</span>
                    </div>
                    {/* Badge */}
                    <div
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-bold whitespace-nowrap ${step.lightBg} ${step.iconColor}`}
                    >
                      {step.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-4 bg-ivory rounded-2xl p-4 w-full shadow-card border border-gold/20 group-hover:shadow-card-hover transition-shadow duration-300">
                    <h3 className="font-bold text-navy-900 text-sm mb-1.5">{step.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-2">{step.desc}</p>
                    <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-semibold ${step.lightBg} ${step.iconColor}`}>
                      <Icon size={9} />
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-ivory rounded-2xl p-6 shadow-card border border-gold/20"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-navy-900">Typical Timeline to Final Results</div>
            <div className="text-sm font-bold text-gold">12 Months</div>
          </div>
          <div className="h-3 bg-gold/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
              className="h-full rounded-full bg-gradient-to-r from-wood/50 via-gold to-gold-light"
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-400">
            <span>Day 1</span>
            <span>Month 3</span>
            <span>Month 6</span>
            <span>Month 12</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
