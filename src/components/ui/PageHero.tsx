"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: React.ReactNode;
  description?: string;
  subtitle?: string;
  badge?: string;
  imageSrc?: string;
}

export default function PageHero({ title, description, subtitle, badge, imageSrc }: PageHeroProps) {
  const displayText = description || subtitle || "";

  return (
    <section className="relative pt-24 sm:pt-32 pb-6 sm:pb-12 bg-slate-950 border-b border-slate-900 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-amber-500/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-6"
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-4"
        >
          {title}
        </motion.h1>

        {displayText && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {displayText}
          </motion.p>
        )}

        {imageSrc && (
          <div className="mt-8 relative h-64 sm:h-96 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-800">
            <Image src={imageSrc} alt="Hero" fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
