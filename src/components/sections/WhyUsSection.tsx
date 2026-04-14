"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Banknote, Headphones, ThumbsUp, Map } from "lucide-react";

const whyUsItems = [
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "We track your flight or train and adjust pickup times in real-time. Zero delays, guaranteed.",
  },
  {
    icon: Shield,
    title: "Safe & Verified Drivers",
    description:
      "All drivers are police-verified, experienced, and trained in safe driving practices.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description:
      "No surge pricing, no hidden charges. What you see in the estimate is exactly what you pay.",
  },
  {
    icon: Map,
    title: "Local Route Experts",
    description:
      "Our drivers know every shortcut across Zaheerabad, Medak, Sangareddy, and the highways to Hyderabad.",
  },
  {
    icon: Headphones,
    title: "24/7 Availability",
    description:
      "Early morning flights, midnight trains — we are available round the clock for you.",
  },
  {
    icon: ThumbsUp,
    title: "5000+ Happy Customers",
    description:
      "From daily commuters to wedding parties, our passengers keep coming back. That says it all.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - text */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight"
            >
              The Most Trusted Cab in
              <span className="text-amber-400"> Zaheerabad</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              We have been serving the people of Zaheerabad, Narayankhed, Andole, Medak, and the
              wider Telangana region since 2016. Every ride is a promise of safety, punctuality, and
              comfort.
            </motion.p>

            {/* Highlight stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "8+", label: "Years in Service" },
                { value: "5000+", label: "Trips Completed" },
                { value: "50+", label: "Routes Covered" },
                { value: "0", label: "Hidden Charges" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-black text-amber-400 mb-0.5">{item.value}</div>
                  <div className="text-slate-400 text-sm">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white/5 hover:bg-white/8 border border-white/10 hover:border-amber-500/30 rounded-xl p-5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-amber-500/10 group-hover:bg-amber-500/20 rounded-lg flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
