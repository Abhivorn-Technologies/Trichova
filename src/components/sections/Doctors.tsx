"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const doctors = [
  {
    name: "Dr. Jagadish Kiran",
    qualifications: "(M.S., M.Ch)",
    description:
      "Dr. Jagadish Kiran, M.B.B.S., M.S. (General Surgery), M.Ch. (Plastic Surgery), is a board-certified cosmetic, plastic, and reconstructive surgeon with over 14 years of expertise. He completed fellowship training in cosmetic surgery, specializing in procedures such as Hair Transplant, gynecomastia, liposuction, breast augmentation and reduction, rhinoplasty, and non-surgical treatments like injectable dermal fillers. Renowned for his precision and premium treatments, his clinic is one of the premier plastic surgery centers in the state.",
    image: "/images/dr-jagadish.jpg",
  },
  {
    name: "Dr. Suma Sandhyala",
    qualifications: "(M.S., M.Ch)",
    description:
      "Dr. S. Suma is a Consultant Plastic, Cosmetic, and Reconstructive Surgeon. She graduated from NTR University of Health Sciences with an MBBS degree, earning the Best Outgoing Student award. She completed her MS in General Surgery from the same university and received the Best Resident Award in Plastic Surgery while obtaining her M.Ch from Nizam Institute of Medical Sciences, Hyderabad. Dr. Suma also holds an Observership in Cosmetic Surgery from New York and a Certification in Laser Treatment.",
    image: "/images/dr-suma.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="section-padding bg-white" id="doctors">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy-950 mb-6"
          >
            Meet Our <span className="text-gold">Experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Our clinic is led by highly qualified and experienced board-certified surgeons dedicated to providing world-class hair restoration and cosmetic treatments.
          </motion.p>
        </div>

        <div className="flex flex-col gap-20 lg:gap-32 max-w-6xl mx-auto">
          {doctors.map((doctor, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={doctor.name}
                className={cn(
                  "flex flex-col gap-8 lg:gap-16 items-center w-full",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Image Section Wrapper */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-2/5 shrink-0 relative group/image flex justify-center"
                >
                  {/* Actual Image Container (Now Round) */}
                  <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl bg-slate-100 z-10 border-[6px] border-white ring-1 ring-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/10 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 z-0">
                      <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-[10px] font-medium uppercase tracking-wider">Photo</p>
                    </div>
                    {/* When the user uploads the image, it will overlay the placeholder */}
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top transition-transform duration-1000 group-hover/image:scale-105 z-0"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full md:w-3/5 flex flex-col justify-center"
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-navy-950 mb-2 font-serif flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    {doctor.name}
                  </h3>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-6 border border-gold/20 self-start">
                    {doctor.qualifications}
                  </span>
                  
                  <div className="w-16 h-1 bg-gradient-gold rounded-full mb-6"></div>
                  
                  <p className="text-slate-600 leading-relaxed text-justify text-base lg:text-lg">
                    {doctor.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
