import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Chatbot } from "@/components/chatbot";
import { Lexend_Deca } from "next/font/google";
import Script from "next/script";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Old Glory Dental | Expert Family & Cosmetic Dentistry",
    template: "%s | Old Glory Dental",
  },
  description:
    "Experience top-tier dental care at Old Glory Dental. We specialize in cosmetic dentistry, implants, teeth whitening, and emergency care. Book your appointment today.",
  keywords: [
    "Dental Clinic",
    "Dentist",
    "Cosmetic Dentistry",
    "Teeth Whitening",
    "Root Canal",
    "Dental Implants",
    "Emergency Dentist",
    "Family Dentistry",
    "Oral Health",
    "Old Glory Dental",
  ],
  authors: [{ name: "Old Glory Dental" }],
  creator: "Old Glory Dental",
  publisher: "Old Glory Dental",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oldglorydental.com", // Replace with your actual domain
    title: "Old Glory Dental | Expert Family & Cosmetic Dentistry",
    description:
      "Compassionate and advanced dental care for the whole family. Schedule your visit today.",
    siteName: "Old Glory Dental",
    images: [
      {
        url: "/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png",
        width: 1200,
        height: 630,
        alt: "Old Glory Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Glory Dental | Expert Family & Cosmetic Dentistry",
    description: "Compassionate and advanced dental care for the whole family.",
    images: ["/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png"],
  },
  icons: {
    icon: "/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png",
    apple: "/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png",
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
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17257652043"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17257652043');
          `}
        </Script>
        
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TL2C7VR9');
          `}
        </Script>
      </head>

      <body className={`${lexend.className} antialiased`}>
        {/* GTM noscript tag (important for non-JS users) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TL2C7VR9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {/* Added overflow-hidden to main to prevent parallax from breaking layout flow if used inside */}
        <main className="pt-20 relative min-h-screen">
          {children}
        </main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}