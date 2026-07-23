"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertOctagon, RotateCcw, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-slate-950 relative overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl animate-pulse" />
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center relative z-10 shadow-2xl">
              <AlertOctagon className="w-10 h-10 sm:w-14 sm:h-14 text-red-500" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-600"
        >
          Something Went Wrong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto mb-10"
        >
          We apologize for the inconvenience. An unexpected error has occurred on
          our end. Our technical team has been notified.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => reset()}
            className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            <RotateCcw className="w-4 h-4 transition-transform group-hover:-rotate-180 duration-500" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto backdrop-blur-sm"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
