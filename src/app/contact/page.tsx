import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Trichova Hair Studio",
  description: "Get in touch with Trichova Hair Studio. Call, email, or visit our luxury clinic in Jubilee Hills, Hyderabad.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero 
        title="Contact Us" 
        description="We are here to help you on your hair restoration journey. Reach out to our patient care team for inquiries, or book a complimentary consultation."
        imageSrc="/images/hero-confidence.jpg"
      />
      <div className="section-container py-8 lg:py-12 bg-ivory">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div>
            <h2 className="heading-section mb-4 text-3xl md:text-4xl">Get In Touch</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-base">
              Our patient care coordinators are available Monday through Saturday to answer your questions and help you schedule your detailed hair analysis.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white p-4 lg:p-5 rounded-2xl shadow-sm border border-gold/10">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-base mb-0.5">Call or WhatsApp</h3>
                  <p className="text-slate-500 text-xs mb-1">Available 9:00 AM - 7:00 PM</p>
                  <a href="tel:+917093376414" className="text-gold font-semibold text-lg hover:underline">+91 70933 76414</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-4 lg:p-5 rounded-2xl shadow-sm border border-gold/10">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-base mb-0.5">Email Us</h3>
                  <p className="text-slate-500 text-xs mb-1">We aim to reply within 2 hours</p>
                  <a href="mailto:info@trichovahair.com" className="text-gold font-semibold text-base hover:underline">info@trichovahair.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-4 lg:p-5 rounded-2xl shadow-sm border border-gold/10">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-base mb-0.5">Visit Our Clinic</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    3rd Floor, Boppana’s Annapurna Arcade,<br />
                    Metro pillar C, 1729, Phase 2, Kavuri Hills,<br />
                    Madhapur, Hyderabad, Telangana 500081
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gold/20 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Send us a message</h3>
            <p className="text-slate-500 text-sm mb-6">Fill out the form below and our team will get back to you shortly.</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Message</label>
                <textarea rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 mt-2 rounded-xl font-bold text-navy-950 bg-gradient-gold shadow-gold hover:shadow-gold-lg hover:scale-[1.02] transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
