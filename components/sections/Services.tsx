"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Server, Shield, HeadphonesIcon, Megaphone, Cctv,
  ArrowRight, Check, Cpu, Layers, Fingerprint, Workflow, Sparkles
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const strategicVerticals = [
  {
    id: "enterprise-web",
    badge: "Strategic Vertical 01",
    title: "Enterprise ERP & Custom Web Platforms",
    subtitle: "Unified management systems & high-converting brand platforms",
    desc: "We construct bespoke business systems and gorgeous websites designed to scale. From Qatar WPS-compliant HRMS & payroll software to high-end e-commerce sites for personal brands and premium corporate platforms.",
    accent: "#E91E63",
    image: "/kaa-screenshot.jpg",
    tags: ["Enterprise ERP", "WPS HRMS", "E-Commerce", "Personal Brands"],
    icon: Layers,
    bullets: [
      "Qatar WPS-Compliant HR & Automated Payroll",
      "Real-Time Inventory, Procurement & Ledger Hub",
      "Premium E-Commerce Platforms for Personal Brands",
      "Bespoke Corporate Web App Architecture"
    ]
  },
  {
    id: "ai-automation",
    badge: "Strategic Vertical 02",
    title: "Intelligent AI & Automated Workflows",
    subtitle: "Intelligent LLM agents, workflow engines, & robotic automation",
    desc: "Unleash the power of modern artificial intelligence and robotic process automation. We build custom LLM-powered AI assistants, automated pipeline workflows, intelligent predictive analytics, and seamless database integrations.",
    accent: "#8A2BE2",
    image: "/ai-automation.png",
    tags: ["LLM AI Agents", "RPA Workflows", "Predictive BI", "Smart DB Sync"],
    icon: Cpu,
    bullets: [
      "Bespoke LLM AI Assistants & Custom Chatbots",
      "Robotic Process Automation (RPA) Pipeline Workflows",
      "Intelligent Predictive Analytics & Real-Time Reporting",
      "Automated System Syncs & Third-Party Integrations"
    ]
  },
  {
    id: "security-cctv",
    badge: "Strategic Vertical 03",
    title: "Advanced CCTV & Smart Biometric Networks",
    subtitle: "Biometric attendance controllers, IP surveillance, & network security",
    desc: "State-of-the-art security installations to protect and monitor your physical infrastructure. We deploy advanced IP surveillance CCTV setups and secure biometric attendance/access controls, fully integrated with your business networks.",
    accent: "#10B981",
    image: "/cctv-biometrics.png",
    tags: ["CCTV Surveillance", "Biometric Access", "Network Hardening", "ERP Integration"],
    icon: Cctv,
    bullets: [
      "High-Definition IP Surveillance & Smart Camera Deployments",
      "Biometric Access & Attendance System Integration",
      "Structural Network Hardening & Secure Storage Hubs",
      "Seamless Integration with Corporate ERP & HRMS"
    ]
  }
];

const foundationalPillars = [
  {
    icon: Server,
    title: "Managed Infrastructure & Networking",
    desc: "Robust enterprise servers, high-speed structural networking, and round-the-clock proactive IT management to keep your business operating securely."
  },
  {
    icon: Shield,
    title: "Cloud Migration & Cyber Defense",
    desc: "Secure cloud migration pipelines, automated active backup/disaster recovery systems, and comprehensive enterprise cybersecurity audits."
  },
  {
    icon: Megaphone,
    title: "Digital Branding & Growth Marketing",
    desc: "Strategic Search Engine Optimization (SEO), high-fidelity brand design, and high-impact digital campaigns to drive corporate visibility."
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const activeVertical = strategicVerticals[activeTab];

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#141521]">
      {/* Background Cyber-flow Lines */}
      <div className="absolute inset-0 pointer-events-none subtle-grid opacity-20" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#E91E63]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#8A2BE2]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 kaa-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E91E63]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
                Our Focus Verticals
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E91E63]" />
            </div>
            <h2
              className="font-display font-bold leading-tight mb-6 text-white"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              Strategic Core Solutions <br className="hidden sm:block" />
              <span className="gradient-text-pink">Driven by Technology</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base text-[#A1A1AA]">
              We position your business for market leadership by organizing our capabilities into three high-performance technology verticals and core foundational infrastructure services.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Vertical Horizontal Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mt-4 mb-16 max-w-4xl mx-auto">
            {strategicVerticals.map((vertical, idx) => {
              const TabIcon = vertical.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={vertical.id}
                  onClick={() => setActiveTab(idx)}
                  className="px-6 py-4 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 relative flex items-center gap-3 overflow-hidden cursor-pointer"
                  style={{
                    background: isSelected ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.01)",
                    border: isSelected ? `1px solid ${vertical.accent}` : "1px solid rgba(255, 255, 255, 0.06)",
                    color: isSelected ? "#FFFFFF" : "#A1A1AA",
                  }}
                >
                  <TabIcon size={16} style={{ color: isSelected ? vertical.accent : "#A1A1AA" }} />
                  <span>{vertical.title.split(" & ")[0]}</span>
                  
                  {isSelected && (
                    <motion.div
                      layoutId="active-vertical-glow"
                      className="absolute inset-0 -z-10 blur-sm"
                      style={{
                        background: `linear-gradient(135deg, ${vertical.accent}15 0%, rgba(138,43,226,0.1) 100%)`
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Interactive Vertical Showcase Container */}
        <div className="relative mb-24 min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Left Column: Vertical Copy & Checklist */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-white/8 bg-white/3 backdrop-blur-sm w-fit">
                  <Sparkles size={12} style={{ color: activeVertical.accent }} className="animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A1A1AA]">
                    {activeVertical.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold leading-tight mb-4 text-white text-2xl sm:text-3xl">
                  {activeVertical.title}
                </h3>
                
                <p className="text-sm font-semibold mb-6 uppercase tracking-wider" style={{ color: activeVertical.accent }}>
                  {activeVertical.subtitle}
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#A1A1AA] mb-8">
                  {activeVertical.desc}
                </p>

                {/* Checklist */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {activeVertical.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border mt-0.5"
                        style={{
                          backgroundColor: `${activeVertical.accent}15`,
                          borderColor: `${activeVertical.accent}30`
                        }}
                      >
                        <Check size={10} style={{ color: activeVertical.accent }} />
                      </div>
                      <span className="text-xs sm:text-sm text-white/80 leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Tags & CTA */}
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5">
                  <button
                    onClick={scrollToContact}
                    className="btn-pink group flex-shrink-0"
                    style={{
                      background: activeVertical.accent,
                      boxShadow: `0 4px 20px ${activeVertical.accent}30`
                    }}
                  >
                    Deploy Solution
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex flex-wrap gap-2">
                    {activeVertical.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-md font-mono bg-white/4 border border-white/6 text-white/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Device Mockup Frame */}
              <div className="lg:col-span-6 relative flex justify-center items-center">
                {/* Visual glow ring directly behind image mockup */}
                <div
                  className="absolute inset-0 rounded-[2rem] opacity-35 blur-3xl pointer-events-none transform scale-95"
                  style={{
                    background: `radial-gradient(circle, ${activeVertical.accent}35 0%, rgba(138,43,226,0.1) 70%)`
                  }}
                />

                {/* Tactile cybernetic borders */}
                <div
                  className="relative rounded-[2rem] overflow-hidden p-2.5 bg-gradient-to-br from-white/12 to-white/3 border shadow-2xl z-10 w-full max-w-[500px] transition-all duration-500 hover:scale-[1.02]"
                  style={{ borderColor: `${activeVertical.accent}35` }}
                >
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] w-full bg-[#151B27]">
                    <Image
                      src={activeVertical.image}
                      alt={activeVertical.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    
                    {/* Glowing active outline */}
                    <div
                      className="absolute inset-0 rounded-[1.5rem] border pointer-events-none z-20"
                      style={{ borderColor: `${activeVertical.accent}20` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Foundational Pillars Header */}
        <ScrollReveal>
          <div className="text-center mt-20 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6" />
            <h3 className="font-display font-bold text-xl text-white">
              Foundational Digital Pillars
            </h3>
            <p className="text-xs text-[#A1A1AA] uppercase tracking-widest mt-2">
              Essential Infrastructure &amp; Growth Services
            </p>
          </div>
        </ScrollReveal>

        {/* Foundational Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundationalPillars.map((pillar, i) => {
            const PillarIcon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <div
                  className="relative h-full p-8 rounded-[24px] group overflow-hidden bg-[#151B27]/60 backdrop-blur-xl border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/0 to-[#8A2BE2]/0 group-hover:from-[#E91E63]/4 group-hover:to-[#8A2BE2]/4 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:bg-[#E91E63]/10 group-hover:border-[#E91E63]/30 transition-colors duration-300">
                      <PillarIcon size={20} className="text-white group-hover:text-[#E91E63] transition-colors duration-300" />
                    </div>

                    <h4 className="font-display font-bold text-lg mb-3 text-white leading-tight">
                      {pillar.title}
                    </h4>
                    
                    <p className="text-[#A1A1AA] text-xs sm:text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                      {pillar.desc}
                    </p>

                    <button
                      onClick={scrollToContact}
                      className="flex items-center gap-2 text-xs font-semibold text-white/50 group-hover:text-[#E91E63] transition-colors duration-300"
                    >
                      Connect with Architects
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
