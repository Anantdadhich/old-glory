import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Chatbot } from "@/components/chatbot";
import { Lexend_Deca } from "next/font/google";
import Script from "next/script";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Old Glory",
  description: "Dental Clinic",
  icons: {
    icon: "/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TL2C7VR9"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>


        <Navbar />
        <main className="pt-20">
          {children}
          <Chatbot />
        </main>
        <Footer />
      </body>
    </html>
  );
}
