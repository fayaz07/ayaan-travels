"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Passenger Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4"
          >
            Real Riders, Real Reviews
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Don&apos;t take our word for it. Here&apos;s what passengers from Zaheerabad,
            Narayankhed, Bidar and across Telangana say about us.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col gap-4 hover:shadow-md hover:border-amber-200 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-amber-400/40 -mb-2" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={`empty-${i}`} className="w-4 h-4 text-slate-200" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Trip badge */}
              <div className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg font-medium">
                🚗 {testimonial.trip}
              </div>

              {/* Reviewer info */}
              <div className="flex items-center gap-3 pt-1 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm font-bold text-slate-900">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-slate-400 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm mb-4">
            Join thousands of satisfied travelers from Zaheerabad and across Telangana
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20"
          >
            Book Your Ride Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
