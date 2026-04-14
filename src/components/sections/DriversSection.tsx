"use client";

import { motion } from "framer-motion";
import { Phone, Star, Car, Languages } from "lucide-react";
import { drivers } from "@/data/drivers";

export default function DriversSection() {
  return (
    <section id="drivers" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4"
          >
            Meet Your Professional Drivers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Police-verified, experienced, and courteous — our drivers are the backbone of Ayaan
            Travels. Call any of them directly to book your ride.
          </motion.p>
        </div>

        {/* Drivers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver, index) => (
            <motion.div
              key={driver.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group"
            >
              {/* Driver header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl font-black text-slate-900 shrink-0 shadow-md shadow-amber-500/30">
                  {driver.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="text-slate-900 font-bold text-base leading-tight">
                      {driver.name}
                    </h3>
                    {driver.available && (
                      <span className="text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full shrink-0">
                        Available
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-amber-600 text-sm font-semibold">{driver.rating}</span>
                    <span className="text-slate-400 text-xs">
                      · {driver.trips.toLocaleString()} trips
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm">
                  <Car className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-slate-600">
                    {driver.vehicle}
                    <span className="ml-1 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-md font-medium">
                      {driver.seater}-Seater
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Languages className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600">{driver.languages.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-slate-600">{driver.experience} experience</span>
                </div>
              </div>

              {/* Phone number visible */}
              <div className="text-slate-500 text-sm mb-3 font-mono tracking-wide">
                {driver.phone}
              </div>

              {/* Call button */}
              <a
                href={`tel:${driver.phone.replace(/\s/g, "")}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-amber-500 text-white group-hover:text-slate-900 font-semibold py-3 rounded-xl text-sm transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call {driver.name.split(" ")[0]}
              </a>
            </motion.div>
          ))}
        </div>

        {/* General helpline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center"
        >
          <p className="text-slate-700 font-semibold mb-1">Not sure which driver to call?</p>
          <p className="text-slate-500 text-sm mb-4">
            Call our general helpline and we&apos;ll assign the nearest available driver for your
            route.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl text-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            +91 98765 43210 — General Helpline
          </a>
        </motion.div>
      </div>
    </section>
  );
}
