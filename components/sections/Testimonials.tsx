"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  { name: "Ahmed Al-Thani", role: "CEO", company: "Qatar Trading Co", text: "KAA delivered a fully compliant WPS ERP system that transformed our HR operations. Their understanding of Qatar labor laws and technical expertise is unmatched in the region.", initials: "AA" },
  { name: "Sarah Johnson", role: "Operations Head", company: "GCC Logistics", text: "The workflow automation solution KAA built has saved us hundreds of manual hours monthly. Their AI-powered RPA pipelines are incredibly reliable and well-integrated.", initials: "SJ" },
  { name: "Mohammed Al-Rashid", role: "CTO", company: "Doha Medical Group", text: "From network infrastructure to cloud migration, KAA handled everything with precision. Their 24/7 support ensures our critical healthcare systems never go down.", initials: "MA" },
  { name: "Priya Menon", role: "Director", company: "Kerala Spices Export", text: "Our e-commerce platform built by KAA increased our online revenue by 300%. The design is premium and the performance is blazing fast across all markets.", initials: "PM" },
  { name: "Khalid Al-Mansour", role: "COO", company: "Qatar Construction Group", text: "The CCTV and biometric system KAA installed across our 15 construction sites is exceptional. Real-time monitoring with seamless ERP integration for attendance tracking.", initials: "KA" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-space-void">
      <div className="absolute inset-0 subtle-grid opacity-8 pointer-events-none" />

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-cyan">Testimonials</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
            </div>
            <h2 className="font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              What Our <span className="gradient-text-neon">Clients Say</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Desktop: show 3 cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-10">
          {testimonials.slice(0, 3).map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="holo-card-static p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-neon-cyan text-neon-cyan" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neon-cyan/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-xs font-display font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-display font-bold text-white">{t.name}</div>
                    <div className="text-xs font-mono text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Show remaining 2 */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {testimonials.slice(3).map((t, i) => (
            <ScrollReveal key={t.name} delay={(i + 3) * 0.1}>
              <div className="holo-card-static p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-neon-cyan text-neon-cyan" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neon-cyan/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-xs font-display font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-display font-bold text-white">{t.name}</div>
                    <div className="text-xs font-mono text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: auto-sliding single card */}
        <div className="lg:hidden relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="holo-card-static p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-neon-cyan text-neon-cyan" />
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">&ldquo;{testimonials[active].text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-neon-cyan/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-xs font-display font-bold text-white">
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="text-sm font-display font-bold text-white">{testimonials[active].name}</div>
                  <div className="text-xs font-mono text-slate-500">{testimonials[active].role}, {testimonials[active].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: active === i ? "#00F5FF" : "rgba(0,245,255,0.15)",
                  boxShadow: active === i ? "0 0 8px #00F5FF" : "none"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
