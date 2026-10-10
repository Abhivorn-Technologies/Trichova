"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { sendEnquiryEmail } from "@/lib/emailjs";
import { submitEnquiry } from "@/lib/actions/enquiry";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      concern: "Contact Page Message",
      source: "Contact Page",
    };

    try {
      // 1. Save to MongoDB
      await submitEnquiry(payload);

      // 2. Send email notification via EmailJS
      await sendEnquiryEmail(payload);

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gold/20 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
          <CheckCircle2 className="text-gold" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Thank You, {formData.name || "Friend"}!</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Your message has been received. Our patient care team will get back to you within 2 to 4 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", email: "", message: "" });
          }}
          className="text-sm font-semibold text-gold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gold/20 flex flex-col justify-center">
      <h3 className="text-xl font-bold text-navy-900 mb-2">Send us a message</h3>
      <p className="text-slate-500 text-sm mb-6">Fill out the form below and our team will get back to you shortly.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1">Email Address (Optional)</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900 mb-1">Message</label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 mt-2 rounded-xl font-bold text-navy-950 bg-gradient-gold shadow-gold hover:shadow-gold-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending Message...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
