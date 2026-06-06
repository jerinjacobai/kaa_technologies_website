"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlitchText from "@/components/effects/GlitchText";
import NeonBorder from "@/components/effects/NeonBorder";

export default function CTA() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta" className="relative py-24 overflow-hidden bg-space-void">
      <div className="perspective-grid" />

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <NeonBorder borderRadius="2.5rem">
            <div className="relative overflow-hidden p-8 sm:p-16 text-center scan-lines">
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta/8 to-neon-purple/8" />
              <div className="absolute inset-0 subtle-grid opacity-15 mix-blend-overlay" />

              {/* Glowing orbs */}
              <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-neon-magenta/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-neon-purple/20 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold mb-8 uppercase tracking-widest bg-neon-cyan/[0.04] border border-neon-cyan/10 text-neon-cyan">
                  <Sparkles size={14} className="animate-pulse" />
                  Free Consultation Available
                </div>

                <h2 className="font-display font-bold leading-tight mb-6 text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                  Ready to Transform Your <br />
                  <GlitchText className="gradient-text-neon" color="inherit">
                    Business Digitally?
                  </GlitchText>
                </h2>

                <p className="text-base md:text-lg mb-10 max-w-xl mx-auto text-slate-400">
                  Let&apos;s discuss your vision. Our expert team is ready to deliver innovative IT solutions tailored to your business needs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => scrollTo("#contact")} id="cta-start-consultation" className="btn-neon">
                    <span>Start Consultation</span>
                    <ArrowRight size={16} />
                  </button>
                  <button onClick={() => scrollTo("#services")} className="btn-outline">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </NeonBorder>
        </ScrollReveal>
      </div>
    </section>
  );
}
