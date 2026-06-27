"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Car, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { airportPackages, formatPackagePrice, rentalPackages, tourPackages } from "@/data/packages";
import { drivers } from "@/data/drivers";

const quickStats = [
  { label: "Tour packages", value: `${tourPackages.length}+` },
  { label: "Airport fare", value: formatPackagePrice(airportPackages[0].sedanPrice) },
  { label: "Full day rental", value: formatPackagePrice(rentalPackages[2].sedanPrice) },
];

const phone = drivers[0].phone;

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-slate-950 text-white">
      <Image
        src="/images/ayaan-travels-hero.png"
        alt="Ayaan Travels cab on highway from Zaheerabad"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/70 md:bg-linear-to-r md:from-slate-950 md:via-slate-950/82 md:to-slate-950/18" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/12 px-4 py-2 text-sm font-semibold text-amber-200"
          >
            <ShieldCheck className="h-4 w-4" />
            Published cab prices from Zaheerabad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ayaan Travels Zaheerabad tour packages, rentals and airport cabs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl"
          >
            Book 4-seater sedan and 7-seater Innova packages for Srisailam, Tirupati, Goa, Mumbai,
            Shirdi, Hyderabad Airport and local rentals. Clear prices, clean vehicles, and direct
            phone booking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#packages"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-amber-400 px-7 py-4 text-base font-black text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
            >
              See package prices
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={`tel:${phone.replaceAll(" ", "")}`}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/16"
            >
              <Phone className="h-5 w-5 text-amber-300" />
              Call {phone}
            </a>
            <a
              href={`https://wa.me/${phone.replaceAll(" ", "").replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-green-300/25 bg-green-400/12 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-green-400/18"
            >
              <MessageCircle className="h-5 w-5 text-green-300" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
          className="mt-12 grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-white/12 bg-white/10 backdrop-blur sm:grid-cols-3"
        >
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="border-white/12 px-5 py-5 sm:border-r sm:last:border-r-0"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <Car className="h-4 w-4 text-amber-300" />
                {stat.label}
              </div>
              <div className="mt-2 text-3xl font-black text-white">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
