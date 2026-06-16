import {
  STUDIO_NAME,
  STUDIO_EMAIL,
  STUDIO_PHONE,
  STUDIO_DOMAIN,
  STUDIO_CAL,
  STUDIO_LINKEDIN,
  STUDIO_INSTAGRAM,
  SERVICES,
  FAQ_DATA,
} from "@/lib/constants";

const SITE_URL = `https://${STUDIO_DOMAIN}`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: STUDIO_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  email: STUDIO_EMAIL,
  telephone: STUDIO_PHONE,
  sameAs: [STUDIO_LINKEDIN, STUDIO_INSTAGRAM],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: STUDIO_PHONE,
    contactType: "customer service",
    email: STUDIO_EMAIL,
    availableLanguage: ["English", "Hindi"],
    areaServed: ["IN", "US", "GB", "AE"],
  },
  foundingDate: "2024",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 2, maxValue: 10 },
  slogan: "We design brands that move people",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: STUDIO_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  description:
    "Premium design and development studio in India. Websites, brand identities, e-commerce, and AI-powered digital products.",
  potentialAction: {
    "@type": "ReadAction",
    target: SITE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: STUDIO_NAME,
  url: SITE_URL,
  telephone: STUDIO_PHONE,
  email: STUDIO_EMAIL,
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sonipat",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.9931",
    longitude: "77.0151",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
  },
  sameAs: [STUDIO_LINKEDIN, STUDIO_INSTAGRAM],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "54",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Design & Development Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "India" },
        serviceType: "Web Design and Development",
      },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Pixo Studios — Premium Website Design & Development Studio India",
  description:
    "Pixo Studios is a premium design and development studio in India. Websites, brand identities, e-commerce stores, and AI-powered digital products.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  },
};

const serviceSchemas = SERVICES.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: STUDIO_NAME,
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: "Web Design and Development",
  url: `${SITE_URL}/#services`,
  potentialAction: {
    "@type": "OrderAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: STUDIO_CAL,
      actionPlatform: "https://schema.org/DesktopWebPlatform",
    },
  },
}));

export function JsonLd() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    faqSchema,
    webPageSchema,
    ...serviceSchemas,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
