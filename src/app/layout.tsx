import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://ayaantravels.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Ayaan Travels — Best Cab Service in Zaheerabad, Telangana | Airport Transfers, Hyderabad, Shamshabad",
    template: "%s | Ayaan Travels Zaheerabad",
  },
  description:
    "Ayaan Travels is the most trusted cab and taxi service in Zaheerabad, Telangana. Book airport transfers to Shamshabad (Rajiv Gandhi International Airport), long drives to Hyderabad, Miyapur, HITEC City, Patancheru, Medak, Sangareddy, Nizamabad, Pune, Mumbai. Reliable, affordable, 24/7 available.",
  keywords: [
    "cab service Zaheerabad",
    "taxi Zaheerabad Telangana",
    "Zaheerabad to Hyderabad cab",
    "Zaheerabad to Shamshabad airport",
    "airport transfer Zaheerabad",
    "Rajiv Gandhi International Airport cab",
    "Hyderabad airport taxi",
    "cab service Sangareddy",
    "Miyapur cab",
    "HITEC City cab Zaheerabad",
    "Patancheru taxi",
    "Medak cab service",
    "Narayankhed cab",
    "Andole taxi",
    "Zaheerabad to Pune cab",
    "Zaheerabad to Mumbai taxi",
    "long drive Telangana",
    "office commute Zaheerabad Hyderabad",
    "pickup drop Zaheerabad",
    "Ayaan Travels",
    "best cab Zaheerabad",
    "Telangana cab service",
    "Shamshabad airport transfer",
    "Nizamabad taxi",
    "Bidar cab",
    "Aurangabad cab from Zaheerabad",
    "round trip cab Zaheerabad",
    "7 seater cab Zaheerabad",
    "Innova cab Zaheerabad",
    "cab booking Zaheerabad 24 hours",
  ],
  authors: [{ name: "Ayaan Travels" }],
  creator: "Ayaan Travels",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ayaan Travels",
    title:
      "Ayaan Travels — Best Cab Service in Zaheerabad, Telangana | Hyderabad, Shamshabad Airport",
    description:
      "Zaheerabad's most trusted cab service. Airport transfers, long drives, and daily commutes to Hyderabad, Shamshabad, Miyapur, HITEC City, Patancheru and beyond at transparent prices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayaan Travels — Cab Service Zaheerabad Telangana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayaan Travels — Best Cab Service in Zaheerabad, Telangana",
    description:
      "Airport transfers, long drives & office commutes from Zaheerabad to Hyderabad, Shamshabad, Pune and beyond.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "Ayaan Travels",
  description:
    "Trusted cab and taxi service in Zaheerabad, Telangana. Airport transfers, long drives, pickup-drop, and office commutes.",
  url: siteUrl,
  telephone: "+919876543210",
  email: "ayaantravels@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zaheerabad",
    addressLocality: "Zaheerabad",
    addressRegion: "Telangana",
    postalCode: "502220",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.6,
    longitude: 77.6,
  },
  priceRange: "₹₹",
  servesCuisine: null,
  areaServed: [
    "Zaheerabad",
    "Narayankhed",
    "Medak",
    "Sangareddy",
    "Patancheru",
    "Hyderabad",
    "Shamshabad",
    "Miyapur",
    "Nizamabad",
    "Bidar",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">{children}</body>
    </html>
  );
}
