"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Phone, Shield, Award, Star, ArrowRight } from "lucide-react";

const clinicFeatures = [
  {
    icon: Shield,
    title: "International-Grade Sterility",
    desc: "Fully equipped OT with hospital-level sterilization protocols",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Award,
    title: "NABH-Compliant Facility",
    desc: "Operating to the highest healthcare quality benchmarks",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Star,
    title: "Premium Patient Experience",
    desc: "Luxury consultation suites and dedicated recovery lounges",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Clock,
    title: "Flexible Appointment Slots",
    desc: "Weekend and evening appointments available for your convenience",
    color: "text-gold",
    bg: "bg-gold/10",
  },
];

export default function ClinicSection() {
  return (
    <section id="clinic" className="section-padding bg-ivory overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">Our Clinic</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-4"
          >
            A World-Class{" "}
            <span className="gradient-text-gold">Clinic Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Step into a space designed for your comfort and confidence — where luxury hospitality
            meets world-class medical precision.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right — Clinic Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main clinic image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover" style={{ height: "520px" }}>
              <Image
                src="/images/clinic-interior.jpg"
                alt="Trichova Hair Studio premium clinic reception — luxury interior"
                fill
                className="object-cover"
                style={{ objectPosition: "85% center" }}
              />
              {/* Subtle bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0E1A2B]/80 to-transparent" />
              
              {/* Address overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm border border-gold/20"
                  style={{ background: "rgba(14,26,43,0.6)" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Trichova Hair Studio</div>
                    <div className="text-ivory/60 text-xs">Kavuri Hills · Madhapur, Hyderabad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating open hours card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6 }}
              className="absolute -top-5 -left-5 bg-ivory rounded-2xl p-5 shadow-card-hover border border-gold/20 floating"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-bold text-navy-950 text-sm">Open Today</div>
                  <div className="text-gold font-semibold text-xs">9:00 AM – 8:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-navy-950 text-xs font-medium">Accepting Appointments</span>
              </div>
            </motion.div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-5 -right-5 bg-ivory rounded-2xl p-5 shadow-card-hover border border-gold/20 floating-delayed"
            >
              <div className="text-center">
                <div className="font-serif font-bold text-navy-950 text-3xl leading-none">4.9</div>
                <div className="flex justify-center gap-0.5 my-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <div className="text-slate-400 text-[10px] font-medium">500+ Reviews</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div>
              <div className="badge-gold mb-4">Designed for You</div>
              <h3 className="font-serif font-bold text-navy-900 text-2xl md:text-3xl leading-tight mb-4">
                Where Comfort Meets{" "}
                <span className="gradient-text-gold">Medical Excellence</span>
              </h3>
              <p className="text-slate-500 leading-relaxed mb-2">
                Trichova Hair Studio is designed to feel unlike any clinic you&apos;ve visited before.
                From the moment you walk in, you&apos;re welcomed into a serene, luxury environment 
                that instantly puts you at ease.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Our facility houses state-of-the-art operation theatres equipped with international-grade
                microscopes, premium Choi Implanter Pens, and imported micro-surgical instruments —
                everything required to deliver world-class results.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {clinicFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3 p-4 bg-ivory-dark rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className={`w-9 h-9 rounded-xl ${feature.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={16} className={feature.color} />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900 text-sm mb-0.5">{feature.title}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{feature.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact quick links */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">

              <button
                onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-navy-950 text-sm btn-gold"
                id="clinic-cta"
              >
                Book a Visit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
