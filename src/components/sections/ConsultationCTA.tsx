"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, CheckCircle2, ArrowRight } from "lucide-react";

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

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="consultation"
      className="section-padding relative overflow-hidden bg-gradient-premium-dark"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10" />
      <div className="orb orb-gold" style={{ width: "600px", height: "600px", bottom: "-200px", right: "-200px", opacity: 0.1 }} />
      <div className="orb orb-gold" style={{ width: "300px", height: "300px", top: "-100px", left: "10%", opacity: 0.1 }} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(247,243,237,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(247,243,237,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-gold/20 text-ivory/90 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Free Consultation — No Obligation
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="font-serif font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Start Your Hair Restoration{" "}
            <span className="gradient-text-gold">
              Journey Today
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-ivory/70 text-lg max-w-2xl mx-auto"
          >
            Get a personalized treatment plan from our senior hair surgeon. 
            Free consultation — no pressure, just expert advice.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-10 text-center"
              >
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
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/50 text-sm">
                  In the meantime, feel free to WhatsApp us for instant assistance.
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8"
                id="consultation-form"
              >
                <h3 className="font-bold text-white text-xl mb-6">Book Your Free Consultation</h3>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5 font-medium">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Concern */}
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5 font-medium">
                      Primary Concern *
                    </label>
                    <select
                      id="form-concern"
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

                  {/* Message */}
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5 font-medium">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your hair loss timeline, previous treatments, etc."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="form-submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-navy-950 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 bg-gradient-gold shadow-gold"
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

                  <p className="text-white/30 text-xs text-center">
                    By submitting, you agree to our privacy policy. We never share your data.
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right — Contact options + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Quick contact cards */}
            <a
              href="https://wa.me/917093376414"
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-cta"
              className="block group glass rounded-2xl p-6 border border-white/10 hover:border-green-400/30 hover:bg-green-400/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-base mb-0.5">WhatsApp Us</div>
                  <div className="text-white/50 text-sm">Instant response · Available 9AM–8PM</div>
                  <div className="text-green-400 text-sm font-semibold mt-1">+91 70933 76414</div>
                </div>
                <ArrowRight size={18} className="text-white/30 group-hover:text-green-400 ml-auto group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </a>

            <a
              href="tel:+917093376414"
              id="call-cta"
              className="block group glass rounded-2xl p-6 border border-white/10 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} className="text-navy-950" />
                </div>
                <div>
                  <div className="font-bold text-white text-base mb-0.5">Call Now</div>
                  <div className="text-white/50 text-sm">Speak directly with a consultant</div>
                  <div className="text-gold text-sm font-semibold mt-1">+91 70933 76414</div>
                </div>
                <ArrowRight size={18} className="text-white/30 group-hover:text-gold ml-auto group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </a>

            {/* Benefits reminder */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-4">
                Free Consultation Includes
              </div>
              <div className="space-y-3">
                {[
                  "Detailed hair loss assessment by senior doctor",
                  "Advanced trichoscopy scalp analysis",
                  "Customized treatment recommendation",
                  "Transparent pricing breakdown",
                  "Questions & answers session",
                  "Personalized growth timeline",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="rounded-2xl p-5 border border-gold/20 text-center bg-gold/10"
            >
              <div className="text-gold font-semibold text-sm mb-1">
                ⚡ Limited Slots Available This Week
              </div>
              <div className="text-white/50 text-xs">
                Book now to secure your preferred consultation time
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/917093376414"
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </a>
    </section>
  );
}
