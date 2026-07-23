"use client";

import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-slate-950 relative overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl animate-pulse" />
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center relative z-10 shadow-2xl">
              <SearchX className="w-10 h-10 sm:w-14 sm:h-14 text-amber-500" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-7xl sm:text-9xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-600"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto mb-10"
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            Return to Homepage
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto backdrop-blur-sm"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
