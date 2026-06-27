export interface Driver {
  id: string;
  name: string;
  phone: string;
  experience: string;
  languages: string[];
  rating: number;
  trips: number;
  available: boolean;
  vehicle: string;
  seater: 5 | 7;
}

export const drivers: Driver[] = [
  {
    id: "d1",
    name: "Mohammed Ayaan",
    phone: "+91 90106 79036",
    experience: "8 years",
    languages: ["Telugu", "Hindi", "Urdu"],
    rating: 4.9,
    trips: 1240,
    available: true,
    vehicle: "Toyota Innova Crysta",
    seater: 7,
  },
  {
    id: "d2",
    name: "Younus Ahmed",
    phone: "+91 95337 70202",
    experience: "5 years",
    languages: ["Telugu", "Hindi", "English"],
    rating: 4.7,
    trips: 980,
    available: false,
    vehicle: "5 Seater, 7 Seater",
    seater: 5,
  },
];
