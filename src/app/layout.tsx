import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "DentCare Pro — Trusted Dental Care For Every Generation",
  description:
    "Professional dental care with 15+ years experience. Book your appointment today for teeth whitening, implants, orthodontics, cosmetic dentistry and more. Serving Karachi, Pakistan.",
  keywords: [
    "dental care", "dentist", "teeth whitening", "dental implants",
    "orthodontics", "cosmetic dentistry", "root canal", "DentCare Pro",
    "Karachi dentist", "best dental clinic"
  ],
  authors: [{ name: "DentCare Pro" }],
  openGraph: {
    title: "DentCare Pro — Trusted Dental Care",
    description: "Professional dental care with 15+ years experience. Book your appointment today.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦷</text></svg>"
        />
      </head>

      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}