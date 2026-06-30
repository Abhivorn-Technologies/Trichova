"use client";

import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/trichovahairstudio/",
    color: "hover:text-pink-400",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/trichovahairstudioo/",
    color: "hover:text-blue-400",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];
import Link from "next/link";

const treatmentsList = [
  { label: "BIO Integrated FUE", href: "/treatments/bio-fue" },
  { label: "DHT Hair Transplant", href: "/treatments/dht-hair-transplant" },
  { label: "FUE Hair Transplant", href: "/treatments/fue-hair-transplant" },
  { label: "Female Hair Transplant", href: "/treatments/female-hair-transplant" },
  { label: "Beard Transplant", href: "/treatments/beard-transplant" },
];

const quickLinks = [
  { label: "Treatments", href: "/treatments" },
  { label: "Why Trichova", href: "/why-trichova" },
  { label: "Results Gallery", href: "/results" },
  { label: "FAQs", href: "/faqs" },
  { label: "Book Consultation", href: "/book-consultation" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white" id="contact">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-gold" />

      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="-mt-4 mb-2 relative scale-110 origin-left">
              <Logo className="justify-start" />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              World-class hair restoration clinic delivering natural, permanent results through
              advanced DHT, Sapphire and BIOFUE technologies. Your confidence is our mission.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/20">
                25 Years Warranty
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/20">
                95–98% Graft Survival
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ svg, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center",
                    "bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30",
                    "text-slate-400 hover:text-gold transition-all duration-300"
                  )}
                >
                  {svg}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Treatments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-white text-base mb-6 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-gradient-gold rounded-full" />
              Treatments
            </h3>
            <ul className="space-y-3">
              {treatmentsList.map((t) => (
                <li key={t.label}>
                  <Link
                    href={t.href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-gold group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
                    />
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white text-base mb-6 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-gradient-gold rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-gold group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-white text-base mb-6 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-gradient-gold rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917093376414"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">Call / WhatsApp</div>
                    +91 70933 76414
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@trichovahair.com"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">Email</div>
                    info@trichovahair.com
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-1">Clinic Address</div>
                    3rd Floor, Boppana’s Annapurna Arcade,<br />
                    Metro pillar C, 1729, Phase 2, Kavuri Hills,<br />
                    Madhapur, Hyderabad, Telangana 500081
                  </div>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <button
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
              className="mt-6 w-full py-3 rounded-full text-sm font-semibold text-navy-950 bg-gradient-gold shadow-gold transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Trichova Hair Studio. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs text-center">
            Developed by{" "}
            <a
              href="https://www.abhivorn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors hover:underline"
            >
              Abhivorn Technologies Pvt Ltd
            </a>
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
