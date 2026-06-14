"use client";

import { AccentButton } from "@/components/ui/shared";

export default function PortfolioShowcase() {
  const images = [
    { src: "/framer/sROpSj0sRvaraaYJcrRCNYwA.jpg", className: "top-[2%] left-[2%] w-[240px]", z: 1 },
    { src: "/framer/W91fau84XEOKnjWCMU3WOYT87U.jpg", className: "top-[4%] left-[22%] w-[260px]", z: 2 },
    { src: "/framer/ZZWJYuFdl6TIAqeEe4wguHLjc0.jpg", className: "top-[2%] right-[22%] w-[240px]", z: 2 },
    { src: "/framer/oaOued9bv86tiTgZzXHGX3xqsHI.jpg", className: "top-[4%] right-[2%] w-[250px]", z: 1 },
    { src: "/framer/tvF7vxDX0bQ55up1RnjVopQfQU.jpg", className: "bottom-[6%] left-[2%] w-[230px]", z: 1 },
    { src: "/framer/u9AHjIxA9Mt15baeQuLIici3pFw.jpg", className: "bottom-[3%] left-[20%] w-[250px]", z: 2 },
    { src: "/framer/Zw77iifrqKsPMzOp8dhpEyaNlE.jpg", className: "bottom-[4%] right-[20%] w-[260px]", z: 2 },
    { src: "/framer/bphS41hVtvFCNiuHkZkxk8imJk.jpg", className: "bottom-[2%] right-[2%] w-[240px]", z: 1 },
  ];

  return (
    <section className="relative py-12 overflow-hidden concentric-bg" style={{ minHeight: "680px" }}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute ${img.className} hidden sm:block rounded-[12px] overflow-hidden border border-border shadow-[0_4px_16px_rgba(6,6,18,0.08)]`}
          style={{ zIndex: img.z }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt="" className="w-full h-auto" />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center" style={{ minHeight: "580px" }}>
        <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-white border border-border shadow-[0_12px_48px_rgba(6,6,18,0.08)] flex flex-col items-center justify-center text-center px-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="w-10 h-10 mb-4" />
          <h3 className="text-[36px] sm:text-[42px] font-bold text-primary leading-tight mb-5">
            100+ Premium
            <br />
            Designs
          </h3>
          <AccentButton href="#projects" className="h-[44px] px-6 text-[14px]">
            Explore all Projects
          </AccentButton>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-10 pb-8 opacity-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/framer/dISQgFQjFF7TSNeukltrjiE.svg" alt="" className="h-[16px]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/framer/BeZ80LoG89Ko1dOnja9FgaAwF4.svg" alt="" className="h-[16px]" />
      </div>
    </section>
  );
}
