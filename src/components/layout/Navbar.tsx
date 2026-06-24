"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#services" },
  { label: "Why Trichova", href: "#why-trichova" },
  { label: "Results", href: "#results" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const handleScroll = () => {
      // Handle active section tracking
      const sections = navLinks.map(link => ({
        id: link.href.substring(1),
        label: link.label
      }));
      
      let currentActiveLabel = activeLink;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the top of the section is near the top of the screen
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentActiveLabel = section.label;
          }
        }
      }
      
      if (currentActiveLabel !== activeLink) {
        setActiveLink(currentActiveLabel);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-ivory/95 backdrop-blur-xl shadow-sm border-b border-gold/20"
            : "bg-transparent"
        )}
        style={{ height: "var(--navbar-height)" }}
      >
        <nav className="section-container h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("Home", "#home")}
            className="flex items-center justify-center scale-[0.8] sm:scale-90 origin-left hover:opacity-90 transition-opacity"
          >
            <Logo isScrolled={isScrolled} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.label, link.href)}
                className={cn(
                  "nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isScrolled
                    ? activeLink === link.label
                      ? "text-gold"
                      : "text-navy-900 hover:text-gold"
                    : activeLink === link.label
                    ? "text-white"
                    : "text-white/80 hover:text-white",
                  activeLink === link.label ? "active" : ""
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="tel:+917093376414"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-navy-900 hover:text-gold" : "text-white/80 hover:text-white"
              )}
            >
              <Phone size={15} />
              +91 70933 76414
            </a>
            <button
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-navy-950 bg-gradient-gold shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors duration-200",
              isScrolled ? "text-navy-950 hover:bg-gold/10" : "text-white hover:bg-white/10"
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
            className="fixed inset-x-0 top-[80px] z-40 bg-ivory/95 backdrop-blur-xl border-b border-gold/20 shadow-xl lg:hidden"
          >
            <div className="section-container py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={cn(
                    "text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                    activeLink === link.label
                      ? "bg-gold/10 text-gold"
                      : "text-navy-900 hover:bg-ivory-dark hover:text-gold"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 border-t border-gold/20 flex flex-col gap-3">
                <a
                  href="tel:+917093376414"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-navy-900 hover:text-gold transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">+91 70933 76414</span>
                </a>
                <button
                  onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
                  className="w-full py-3.5 rounded-full text-base font-semibold text-navy-950 bg-gradient-gold shadow-gold hover:shadow-gold-lg transition-all duration-300"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
