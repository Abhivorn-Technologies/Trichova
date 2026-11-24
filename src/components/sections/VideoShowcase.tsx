"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink, Sparkles } from "lucide-react";

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export interface VideoItem {
  id: string;
  title: string;
  url: string;
  type: "video" | "short";
  tag: string;
}

export const youtubeVideos: VideoItem[] = [
  {
    id: "dxm_AfXRGhc",
    title: "Hair transplant",
    url: "https://youtu.be/dxm_AfXRGhc?si=bQtkT6dmQGGXp8uB",
    type: "video",
    tag: "Procedure Guide",
  },
  {
    id: "1G89yPGk7y4",
    title: "Exosome hair treatment",
    url: "https://youtube.com/shorts/1G89yPGk7y4?si=XNxEv7tctCS2pENj",
    type: "short",
    tag: "Treatment",
  },
  {
    id: "brFRrYNnKEM",
    title: "Truth about Hair transplant graft",
    url: "https://youtube.com/shorts/brFRrYNnKEM?si=fGiCppmKr62h9Nqh",
    type: "short",
    tag: "Doctor Insight",
  },
  {
    id: "zH1SqO2Asy0",
    title: "Why does hair transplant looks unnatural",
    url: "https://youtube.com/shorts/zH1SqO2Asy0?si=6dyNd4JC8LbZHcCE",
    type: "short",
    tag: "Expert Advice",
  },
  {
    id: "KH--Ss0_4bI",
    title: "Patient review",
    url: "https://youtube.com/shorts/KH--Ss0_4bI?si=1rP-n5Msfq3MmBc-",
    type: "short",
    tag: "Patient Story",
  },
];

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const featured = youtubeVideos[0];
  const shorts = youtubeVideos.slice(1);

  return (
    <section id="videos" className="section-padding bg-ivory relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="badge-gold inline-flex items-center gap-1.5">
              <YouTubeIcon className="w-4 h-4 text-red-500" />
              Featured Videos
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section mb-4"
          >
            Doctor Insights & <span className="gradient-text-gold">Patient Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto text-base md:text-lg"
          >
            Watch real hair restoration insights, procedure breakdowns, and authentic patient journeys directly from Trichova Hair Studio.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-divider mx-auto mt-6"
          />
        </div>

        {/* Video Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Featured Video (Takes 5 columns on large screen) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div
              onClick={() => setSelectedVideo(featured)}
              className="group relative flex-1 bg-white rounded-3xl overflow-hidden border border-gold/25 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={`https://img.youtube.com/vi/${featured.id}/hqdefault.jpg`}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-navy-900 shadow-sm border border-gold/30 backdrop-blur-sm">
                  {featured.tag}
                </span>

                {/* Big Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Play size={26} className="fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-600 mb-2">
                    <YouTubeIcon className="w-4 h-4" />
                    <span>Featured Video</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-xl group-hover:text-gold transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">
                    A comprehensive walk-through on modern hair transplantation techniques, planning, and achieving natural density.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-gold">
                  <span>Click to Watch Video</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Video Shorts Grid (Takes 7 columns on large screen) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {shorts.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div
                  onClick={() => setSelectedVideo(item)}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gold/20 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col h-full"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-80" />

                    {/* Tag badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-navy-900 shadow-sm border border-gold/20">
                      {item.tag}
                    </span>

                    {/* Small Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Play size={18} className="fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <h4 className="font-bold text-navy-900 text-sm leading-snug group-hover:text-gold transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
                      <span className="flex items-center gap-1 text-red-600">
                        <YouTubeIcon className="w-3.5 h-3.5" />
                        Watch Short
                      </span>
                      <span className="text-gold group-hover:underline">Play Now →</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@trichovahairstudio?si=n7ijSnrDLgjKjUZq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-navy-950 border border-gold/30 hover:border-gold hover:shadow-card-hover font-semibold text-sm transition-all duration-300"
          >
            <YouTubeIcon className="w-5 h-5 text-red-600" />
            <span>Visit Trichova Official YouTube Channel</span>
            <ExternalLink size={14} className="text-slate-400" />
          </a>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 w-full ${
                selectedVideo.type === "short" ? "max-w-md aspect-[9/16] max-h-[85vh]" : "max-w-3xl aspect-video"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                aria-label="Close video"
              >
                <X size={18} />
              </button>

              {/* Embedded Player */}
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
