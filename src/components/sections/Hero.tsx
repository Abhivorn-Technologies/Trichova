"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Shield, Award, Zap, ChevronDown } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    value: "95–98%",
    label: "Graft Survival Rate",
    icon: Star,
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    value: "25 Yrs",
    label: "Warranty Promise",
    icon: Shield,
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    value: "100%",
    label: "Doctor-Led Procedures",
    icon: Award,
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
  {
    value: "DHI",
    label: "Advanced Technology",
    icon: Zap,
    color: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold",
    border: "border-gold/30",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* ── BACKGROUND LAYERS ── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Real hero image — fills right 60% with dark overlay on left */}
        <div className="absolute inset-0">
          <Image
            src="/images/clinic-interior.jpg"
            alt="Trichova Hair Studio — premium luxury clinic interior"
            fill
            priority
            className="object-cover object-center"
            style={{ objectPosition: "center 30%" }}
          />
          {/* Deep luxury navy gradient overlay: strong on left, fades on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, #0E1A2B 0%, #162B4Dcc 35%, #162B4D88 55%, #C9A15A22 80%, transparent 100%)",
            }}
          />
          {/* Bottom fade for stat cards */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-950/90 to-transparent" />
          {/* Top fade for navbar */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-950/80 to-transparent" />
        </div>

        {/* Gradient orbs for extra luxury depth */}
        <div
          className="orb bg-gold floating-delayed"
          style={{ width: "400px", height: "400px", bottom: "80px", left: "-100px", opacity: 0.1 }}
        />
        <div
          className="orb bg-gold-light floating-slow"
          style={{ width: "250px", height: "250px", top: "25%", left: "15%", opacity: 0.08 }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(201,161,90,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(201,161,90,0.03) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />
      </motion.div>

      {/* ── FLOATING UI ELEMENTS ── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Live procedure badge — top left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute left-8 top-[28%] hidden lg:block floating-delayed"
        >
          <div className="glass rounded-2xl p-4 flex items-center gap-3 max-w-[200px] border-gold/20">
            <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Star size={18} className="text-gold fill-gold" />
            </div>
            <div>
              <div className="text-ivory text-sm font-bold leading-none">4.9 / 5.0</div>
              <div className="text-ivory/60 text-[11px] mt-0.5">500+ Patient Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* DHI live status — upper right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="absolute right-8 top-[22%] hidden xl:block floating"
        >
          <div className="rounded-2xl p-4 max-w-[210px] border border-gold/40 bg-navy-950/80 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-[10px] font-bold uppercase tracking-wider">Live Procedure</span>
            </div>
            <div className="text-ivory font-semibold text-sm">DHI Hair Transplant</div>
            <div className="text-ivory/50 text-[10px] mt-0.5">3,200 grafts — In Progress</div>
            <div className="mt-2 h-1.5 rounded-full bg-ivory/10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "68%" }}
                transition={{ duration: 2, delay: 2 }}
                className="h-full rounded-full bg-gradient-gold"
              />
            </div>
          </div>
        </motion.div>

        {/* Warranty badge — right mid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="absolute right-6 bottom-[30%] hidden xl:block floating-slow"
        >
          <div
            className="rounded-2xl p-4 text-center border border-gold/40 bg-navy-950/80 backdrop-blur-md shadow-2xl"
          >
            <div
              className="font-serif font-bold text-2xl leading-none"
              style={{ background: "linear-gradient(135deg, #C9A15A, #D8B67A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              25 Yrs
            </div>
            <div className="text-ivory/60 text-[10px] mt-1 font-semibold uppercase tracking-wider">Written Warranty</div>
          </div>
        </motion.div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <motion.div style={{ opacity }} className="relative z-20 section-container pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ivory/10 backdrop-blur-sm border border-gold/30 text-ivory/90 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              India&apos;s Most Advanced Hair Restoration Studio
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif font-bold text-ivory leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            Advanced Hair{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A15A 0%, #D8B67A 50%, #C9A15A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Restoration
            </span>
            <br />
            Solutions
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-ivory/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
          >
            World-class hair transplant treatments delivering natural, permanent results through{" "}
            <span className="text-gold font-semibold">BIOFUE</span>,{" "}
            <span className="text-gold font-semibold">DHI</span> and{" "}
            <span className="text-gold font-semibold">Sapphire</span> technologies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
          >
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-booking-modal"));
              }}
              id="hero-cta-primary"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-navy-950 text-base transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #C9A15A, #D8B67A)",
                boxShadow: "0 8px 32px rgba(201,161,90,0.3)",
              }}
            >
              Book Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              id="hero-cta-secondary"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-ivory text-base border-2 border-gold/40 backdrop-blur-sm hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              <Play size={16} className="fill-ivory" />
              View Treatments
            </a>
          </motion.div>

          {/* Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl"
          >
            {stats.map(({ value, label, icon: Icon, color, iconColor, border }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`glass rounded-2xl p-4 border ${border} hover:border-gold/60 transition-all duration-300 cursor-default text-center`}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-2.5 mx-auto`}>
                  <Icon size={16} className={iconColor} />
                </div>
                <div className="font-serif font-bold text-ivory text-lg mb-0.5 leading-none">{value}</div>
                <div className="text-ivory/60 text-[10px] leading-snug">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-ivory/40 hover:text-ivory/80 transition-colors duration-300"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">Explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.button>
    </section>
  );
}
