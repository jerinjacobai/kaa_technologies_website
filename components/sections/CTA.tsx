"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="relative py-24 overflow-hidden bg-[#0D0E17]"
    >
      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <div className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-16 text-center border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
            {/* Background of card */}
            <div className="absolute inset-0 bg-[#151B27]/80 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/10 to-[#8A2BE2]/10" />
            <div className="absolute inset-0 subtle-grid opacity-20 mix-blend-overlay" />
            
            {/* Glowing orbs inside card */}
            <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-[#E91E63]/30 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-[#8A2BE2]/30 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 uppercase tracking-widest bg-white/5 border border-white/10 text-[#E91E63]"
              >
                <Sparkles size={14} className="animate-pulse" />
                Free Consultation Available
              </motion.div>

              <h2
                className="font-display font-bold leading-tight mb-6 text-white"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                Ready to Transform Your
                <br />
                <span className="gradient-text-pink">
                  Business Digitally?
                </span>
              </h2>

              <p className="text-base md:text-lg mb-10 max-w-xl mx-auto text-[#A1A1AA]">
                Let's discuss your vision. Our expert team is ready to deliver innovative IT solutions tailored to your business needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => scrollTo("#contact")}
                  id="cta-start-consultation"
                  className="btn-pink"
                >
                  Start Consultation
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo("#services")}
                  className="btn-outline"
                >
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
