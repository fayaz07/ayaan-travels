"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-900 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight"
            >
              Ready to Ride?
              <br />
              <span className="text-amber-400">Let&apos;s Talk.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              Book your ride, get a custom quote, or ask any questions. We are just a call or
              message away — 24 hours a day, 7 days a week.
            </motion.p>

            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 rounded-xl p-4 transition-all group"
              >
                <div className="w-11 h-11 bg-amber-500/20 group-hover:bg-amber-500 rounded-xl flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-amber-400 group-hover:text-slate-900 transition-colors" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">+91 98765 43210</div>
                  <div className="text-slate-400 text-xs">Primary — Mohammed Ayaan</div>
                </div>
              </a>

              <a
                href="tel:+918765432109"
                className="flex items-center gap-4 bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 rounded-xl p-4 transition-all group"
              >
                <div className="w-11 h-11 bg-amber-500/20 group-hover:bg-amber-500 rounded-xl flex items-center justify-center transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-amber-400 group-hover:text-slate-900 transition-colors" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">+91 87654 32109</div>
                  <div className="text-slate-400 text-xs">Secondary — Office Line</div>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/40 rounded-xl p-4 transition-all group"
              >
                <div className="w-11 h-11 bg-green-500/20 group-hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">WhatsApp Us</div>
                  <div className="text-slate-400 text-xs">Chat to confirm booking</div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right — Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Operating hours */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-bold">Operating Hours</h3>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Monday – Friday", hours: "24 Hours" },
                  { day: "Saturday", hours: "24 Hours" },
                  { day: "Sunday & Holidays", hours: "24 Hours" },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-slate-400">{row.day}</span>
                    <span className="text-amber-400 font-semibold">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service area */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-bold">Service Coverage</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Zaheerabad",
                  "Narayankhed",
                  "Andole",
                  "Medak",
                  "Sangareddy",
                  "Patancheru",
                  "Miyapur",
                  "HITEC City",
                  "Hyderabad",
                  "Shamshabad",
                  "Nizamabad",
                  "Bidar",
                  "Pune",
                  "Mumbai",
                  "Nagpur",
                ].map((area) => (
                  <span
                    key={area}
                    className="bg-white/8 text-slate-300 text-xs px-2.5 py-1 rounded-lg"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5">
              <p className="text-amber-400 font-semibold text-sm mb-1">Based in Zaheerabad</p>
              <p className="text-slate-400 text-sm">
                Zaheerabad, Sangareddy District, Telangana — 502 220
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
