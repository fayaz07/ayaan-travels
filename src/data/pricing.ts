export type TripType = "drop" | "pickup" | "roundTrip";
export type SeaterType = 5 | 7;

export interface PricingEntry {
  drop: { seater5: number; seater7: number };
  pickup: { seater5: number; seater7: number };
  roundTrip: { seater5: number; seater7: number };
}

// Key format: "FROM||TO" (always sort alphabetically for consistency)
// Prices are in INR
const pricingMap: Record<string, PricingEntry> = {
  "Zaheerabad||Hyderabad (Shamshabad Airport)": {
    drop: { seater5: 2800, seater7: 3500 },
    pickup: { seater5: 2800, seater7: 3500 },
    roundTrip: { seater5: 5200, seater7: 6500 },
  },
  "Zaheerabad||Hyderabad (Miyapur)": {
    drop: { seater5: 2500, seater7: 3200 },
    pickup: { seater5: 2500, seater7: 3200 },
    roundTrip: { seater5: 4600, seater7: 5800 },
  },
  "Zaheerabad||Hyderabad (HITEC City)": {
    drop: { seater5: 2600, seater7: 3300 },
    pickup: { seater5: 2600, seater7: 3300 },
    roundTrip: { seater5: 4800, seater7: 6000 },
  },
  "Zaheerabad||Hyderabad (Jubilee Hills)": {
    drop: { seater5: 2700, seater7: 3400 },
    pickup: { seater5: 2700, seater7: 3400 },
    roundTrip: { seater5: 5000, seater7: 6200 },
  },
  "Zaheerabad||Hyderabad (Secunderabad)": {
    drop: { seater5: 2700, seater7: 3400 },
    pickup: { seater5: 2700, seater7: 3400 },
    roundTrip: { seater5: 5000, seater7: 6200 },
  },
  "Zaheerabad||Hyderabad (Ameerpet)": {
    drop: { seater5: 2600, seater7: 3300 },
    pickup: { seater5: 2600, seater7: 3300 },
    roundTrip: { seater5: 4800, seater7: 6000 },
  },
  "Zaheerabad||Hyderabad (Old City)": {
    drop: { seater5: 2800, seater7: 3500 },
    pickup: { seater5: 2800, seater7: 3500 },
    roundTrip: { seater5: 5200, seater7: 6500 },
  },
  "Zaheerabad||Nizamabad": {
    drop: { seater5: 1600, seater7: 2000 },
    pickup: { seater5: 1600, seater7: 2000 },
    roundTrip: { seater5: 3000, seater7: 3800 },
  },
  "Zaheerabad||Bidar (Karnataka)": {
    drop: { seater5: 1800, seater7: 2200 },
    pickup: { seater5: 1800, seater7: 2200 },
    roundTrip: { seater5: 3400, seater7: 4200 },
  },
  "Zaheerabad||Gulbarga / Kalaburagi": {
    drop: { seater5: 2200, seater7: 2800 },
    pickup: { seater5: 2200, seater7: 2800 },
    roundTrip: { seater5: 4000, seater7: 5000 },
  },
  "Zaheerabad||Aurangabad / Sambhajinagar": {
    drop: { seater5: 4500, seater7: 5500 },
    pickup: { seater5: 4500, seater7: 5500 },
    roundTrip: { seater5: 8500, seater7: 10000 },
  },
  "Zaheerabad||Pune": {
    drop: { seater5: 6500, seater7: 8000 },
    pickup: { seater5: 6500, seater7: 8000 },
    roundTrip: { seater5: 12500, seater7: 15000 },
  },
  "Zaheerabad||Mumbai": {
    drop: { seater5: 9500, seater7: 11500 },
    pickup: { seater5: 9500, seater7: 11500 },
    roundTrip: { seater5: 18000, seater7: 22000 },
  },
  "Zaheerabad||Nagpur": {
    drop: { seater5: 5500, seater7: 6800 },
    pickup: { seater5: 5500, seater7: 6800 },
    roundTrip: { seater5: 10500, seater7: 13000 },
  },
  "Zaheerabad||Solapur": {
    drop: { seater5: 4000, seater7: 5000 },
    pickup: { seater5: 4000, seater7: 5000 },
    roundTrip: { seater5: 7500, seater7: 9500 },
  },
  "Zaheerabad||Nanded": {
    drop: { seater5: 3000, seater7: 3700 },
    pickup: { seater5: 3000, seater7: 3700 },
    roundTrip: { seater5: 5600, seater7: 7000 },
  },
  "Zaheerabad||Medak": {
    drop: { seater5: 800, seater7: 1000 },
    pickup: { seater5: 800, seater7: 1000 },
    roundTrip: { seater5: 1500, seater7: 1800 },
  },
  "Zaheerabad||Sangareddy": {
    drop: { seater5: 900, seater7: 1200 },
    pickup: { seater5: 900, seater7: 1200 },
    roundTrip: { seater5: 1700, seater7: 2100 },
  },
  "Zaheerabad||Patancheru": {
    drop: { seater5: 2000, seater7: 2500 },
    pickup: { seater5: 2000, seater7: 2500 },
    roundTrip: { seater5: 3800, seater7: 4700 },
  },
  "Zaheerabad||Narayankhed": {
    drop: { seater5: 600, seater7: 800 },
    pickup: { seater5: 600, seater7: 800 },
    roundTrip: { seater5: 1100, seater7: 1400 },
  },
  "Zaheerabad||Andole": {
    drop: { seater5: 500, seater7: 650 },
    pickup: { seater5: 500, seater7: 650 },
    roundTrip: { seater5: 900, seater7: 1200 },
  },
  "Zaheerabad||Jogipet": {
    drop: { seater5: 400, seater7: 550 },
    pickup: { seater5: 400, seater7: 550 },
    roundTrip: { seater5: 750, seater7: 1000 },
  },
};

function makeKey(from: string, to: string): string {
  return `${from}||${to}`;
}

export function getPrice(
  from: string,
  to: string,
  tripType: TripType,
  seater: SeaterType,
): number | null {
  const key = makeKey(from, to);
  const reverseKey = makeKey(to, from);

  const entry = pricingMap[key] || pricingMap[reverseKey];
  if (!entry) return null;

  const seaterKey = seater === 5 ? "seater5" : "seater7";
  return entry[tripType][seaterKey];
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
