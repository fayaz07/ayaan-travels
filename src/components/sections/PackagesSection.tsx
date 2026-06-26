"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  CarFront,
  Clock,
  Info,
  MapPinned,
  Plane,
  Route,
  Users,
} from "lucide-react";
import {
  airportPackages,
  formatPackagePrice,
  rentalPackages,
  tourPackages,
} from "@/data/packages";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function PricePair({ sedanPrice, innovaPrice }: { sedanPrice: number; innovaPrice: number }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg bg-emerald-50 px-3 py-3">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-emerald-700">
          <Users className="h-3.5 w-3.5" /> 4 seater
        </div>
        <div className="mt-1 text-xl font-black text-slate-950">
          {formatPackagePrice(sedanPrice)}
        </div>
      </div>
      <div className="rounded-lg bg-amber-50 px-3 py-3">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-amber-700">
          <CarFront className="h-3.5 w-3.5" /> Innova
        </div>
        <div className="mt-1 text-xl font-black text-slate-950">
          {formatPackagePrice(innovaPrice)}
        </div>
      </div>
    </div>
  );
}

export default function PackagesSection() {
  return (
    <section id="packages" className="bg-[#f7f4ec] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.45fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-amber-200"
            >
              <Route className="h-4 w-4" />
              Minimal categories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-4xl"
            >
              Choose by trip type, then compare 4-seater and Innova prices
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-lg leading-8 text-slate-700"
          >
            We kept the menu simple: outstation tour packages, local rental packages, and Hyderabad
            Airport pickup or drop. All fares start from Zaheerabad.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
          >
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-black uppercase text-amber-700">
                  <MapPinned className="h-4 w-4" />
                  Tour packages
                </div>
                <h3 className="mt-1 text-2xl font-black text-slate-950">
                  Zaheerabad outstation packages
                </h3>
              </div>
              <a
                href="tel:+919876543210"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Call to book
              </a>
            </div>

            <div className="grid gap-4">
              {tourPackages.map((pkg, index) => (
                <motion.article
                  key={pkg.destination}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.025 }}
                  className="rounded-xl border border-slate-200 p-4 transition hover:border-amber-300 hover:shadow-md"
                >
                  <div className="grid gap-4 md:grid-cols-[1fr_300px] md:items-center">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                        <CalendarDays className="h-4 w-4 text-amber-600" />
                        {pkg.duration}
                      </div>
                      <h4 className="text-xl font-black leading-snug text-slate-950">
                        Zaheerabad to {pkg.destination}
                      </h4>
                      {pkg.tags && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {pkg.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <PricePair sedanPrice={pkg.sedanPrice} innovaPrice={pkg.innovaPrice} />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-sm font-black uppercase text-amber-700">
                <Clock className="h-4 w-4" />
                Rental packages
              </div>
              <h3 className="mt-1 text-2xl font-black text-slate-950">Local use packages</h3>
              <div className="mt-5 grid gap-4">
                {rentalPackages.map((pkg) => (
                  <article key={pkg.label} className="rounded-xl border border-slate-200 p-4">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-black text-slate-950">{pkg.label}</h4>
                        <p className="text-sm font-semibold text-slate-500">{pkg.distance}</p>
                      </div>
                    </div>
                    <PricePair sedanPrice={pkg.sedanPrice} innovaPrice={pkg.innovaPrice} />
                  </article>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm"
            >
              <div className="flex items-center gap-2 text-sm font-black uppercase text-amber-300">
                <Plane className="h-4 w-4" />
                Airport pickup and drop
              </div>
              <h3 className="mt-1 text-2xl font-black">Hyderabad Airport</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{airportPackages[0].route}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <div className="text-xs font-bold uppercase text-slate-300">4 seater sedan</div>
                  <div className="mt-1 text-2xl font-black text-white">
                    {formatPackagePrice(airportPackages[0].sedanPrice)}
                  </div>
                </div>
                <div className="rounded-xl bg-amber-300 p-4 text-slate-950">
                  <div className="text-xs font-black uppercase">7 seater Innova</div>
                  <div className="mt-1 text-2xl font-black">
                    {formatPackagePrice(airportPackages[0].innovaPrice)}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-amber-300 bg-amber-50 p-5"
            >
              <div className="flex gap-3">
                <Info className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
                <div>
                  <h3 className="font-black text-slate-950">Rental package note</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Driver allowance, toll, state tax and parking are added extra when applicable.
                    Final fare can change if route, waiting time, or plan changes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
