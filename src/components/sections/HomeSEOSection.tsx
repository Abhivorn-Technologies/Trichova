"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar, ShieldCheck } from "lucide-react";

const trustPoints = [
  "Personalized treatment plans based on detailed hair and scalp analysis.",
  "Customized solutions for hair loss, hair thinning, and hair fall concerns.",
  "Hairline planning designed to complement your facial proportions and natural hair growth.",
  "Precision-focused follicle placement for balanced coverage and healthy hair growth.",
  "Comprehensive hair restoration services, including hair implants and beard restoration.",
  "Experienced specialists offering individualized care for men and women.",
  "Clear guidance before, during, and after every procedure.",
  "Ongoing follow-up care to support healthy recovery and long-term outcomes."
];

export default function HomeSEOSection() {
  return (
    <section id="about-clinic" className="section-padding bg-ivory relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-[0.02] pointer-events-none" />
      <div 
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none -translate-y-1/2" 
      />
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" 
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
          
          {/* Left Column: Philosophical Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex flex-col gap-2">
              <span className="badge-gold w-fit">Clinic Insights</span>
              <h2 className="font-serif font-bold text-navy-900 text-3xl md:text-4xl leading-tight">
                Best Hair Transplant Clinic in <span className="gradient-text-gold">Hyderabad</span>
              </h2>
              <h3 className="text-xl font-medium text-gold font-serif mt-1">
                Hair Restoration Begins with Understanding Your Needs
              </h3>
            </div>
            
            <div className="gold-divider" />
            
            <div className="space-y-5 text-slate-600 leading-relaxed text-base">
              <p>
                No two people experience hair loss in the same way. While one person may notice a slowly 
                receding hairline, another may struggle with thinning at the crown, uneven hair density, or 
                excessive hair fall. That's why choosing the right treatment starts with understanding your 
                individual condition—not simply selecting a procedure. Whether you are searching for{" "}
                <strong>Hair Fall Treatment</strong>, <strong>hair thinning treatment</strong>, or{" "}
                <strong>hair loss treatment in Hyderabad</strong>, the first step is identifying the cause behind your concern.
              </p>
              <p>
                At Trichova Hair Studio, we believe every patient deserves a treatment plan built around 
                their unique needs. Our specialists begin with a detailed consultation to understand your hair 
                loss pattern, examine the health of your scalp, assess the donor area, and discuss the 
                results you hope to achieve. This careful evaluation allows us to recommend the most 
                suitable approach instead of offering a standard solution to everyone. From hair regrowth 
                treatment and hair implants to female hair loss treatment in Hyderabad, every 
                recommendation is based on your individual hair restoration goals.
              </p>
              <p>
                As a trusted <strong>Best Hair Transplant Clinic in Hyderabad</strong>, our focus is on delivering results 
                that look balanced, natural, and long-lasting. Every stage of the procedure is carefully 
                planned—from designing a hairline that complements your facial features to placing each 
                follicle with precision for even coverage and healthy growth. In addition to hair transplant 
                procedures, we also offer solutions for individuals looking for the best hair loss treatment 
                in Hyderabad, helping both men and women address different stages of hair thinning with 
                personalized care.
              </p>
              <p>
                Your experience at Trichova goes beyond the treatment room. We believe patients should 
                feel informed, comfortable, and confident throughout the entire process. From your first 
                consultation to your follow-up appointments, our team is available to answer questions, 
                explain every step clearly, and provide continued guidance during recovery. If you've been 
                searching for the best doctors for hair loss, a trusted hair specialist doctor near me, or 
                the best hair care clinic near me, our experienced team is here to support you with honest 
                advice and evidence-based treatment options.
              </p>
              <p>
                Whether your hair loss is recent or something you've managed for years, taking the first step 
                doesn't have to feel overwhelming. We're here to help you understand your options, make 
                informed decisions, and choose a treatment plan that fits your goals and expectations. Along 
                with comprehensive hair restoration services, Trichova also provides specialized procedures 
                such as <strong>Beard Transplant in Hyderabad</strong> for individuals looking to improve beard density 
                and facial hair growth.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Trust Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="bg-white rounded-3xl p-8 border border-gold/15 shadow-card-hover hover:border-gold/40 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-gold" size={20} />
                </div>
                <h3 className="font-serif font-bold text-navy-900 text-xl leading-tight">
                  Why Patients Trust Trichova Hair Studio
                </h3>
              </div>

              <div className="space-y-4">
                {trustPoints.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full border-2 border-white bg-gold/20 flex items-center justify-center text-[10px] font-bold text-gold"
                    >
                      {i === 0 ? "Dr" : i === 1 ? "10k+" : "★"}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Led by expert surgeons with exceptional success rates
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Schedule Consultation Call-Out */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gold/20"
          style={{ background: "linear-gradient(135deg, rgba(201,161,90,0.06) 0%, rgba(216,182,122,0.02) 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A15A] to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/30 mb-4">
              <Calendar size={12} />
              Schedule Your Consultation
            </span>
            <h3 className="font-serif font-bold text-navy-955 text-2xl md:text-3xl mb-4">
              Begin Your Hair Restoration Journey Today
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-3xl">
              Finding the right clinic is an important decision, and choosing experienced professionals can 
              make a meaningful difference to your outcome. If you're looking for the <strong>Best Hair 
              Transplant Clinic in Hyderabad</strong>, <strong>hair loss treatment in Hyderabad</strong>, or personalized hair 
              restoration solutions, Trichova Hair Studio combines clinical expertise, thoughtful treatment 
              planning, and patient-focused care to help you achieve healthier, fuller-looking hair.
            </p>
            <a 
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-booking-modal"));
              }}
              className="btn-gold px-8 py-4 rounded-full text-base font-bold shadow-gold hover:shadow-gold-lg transition-all flex items-center gap-2"
            >
              Start Free Scalp Analysis
              <Calendar size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
