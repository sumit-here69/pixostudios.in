"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { STUDIO_SHORT, STUDIO_CAL } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const NAV_ITEMS = [
    { label: "About us", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav ref={navRef} className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-white rounded-[16px] shadow-[0_4px_24px_rgba(6,6,18,0.08)] px-6 h-[60px] gap-3">
        <a href="/" className="flex items-center gap-2.5 pr-5 border-r border-[var(--border)]">
          <Image src="/logo.png" alt="Pixo" width={30} height={30} />
          <span className="text-[19px] font-bold text-primary">{STUDIO_SHORT}</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-11 h-11 gap-[5px]"
          aria-label="Menu"
        >
          <span className={`block w-[20px] h-[1.5px] bg-primary transition-all duration-300 ${open ? "rotate-45 translate-y-[3.25px]" : ""}`} />
          <span className={`block w-[20px] h-[1.5px] bg-primary transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
        </button>

        <a
          href={STUDIO_CAL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 flex items-center h-[42px] px-7 rounded-[10px] bg-primary text-white text-[15px] font-semibold hover:bg-[#1a1a2e] transition-colors"
        >
          Get started
        </a>
      </div>

      {open && (
        <div className="mt-2 bg-white rounded-[16px] shadow-[0_8px_32px_rgba(6,6,18,0.1)] p-5 animate-scale-in">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[16px] font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
