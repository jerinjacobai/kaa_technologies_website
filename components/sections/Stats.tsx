"use client";
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
    <section id="stats" className="section-padding relative overflow-hidden bg-space-deep">
      <div className="perspective-grid" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,245,255,0.03) 0%, transparent 70%)" }} />

      <div className="kaa-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="relative p-6 rounded-2xl text-center overflow-hidden group holo-card-static">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: "radial-gradient(circle at center, rgba(0,245,255,0.06) 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <div className="font-display font-bold mb-1 gradient-text-neon"
                    style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm font-semibold text-white/90 mb-1">{stat.label}</p>
                  <p className="text-xs text-slate-500">{stat.sublabel}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="text-xs font-mono tracking-widest uppercase text-slate-500">
              Serving businesses across
            </p>
          </div>
          <div className="relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #0A0A1A, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #0A0A1A, transparent)" }} />

            <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
              {[...industries, ...industries, ...industries, ...industries].map((ind, i) => (
                <div
                  key={`${ind}-${i}`}
                  className="flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:text-neon-cyan hover:border-neon-cyan/30 text-slate-500 border border-neon-cyan/6 bg-neon-cyan/[0.02]"
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
