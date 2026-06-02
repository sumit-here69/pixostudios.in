"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-bg.gif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-6"
          >
            Your business
            <br />
            deserves a website.
            <br />
            <span className="text-accent-light">We&apos;ll handle everything.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            Custom domain. Professional design. Managed hosting.
            <br className="hidden sm:block" />
            From <strong className="text-white">₹999/month</strong>. Zero tech skills needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Get Your Website
              <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-8 text-base font-semibold text-white hover:bg-white/30 transition-colors"
            >
              <Play size={16} className="text-white" />
              See How It Works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
