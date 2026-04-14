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
    phone: "+91 98765 43210",
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
    name: "Raju Naik",
    phone: "+91 87654 32109",
    experience: "6 years",
    languages: ["Telugu", "Hindi"],
    rating: 4.8,
    trips: 980,
    available: true,
    vehicle: "Swift Dzire",
    seater: 5,
  },
  {
    id: "d3",
    name: "Saleem Khan",
    phone: "+91 76543 21098",
    experience: "10 years",
    languages: ["Telugu", "Hindi", "Urdu", "Marathi"],
    rating: 4.9,
    trips: 1650,
    available: true,
    vehicle: "Toyota Innova",
    seater: 7,
  },
  {
    id: "d4",
    name: "Venkatesh Reddy",
    phone: "+91 65432 10987",
    experience: "5 years",
    languages: ["Telugu", "Kannada", "Hindi"],
    rating: 4.7,
    trips: 720,
    available: true,
    vehicle: "Maruti Ertiga",
    seater: 7,
  },
  {
    id: "d5",
    name: "Ibrahim Shaikh",
    phone: "+91 54321 09876",
    experience: "7 years",
    languages: ["Telugu", "Hindi", "Urdu"],
    rating: 4.8,
    trips: 1100,
    available: true,
    vehicle: "Honda Amaze",
    seater: 5,
  },
];
