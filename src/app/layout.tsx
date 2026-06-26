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
      "Ayaan Travels Zaheerabad | Tour Packages, Innova Rental, Airport Pickup & Drop",
    template: "%s | Ayaan Travels Zaheerabad",
  },
  description:
    "Book Ayaan Travels Zaheerabad tour packages, 4-seater sedan, 7-seater Innova, local rental packages, and Hyderabad Airport pickup or drop. Published fares for Srisailam, Tirupati, Goa, Mumbai, Shirdi, Nashik, Tuljapur, Pandharpur, Nagpur and Vijayawada.",
  keywords: [
    "cab service Zaheerabad",
    "taxi Zaheerabad Telangana",
    "Ayaan Travels Zaheerabad",
    "Zaheerabad tour packages",
    "Innova rental Zaheerabad",
    "4 seater cab Zaheerabad",
    "7 seater Innova Zaheerabad",
    "Zaheerabad to Srisailam package",
    "Zaheerabad to Tirupati package",
    "Zaheerabad to Goa package",
    "Zaheerabad to Mumbai cab package",
    "Zaheerabad to Shirdi Nashik Trimbakeshwar",
    "Zaheerabad to Tuljapur cab",
    "Zaheerabad to Pandharpur Kolhapur package",
    "Zaheerabad to Nagpur Tajuddin Baba dargah",
    "Zaheerabad to Vijayawada cab",
    "Zaheerabad to Hyderabad airport pickup",
    "Zaheerabad to Hyderabad airport drop",
    "Zaheerabad to Shamshabad airport",
    "airport transfer Zaheerabad",
    "Rajiv Gandhi International Airport cab",
    "Hyderabad airport taxi",
    "local rental package Zaheerabad",
    "Zaheerabad cab booking 24 hours",
  ],
  authors: [{ name: "Ayaan Travels" }],
  creator: "Ayaan Travels",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ayaan Travels",
    title:
      "Ayaan Travels Zaheerabad | Tour Packages, Innova Rental, Airport Pickup & Drop",
    description:
      "Published fares for Zaheerabad tour packages, local rentals, 4-seater sedan, 7-seater Innova, and Hyderabad Airport pickup or drop.",
    images: [
      {
        url: "/images/ayaan-travels-hero.png",
        width: 1200,
        height: 630,
        alt: "Ayaan Travels cab packages from Zaheerabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayaan Travels Zaheerabad Tour Packages and Innova Rental",
    description:
      "Book 4-seater sedan, 7-seater Innova, tour packages, rentals, and Hyderabad Airport pickup or drop from Zaheerabad.",
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
  "@type": "TaxiService",
  "@id": siteUrl,
  name: "Ayaan Travels",
  description:
    "Trusted cab and taxi service in Zaheerabad, Telangana. Tour packages, local rentals, Innova rental, sedan cabs, airport pickup and airport drop.",
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
  areaServed: [
    "Zaheerabad",
    "Srisailam",
    "Tirupati",
    "Goa",
    "Mumbai",
    "Shirdi",
    "Nashik",
    "Trimbakeshwar",
    "Tuljapur",
    "Pandharpur",
    "Kolhapur",
    "Nagpur",
    "Vijayawada",
    "Hyderabad Airport",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ayaan Travels cab packages",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Tour packages from Zaheerabad",
      },
      {
        "@type": "OfferCatalog",
        name: "Local rental packages",
      },
      {
        "@type": "OfferCatalog",
        name: "Hyderabad Airport pickup and drop",
      },
    ],
  },
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
