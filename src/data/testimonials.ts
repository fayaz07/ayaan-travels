export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  trip: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Suresh Yadav",
    location: "Zaheerabad",
    rating: 5,
    text: "Took Ayaan Travels for my Shamshabad Airport drop. Driver arrived 20 minutes early, helped with luggage, and I caught my flight comfortably. Highly recommend for airport trips!",
    trip: "Zaheerabad → Shamshabad Airport",
    avatar: "SY",
  },
  {
    id: "t2",
    name: "Priya Lakshmi",
    location: "Narayankhed",
    rating: 5,
    text: "We booked for our daughter's wedding in Hyderabad. The Innova was spotless, the driver was very polite, and the entire family felt safe throughout the 3-hour journey. Will use again!",
    trip: "Narayankhed → Jubilee Hills",
    avatar: "PL",
  },
  {
    id: "t3",
    name: "Farhan Siddiqui",
    location: "Zaheerabad",
    rating: 5,
    text: "I use Ayaan Travels for my weekly office commute to HITEC City. Best rates I've found, always on time and the vehicles are clean. Mohammed bhai is very professional.",
    trip: "Weekly Zaheerabad → HITEC City",
    avatar: "FS",
  },
  {
    id: "t4",
    name: "Ramaiah Goud",
    location: "Andole",
    rating: 5,
    text: "Needed an urgent hospital trip to NIMS Hyderabad. They arranged a vehicle within 30 minutes at midnight. That kind of service is rare. God bless this team.",
    trip: "Andole → NIMS Hyderabad (Emergency)",
    avatar: "RG",
  },
  {
    id: "t5",
    name: "Aruna Desai",
    location: "Bidar",
    rating: 4,
    text: "Traveled from Bidar to Pune with family. A long journey but the driver was excellent — took rest stops, kept us hydrated with water, and the car was well maintained.",
    trip: "Bidar → Pune (Family)",
    avatar: "AD",
  },
  {
    id: "t6",
    name: "Kiran Reddy",
    location: "Medak",
    rating: 5,
    text: "Best cab service in the Zaheerabad-Medak district. Fair pricing, zero hidden charges, and they pick you up right at your door. Five stars without hesitation!",
    trip: "Medak → Hyderabad",
    avatar: "KR",
  },
];
