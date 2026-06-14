import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixo Studios — Premium Design & Development Studio",
  description:
    "We design brands that move people. Premium websites, brand identities, and digital products for ambitious businesses. Based in India, working worldwide.",
  keywords: [
    "design studio India",
    "web design agency",
    "brand identity design",
    "UI UX design studio",
    "website development India",
    "premium design studio",
  ],
  openGraph: {
    title: "Pixo Studios — Premium Design & Development Studio",
    description:
      "We design brands that move people. Premium websites, brand identities, and digital products for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
