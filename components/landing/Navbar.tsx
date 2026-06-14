"use client";

import { useState } from "react";
import Image from "next/image";
import { STUDIO_SHORT, STUDIO_CAL } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NAV_ITEMS = [
    { label: "About us", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-white border border-[var(--border-dark)] rounded-[14px] shadow-[var(--shadow-nav)] px-5 h-[54px] gap-2">
        <a href="/" className="flex items-center gap-2.5 pr-4 border-r border-[var(--border)]">
          <Image src="/logo.png" alt="Pixo" width={26} height={26} />
          <span className="text-[17px] font-bold text-primary">{STUDIO_SHORT}</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          aria-label="Menu"
        >
          <span className={`block w-[18px] h-[1.5px] bg-primary transition-all duration-300 ${open ? "rotate-45 translate-y-[3.25px]" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-primary transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
        </button>

        <a
          href={STUDIO_CAL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 flex items-center h-[38px] px-6 rounded-[8px] bg-primary text-white text-[14px] font-semibold hover:bg-[#1a1a2e] transition-colors"
        >
          Get started
        </a>
      </div>

      {open && (
        <div className="mt-2 bg-white border border-[var(--border-dark)] rounded-[14px] shadow-[0_8px_32px_rgba(6,6,18,0.08)] p-5 animate-scale-in">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[15px] font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
