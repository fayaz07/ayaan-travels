import { Car, Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Airport Transfers", href: "#services" },
  { label: "Long Distance Drives", href: "#services" },
  { label: "Office Commute", href: "#services" },
  { label: "Book a Ride", href: "#booking" },
  { label: "Our Drivers", href: "#drivers" },
];

const serviceAreas = [
  "Zaheerabad",
  "Hyderabad",
  "Shamshabad Airport",
  "Miyapur",
  "HITEC City",
  "Patancheru",
  "Medak",
  "Sangareddy",
  "Nizamabad",
  "Narayankhed",
  "Bidar",
  "Andole",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block">
                  Ayaan Travels
                </span>
                <span className="text-amber-400 text-xs leading-none">Zaheerabad, Telangana</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Your trusted travel partner in Zaheerabad, Telangana. Professional cab services for
              airport transfers, long drives, and daily commutes across Hyderabad and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Website"
                className="w-9 h-9 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Globe className="w-4 h-4 group-hover:text-slate-900 transition-colors" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <MessageCircle className="w-4 h-4 group-hover:text-slate-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-md"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+919876543210"
                    className="text-sm hover:text-white transition-colors block"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    href="tel:+918765432109"
                    className="text-sm hover:text-white transition-colors block"
                  >
                    +91 87654 32109
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <a
                  href="mailto:ayaantravels@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  ayaantravels@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  Zaheerabad, Sangareddy District,
                  <br />
                  Telangana — 502 220
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Ayaan Travels. All rights reserved. | Zaheerabad,
            Telangana
          </p>
          <p className="text-xs text-slate-600">
            Serving Zaheerabad • Hyderabad • Shamshabad • Miyapur • Patancheru • Medak • Sangareddy
          </p>
        </div>
      </div>
    </footer>
  );
}
