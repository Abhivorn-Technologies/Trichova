"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

const concerns = [
  "Receding Hairline",
  "Crown Thinning",
  "Diffuse Hair Loss",
  "Full Baldness",
  "Patchy Beard",
  "Female Hair Loss",
  "Hairline Redesign",
  "Post-Partum Hair Loss",
  "Other",
];

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpen);
    
    // Support hash based opening
    if (window.location.hash === "#book") {
      setIsOpen(true);
      window.history.replaceState(null, "", window.location.pathname);
    }
    
    const handleHashChange = () => {
      if (window.location.hash === "#book") {
        setIsOpen(true);
        window.history.replaceState(null, "", window.location.pathname);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("open-booking-modal", handleOpen);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form if closed
      setTimeout(() => {
        if (submitted) {
          setSubmitted(false);
          setFormData({ name: "", phone: "", email: "", concern: "", message: "" });
        }
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-45%" }}
            className="fixed left-1/2 top-1/2 w-full max-w-lg max-h-[90vh] overflow-y-auto z-[101] px-4"
          >
            <div className="relative bg-gradient-premium-dark rounded-3xl p-6 md:p-8 shadow-2xl border border-gold/20 overflow-hidden">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
              <div className="orb orb-gold absolute" style={{ width: "300px", height: "300px", top: "-100px", right: "-100px", opacity: 0.15 }} />
              
              <button
                onClick={close}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-gold" />
                    </div>
                    <h3 className="font-serif font-bold text-white text-2xl mb-3">
                      Thank You, {formData.name || "Friend"}!
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                      Your consultation request has been received. Our team will contact you within 
                      24 hours to schedule your free consultation.
                    </p>
                    <button
                      onClick={close}
                      className="px-8 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-bold text-white text-2xl mb-2">Book Free Consultation</h3>
                    <p className="text-white/60 mb-6 text-sm">Fill out the form below and we will contact you shortly.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-white/60 text-sm mb-1.5 font-medium">Full Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200 text-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-white/60 text-sm mb-1.5 font-medium">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200 text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-white/60 text-sm mb-1.5 font-medium">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200 text-sm"
                        />
                      </div>

                      {/* Concern */}
                      <div>
                        <label className="block text-white/60 text-sm mb-1.5 font-medium">Primary Concern *</label>
                        <select
                          value={formData.concern}
                          onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white focus:outline-none focus:border-gold/50 transition-all duration-200 text-sm appearance-none"
                        >
                          <option value="" className="text-slate-400">Select your concern</option>
                          {concerns.map((c) => (
                            <option key={c} value={c} className="text-navy-900 bg-ivory">
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 mt-4 rounded-xl font-bold text-navy-950 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 bg-gradient-gold shadow-gold"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-navy-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book Free Consultation
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
