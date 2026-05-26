"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Free Consultation",
  "No Obligation",
  "Quick Response",
];

export default function Hero() {
  const { scrollY } = useScroll();

  // GPU-Accelerated Parallax Scroll-linked Transformations
  const yHero = useTransform(scrollY, [0, 500], [0, 80]);
  const scaleHero = useTransform(scrollY, [0, 500], [1, 0.95]);
  const rotateHero = useTransform(scrollY, [0, 500], [0, -2.5]);
  
  const yBadgeL = useTransform(scrollY, [0, 500], [0, -35]);
  const yBadgeR = useTransform(scrollY, [0, 500], [0, 35]);
  const opacityBadges = useTransform(scrollY, [0, 450], [1, 0]);

  const scrollTo = (id: string) => {
    if (id === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#141521] flex items-center min-h-screen"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(233,30,99,0.35) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(138,43,226,0.25) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 subtle-grid opacity-20" />
        
        {/* Futuristic Cybernetic Neural Nodes and Flowlines */}
        <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyber-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E91E63" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 50,150 L 250,80 L 450,220 L 650,120 L 850,280 L 1050,180 M 250,80 L 220,320 L 450,220 M 650,120 L 600,380 M 450,220 L 480,480 L 780,420"
            stroke="url(#cyber-glow)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="1200"
            initial={{ strokeDashoffset: 1200 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle cx="50" cy="150" r="3.5" fill="#E91E63" animate={{ r: [3.5, 6, 3.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="250" cy="80" r="4.5" fill="#8A2BE2" animate={{ r: [4.5, 7.5, 4.5] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="450" cy="220" r="5" fill="#E91E63" animate={{ r: [5, 8.5, 5] }} transition={{ duration: 2.5, repeat: Infinity }} />
          <motion.circle cx="650" cy="120" r="3.5" fill="#8A2BE2" animate={{ r: [3.5, 6.5, 3.5] }} transition={{ duration: 3.5, repeat: Infinity }} />
          <motion.circle cx="850" cy="280" r="4.5" fill="#E91E63" animate={{ r: [4.5, 7.5, 4.5] }} transition={{ duration: 2.2, repeat: Infinity }} />
          <motion.circle cx="1050" cy="180" r="4" fill="#8A2BE2" animate={{ r: [4, 7, 4] }} transition={{ duration: 4, repeat: Infinity }} />
        </svg>
      </div>

      <div className="kaa-container relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8 lg:py-16">
          
          {/* Left content */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#E91E63]/30 bg-[#E91E63]/10 backdrop-blur-sm mx-auto lg:mx-0 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
                Smart Solutions. Stronger Businesses.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold leading-[1.1] tracking-tight mb-6 text-white"
              style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)" }}
            >
              Intelligent AI &amp;
              <br />
              Enterprise Solutions to
              <br />
              <span className="gradient-text-pink">Scale Globally</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 text-[#A1A1AA]"
            >
              We build next-generation ERP platforms, custom e-commerce web applications, and state-of-the-art AI &amp; biometric workflows. Headquartered in Doha, Qatar and Kochi, India, we scale GCC businesses globally.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button onClick={() => scrollTo("#contact")} className="btn-pink">
                Start Your Project
                <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo("#services")} className="btn-outline group">
                Our Verticals
                <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center transition-all group-hover:border-white">
                  <Play size={10} className="ml-0.5" />
                </div>
              </button>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm font-medium text-[#A1A1AA]"
                >
                  <CheckCircle2 size={15} className="text-[#E91E63] flex-shrink-0" />
                  {h}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Flagship Parallax Image Showcase + Floating Badge overlays */}
          <div className="relative flex justify-center items-center lg:h-full mt-10 lg:mt-0">
            <motion.div
              style={{ y: yHero, scale: scaleHero, rotate: rotateHero }}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-[540px]"
            >
              {/* Decorative colored glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E91E63]/10 to-[#8A2BE2]/10 rounded-[2rem] transform rotate-2 scale-102 blur-lg pointer-events-none" />
              
              {/* Glassmorphic border container */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden p-3 bg-gradient-to-br from-white/12 to-white/3 border border-white/10 shadow-2xl z-10 backdrop-blur-md"
              >
                <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/3] w-full">
                  {/* Subtle dark overlay for premium color calibration */}
                  <div className="absolute inset-0 bg-[#141521]/15 mix-blend-overlay z-10 pointer-events-none" />
                  <Image
                    src="/hero-ai-powerhouse.png"
                    alt="KAA Artificial Intelligence & Robotics Automation Center"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  
                  {/* Internal border glow */}
                  <div className="absolute inset-0 rounded-[1.8rem] border border-white/10 pointer-events-none z-20" />
                </div>
              </div>

              {/* Floating Badge 3 - Top Left Floating Original Logo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-10 -left-10 p-3.5 rounded-2xl bg-[#141521]/95 backdrop-blur-md flex items-center justify-center z-20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-white/12 h-14 w-44 group hover:scale-[1.05] transition-transform duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63]/10 to-[#8A2BE2]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full z-10">
                  <Image
                    src="/kaa-logo.png"
                    alt="KAA Technologies Original Logo"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </motion.div>

              {/* Floating Badge 1 - Bottom Left: Doha & Kochi Offices */}
              <motion.div
                style={{ y: yBadgeL, opacity: opacityBadges }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 px-5 py-4 rounded-2xl kaa-card flex items-center gap-3.5 z-20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-white/12 w-[240px] hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="text-2xl flex-shrink-0">🏢</span>
                <div>
                  <div className="text-[11px] font-black text-white uppercase tracking-wider leading-none">Global Headquarters</div>
                  <div className="text-[10px] text-[#A1A1AA] mt-1 leading-snug">Doha, Qatar (HQ)<br />Kochi, India (IDC)</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Top Right: Serving GCC, India, & Worldwide */}
              <motion.div
                style={{ y: yBadgeR, opacity: opacityBadges }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -top-12 -right-8 px-5 py-4 rounded-2xl kaa-card flex items-center gap-3.5 z-20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-white/12 w-[220px] hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="text-2xl flex-shrink-0">🌍</span>
                <div>
                  <div className="text-[11px] font-black text-white uppercase tracking-wider leading-none">Market Reach</div>
                  <div className="text-[10px] text-[#A1A1AA] mt-1 leading-snug">Serving Qatar, GCC, India, &amp; Worldwide Clients</div>
                </div>
              </motion.div>

              {/* Decorative radial glows directly behind container */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#E91E63]/25 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#8A2BE2]/20 rounded-full blur-3xl pointer-events-none -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
