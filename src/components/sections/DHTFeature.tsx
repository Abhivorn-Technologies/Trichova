"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Users, Clock, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: Target,
    title: "Choi Implanter Pen",
    desc: "Simultaneous extraction and implantation with micrometric precision",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: TrendingUp,
    title: "Precise Implantation Angle",
    desc: "Natural hair growth direction from 30°–45° exactly as nature intended",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Users,
    title: "Higher Density Results",
    desc: "More grafts per cm² than any other technique available",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Sparkles,
    title: "Reduced Graft Handling",
    desc: "Follicles spend minimal time outside the body, protecting viability",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Zap,
    title: "Natural Hairline Creation",
    desc: "Artistic design using the golden ratio for perfectly natural results",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Clock,
    title: "Faster Recovery",
    desc: "Back to daily activities in 2–4 days with minimal discomfort",
    color: "text-gold",
    bg: "bg-gold/10",
  },
];

const stats = [
  { value: "95–98%", label: "Graft Survival", sub: "Industry-leading rate" },
  { value: "3,000+", label: "Grafts/Session", sub: "Maximum capacity" },
  { value: "2–4 Days", label: "Recovery Time", sub: "Back to normal" },
  { value: "12 Months", label: "Full Results", sub: "Natural growth cycle" },
];

export default function DHTFeature() {
  return (
    <section id="dht-technology" className="section-padding bg-ivory overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">DHT Technology</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-4"
          >
            The Gold Standard in{" "}
            <span className="gradient-text-gold">Hair Implantation</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Real Procedure Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover" style={{ minHeight: "500px" }}>
              <Image
                src="/images/procedure-team.jpg"
                alt="Trichova doctor-led DHT hair transplant procedure in progress"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2B]/90 via-[#0E1A2B]/40 to-transparent" />

              {/* Overlaid procedure info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory/10 border border-gold/40 text-ivory/90 text-sm font-medium mb-4 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  100% Doctor-Led Procedures
                </div>
                
                {/* Procedure steps */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { step: "01", label: "Extraction", desc: "Micro-punch follicle extraction" },
                    { step: "02", label: "Loading", desc: "Choi Pen graft loading" },
                    { step: "03", label: "Implantation", desc: "Direct angle implantation" },
                    { step: "04", label: "Growth", desc: "Natural results by month 4" },
                  ].map(({ step, label, desc }) => (
                    <div
                      key={step}
                      className="flex items-start gap-2.5 p-3 rounded-xl backdrop-blur-sm border border-gold/20"
                      style={{ background: "rgba(247,243,237,0.07)" }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold font-bold text-[10px]">{step}</span>
                      </div>
                      <div>
                        <div className="text-ivory font-semibold text-xs">{label}</div>
                        <div className="text-ivory/50 text-[10px] leading-tight mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-ivory rounded-2xl p-5 shadow-card-hover border border-gold/20 floating z-20"
            >
              <div className="font-serif font-bold text-navy-900 text-3xl leading-none">98%</div>
              <div className="text-slate-500 text-xs mt-1">Patient Satisfaction</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm bg-gold" />
                ))}
              </div>
            </motion.div>

            {/* Floating doctor badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -left-4 bg-ivory rounded-2xl p-4 shadow-card-hover border border-gold/20 floating-delayed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center">
                  <Users size={18} className="text-navy-950" />
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-sm">Senior Surgeons</div>
                  <div className="text-slate-400 text-[11px]">Every procedure</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Benefits & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <div className="badge-gold mb-4">Why DHT at Trichova</div>
              <h3 className="font-serif font-bold text-navy-900 text-2xl md:text-3xl leading-tight mb-4">
                Superior outcomes through{" "}
                <span className="gradient-text-gold">Precision Medicine</span>
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Every DHT procedure at Trichova is performed exclusively by our senior doctors —
                never delegated to technicians — ensuring the highest standard of care for every single graft.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="bg-ivory rounded-2xl p-4 shadow-card border border-gold/20 hover:border-gold/50 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className={`w-9 h-9 rounded-xl ${benefit.bg} flex items-center justify-center mb-3`}>
                      <Icon size={16} className={benefit.color} />
                    </div>
                    <div className="font-semibold text-navy-900 text-sm mb-1">{benefit.title}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ value, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-ivory-dark rounded-2xl p-4 text-center border border-gold/20"
                >
                  <div className="font-serif font-bold text-navy-900 text-lg leading-none mb-1">{value}</div>
                  <div className="text-gold font-semibold text-xs">{label}</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">{sub}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-booking-modal"));
              }}
              className="block"
            >
              <button
                id="dht-cta"
                className="w-full btn-gold justify-center rounded-2xl"
              >
                Book DHT Consultation
                <Zap size={18} />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
