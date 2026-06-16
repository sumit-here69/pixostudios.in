"use client";

import { useState } from "react";
import Image from "next/image";
import { STUDIO_SHORT, STUDIO_EMAIL, STUDIO_PHONE, STUDIO_CAL, STUDIO_LINKEDIN, STUDIO_INSTAGRAM, STUDIO_NAME } from "@/lib/constants";
import CTABanner from "./CTABanner";

const SOCIAL_LINKS: Record<string, string> = {
  Instagram: STUDIO_INSTAGRAM,
  LinkedIn: STUDIO_LINKEDIN,
  X: STUDIO_LINKEDIN,
};

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = () => {
    if (!email) return;
    const calUrl = `${STUDIO_CAL}?email=${encodeURIComponent(email)}`;
    window.open(calUrl, "_blank", "noopener,noreferrer");
    setEmail("");
  };

  return (
    <footer className="bg-bg relative z-10">
      <CTABanner />
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr] gap-10 md:gap-12">
          {/* Logo + email signup */}
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt="Pixo" width={28} height={28} />
              <span className="text-[20px] font-bold text-primary">{STUDIO_NAME}</span>
            </a>
            <p className="text-[15px] text-secondary leading-relaxed mb-6">
              Premium digital experiences for ambitious brands.
            </p>
            <p className="text-[15px] font-semibold text-primary mb-3">
              Updates that keep you ahead
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNewsletterSubmit()}
                className="flex-1 h-[42px] px-4 rounded-[8px] border border-border text-[14px] text-primary placeholder:text-secondary/50 outline-none focus:border-accent transition-colors bg-surface"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="w-[42px] h-[42px] rounded-[8px] bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links + Get in Touch — side by side on mobile */}
          <div className="grid grid-cols-2 md:contents gap-8">
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[15px] text-secondary hover:text-accent transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-primary mb-4">Get in Touch</h4>
              <address className="not-italic space-y-2.5">
                <p>
                  <a href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`} className="text-[14px] sm:text-[15px] text-secondary hover:text-accent transition-colors">{STUDIO_PHONE}</a>
                </p>
                <p>
                  <a href={`mailto:${STUDIO_EMAIL}`} className="text-[13px] sm:text-[15px] text-secondary hover:text-accent transition-colors break-all">{STUDIO_EMAIL}</a>
                </p>
              </address>

              {/* Follow Us — inside column on desktop only */}
              <div className="hidden md:block mt-6">
                <h4 className="text-[13px] font-semibold uppercase tracking-wider text-primary mb-3">Follow Us On</h4>
                <div className="flex gap-2.5">
                  {["Instagram", "LinkedIn", "X"].map((platform) => (
                    <a
                      key={platform}
                      href={SOCIAL_LINKS[platform]}
                      target={SOCIAL_LINKS[platform] !== "#" ? "_blank" : undefined}
                      rel={SOCIAL_LINKS[platform] !== "#" ? "noopener noreferrer" : undefined}
                      className="w-11 h-11 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label={platform}
                    >
                      {platform === "Instagram" && (
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                          <rect x="1" y="1" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.3"/>
                          <circle cx="7" cy="7" r="2.5" stroke="white" strokeWidth="1.3"/>
                          <circle cx="10.5" cy="3.5" r="0.8" fill="white"/>
                        </svg>
                      )}
                      {platform === "LinkedIn" && (
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                          <path d="M3.5 5.5V10.5M5.5 10.5V7.5C5.5 6.4 6.4 5.5 7.5 5.5C8.6 5.5 9.5 6.4 9.5 7.5V10.5M9.5 10.5V7.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="3.5" cy="3.5" r="0.8" fill="white"/>
                        </svg>
                      )}
                      {platform === "X" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us — full width at bottom on mobile */}
        <div className="md:hidden mt-10 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-primary">Follow Us On</h4>
            <div className="flex gap-2.5">
              {["Instagram", "LinkedIn", "X"].map((platform) => (
                <a
                  key={platform}
                  href={SOCIAL_LINKS[platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={platform}
                >
                  {platform === "Instagram" && (
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="1" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.3"/>
                      <circle cx="7" cy="7" r="2.5" stroke="white" strokeWidth="1.3"/>
                      <circle cx="10.5" cy="3.5" r="0.8" fill="white"/>
                    </svg>
                  )}
                  {platform === "LinkedIn" && (
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                      <path d="M3.5 5.5V10.5M5.5 10.5V7.5C5.5 6.4 6.4 5.5 7.5 5.5C8.6 5.5 9.5 6.4 9.5 7.5V10.5M9.5 10.5V7.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="3.5" cy="3.5" r="0.8" fill="white"/>
                    </svg>
                  )}
                  {platform === "X" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
