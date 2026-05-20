"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Clock, MessageSquare, Monitor, Database, Lightbulb } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  { icon: CheckCircle2, label: "Brilliant Client Service" },
  { icon: Clock, label: "24/7 Support" },
  { icon: MessageSquare, label: "Free Consultations" },
  { icon: Monitor, label: "User Experience" },
  { icon: Database, label: "Big Data & Analytics" },
  { icon: Lightbulb, label: "Quick Tips and Advice" },
];

const stats = [
  { value: "50+", label: "Successful Projects" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Years Experience" },
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text & Features */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E91E63]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
                  About Us
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="font-display font-bold leading-tight mb-6 text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Who <span className="gradient-text-pink">We Are</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed mb-8 text-[#A1A1AA]">
                KAA Software and Technologies is a <strong className="text-white">Qatar-based IT company</strong> committed to delivering reliable, scalable, and cost-effective technology solutions. With a team of passionate experts, we combine innovation with industry knowledge to help clients transform their operations and stay ahead in the digital era.
              </p>
            </ScrollReveal>

            {/* Feature pills */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feat, i) => (
                  <motion.div
                    key={feat.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#E91E63]/10 hover:border-[#E91E63]/30 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-black/20 group-hover:bg-[#E91E63]/20 transition-colors">
                      <feat.icon size={16} className="text-[#A1A1AA] group-hover:text-[#E91E63] transition-colors" />
                    </div>
                    <span className="text-sm font-semibold text-[#A1A1AA] group-hover:text-white transition-colors">
                      {feat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <button onClick={scrollToContact} className="btn-pink">
                More About Us
              </button>
            </ScrollReveal>
          </div>

          {/* Right: Stats grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/5 to-[#8A2BE2]/5 rounded-[2.5rem] transform rotate-3 scale-105 opacity-50" />
            
            <div className="relative p-8 rounded-[2.5rem] kaa-card">
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                      className="bg-black/20 rounded-2xl p-6 text-center border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="font-display font-bold mb-2 text-3xl sm:text-4xl gradient-text-pink leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-[#A1A1AA] uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* KAA Corporate Brand Showcase Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="p-6 rounded-2xl bg-[#141521]/95 border border-white/10 relative overflow-hidden group shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/10 to-[#8A2BE2]/10 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                    <div className="relative w-36 h-14 flex-shrink-0 bg-black/45 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/kaa-logo.png"
                        alt="KAA Technologies Original Brand Logo"
                        fill
                        style={{ objectFit: "contain", padding: "6px" }}
                        className="transition-all duration-300"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="font-display font-bold text-base text-white mb-1">Our Corporate Brand Identity</div>
                      <div className="text-xs text-[#A1A1AA] leading-relaxed group-hover:text-white/95 transition-colors">
                        We represent elite engineering, smart integrations, and a digital-first approach for modern enterprises in Qatar.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
