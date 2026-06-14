"use client";

import { STUDIO_CAL } from "@/lib/constants";
import { AccentButton } from "@/components/ui/shared";

const ICON_CARD: React.CSSProperties = {
  background: "white",
  borderRadius: 8,
  padding: 6,
  boxShadow: "0px 2px 4px rgba(6,6,18,0.05), 0px 14px 20px rgba(6,6,18,0.05)",
  width: 42,
  height: 42,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ORBIT_ICONS = [
  "/framer/qsVeJXLJFoOUwqMF9e0uVtEPY4.svg",
  "/framer/0jM8xQ2h55BxSzDz0rvGSUdPwf0.svg",
  "/framer/kGLOJ4VYZIuCXPUt8QxhJ8HUX64.svg",
  "/framer/yvrQDjDijB6VogT8rNsLaCSUnc.svg",
  "/framer/rbOQpR61wYjELafaaI6nXqAdwc.svg",
];

function OrbitIcon({
  ring,
  startAngle,
  duration,
  icon,
  reverse,
}: {
  ring: "inner" | "outer";
  startAngle: number;
  duration: number;
  icon: string;
  reverse?: boolean;
}) {
  const delay = -(startAngle / 360) * duration;
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -21,
        marginLeft: -21,
        animation: `orbit-${ring} ${duration}s linear infinite${reverse ? " reverse" : ""}`,
        animationDelay: `${delay}s`,
      }}
    >
      <div style={ICON_CARD}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" style={{ width: 26, height: 26, objectFit: "contain" }} />
      </div>
    </div>
  );
}

function OrbitSystem({
  centerX,
  centerY,
  innerR,
  outerR,
  innerDuration,
  outerDuration,
  items,
  reverse,
}: {
  centerX: string;
  centerY: string;
  innerR: number;
  outerR: number;
  innerDuration: number;
  outerDuration: number;
  items: { ring: "inner" | "outer"; angle: number; icon: string }[];
  reverse?: boolean;
}) {
  return (
    <div
      className="absolute hidden md:block pointer-events-none"
      style={{ left: centerX, top: centerY, width: 0, height: 0, zIndex: 1 }}
    >
      {[innerR, outerR].map((r) => (
        <div
          key={r}
          className="absolute rounded-full"
          style={{
            width: r * 2,
            height: r * 2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "9px solid rgba(200,196,192,0.25)",
          }}
        />
      ))}

      {items.map((item, i) => (
        <OrbitIcon
          key={i}
          ring={item.ring}
          startAngle={item.angle}
          duration={item.ring === "inner" ? innerDuration : outerDuration}
          icon={item.icon}
          reverse={reverse}
        />
      ))}
    </div>
  );
}

const LEFT_ITEMS = [
  { ring: "inner" as const, angle: 0, icon: ORBIT_ICONS[0] },
  { ring: "inner" as const, angle: 90, icon: ORBIT_ICONS[1] },
  { ring: "inner" as const, angle: 180, icon: ORBIT_ICONS[2] },
  { ring: "inner" as const, angle: 270, icon: ORBIT_ICONS[3] },
  { ring: "outer" as const, angle: 45, icon: ORBIT_ICONS[4] },
  { ring: "outer" as const, angle: 135, icon: ORBIT_ICONS[0] },
  { ring: "outer" as const, angle: 225, icon: ORBIT_ICONS[2] },
  { ring: "outer" as const, angle: 315, icon: ORBIT_ICONS[1] },
];

const RIGHT_ITEMS = [
  { ring: "inner" as const, angle: 30, icon: ORBIT_ICONS[3] },
  { ring: "inner" as const, angle: 120, icon: ORBIT_ICONS[4] },
  { ring: "inner" as const, angle: 210, icon: ORBIT_ICONS[0] },
  { ring: "inner" as const, angle: 300, icon: ORBIT_ICONS[2] },
  { ring: "outer" as const, angle: 75, icon: ORBIT_ICONS[1] },
  { ring: "outer" as const, angle: 165, icon: ORBIT_ICONS[3] },
  { ring: "outer" as const, angle: 255, icon: ORBIT_ICONS[4] },
  { ring: "outer" as const, angle: 345, icon: ORBIT_ICONS[0] },
];

const AI_TOOLS = ["Claude", "Cursor", "Midjourney", "Figma", "Framer"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden concentric-bg">
      <style>{`
        @keyframes orbit-inner {
          from { transform: rotate(0deg) translateY(-300px) rotate(0deg); }
          to   { transform: rotate(360deg) translateY(-300px) rotate(-360deg); }
        }
        @keyframes orbit-outer {
          from { transform: rotate(0deg) translateY(-450px) rotate(0deg); }
          to   { transform: rotate(360deg) translateY(-450px) rotate(-360deg); }
        }
      `}</style>

      <OrbitSystem
        centerX="-8%"
        centerY="100%"
        innerR={300}
        outerR={450}
        innerDuration={50}
        outerDuration={70}
        items={LEFT_ITEMS}
      />
      <OrbitSystem
        centerX="108%"
        centerY="0%"
        innerR={300}
        outerR={450}
        innerDuration={55}
        outerDuration={75}
        items={RIGHT_ITEMS}
        reverse
      />

      <div className="relative z-20 mx-auto max-w-4xl px-6 pt-32 pb-8 text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-border-dark px-5 py-2.5">
            <span className="section-badge text-[13px]">Digital Agency</span>
          </div>
        </div>

        <h1
          className="text-[48px] sm:text-[62px] lg:text-[76px] font-medium leading-[1.04] tracking-[-0.03em] text-primary mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s", fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif" }}
        >
          We design brands
          <br />
          that move <span className="text-accent">people</span>
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
            className="inline-flex h-[48px] items-center px-7 rounded-[8px] bg-primary text-white text-[15px] font-semibold hover:bg-primary/90 transition-colors"
          >
            View services
          </a>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-3xl mx-auto px-6 pb-6 text-center mt-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <p className="text-[13px] font-semibold tracking-[0.18em] text-secondary uppercase mb-6">
          Built at the speed of AI
        </p>
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14 opacity-40 flex-wrap">
          {AI_TOOLS.map((name) => (
            <span key={name} className="text-[13px] sm:text-[15px] font-semibold tracking-wide text-primary">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
