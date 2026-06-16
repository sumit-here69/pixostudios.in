import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { JsonLd } from "@/components/JsonLd";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pixostudios.in"),
  title: {
    default:
      "Pixo Studios — Premium Website Design & Development Studio India",
    template: "%s | Pixo Studios",
  },
  description:
    "Pixo Studios is a premium design and development studio in India. We build high-converting websites, brand identities, e-commerce stores, and AI-powered digital products for ambitious businesses. Fast delivery, transparent pricing.",
  keywords: [
    "Pixo Studios",
    "design studio India",
    "web design agency India",
    "website development India",
    "brand identity design",
    "UI UX design studio",
    "premium design studio",
    "landing page design India",
    "e-commerce website India",
    "website designer Sonipat",
    "affordable web design India",
    "AI web design agency",
    "Next.js development India",
    "startup website design",
    "D2C brand design India",
  ],
  authors: [{ name: "Pixo Studios", url: "https://pixostudios.in" }],
  creator: "Pixo Studios",
  publisher: "Pixo Studios",
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
  alternates: {
    canonical: "https://pixostudios.in",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pixostudios.in",
    siteName: "Pixo Studios",
    title: "Pixo Studios — Premium Website Design & Development Studio India",
    description:
      "We design brands that move people. Premium websites, brand identities, and AI-powered digital products. Based in India, working worldwide. Starting ₹25,000.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixo Studios — Premium Design & Development Studio India",
    description:
      "We design brands that move people. Premium websites, brand identities, and AI-powered digital products. Fast delivery, transparent pricing.",
    images: ["/opengraph-image"],
    creator: "@pixostudios",
  },
  category: "Design & Development",
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
