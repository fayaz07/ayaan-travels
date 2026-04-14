"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowLeftRight,
  Users,
  Clock,
  Phone,
  ChevronDown,
  AlertCircle,
  CheckCircle2,
  RefreshCcw,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { getPrice, formatPrice, type TripType, type SeaterType } from "@/data/pricing";
import { drivers } from "@/data/drivers";

const tripTypeOptions: { value: TripType; label: string; description: string }[] = [
  { value: "drop", label: "Drop", description: "One-way drop to destination" },
  { value: "pickup", label: "Pickup", description: "Pickup from destination" },
  {
    value: "roundTrip",
    label: "Round Trip",
    description: "Go and come back same day",
  },
];

const timeSlots = [
  "12:00 AM",
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
  "4:00 AM",
  "5:00 AM",
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
];

interface SelectFieldProps {
  label: string;
  icon: React.ElementType;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  placeholder: string;
}

function SelectField({
  label,
  icon: Icon,
  value,
  onChange,
  options,
  placeholder,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-slate-700 text-sm font-semibold flex items-center gap-1.5">
        <Icon className="w-3.5 h-3.5 text-amber-600" />
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white border border-slate-200 hover:border-amber-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl px-4 py-3 text-slate-800 text-sm transition-all outline-none cursor-pointer"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
    </div>
  );
}

export default function BookingCalculator() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripType, setTripType] = useState<TripType>("drop");
  const [seater, setSeater] = useState<SeaterType>(5);
  const [time, setTime] = useState("");
  const [showResult, setShowResult] = useState(false);

  const availableDrivers = useMemo(
    () => drivers.filter((d) => d.seater === seater && d.available),
    [seater],
  );

  const price = useMemo(() => {
    if (!from || !to) return null;
    return getPrice(from, to, tripType, seater);
  }, [from, to, tripType, seater]);

  const handleCalculate = () => {
    if (from && to && from !== to) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setFrom("");
    setTo("");
    setTripType("drop");
    setSeater(5);
    setTime("");
    setShowResult(false);
  };

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setShowResult(false);
  };

  const toDestinations = destinations.filter((d) => d !== from);

  return (
    <section id="booking" className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Instant Price Estimate
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4"
          >
            Know Your Fare Before You Go
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Select your route, trip type, and vehicle to instantly see the fare. No surprises — just
            transparent pricing.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {/* From */}
              <SelectField
                label="From"
                icon={MapPin}
                value={from}
                onChange={(v) => {
                  setFrom(v);
                  setShowResult(false);
                }}
                options={destinations}
                placeholder="Select origin"
              />

              {/* Swap button */}
              <div className="hidden sm:flex items-end pb-0.5">
                <button
                  onClick={swapLocations}
                  title="Swap locations"
                  className="w-10 h-11.5 bg-white border border-slate-200 hover:border-amber-400 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-600 transition-all -mx-1 relative z-10"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>
              </div>

              {/* To */}
              <SelectField
                label="To"
                icon={MapPin}
                value={to}
                onChange={(v) => {
                  setTo(v);
                  setShowResult(false);
                }}
                options={toDestinations}
                placeholder="Select destination"
              />
            </div>

            {/* Mobile swap */}
            <div className="sm:hidden flex justify-center -mt-2 mb-4">
              <button
                onClick={swapLocations}
                className="flex items-center gap-1.5 text-amber-600 text-sm font-medium"
              >
                <ArrowLeftRight className="w-4 h-4" /> Swap Locations
              </button>
            </div>

            {/* Trip Type */}
            <div className="mb-5">
              <label className="text-slate-700 text-sm font-semibold mb-2 block">Trip Type</label>
              <div className="grid grid-cols-3 gap-2">
                {tripTypeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setTripType(opt.value);
                      setShowResult(false);
                    }}
                    className={`flex flex-col items-center gap-0.5 py-3 px-2 rounded-xl border text-center transition-all text-sm font-semibold ${
                      tripType === opt.value
                        ? "border-amber-500 bg-amber-50 text-amber-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-amber-300"
                    }`}
                  >
                    {opt.label}
                    <span
                      className={`text-[10px] font-normal ${
                        tripType === opt.value ? "text-amber-600" : "text-slate-400"
                      }`}
                    >
                      {opt.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {/* Seater */}
              <div>
                <label className="text-slate-700 text-sm font-semibold mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-600" /> Vehicle Capacity
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {([5, 7] as SeaterType[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSeater(s);
                        setShowResult(false);
                      }}
                      className={`py-3 rounded-xl border font-semibold text-sm transition-all ${
                        seater === s
                          ? "border-amber-500 bg-amber-50 text-amber-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-amber-300"
                      }`}
                    >
                      {s}-Seater
                    </button>
                  ))}
                </div>
              </div>

              {/* Time */}
              <SelectField
                label="Preferred Time"
                icon={Clock}
                value={time}
                onChange={setTime}
                options={timeSlots}
                placeholder="Any time"
              />
            </div>

            {/* Validation note */}
            {from && to && from === to && (
              <div className="flex items-center gap-2 text-red-500 text-sm mb-4 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Origin and destination cannot be the same.
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCalculate}
                disabled={!from || !to || from === to}
                className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-slate-900 font-bold py-3.5 rounded-xl text-sm transition-all shadow-md shadow-amber-500/20"
              >
                Calculate Fare
              </button>
              {showResult && (
                <button
                  onClick={handleReset}
                  className="w-12 h-12.5 border border-slate-200 hover:border-amber-300 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-600 transition-all"
                  title="Reset"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Result Panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-8 text-center flex flex-col items-center justify-center min-h-70"
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-amber-500" />
                  </div>
                  <p className="text-slate-500 text-sm font-medium">
                    Fill in your route and
                    <br />
                    click &quot;Calculate Fare&quot;
                  </p>
                  <p className="text-slate-400 text-xs mt-2">Instant, no-obligation estimate</p>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  {/* Price card */}
                  <div className="bg-slate-900 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                      <span className="text-slate-400 text-sm">Estimated Fare</span>
                    </div>

                    {price !== null ? (
                      <>
                        <div className="text-4xl font-black text-amber-400 mb-1">
                          {formatPrice(price)}
                        </div>
                        <div className="text-slate-400 text-sm mb-4">
                          {from} → {to}
                          <br />
                          {tripTypeOptions.find((t) => t.value === tripType)?.label} · {seater}
                          -Seater{time && ` · ${time}`}
                        </div>
                        <div className="text-xs text-slate-500 bg-white/5 rounded-lg px-3 py-2">
                          ✓ No hidden charges · ✓ AC vehicle · ✓ Professional driver
                        </div>
                      </>
                    ) : (
                      <div className="text-slate-400 text-sm">
                        <AlertCircle className="w-5 h-5 text-amber-400 mb-2" />
                        Route pricing not available. Please call us for a custom quote.
                      </div>
                    )}
                  </div>

                  {/* Available drivers */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <h3 className="text-slate-900 font-bold text-sm mb-3">
                      Available {seater}-Seater Drivers
                    </h3>
                    <div className="flex flex-col gap-3">
                      {availableDrivers.length > 0 ? (
                        availableDrivers.map((driver) => (
                          <div key={driver.id} className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-slate-900 shrink-0">
                                {driver.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .slice(0, 2)}
                              </div>
                              <div>
                                <div className="text-slate-900 text-sm font-semibold leading-none mb-0.5">
                                  {driver.name}
                                </div>
                                <div className="text-slate-400 text-xs">
                                  {driver.vehicle} · ⭐ {driver.rating}
                                </div>
                              </div>
                            </div>
                            <a
                              href={`tel:${driver.phone.replace(/\s/g, "")}`}
                              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-xs px-3 py-2 rounded-lg transition-colors shrink-0"
                            >
                              <Phone className="w-3 h-3" /> Call
                            </a>
                          </div>
                        ))
                      ) : (
                        <p className="text-slate-400 text-sm">
                          No {seater}-seater driver available right now. Please call our helpline.
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
