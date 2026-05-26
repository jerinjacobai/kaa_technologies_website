"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Layers, Cpu, Cctv, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Qatar & GCC Focused",
  "Doha HQ & Kochi IDC",
  "Serving Worldwide",
];

const portalCards = [
  {
    id: 0,
    num: "01",
    label: "Enterprise Systems & E-Commerce",
    sub: "Doha Corporate HQ Team",
    image: "/hero-team.png",
    accent: "#E91E63",
    icon: Layers,
    desc: "Bespoke ERP systems, Qatar WPS-compliant HRMS & payroll, and premium e-commerce setups for personal brands."
  },
  {
    id: 1,
    num: "02",
    label: "AI & Workflow Automation",
    sub: "Kochi Infopark AI Lab",
    image: "/ai-automation.png",
    accent: "#8A2BE2",
    icon: Cpu,
    desc: "Bespoke LLM integrations, robotic process automation pipelines, database syncs, and intelligent neural assistants."
  },
  {
    id: 2,
    num: "03",
    label: "Advanced CCTV & Biometrics",
    sub: "Doha Surveillance Center",
    image: "/cctv-biometrics.png",
    accent: "#10B981",
    icon: Cctv,
    desc: "Advanced IP camera surveillance setups and secure biometric access attendance systems integrated natively into your ERP."
  }
];

export default function Hero() {
  const [activePanel, setActivePanel] = useState(0);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  
  const { scrollY } = useScroll();

  // Scroll-linked Parallax offsets for a high-fidelity 3D depth experience
  const yHero = useTransform(scrollY, [0, 600], [0, 100]);
  const scaleHero = useTransform(scrollY, [0, 600], [1, 0.94]);
  
  const yCard0 = useTransform(scrollY, [0, 600], [-40, -70]);
  const yCard1 = useTransform(scrollY, [0, 600], [0, 10]);
  const yCard2 = useTransform(scrollY, [0, 600], [40, 100]);
  
  const rotCard0 = useTransform(scrollY, [0, 600], [-6, -2]);
  const rotCard1 = useTransform(scrollY, [0, 600], [2, 6]);
  const rotCard2 = useTransform(scrollY, [0, 600], [10, 14]);

  const opacityDial = useTransform(scrollY, [0, 450], [1, 0]);
  const yBadge = useTransform(scrollY, [0, 500], [0, -50]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#141521] flex items-center min-h-screen pt-20"
    >
      {/* Background Flowlines & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(233,30,99,0.25) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ opacity: [0.1, 0.18, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(138,43,226,0.18) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 subtle-grid opacity-15" />
      </div>

      <div className="kaa-container relative z-10 py-12 sm:py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Statement & Cyber Dial Selector (7 columns) */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#E91E63]/30 bg-[#E91E63]/10 backdrop-blur-sm mx-auto lg:mx-0 w-fit"
            >
              <Sparkles size={12} className="text-[#E91E63] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E91E63]">
                Next-Gen AI &amp; Enterprise Platforms
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black leading-[1.05] tracking-tight mb-6 text-white"
              style={{ fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)" }}
            >
              Elite Digital Solutions <br />
              For Real Business <br />
              <span className="gradient-text-pink">Scale &amp; Security</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-[#A1A1AA]"
            >
              Headquartered in Doha, Qatar with our core engineering center in Kochi, India, we build compliant ERP systems, secure biometric security layouts, and custom AI automations designed for realistic corporate performance.
            </motion.p>

            {/* Interactive Cyber-Dial Node Selector */}
            <motion.div
              style={{ opacity: opacityDial }}
              className="hidden sm:flex flex-col gap-3 mb-8 max-w-md"
            >
              {portalCards.map((panel, idx) => {
                const PanelIcon = panel.icon;
                const isSelected = activePanel === idx;
                return (
                  <button
                    key={panel.id}
                    onClick={() => setActivePanel(idx)}
                    onMouseEnter={() => setHoveredPanel(idx)}
                    onMouseLeave={() => setHoveredPanel(null)}
                    className="flex items-center gap-4 p-3.5 rounded-2xl border text-left transition-all duration-300 backdrop-blur-md relative cursor-pointer"
                    style={{
                      backgroundColor: isSelected ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                      borderColor: isSelected ? panel.accent : "rgba(255, 255, 255, 0.05)",
                      boxShadow: isSelected ? `0 4px 20px ${panel.accent}15` : "none"
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300"
                      style={{
                        backgroundColor: isSelected ? `${panel.accent}15` : "rgba(255,255,255,0.02)",
                        borderColor: isSelected ? `${panel.accent}30` : "rgba(255,255,255,0.08)"
                      }}
                    >
                      <PanelIcon size={16} style={{ color: isSelected ? panel.accent : "#A1A1AA" }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#A1A1AA] flex items-center gap-1.5 leading-none mb-1">
                        <span style={{ color: panel.accent }}>{panel.num}</span>
                        <span>•</span>
                        <span>{panel.sub}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white leading-none">{panel.label}</div>
                    </div>
                    {isSelected && (
                      <motion.div
                        layoutId="active-dial-indicator"
                        className="absolute right-4 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: panel.accent }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button onClick={() => scrollTo("#contact")} className="btn-pink group">
                Consult Our Architects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo("#services")} className="btn-outline">
                Explore Verticals
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Parallax Visual Fan-Deck (5 columns) */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[520px] lg:h-auto mt-12 lg:mt-0">
            {/* Visual connector lines tracing from selector to deck */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none hidden lg:block" xmlns="http://www.w3.org/2000/svg">
              <path d="M -50,150 L 100,200 L 220,180" stroke="#E91E63" strokeWidth="1" fill="none" strokeDasharray="5 5" />
              <path d="M -50,220 L 80,260 L 220,240" stroke="#8A2BE2" strokeWidth="1" fill="none" strokeDasharray="5 5" />
              <path d="M -50,290 L 100,320 L 220,300" stroke="#10B981" strokeWidth="1" fill="none" strokeDasharray="5 5" />
            </svg>

            <motion.div
              style={{ y: yHero, scale: scaleHero }}
              className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center"
            >
              {portalCards.map((panel, idx) => {
                const isSelected = activePanel === idx;
                const isHovered = hoveredPanel === idx;
                
                // Assign independent scroll transformations to cause depth separation
                let yOffset = yCard1;
                let rotOffset = rotCard1;
                let scaleVal = 0.94;
                let zIndex = 10;
                let translateX = 0;

                if (idx === 0) {
                  yOffset = yCard0;
                  rotOffset = rotCard0;
                  scaleVal = 0.90;
                  translateX = -35;
                  zIndex = isSelected ? 30 : 15;
                } else if (idx === 2) {
                  yOffset = yCard2;
                  rotOffset = rotCard2;
                  scaleVal = 0.88;
                  translateX = 35;
                  zIndex = isSelected ? 30 : 12;
                } else {
                  // Middle Card (AI & Automation)
                  zIndex = isSelected ? 30 : 20;
                }

                if (isSelected) {
                  scaleVal = 1.02;
                  translateX = 0;
                  yOffset = yCard1; // Snap active card back to centered scroll line
                }

                if (isHovered && !isSelected) {
                  scaleVal += 0.03;
                }

                return (
                  <motion.div
                    key={panel.id}
                    style={{
                      y: yOffset,
                      rotate: rotOffset,
                      scale: scaleVal,
                      x: translateX,
                      zIndex: zIndex,
                      borderColor: isSelected ? panel.accent : "rgba(255, 255, 255, 0.08)",
                      boxShadow: isSelected
                        ? `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${panel.accent}25`
                        : "0 10px 30px rgba(0,0,0,0.5)"
                    }}
                    onClick={() => setActivePanel(idx)}
                    className="absolute w-[90%] aspect-[4/3] rounded-[2rem] overflow-hidden p-2.5 bg-gradient-to-br from-white/12 to-white/3 border shadow-2xl transition-all duration-500 cursor-pointer group select-none"
                  >
                    <div className="relative rounded-[1.5rem] overflow-hidden w-full h-full bg-[#151B27]">
                      {/* Subtle dark calibration overlay */}
                      <div
                        className="absolute inset-0 bg-[#141521]/15 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-300"
                        style={{ opacity: isSelected ? 0.08 : 0.25 }}
                      />
                      
                      <Image
                        src={panel.image}
                        alt={panel.label}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />

                      {/* Overlapping ERP Mini Screenshot overlay for Card 1 to show the WPS active layout */}
                      {panel.id === 0 && (
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute bottom-3 right-3 w-32 aspect-[16/10] rounded-lg overflow-hidden border border-white/15 shadow-2xl z-20 hidden sm:block"
                        >
                          <Image src="/kaa-screenshot.jpg" alt="Active WPS ERP Module Preview" fill className="object-cover" />
                        </motion.div>
                      )}

                      {/* Small visual detail card inside panels */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: panel.accent }}
                          />
                          <span className="text-[9px] font-mono text-white/60 uppercase tracking-widest leading-none">
                            {panel.sub}
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white mt-1 leading-snug truncate">
                          {panel.label}
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-[1.5rem] border border-white/8 pointer-events-none z-20" />
                    </div>
                  </motion.div>
                );
              })}

              {/* Underlying atmospheric background glows */}
              <div className="absolute -top-12 -left-12 w-44 h-44 bg-[#E91E63]/18 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
              <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-[#8A2BE2]/18 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
