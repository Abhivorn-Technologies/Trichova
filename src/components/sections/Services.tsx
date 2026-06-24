"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Microscope,
  Zap,
  Gem,
  UserCheck,
  Users,
  Droplets,
  Sparkles,
  Scissors,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "bio-fue",
    icon: Microscope,
    title: "BIO Integrated FUE",
    shortTitle: "BIOFUE",
    description:
      "Next-generation FUE combined with bioactive growth factors for superior graft survival and accelerated healing.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "Most Advanced",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
  {
    id: "dhi",
    icon: Zap,
    title: "DHI Hair Transplant",
    shortTitle: "DHI",
    description:
      "Direct Hair Implantation with Choi Implanter Pen for precise angle control and maximum density without shaving.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "No Shave",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
  {
    id: "sapphire",
    icon: Gem,
    title: "Sapphire Hair Transplant",
    shortTitle: "Sapphire FUE",
    description:
      "Ultra-precise sapphire blade incisions for minimal tissue damage, faster healing, and undetectable results.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "Precision",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
  {
    id: "male",
    icon: UserCheck,
    title: "Male Hair Transplant",
    shortTitle: "Male",
    description:
      "Tailored solutions for male pattern baldness — from receding hairlines to crown restoration with natural results.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "Most Popular",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
  {
    id: "female",
    icon: Users,
    title: "Female Hair Transplant",
    shortTitle: "Female",
    description:
      "Specialized protocols for women experiencing thinning, diffuse hair loss, or post-partum shedding.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "Specialized",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
  {
    id: "gfc",
    icon: Droplets,
    title: "GFC Treatment",
    shortTitle: "GFC",
    description:
      "Growth Factor Concentrate therapy using your own blood platelets to stimulate natural hair follicle regeneration.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "Non-Surgical",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
  {
    id: "exosome",
    icon: Sparkles,
    title: "Exosome Therapy",
    shortTitle: "Exosome",
    description:
      "Revolutionary cell-signaling therapy that revitalizes dormant hair follicles and dramatically improves hair density.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "Cutting Edge",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
  {
    id: "beard",
    icon: Scissors,
    title: "Beard & Moustache Transplant",
    shortTitle: "Beard",
    description:
      "Expert beard design and transplantation for patchy beards, sideburn reconstruction, and full beard creation.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "For Men",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-ivory">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">Our Treatments</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section mb-4"
          >
            Premium Hair Restoration{" "}
            <span className="gradient-text-gold">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto text-lg"
          >
            From cutting-edge surgical transplants to non-invasive regenerative therapies — 
            we offer every advanced solution for complete hair restoration.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group relative bg-ivory rounded-2xl p-6 border border-gold/20 ${service.borderColor} shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Gradient hover overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Tag */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl ${service.lightColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} className={service.iconColor} />
                  </div>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border border-navy-900/20 ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-bold text-navy-900 text-base mb-2 leading-tight relative z-10">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3 relative z-10">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:gap-2.5 transition-all duration-200 relative z-10">
                  Learn More
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-muted mb-6">
            Not sure which treatment is right for you?
          </p>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-booking-modal"));
            }}
            className="btn-primary"
            id="services-cta"
          >
            Book Free Hair Analysis
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
