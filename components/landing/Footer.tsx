"use client";

import Image from "next/image";
import { STUDIO_NAME, STUDIO_SHORT, STUDIO_EMAIL, STUDIO_PHONE, STUDIO_DOMAIN } from "@/lib/constants";
import CTABanner from "./CTABanner";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <CTABanner />
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr] gap-12">
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt="Pixo" width={28} height={28} />
              <span className="text-[20px] font-bold text-primary">{STUDIO_SHORT}</span>
            </a>
            <p className="text-[16px] text-secondary leading-relaxed mb-7">
              Premium digital experiences for ambitious brands.
            </p>
            <p className="text-[16px] font-semibold text-primary mb-3">
              Updates that keep you ahead
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-[44px] px-4 rounded-[8px] border border-border text-[15px] text-primary placeholder:text-secondary/50 outline-none focus:border-accent transition-colors bg-surface"
              />
              <button className="w-[44px] h-[44px] rounded-[8px] bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors shrink-0">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold uppercase tracking-wider text-primary mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[16px] text-secondary hover:text-accent transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold uppercase tracking-wider text-primary mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`} className="text-[16px] text-secondary hover:text-accent transition-colors">{STUDIO_PHONE}</a>
              </li>
              <li>
                <a href={`mailto:${STUDIO_EMAIL}`} className="text-[16px] text-secondary hover:text-accent transition-colors">{STUDIO_EMAIL}</a>
              </li>
            </ul>

            <h4 className="text-[14px] font-semibold uppercase tracking-wider text-primary mt-7 mb-4">Follow Us On</h4>
            <div className="flex gap-3">
              {["Instagram", "LinkedIn", "X"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={platform}
                >
                  {platform === "Instagram" && (
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="1" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.3"/>
                      <circle cx="7" cy="7" r="2.5" stroke="white" strokeWidth="1.3"/>
                      <circle cx="10.5" cy="3.5" r="0.8" fill="white"/>
                    </svg>
                  )}
                  {platform === "LinkedIn" && (
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                      <path d="M3.5 5.5V10.5M5.5 10.5V7.5C5.5 6.4 6.4 5.5 7.5 5.5C8.6 5.5 9.5 6.4 9.5 7.5V10.5M9.5 10.5V7.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="3.5" cy="3.5" r="0.8" fill="white"/>
                    </svg>
                  )}
                  {platform === "X" && (
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 2.5L6 7L2.5 11.5M11.5 2.5L8 7L11.5 11.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border">
          <div className="inset-container flex flex-col sm:flex-row items-center justify-between gap-3 py-5 px-6">
            <p className="text-[15px] text-secondary">
              &copy; {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved
            </p>
            <p className="text-[15px] text-secondary">{STUDIO_DOMAIN}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
