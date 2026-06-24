"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Treatments", 
    href: "/treatments",
    dropdown: [
      { label: "Results", href: "/results" }
    ]
  },
  { label: "Why Trichova", href: "/why-trichova" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || pathname !== "/"
            ? "bg-ivory/95 backdrop-blur-xl shadow-sm border-b border-gold/20"
            : "bg-transparent"
        )}
        style={{ height: "var(--navbar-height)" }}
      >
        <nav className="section-container h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Logo isScrolled={isScrolled || pathname !== "/"} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              const isSolid = isScrolled || pathname !== "/";
              return (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                      isSolid
                        ? isActive
                          ? "text-gold"
                          : "text-navy-900 hover:text-gold"
                        : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white",
                      isActive ? "active" : ""
                    )}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[240px] flex flex-col gap-1">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-gold hover:bg-gold/5 transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="tel:+917093376414"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                (isScrolled || pathname !== "/") ? "text-navy-900 hover:text-gold" : "text-white/80 hover:text-white"
              )}
            >
              <Phone size={15} />
              +91 70933 76414
            </a>
            <Link
              href="/book-consultation"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-navy-950 bg-gradient-gold shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors duration-200",
              (isScrolled || pathname !== "/") ? "text-navy-950 hover:bg-gold/10" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-[80px] z-40 bg-ivory/95 backdrop-blur-xl border-b border-gold/20 shadow-xl lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="section-container py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={() => !link.dropdown && setIsMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                          isActive
                            ? "bg-gold/10 text-gold"
                            : "text-navy-900 hover:bg-ivory-dark hover:text-gold"
                        )}
                      >
                        {link.label}
                      </Link>
                      {link.dropdown && (
                        <div className="pl-4 pr-2 py-2 flex flex-col gap-1 border-l-2 border-gold/20 ml-6 mt-1 mb-2">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.label}
                              href={subLink.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-gold hover:bg-gold/5"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
              <div className="pt-3 border-t border-gold/20 flex flex-col gap-3">
                <a
                  href="tel:+917093376414"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-navy-900 hover:text-gold transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">+91 70933 76414</span>
                </a>
                <Link
                  href="/book-consultation"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center w-full py-3.5 rounded-full text-base font-semibold text-navy-950 bg-gradient-gold shadow-gold hover:shadow-gold-lg transition-all duration-300"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
