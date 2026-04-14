"use client";

import { motion } from "framer-motion";
import { Plane, MapPin, ArrowLeftRight, Building2, Star, Heart } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Plane,
  MapPin,
  ArrowLeftRight,
  Building2,
  Star,
  Heart,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4"
          >
            Every Journey, Covered.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            From airport pickups in Shamshabad to long drives across South India, we have a service
            for every travel need in Telangana and beyond.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
              >
                {/* Badge */}
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  {Icon && (
                    <Icon className="w-6 h-6 text-amber-600 group-hover:text-slate-900 transition-colors duration-300" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-slate-900 font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Book link */}
                <a
                  href="#booking"
                  className="mt-5 inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
                >
                  Book Now →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
