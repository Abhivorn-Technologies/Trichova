"use client";

import type { Variants } from "framer-motion";

import { motion } from "framer-motion";
import {
  UserCheck,
  Microscope,
  Star,
  Palette,
  Package,
  HeartPulse,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const advantages = [
  {
    icon: UserCheck,
    title: "100% Doctor-Led Procedures",
    desc: "Every graft is handled exclusively by our certified hair restoration surgeons — never technicians.",
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    icon: Microscope,
    title: "DHT & Sapphire Techniques",
    desc: "We use only the most advanced, minimally invasive methods available globally.",
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    icon: Star,
    title: "95–98% Graft Survival Rate",
    desc: "Industry-leading survival rates achieved through bioactive enhancement protocols.",
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    icon: Palette,
    title: "Customized Hairline Design",
    desc: "Artistically crafted hairlines using the golden ratio for perfectly natural, age-appropriate results.",
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    icon: Package,
    title: "Imported Medical Instruments",
    desc: "Premium international-grade surgical tools for every procedure — never compromising on quality.",
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    icon: HeartPulse,
    title: "No Pain, No Scar, Minimal Downtime",
    desc: "Advanced local anaesthesia and micro-incision techniques ensure a virtually painless experience.",
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    icon: PhoneCall,
    title: "Dedicated Post-Procedure Support",
    desc: "Personal care coordinator available 24/7 throughout your recovery and growth journey.",
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    icon: ShieldCheck,
    title: "25 Years Warranty",
    desc: "Our industry-first 25-year warranty reflects our absolute confidence in permanent results.",
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyTrichova() {
  return (
    <section
      id="why-trichova"
      className="section-padding relative overflow-hidden bg-gradient-premium-dark"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
      <div className="orb bg-gold" style={{ width: "500px", height: "500px", top: "-100px", right: "-150px", opacity: 0.05 }} />
      <div className="orb bg-gold-light" style={{ width: "400px", height: "400px", bottom: "-100px", left: "-100px", opacity: 0.05 }} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(201,161,90,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201,161,90,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/30">
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section-light mb-4"
          >
            The{" "}
            <span className="gradient-text-gold">
              Trichova
            </span>{" "}
            Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-ivory/70 max-w-2xl mx-auto text-lg"
          >
            Eight pillars that define our commitment to delivering world-class hair restoration
            results with uncompromising standards.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-1 rounded-full mx-auto mt-6 bg-gradient-gold"
          />
        </div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative rounded-2xl p-6 border ${adv.border} hover:border-gold/60 transition-all duration-300 cursor-default overflow-hidden`}
                style={{ background: "rgba(247,243,237,0.03)", backdropFilter: "blur(12px)" }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${adv.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: "inset 0 0 30px rgba(201,161,90,0.05)" }} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${adv.color} border ${adv.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={adv.iconColor} />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-ivory text-sm leading-tight mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-ivory/50 text-xs leading-relaxed">
                    {adv.desc}
                  </p>

                  {/* Check */}
                  <div className="flex items-center gap-1.5 mt-4">
                    <CheckCircle2 size={12} className={adv.iconColor} />
                    <span className={`text-[10px] font-semibold ${adv.iconColor} uppercase tracking-wide`}>
                      Trichova Standard
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
                  style={{ background: "linear-gradient(90deg, #C9A15A 0%, transparent 100%)" }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom warranty banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-3xl p-8 text-center relative overflow-hidden border border-gold/20"
          style={{ background: "linear-gradient(135deg, rgba(201,161,90,0.08) 0%, rgba(216,182,122,0.05) 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5"
               style={{ background: "linear-gradient(90deg, transparent, #C9A15A, transparent)" }} />
          <div
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full border border-gold/30"
            style={{ background: "rgba(201,161,90,0.1)" }}
          >
            <ShieldCheck size={16} className="text-gold" />
            <span className="text-gold font-semibold text-sm">Industry-First Guarantee</span>
          </div>
          <h3 className="font-serif font-bold text-ivory text-2xl md:text-3xl mb-3">
            25 Years{" "}
            <span className="gradient-text-gold">
              Warranty
            </span>{" "}
            on All Procedures
          </h3>
          <p className="text-ivory/60 max-w-xl mx-auto mb-6">
            We stand behind every graft we implant. Our 25-year warranty is a testament to the
            permanent, natural results we deliver — your investment in confidence, protected.
          </p>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-booking-modal"));
            }}
          >
            <button
              id="why-trichova-cta"
              className="btn-gold"
            >
              Start Your Journey
              <CheckCircle2 size={16} />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
