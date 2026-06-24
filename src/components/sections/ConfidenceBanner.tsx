"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConfidenceBanner() {
  return (
    <section className="py-12 bg-ivory">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-card border border-gold/20"
          style={{ minHeight: "400px", height: "60vh", maxHeight: "600px" }}
        >
          <Image
            src="/images/hero-confidence.jpg"
            alt="Regain your hair and confidence with Trichova"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
