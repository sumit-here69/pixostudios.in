import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PortfolioShowcase from "@/components/landing/SocialProof";
import Comparison from "@/components/landing/Comparison";
import Services from "@/components/landing/Services";
import Portfolio from "@/components/landing/Portfolio";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Services />
        <Portfolio />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
