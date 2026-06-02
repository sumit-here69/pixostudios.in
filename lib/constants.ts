import {
  Globe,
  Shield,
  Smartphone,
  MessageCircle,
  MapPin,
  Search,
  FileText,
  BarChart3,
  Server,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; description: string; size: "lg" | "sm" };

export const FEATURES: Feature[] = [
  { icon: Globe, title: "Custom Domain", description: "Your business name as your website address — yourbusiness.com. No subdomains, no compromise.", size: "lg" },
  { icon: Shield, title: "SSL Security", description: "HTTPS enabled by default. Your visitors' data is always protected.", size: "sm" },
  { icon: Smartphone, title: "Mobile Responsive", description: "Looks perfect on every device — phone, tablet, or desktop.", size: "sm" },
  { icon: MessageCircle, title: "WhatsApp Integration", description: "One-tap WhatsApp button so customers can reach you instantly. The #1 way Indian customers connect.", size: "lg" },
  { icon: MapPin, title: "Google Maps", description: "Your location embedded on your website. Customers find you easily.", size: "sm" },
  { icon: Search, title: "SEO Optimized", description: "Built to rank on Google. Show up when people search for your services.", size: "sm" },
  { icon: FileText, title: "Contact Forms", description: "Capture leads automatically. Every inquiry goes straight to your phone.", size: "sm" },
  { icon: BarChart3, title: "Monthly Analytics", description: "Know how many people visit, call, and contact you every month.", size: "sm" },
  { icon: Server, title: "Managed Hosting", description: "We handle all the technical stuff. Your site is always fast and online.", size: "sm" },
  { icon: Headphones, title: "Dedicated Support", description: "Real human support on WhatsApp. Not bots, not emails — real people.", size: "sm" },
];

export const CATEGORIES: { name: string; tagline: string; from: string; image: string }[] = [
  { name: "Clinics & Doctors", tagline: "Book appointments online", from: "₹999", image: "/images/templates/clinic.png" },
  { name: "Restaurants & Cafes", tagline: "Menus & reservations", from: "₹499", image: "/images/templates/restaurant.png" },
  { name: "Coaching Centers", tagline: "Courses & admissions", from: "₹999", image: "/images/templates/coaching.png" },
  { name: "Fashion & Clothing", tagline: "Shop the collection", from: "₹1,999", image: "/images/templates/fashion.png" },
  { name: "Gym & Fitness", tagline: "Train with the best", from: "₹999", image: "/images/templates/fitness.png" },
  { name: "Real Estate", tagline: "Browse properties", from: "₹999", image: "/images/templates/realestate.png" },
  { name: "Lawyers & CA", tagline: "Professional services", from: "₹999", image: "/images/templates/legal.png" },
  { name: "Events & Weddings", tagline: "Plan your occasion", from: "₹999", image: "/images/templates/events.png" },
  { name: "Salons & Beauty", tagline: "Book your session", from: "₹499", image: "/images/templates/salon.png" },
  { name: "E-Commerce & D2C", tagline: "Your online store", from: "₹1,999", image: "/images/templates/ecommerce.png" },
];

export type PricingTier = {
  name: string;
  price: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: 499,
    annualPrice: 4999,
    description: "Perfect for local businesses that need a simple online presence.",
    features: [
      "1–3 page website",
      "Custom domain (.com)",
      "Mobile responsive",
      "WhatsApp chat button",
      "Google Maps embed",
      "Contact form",
      "Basic SEO setup",
      "SSL certificate",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: 999,
    annualPrice: 9999,
    description: "For businesses that want to grow their online presence.",
    features: [
      "Up to 8 pages",
      "Everything in Starter",
      "Appointment booking",
      "Photo & video gallery",
      "Team profiles section",
      "Testimonials & reviews",
      "Blog / news section",
      "Monthly analytics report",
      "2 content updates/month",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Commerce",
    price: 1999,
    annualPrice: 19999,
    description: "Full online store — products, payments, orders, everything.",
    features: [
      "Unlimited products",
      "Everything in Professional",
      "Shopping cart & checkout",
      "Razorpay / UPI payments",
      "Order & inventory management",
      "Abandoned cart recovery",
      "Customer accounts & reviews",
      "GST invoice generation",
      "Priority support",
    ],
    cta: "Launch Store",
  },
];

export const COMPARISON = {
  headers: ["", "SiteWallah", "Web Agency", "DIY Builders"],
  rows: [
    { label: "Monthly Cost", values: ["₹999/mo", "₹30,000+ one-time", "₹300–₹2,000/mo"] },
    { label: "Setup by Client", values: ["None — we do it", "None — they do it", "You build it yourself"] },
    { label: "Custom Domain", values: ["Included", "Extra cost", "Extra cost"] },
    { label: "Ongoing Maintenance", values: ["Included", "₹5,000–₹10,000/year", "You manage it"] },
    { label: "Support", values: ["WhatsApp — real humans", "Email (slow)", "Email / chatbot"] },
    { label: "Site Updates", values: ["Included monthly", "₹500–₹2,000 per change", "Do it yourself"] },
    { label: "Mobile Optimized", values: ["Always", "If they remember", "Depends on template"] },
  ],
};

export const TESTIMONIALS = [
  {
    quote: "I was paying ₹35,000 to agencies every 2 years and my site was always outdated. Now for ₹999/month, it's always fresh and my patients book appointments directly.",
    name: "Dr. Rakesh Sharma",
    role: "Dental Clinic Owner",
    city: "Jaipur",
  },
  {
    quote: "Maine socha tha website banana bahut mushkil hoga. These guys did everything — domain, design, everything. I just pay monthly like rent. Super easy.",
    name: "Priya Mehta",
    role: "Boutique Owner",
    city: "Indore",
  },
  {
    quote: "My coaching center's admissions went up 40% after we got a proper website. Parents search online now — if you're not there, you don't exist.",
    name: "Ankit Verma",
    role: "IIT Coaching Center",
    city: "Lucknow",
  },
];

export const FAQ = [
  {
    q: "What exactly do I get for the monthly fee?",
    a: "A fully designed and managed website on your own custom domain (like yourbusiness.com). This includes hosting, SSL security, maintenance, updates, and dedicated support. You don't need to worry about any technical stuff — we handle everything.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "Absolutely not. You tell us about your business, share your content (text, photos, logo), and we build everything. You never need to touch any code, server, or technical tool.",
  },
  {
    q: "What's the setup fee for?",
    a: "The one-time setup fee covers your domain name registration (yourbusiness.com) and the initial customization of your website with your content. Think of it as the 'security deposit' — you only pay it once.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. You can cancel your subscription anytime. If you're on a monthly plan, your site stays active until the end of the billing period.",
  },
  {
    q: "How long does it take to get my website live?",
    a: "For Starter and Professional plans: 2-3 business days. For E-Commerce plans: 5-7 business days. We work fast because your templates are pre-built — we just customize them with your content.",
  },
  {
    q: "What if I already have a domain name?",
    a: "Great! We can connect your existing domain to your new website. The setup fee will be reduced since we don't need to register a new domain for you.",
  },
  {
    q: "How is this different from Wix or WordPress?",
    a: "With Wix or WordPress, YOU have to build, design, and maintain your website yourself. With us, we do ALL of that for you. You just pay monthly and focus on your business. Think of it as hiring a web team for the price of your daily chai.",
  },
  {
    q: "What about e-commerce? Can I sell products?",
    a: "Yes! Our E-Commerce plans include full product catalog, shopping cart, Razorpay/UPI payment integration, order management, and even COD support. Everything you need to sell online.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Every website we build is mobile-responsive by default. Over 80% of Indian internet users browse on mobile — your website will look perfect on every screen size.",
  },
  {
    q: "Do you provide an email address with my domain?",
    a: "Yes, we can set up a professional email (like info@yourbusiness.com) as part of your plan. Basic email forwarding is included free.",
  },
];

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const STEPS = [
  {
    number: "01",
    title: "Tell us about your business",
    description: "Share your business details, photos, and what you want on your website. A quick WhatsApp call is all it takes.",
  },
  {
    number: "02",
    title: "We design & build your site",
    description: "Our team picks the perfect template for your industry and customizes it with your branding and content.",
  },
  {
    number: "03",
    title: "Go live on your own domain",
    description: "Your website goes live on yourbusiness.com. We handle hosting, security, and maintenance — you focus on your business.",
  },
];
