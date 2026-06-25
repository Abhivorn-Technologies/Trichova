"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Play, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 34,
    location: "Mumbai",
    procedure: "DHT Hair Transplant",
    grafts: 2800,
    rating: 5,
    text: "I had been dealing with hair loss since my late 20s and was extremely self-conscious. The team at Trichova was incredibly professional from consultation to follow-up. At 10 months, my results are beyond what I imagined. My hairline looks completely natural — nobody can tell I had a procedure.",
    shortText: "My hairline looks completely natural — nobody can tell I had a procedure.",
    avatar: "RS",
    avatarColor: "from-gold to-gold-light",
    textColor: "text-white",
    verified: true,
    video: false,
    monthsPost: 10,
  },
  {
    id: 2,
    name: "Priya Menon",
    age: 29,
    location: "Bangalore",
    procedure: "Female Hair Transplant",
    grafts: 1600,
    rating: 5,
    text: "As a woman dealing with hair thinning, I was terrified. The doctor explained everything so clearly and the procedure was completely painless. The entire team made me feel comfortable and supported. Six months later, my hair density has improved dramatically. I feel like myself again.",
    shortText: "Six months later, my hair density has improved dramatically. I feel like myself again.",
    avatar: "PM",
    avatarColor: "from-navy-800 to-navy-700",
    textColor: "text-white",
    verified: true,
    video: false,
    monthsPost: 8,
  },
  {
    id: 3,
    name: "Vikram Nair",
    age: 42,
    location: "Hyderabad",
    procedure: "BIOFUE — Advanced Case",
    grafts: 4200,
    rating: 5,
    text: "Grade 6 alopecia — I had almost given up hope. Trichova not only gave me a full head of hair but the artistry of the hairline design is incredible. Every doctor and staff member was professional and caring. The 25-year warranty gave me complete peace of mind. Worth every rupee.",
    shortText: "Worth every rupee. The artistry of the hairline design is incredible.",
    avatar: "VN",
    avatarColor: "from-wood to-wood/80",
    textColor: "text-white",
    verified: true,
    video: true,
    monthsPost: 14,
  },
  {
    id: 4,
    name: "Arjun Kapoor",
    age: 31,
    location: "Delhi",
    procedure: "Sapphire FUE",
    grafts: 2400,
    rating: 5,
    text: "The Sapphire FUE was amazing — minimal redness and I was back at work in 3 days. The doctor was meticulous in his work. By month 8 the density is phenomenal and looks completely natural. The post-care support team was always available for my questions. Highly recommend Trichova.",
    shortText: "Minimal downtime, back at work in 3 days. Results are phenomenal.",
    avatar: "AK",
    avatarColor: "from-ivory to-ivory-dark border border-gold/30",
    textColor: "text-gold",
    verified: true,
    video: false,
    monthsPost: 9,
  },
  {
    id: 5,
    name: "Suresh Babu",
    age: 38,
    location: "Chennai",
    procedure: "Beard Transplant",
    grafts: 1100,
    rating: 5,
    text: "I always wanted a full beard but had very patchy growth. The beard transplant at Trichova completely transformed my appearance. The design consultation was detailed — they understood exactly the beard style I wanted. The results at 6 months are natural and full. Exceptional clinic.",
    shortText: "The beard transplant transformed my appearance. Natural and full results.",
    avatar: "SB",
    avatarColor: "from-navy-950 to-navy-900",
    textColor: "text-gold",
    verified: true,
    video: false,
    monthsPost: 7,
  },
  {
    id: 6,
    name: "Deepak Joshi",
    age: 45,
    location: "Pune",
    procedure: "GFC + DHT",
    grafts: 3100,
    rating: 5,
    text: "The combination of GFC treatment with DHT was suggested by the doctor after thorough analysis. This personalized approach gave me superior results. My hair is thicker, denser, and the growth was faster than expected. The clinic infrastructure is world-class. Genuinely transformed my confidence.",
    shortText: "Personalized approach gave me superior results. Transformed my confidence.",
    avatar: "DJ",
    avatarColor: "from-gold/80 to-gold",
    textColor: "text-navy-950",
    verified: true,
    video: true,
    monthsPost: 12,
  },
];

const trustBadges = [
  "4.9★ Average Rating",
  "500+ Verified Reviews",
  "Zero Reported Complications",
  "98% Patient Satisfaction",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-ivory-dark">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">Patient Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-4"
          >
            What Our Patients{" "}
            <span className="gradient-text-gold">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Real stories from real people whose lives were transformed by Trichova.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-ivory border border-gold/20 shadow-card text-sm text-slate-600 font-medium"
            >
              <CheckCircle2 size={14} className="text-gold" />
              {badge}
            </div>
          ))}
        </div>

        {/* Main testimonial carousel */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative bg-ivory rounded-3xl shadow-card-hover border border-gold/20 overflow-hidden">
            {/* Top gradient accent */}
            <div className="h-1 bg-gradient-gold" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  {/* Left — Author info */}
                  <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    {/* Avatar */}
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${active.avatarColor} flex items-center justify-center mb-4 shadow-gold relative`}
                    >
                      <span className={`font-bold text-xl ${active.textColor}`}>{active.avatar}</span>
                      {active.video && (
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-red-500 border-2 border-ivory flex items-center justify-center">
                          <Play size={10} className="text-white fill-white ml-0.5" />
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="font-bold text-navy-900 text-base">{active.name}</div>
                      <div className="text-slate-500 text-sm">{active.age} yrs · {active.location}</div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mt-3">
                      {[...Array(active.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold fill-gold" />
                      ))}
                    </div>

                    {/* Procedure details */}
                    <div className="mt-4 w-full">
                      <div className="bg-ivory-dark border border-gold/10 rounded-xl p-4 text-left">
                        <div className="text-xs text-slate-500 mb-1">Procedure</div>
                        <div className="font-semibold text-navy-900 text-sm">{active.procedure}</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-slate-500">Grafts</div>
                          <div className="font-bold text-gold text-sm">{active.grafts.toLocaleString()}</div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="text-xs text-slate-500">Post-Op</div>
                          <div className="font-semibold text-wood text-sm">{active.monthsPost} months</div>
                        </div>
                      </div>
                      {active.verified && (
                        <div className="flex items-center gap-1.5 mt-2 justify-center md:justify-start">
                          <CheckCircle2 size={12} className="text-gold" />
                          <span className="text-xs text-gold font-medium">Verified Patient</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right — Testimonial text */}
                  <div className="md:col-span-2">
                    <Quote size={40} className="text-gold/20 mb-4" />
                    <p className="text-slate-700 text-lg leading-relaxed mb-6 font-light italic">
                      &ldquo;{active.text}&rdquo;
                    </p>

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                      <button
                         onClick={prev}
                        className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-slate-500 hover:text-gold hover:border-gold/50 transition-all duration-200 hover:bg-gold/10"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-slate-500 hover:text-gold hover:border-gold/50 transition-all duration-200 hover:bg-gold/10"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={18} />
                      </button>

                      {/* Dots */}
                      <div className="flex gap-1.5">
                        {testimonials.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                            className={`rounded-full transition-all duration-300 ${
                              i === current ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-gold/20 hover:bg-gold/50"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="ml-auto text-sm text-slate-400">
                        {current + 1} / {testimonials.length}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
              whileHover={{ y: -3 }}
              className={`p-3 rounded-xl text-center transition-all duration-200 border ${
                i === current
                  ? "bg-navy-950 border-gold shadow-gold"
                  : "bg-ivory border-gold/20 hover:border-gold/50 shadow-card"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center mx-auto mb-2`}
              >
                <span className={`font-bold text-xs ${t.textColor}`}>{t.avatar}</span>
              </div>
              <div className={`font-semibold text-xs truncate ${i === current ? "text-ivory" : "text-navy-900"}`}>
                {t.name.split(" ")[0]}
              </div>
              <div className={`text-[10px] truncate ${i === current ? "text-gold" : "text-slate-400"}`}>
                {t.procedure.split(" ").slice(0, 2).join(" ")}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
