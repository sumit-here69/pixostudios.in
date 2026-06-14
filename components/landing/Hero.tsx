"use client";

import { STUDIO_CAL } from "@/lib/constants";
import { SerifAccent, AccentButton } from "@/components/ui/shared";

function FloatingIcon({ children, className, delay, duration }: { children: React.ReactNode; className: string; delay: string; duration: number }) {
  return (
    <div
      className={`absolute floating-card hidden md:block ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden concentric-bg">
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-8 text-center">
        <div className="mb-8 animate-fade-in-up">
          <span className="section-badge text-[13px]">Digital Agency</span>
        </div>

        <h1
          className="text-[48px] sm:text-[62px] lg:text-[76px] font-bold leading-[1.04] tracking-[-0.03em] text-primary mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          We design brands
          <br />
          that move <SerifAccent>people</SerifAccent>
        </h1>

        <p
          className="text-[16px] sm:text-[18px] text-secondary max-w-lg mx-auto mb-10 leading-[1.7] animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          We combine design, development, and AI to help ambitious
          businesses stand out and grow. Premium digital experiences
          without the agency markup.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <AccentButton href={STUDIO_CAL} external>
            Discuss your ideas
          </AccentButton>
          <a
            href="#services"
            className="inline-flex h-[48px] items-center px-7 rounded-[8px] border border-primary text-primary text-[15px] font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View services
          </a>
        </div>
      </div>

      <FloatingIcon className="top-[16%] left-[7%] w-[46px]" delay="0s" duration={6}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M17.5 5L25 12.5L12.5 25H5V17.5L17.5 5Z" stroke="#060612" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 8.5L21.5 16" stroke="#ff6321" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </FloatingIcon>

      <FloatingIcon className="top-[13%] right-[8%] w-[46px]" delay="1s" duration={7}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M8 22C5.79 22 4 20.21 4 18C4 16.14 5.28 14.59 7.01 14.14C7 14.09 7 14.05 7 14C7 11.24 9.24 9 12 9C14.05 9 15.81 10.23 16.58 12.01C17.03 11.99 17.49 12.04 17.94 12.16C20.26 12.76 21.86 14.87 22 17.12C24.22 17.57 26 19.47 26 22" stroke="#060612" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V17M12 17L9.5 19.5M12 17L14.5 19.5" stroke="#ff6321" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </FloatingIcon>

      <FloatingIcon className="top-[52%] left-[5%] w-[42px] rotate-[-8deg]" delay="2s" duration={8}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="4" y="4" width="9" height="9" rx="2" fill="#EEECEA"/>
          <rect x="17" y="4" width="9" height="9" rx="2" stroke="#060612" strokeWidth="1.5" fill="none"/>
          <rect x="4" y="17" width="9" height="9" rx="2" stroke="#060612" strokeWidth="1.5" fill="none"/>
          <rect x="17" y="17" width="9" height="9" rx="2" stroke="#ff6321" strokeWidth="1.5" fill="none"/>
        </svg>
      </FloatingIcon>

      <FloatingIcon className="top-[58%] right-[6%] w-[42px] rotate-[15deg]" delay="0.5s" duration={5}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/framer/0jM8xQ2h55BxSzDz0rvGSUdPwf0.svg" alt="" className="w-full h-auto" />
      </FloatingIcon>

      <FloatingIcon className="bottom-[24%] left-[11%] w-[42px] rotate-[6deg]" delay="1.5s" duration={7}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/framer/qsVeJXLJFoOUwqMF9e0uVtEPY4.svg" alt="" className="w-full h-auto" />
      </FloatingIcon>

      <FloatingIcon className="bottom-[20%] right-[9%] w-[42px] rotate-[-10deg]" delay="3s" duration={6}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/framer/rbOQpR61wYjELafaaI6nXqAdwc.svg" alt="" className="w-full h-auto" />
      </FloatingIcon>

      <FloatingIcon className="top-[30%] left-[18%] w-[38px] rotate-[10deg]" delay="2.5s" duration={9}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z" stroke="#060612" strokeWidth="1.5"/>
          <path d="M12.2 4.5H15.8L17 7H11L12.2 4.5Z" stroke="#ff6321" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M15.8 23.5H12.2L11 21H17L15.8 23.5Z" stroke="#ff6321" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M4.5 15.8V12.2L7 11V17L4.5 15.8Z" stroke="#EEECEA" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M23.5 12.2V15.8L21 17V11L23.5 12.2Z" stroke="#EEECEA" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </FloatingIcon>

      <FloatingIcon className="bottom-[30%] right-[18%] w-[38px] rotate-[-6deg]" delay="1.8s" duration={8}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 3L3 9L14 15L25 9L14 3Z" stroke="#060612" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M3 14L14 20L25 14" stroke="#EEECEA" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M3 19L14 25L25 19" stroke="#ff6321" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </FloatingIcon>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pb-6 text-center mt-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <p className="text-[13px] font-semibold tracking-[0.18em] text-secondary uppercase mb-6">
          Trusted by ambitious brands
        </p>
        <div className="flex items-center justify-center gap-10 sm:gap-14 opacity-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/framer/2PB9oitZSlqqMV0SLwcGIcMsE3I.svg" alt="Nexter" className="h-[18px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/framer/BeZ80LoG89Ko1dOnja9FgaAwF4.svg" alt="Oslo" className="h-[18px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/framer/XtbcuAyPb9O6snG40Sl8xTjSng.svg" alt="XOAME" className="h-[18px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/framer/faxb3V2g9OlQEebiIquNWGSuoA.svg" alt="next" className="h-[18px]" />
        </div>
      </div>

    </section>
  );
}
