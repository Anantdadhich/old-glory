import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Chatbot } from "@/components/chatbot";
import { Lexend_Deca } from "next/font/google";
import Script from "next/script";

const lexend = Lexend_Deca({ subsets: ["latin"] });


export const viewport: Viewport = {
  themeColor: "#1E4D58", 
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, 
};




export const metadata: Metadata = {
  metadataBase: new URL("https://oldglory.in"),
  title: {
    default:
      "Old Glory Orthodontics & Dental Care | Best Dentist in Mansarovar, Jaipur",
    template: "%s | Old Glory Dental Jaipur",
  },
  description:
    "Old Glory — Top-rated Dental Clinic in Mansarovar, Jaipur (★4.9). Expert care in root canals, implants, braces, smile design & more. Call +91 88757 00500 to book a free consultation.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Dentist in Mansarovar Jaipur",
    "Dental Clinic Mansarovar Jaipur",
    "Best Dentist Jaipur",
    "Best Dentist Near me",
    "Dentist Near me",
    "Dentist in Jaipur",
    "Dentist in Mansarovar",
    "Best Dental Clinic Near me",
    "Best Clinic Near me",
    "Top 5 Dental Clinic Near me ",
    "Top 5 Dental Clinic in Manasarovar",
    "Top 5 Dental Clinic in Manasarovar Jaipur",
    "Top 5 Dentist Near me",
    "Dentist near me Jaipur",
    "Root Canal Jaipur",
    "Braces Jaipur",
    "Dental Implants Jaipur",
    "Teeth Whitening Jaipur",
    "Orthodontist Jaipur",
    "Kids Dentist Jaipur",
    "Emergency Dentist Jaipur",
    "Old Glory Dental Clinic Jaipur",
  ],
  authors: [{ name: "Dr. Tanmay Sharma" }, { name: "Dr. Ridam Jain" }],
  creator: "Old Glory Dental Care",
  publisher: "Old Glory Dental Care",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://oldglory.in",
    siteName: "Old Glory Orthodontics & Dental Care",
    title:
      "Best Dental Clinic in Mansarovar, Jaipur | Painless & Affordable Dental Care",
    description:
      "Looking for a trusted dentist in Jaipur? Old Glory offers implants, braces, RCT & cosmetic dentistry by MDS experts. 1500+ Happy Patients.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Old Glory Dental Clinic Jaipur – Interior & Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Glory Dental | Family & Cosmetic Dentistry Jaipur",
    description:
      "Compassionate, advanced dental care for the whole family in Mansarovar, Jaipur.",
    images: ["/logo.png"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Mansarovar, Jaipur",
    "geo.position": "26.843865;75.766916",
    ICBM: "26.843865, 75.766916",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Old Glory Orthodontics & Dental Care",
  "image":
    "https://oldglory.in/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png",
  "url": "https://oldglory.in",
  "telephone": "+918875700500",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress":
      "124/505, Vikramaditya Marg (80 ft road), Main Gate, opposite Dwarika Das Residency, Sector 12, Mansarovar",
    "addressLocality": "Mansarovar, Jaipur",
    "addressRegion": "RJ",
    "postalCode": "302020",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.843865,
    "longitude": 75.766916,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "10:30am - 2.00pm , 5.30pm - 8pm ",
      "closes": "80:00",
    },
  ],
  "sameAs": [
    "https://www.instagram.com/oldgloryorthodontics/",
    "https://www.facebook.com/oldgloryorthodontics/",
  ],
  "department": [
    {
      "@type": "MedicalSpecialty",
      "name": "Orthodontics",
      "description": "Braces and Aligners",
    },
    {
      "@type": "MedicalSpecialty",
      "name": "Endodontics",
      "description": "Root Canal Treatment",
    },
    {
      "@type": "MedicalSpecialty",
      "name": "Implantology",
      "description": "Dental Implants",
    },
  ],
  "areaServed": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mansarovar, Jaipur",
      "addressRegion": "RJ",
      "addressCountry": "IN",
    },
  },
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  <meta 
    name="google-site-verification" 
    content="uWA2tIIvONYebH_aQvsnQTDTR0o57N1hdnjv-5IAl5Y" 
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />

  {/* gtag.js */}
  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-WZ5XWS7QNK"
  />

  <Script id="gtag-init">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WZ5XWS7QNK');
    `}
  </Script>

  {/* Google Tag Manager */}
  <Script id="gtm-head">
    {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TNPG7VSJ');
    `}
  </Script>
</head>


      <body className={`${lexend.className} antialiased selection:bg-[#1E4D58] selection:text-white`}>
       
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TL2C7VR9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        
      
        <main className="pt-20 relative min-h-screen">
          {children}
        </main>

        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}