export type VehicleKind = "sedan" | "innova";

export interface TourPackage {
  destination: string;
  duration: string;
  sedanPrice: number;
  innovaPrice: number;
  tags?: string[];
}

export interface RentalPackage {
  label: string;
  distance: string;
  sedanPrice: number;
  innovaPrice: number;
}

export interface AirportPackage {
  route: string;
  sedanPrice: number;
  innovaPrice: number;
}

export const tourPackages: TourPackage[] = [
  {
    destination: "Srisailam",
    duration: "2 days",
    sedanPrice: 10500,
    innovaPrice: 12500,
    tags: ["Temple tour", "Family trip"],
  },
  {
    destination: "Goa",
    duration: "3 days",
    sedanPrice: 19500,
    innovaPrice: 24000,
    tags: ["Beach trip"],
  },
  {
    destination: "Mumbai",
    duration: "3 days",
    sedanPrice: 19000,
    innovaPrice: 23000,
  },
  {
    destination: "Srisailam, Mahanandi, Tirupati",
    duration: "4 days",
    sedanPrice: 22000,
    innovaPrice: 27000,
    tags: ["Pilgrimage"],
  },
  {
    destination: "Tirupati",
    duration: "3 days",
    sedanPrice: 19000,
    innovaPrice: 24500,
    tags: ["Darshan trip"],
  },
  {
    destination: "Shirdi, Nashik, Trimbakeshwar",
    duration: "4 days",
    sedanPrice: 20000,
    innovaPrice: 24500,
    tags: ["Pilgrimage"],
  },
  {
    destination: "Rahmatabad",
    duration: "3 days",
    sedanPrice: 18600,
    innovaPrice: 21000,
  },
  {
    destination: "Tuljapur",
    duration: "24 hours",
    sedanPrice: 5500,
    innovaPrice: 8000,
    tags: ["Quick trip"],
  },
  {
    destination: "Pandharpur, Kolhapur",
    duration: "2 days",
    sedanPrice: 14500,
    innovaPrice: 16500,
    tags: ["Pilgrimage"],
  },
  {
    destination: "Nagpur Tajuddin Baba Dargah",
    duration: "2 days",
    sedanPrice: 16000,
    innovaPrice: 18500,
    tags: ["Dargah visit"],
  },
  {
    destination: "Vijayawada",
    duration: "2 days",
    sedanPrice: 12500,
    innovaPrice: 15000,
  },
];

export const rentalPackages: RentalPackage[] = [
  {
    label: "Half day",
    distance: "4 hours / 40 km",
    sedanPrice: 1100,
    innovaPrice: 1500,
  },
  {
    label: "City day",
    distance: "8 hours / 80 km",
    sedanPrice: 1800,
    innovaPrice: 2200,
  },
  {
    label: "Full day",
    distance: "300 km",
    sedanPrice: 3600,
    innovaPrice: 4900,
  },
];

export const airportPackages: AirportPackage[] = [
  {
    route: "Zaheerabad to Hyderabad Airport drop or pickup",
    sedanPrice: 2800,
    innovaPrice: 3800,
  },
];

export function formatPackagePrice(price: number) {
  return `₹${price.toLocaleString("en-IN")}`;
}
