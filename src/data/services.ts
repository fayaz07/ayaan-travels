export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

export const services: Service[] = [
  {
    id: "airport-transfer",
    icon: "Plane",
    title: "Airport Transfers",
    description:
      "Reliable, on-time pickup and drop to Hyderabad Rajiv Gandhi International Airport (Shamshabad) and Begumpet Airport. Flight tracking included.",
    features: [
      "Rajiv Gandhi Intl. Airport (Shamshabad)",
      "24/7 availability",
      "Flight delay monitoring",
      "Meet & greet service",
    ],
    badge: "Most Popular",
  },
  {
    id: "long-drive",
    icon: "MapPin",
    title: "Long Distance Drives",
    description:
      "Comfortable intercity travel from Zaheerabad to Hyderabad, Pune, Mumbai, Nagpur, Aurangabad and beyond with experienced professional drivers.",
    features: [
      "Hyderabad • Pune • Mumbai",
      "Nagpur • Aurangabad • Bidar",
      "AC vehicles with ample luggage space",
      "Flexible pickup timing",
    ],
  },
  {
    id: "pickup-drop",
    icon: "ArrowLeftRight",
    title: "Pickup & Drop",
    description:
      "Safe and punctual door-to-door pickup and drop services within Zaheerabad city and nearby areas like Narayankhed, Andole, Medak, Sangareddy.",
    features: [
      "Door-to-door service",
      "On-time guarantee",
      "Affordable rates",
      "Nearby districts covered",
    ],
  },
  {
    id: "office-commute",
    icon: "Building2",
    title: "Office Commute",
    description:
      "Daily office commute packages for IT professionals and corporate employees commuting between Zaheerabad and HITEC City, Miyapur, Patancheru, and Secunderabad.",
    features: [
      "Monthly subscription plans",
      "HITEC City & Miyapur routes",
      "Corporate billing available",
      "Shared ride options",
    ],
    badge: "Best Value",
  },
  {
    id: "wedding-events",
    icon: "Star",
    title: "Wedding & Events",
    description:
      "Premium fleet for weddings, family functions, and social gatherings. Multiple vehicles available to transport guests in comfort and style.",
    features: [
      "Decorated vehicles on request",
      "Multiple vehicle fleet",
      "Outstation coverage",
      "Advance booking recommended",
    ],
  },
  {
    id: "medical-trips",
    icon: "Heart",
    title: "Medical Trips",
    description:
      "Compassionate and urgent travel for hospital visits and medical emergencies to AIIMS Hyderabad, Nizam's Institute, and other leading hospitals.",
    features: [
      "Priority booking for emergencies",
      "AIIMS & NIMS Hyderabad",
      "Comfortable seating for patients",
      "24/7 availability",
    ],
  },
];
