"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Users, MapPin, Globe, Shield, Sparkles, Building2, Terminal } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "50+", label: "Successful Projects" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "GCC Support" }
];

export default function About() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#090A10]">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-[#E91E63]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-[#8A2BE2]/10 rounded-full blur-[120px]" />
      </div>

      <div className="kaa-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Geographical Alignment (7 columns) */}
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E91E63]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
                  Corporate Footprint
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="font-display font-bold leading-tight mb-6 text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Global Presence. <br />
                <span className="gradient-text-pink">Local Support.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-[#A1A1AA]">
                KAA Software and Technologies operates a high-performance **dual-location model** to serve our enterprise clients. With our strategic corporate headquarters based in **Doha, Qatar**, and our advanced software engineering and AI hub situated in **Kochi, India**, we deliver cutting-edge IT systems and smart automation workflows with rapid local turnaround times.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mb-8 text-[#A1A1AA]">
                While our engineering capability scales globally, our core market operations focus heavily on **Qatar and other GCC nations** (including Saudi Arabia, UAE, Kuwait, Oman, and Bahrain) as well as the **Indian subcontinent**, ensuring high-availability support and strict compliance with local WPS labor standards and security protocols.
              </p>
            </ScrollReveal>

            {/* Doha & Kochi Details Grid */}
            <ScrollReveal delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {/* Doha Card */}
                <div className="p-5 rounded-2xl bg-white/3 border border-white/6 hover:border-[#E91E63]/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E91E63]/10 flex items-center justify-center border border-[#E91E63]/20">
                      <MapPin size={16} className="text-[#E91E63]" />
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Qatar Headquarters</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#E91E63]/80 uppercase mb-2">Doha (West Bay Office)</div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed group-hover:text-white/95 transition-colors">
                    Directs local client relations, solution architecture, networking audits, and physical biometric &amp; CCTV system security configurations.
                  </p>
                </div>

                {/* Kochi Card */}
                <div className="p-5 rounded-2xl bg-white/3 border border-white/6 hover:border-[#8A2BE2]/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center border border-[#8A2BE2]/20">
                      <Terminal size={16} className="text-[#8A2BE2]" />
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Development Center</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#8A2BE2]/80 uppercase mb-2">Kochi (Infopark IDC)</div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed group-hover:text-white/95 transition-colors">
                    Spearheads deep-tech full-stack engineering, core WPS ERP compilation, LLM artificial intelligence modeling, and digital branding execution.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={scrollToContact} className="btn-pink">
                  Engage Worldwide
                </button>
                <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <Globe size={14} className="text-[#E91E63]" />
                  <span>Doha / Kochi / Global</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: High-Tech Dual Offices Mockup (5 columns) */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Visual glow ring directly behind image */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#E91E63]/10 to-[#8A2BE2]/10 transform rotate-2 scale-105 opacity-40 blur-2xl pointer-events-none" />
            
            {/* Tactical Image Showcase Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden p-2 bg-gradient-to-br from-white/12 to-white/3 border border-white/10 shadow-2xl z-10 w-full transition-transform duration-500 hover:scale-[1.02] mb-6">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] w-full bg-[#151B27]">
                <Image
                  src="/kaa-offices.png"
                  alt="KAA Technologies Global Offices - Doha Corporate Headquarters & Kochi Development Center"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Floating Office Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 z-20">
                  <Building2 size={10} className="text-[#E91E63]" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">KAA Corporate Offices</span>
                </div>

                <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none z-20" />
              </div>
            </div>

            {/* Horizontal Mini Stats Dashboard */}
            <div className="w-full grid grid-cols-3 gap-3 z-10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/4 border border-white/6 text-center hover:border-white/10 transition-colors shadow-lg"
                >
                  <div className="font-display font-black text-xl sm:text-2xl gradient-text-pink leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-wider leading-none">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
