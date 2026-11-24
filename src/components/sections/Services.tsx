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
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "bio-fue",
    href: "/treatments/bio-fue",
    icon: Microscope,
    title: "BIO Integrated FUE",
    shortTitle: "BIOFUE",
    image: "/images/treatments/bio-fue.jpg",
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
    id: "dht",
    href: "/treatments/dht-hair-transplant",
    icon: Zap,
    title: "DHT Hair Transplant",
    shortTitle: "DHT",
    image: "/images/treatments/dht-hair-transplant.jpg",
    description:
      "Direct Hair Transplantation with Choi Implanter Pen for precise angle control and maximum density without shaving.",
    color: "from-gold to-gold-light",
    lightColor: "bg-gold/10",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/60",
    tag: "No Shave",
    tagColor: "bg-navy-900/10 text-navy-900",
  },
  {
    id: "sapphire",
    href: "/treatments/fue-hair-transplant",
    icon: Gem,
    title: "Sapphire Hair Transplant",
    shortTitle: "Sapphire FUE",
    image: "/images/treatments/fue-hair-transplant.jpg",
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
    href: "/treatments/fue-hair-transplant",
    icon: UserCheck,
    title: "Male Hair Transplant",
    shortTitle: "Male",
    image: "/images/treatments/fue-hair-transplant.jpg",
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
    href: "/treatments/female-hair-transplant",
    icon: Users,
    title: "Female Hair Transplant",
    shortTitle: "Female",
    image: "/images/treatments/female-hair-transplant.jpg",
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
    href: "/treatments/gfc-treatment",
    icon: Droplets,
    title: "GFC Treatment",
    shortTitle: "GFC",
    image: "/images/treatments/gfc-treatment.jpg",
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
    href: "/treatments/exosome-therapy",
    icon: Sparkles,
    title: "Exosome Therapy",
    shortTitle: "Exosome",
    image: "/images/treatments/exosome-therapy.jpg",
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
    href: "/treatments/beard-transplant",
    icon: Scissors,
    title: "Beard & Moustache Transplant",
    shortTitle: "Beard",
    image: "/images/treatments/beard-transplant.jpg",
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold">Our Treatments</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section mb-4"
          >
            Premium Hair Restoration{" "}
            <span className="gradient-text-gold">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto text-lg"
          >
            From cutting-edge surgical transplants to non-invasive regenerative therapies — 
            we offer every advanced solution for complete hair restoration.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={service.href}
                  className={`group relative flex flex-col bg-white rounded-2xl border border-gold/20 ${service.borderColor} shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden h-full`}
                >
                  {/* Image Container with 16:9 ratio */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-navy-950/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-300" />
                    <span
                      className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md bg-white/95 shadow-sm border border-navy-900/10 ${service.tagColor}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl ${service.lightColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={18} className={service.iconColor} />
                      </div>
                      <h3 className="font-bold text-navy-900 text-base leading-tight group-hover:text-gold transition-colors duration-200">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:gap-2.5 transition-all duration-200 mt-auto pt-3 border-t border-slate-100">
                      <span>Learn More</span>
                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
