import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pixo Studios — Premium Design & Development",
    short_name: "Pixo Studios",
    description:
      "Premium design and development studio in India. Websites, brand identities, e-commerce, and AI-powered digital products.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f5",
    theme_color: "#f7f6f5",
    orientation: "portrait",
    categories: ["business", "design", "productivity"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
