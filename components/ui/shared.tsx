"use client";

import { ReactNode } from "react";

/* ─── Shared style constants (change here → changes everywhere) ─── */
const CARD_CLASSES = "bg-white rounded-[16px]";
const ACCENT_BTN_CLASSES = "inline-flex items-center justify-center h-[48px] px-7 rounded-[8px] bg-accent text-white text-[15px] font-semibold hover:bg-accent-hover transition-colors shadow-[0_0_0_1px_rgb(207,78,23),inset_0_1.4px_1px_rgba(255,255,255,0.08),0_1.4px_4px_rgba(6,6,18,0.3)]";
const TAG_PILL_CLASSES = "px-4 py-2 rounded-full border border-border text-[10px] md:text-[13px] font-medium text-secondary uppercase tracking-wider";
const NAV_ARROW_CLASSES = "w-11 h-11 rounded-full bg-white flex items-center justify-center transition-colors cursor-pointer outline-none";

export { CARD_CLASSES, TAG_PILL_CLASSES };

export function SectionHeader({
  badge,
  heading,
  subtitle,
  center = true,
  className = "",
}: {
  badge?: string;
  heading: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12 ${className}`}>
      {badge && <span className="section-badge mb-4 block">{badge}</span>}
      <h2 className="text-[38px] sm:text-[48px] font-medium leading-[1.08] tracking-[-0.02em] text-primary">
        {heading}
      </h2>
      {subtitle && (
        <p className="text-[16px] text-secondary mt-4 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function InsetPanel({
  children,
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "lg";
  className?: string;
}) {
  return (
    <div className={`${size === "lg" ? "inset-container-lg" : "inset-container"} ${className}`}>
      {children}
    </div>
  );
}

export function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`${CARD_CLASSES} ${hover ? "hover:bg-primary group transition-all duration-300" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function NavArrows({
  onPrev,
  onNext,
  className = "",
}: {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <button onClick={onPrev} className={NAV_ARROW_CLASSES} aria-label="Previous">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="10" cy="3" r="1.4" fill="#b0ada8" />
          <circle cx="7" cy="5.5" r="1.4" fill="#b0ada8" />
          <circle cx="4" cy="8" r="1.4" fill="#b0ada8" />
          <circle cx="7" cy="10.5" r="1.4" fill="#b0ada8" />
          <circle cx="10" cy="13" r="1.4" fill="#b0ada8" />
        </svg>
      </button>
      <button onClick={onNext} className={NAV_ARROW_CLASSES} aria-label="Next">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="6" cy="3" r="1.4" fill="#b0ada8" />
          <circle cx="9" cy="5.5" r="1.4" fill="#b0ada8" />
          <circle cx="12" cy="8" r="1.4" fill="#b0ada8" />
          <circle cx="9" cy="10.5" r="1.4" fill="#b0ada8" />
          <circle cx="6" cy="13" r="1.4" fill="#b0ada8" />
        </svg>
      </button>
    </div>
  );
}

export function AccentButton({
  children,
  href,
  external = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${ACCENT_BTN_CLASSES} ${className}`}
    >
      {children}
    </a>
  );
}

export function SerifAccent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`text-accent ${className}`}
      style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
    >
      {children}
    </span>
  );
}
