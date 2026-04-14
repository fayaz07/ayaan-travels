"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Star, ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "5000+", label: "Happy Passengers" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Routes Covered" },
  { value: "4.9★", label: "Average Rating" },
];

const heroDestinations = [
  "Hyderabad",
  "Shamshabad Airport",
  "Miyapur",
  "HITEC City",
  "Pune",
  "Mumbai",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden flex flex-col">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">
                Zaheerabad, Telangana — Serving All of South India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5"
            >
              Travel Comfortably,
              <br />
              <span className="text-amber-400">Arrive Confidently.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl mb-8"
            >
              Zaheerabad&apos;s most trusted cab service. Airport transfers, long drives, and daily
              commutes to Hyderabad, Shamshabad, Miyapur and across Telangana — at fair, transparent
              prices.
            </motion.p>

            {/* Destination chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {heroDestinations.map((dest) => (
                <span
                  key={dest}
                  className="bg-white/5 border border-white/10 text-slate-300 text-sm px-3 py-1 rounded-full"
                >
                  {dest}
                </span>
              ))}
              <span className="text-slate-500 text-sm px-3 py-1">& 20+ more routes</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-400/30 hover:-translate-y-0.5"
              >
                Get Price Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call +91 98765 43210
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["SY", "PL", "FS", "RG"].map((initials) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-amber-400 to-orange-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-900"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-slate-400 text-sm">Rated 4.9 by 500+ riders</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="relative border-t border-white/10 bg-white/3 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-5 text-center">
                <div className="text-2xl font-black text-white mb-0.5">{stat.value}</div>
                <div className="text-slate-500 text-xs uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 right-8 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-slate-600" />
      </motion.div>
    </section>
  );
}
