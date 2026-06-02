import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-larken",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SiteWallah — Your Business Deserves a Website",
  description:
    "Get a professionally managed website for your business. Custom domain, hosting, and maintenance — all included from ₹999/month. Zero tech skills needed.",
  keywords: [
    "website builder India",
    "managed website service",
    "SMB website",
    "business website India",
    "website subscription",
  ],
  openGraph: {
    title: "SiteWallah — Your Business Deserves a Website",
    description:
      "Professionally managed websites for Indian businesses. Custom domain, hosting, maintenance — from ₹999/month.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
