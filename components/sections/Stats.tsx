"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", sublabel: "Across industries worldwide" },
  { value: 50, suffix: "+", label: "Businesses Supported", sublabel: "From startups to enterprises" },
  { value: 16, suffix: "", label: "ERP Modules", sublabel: "Fully integrated & scalable" },
  { value: 98, suffix: "%", label: "Client Satisfaction", sublabel: "Rated by our partners" },
];

const industries = [
  "Healthcare", "Retail", "Manufacturing", "Logistics",
  "Education", "Finance", "Construction", "Hospitality",
];

export default function Stats() {
  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(233,30,99,0.05) 0%, transparent 70%)" }} />

      <div className="kaa-container">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div
                className="relative p-6 rounded-2xl text-center overflow-hidden group kaa-card"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: "radial-gradient(circle at center, rgba(233,30,99,0.08) 0%, transparent 70%)" }} />

                <div className="relative z-10">
                  <div
                    className="font-display font-black mb-1"
                    style={{
                      fontSize: "clamp(2.2rem, 4vw, 3rem)",
                      background: "linear-gradient(135deg, #E91E63 0%, #8A2BE2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm font-semibold text-white/90 mb-1">{stat.label}</p>
                  <p className="text-xs text-[#A1A1AA]">{stat.sublabel}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Industries marquee */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="text-xs font-medium tracking-widest uppercase text-[#A1A1AA]">
              Serving businesses across
            </p>
          </div>
          <div className="relative overflow-hidden group">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #141521, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #141521, transparent)" }} />

            <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
              {[...industries, ...industries, ...industries, ...industries].map((ind, i) => (
                <div
                  key={`${ind}-${i}`}
                  className="flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-colors hover:text-white hover:border-white/20"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#A1A1AA",
                  }}
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
