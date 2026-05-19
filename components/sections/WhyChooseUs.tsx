"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ShieldCheck, Zap } from "lucide-react";

const skills = [
  { label: "Software Development", value: 98 },
  { label: "Networking Solutions", value: 99 },
  { label: "Web & Mobile Application Development", value: 100 },
  { label: "Digital Marketing", value: 100 },
];

function AnimatedBar({ value, delay }: { value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(value), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <div ref={ref}>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="why-choose-us"
      className="section-padding relative overflow-hidden bg-[#0D0E17]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#151B27] to-transparent opacity-50" />
        <div className="absolute -left-40 -top-40 w-[500px] h-[500px] bg-[#E91E63]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 kaa-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Heading + CTA */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#E91E63]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
                  Why Choose Us
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="font-display font-bold leading-tight mb-6 text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                We Bring Smart IT &amp; <br />
                <span className="gradient-text-pink">Software Solutions</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed mb-8 text-[#A1A1AA]">
                At KAA Software and Technologies, we provide innovative technology services, backed by an expert team and reliable support, to help your business grow, perform, and succeed in the digital world.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <button onClick={scrollToContact} className="btn-pink">
                Contact Us
              </button>
            </ScrollReveal>

            {/* Decorative badge */}
            <ScrollReveal delay={0.4}>
              <div
                className="mt-12 inline-flex items-center gap-4 p-5 rounded-2xl kaa-card"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#E91E63]/20 to-[#8A2BE2]/20 border border-white/10 relative overflow-hidden">
                  <span className="text-xl relative z-10">🏆</span>
                  <div className="absolute inset-0 bg-[#E91E63]/20 blur-md" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">Qatar's Trusted IT Partner</div>
                  <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">Delivering Excellence</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Progress Bars */}
          <div className="space-y-10 w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
            <div className="space-y-8">
              {skills.map((skill, i) => (
                <ScrollReveal key={skill.label} delay={i * 0.1}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-white">
                        {skill.label}
                      </span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-sm font-black gradient-text-pink"
                      >
                        {skill.value}%
                      </motion.span>
                    </div>
                    <AnimatedBar value={skill.value} delay={0.3 + i * 0.15} />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Extra info cards */}
            <ScrollReveal delay={0.5}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Zap className="text-amber-400" size={24} />, title: "Fast Delivery", desc: "On-time completion" },
                  { icon: <ShieldCheck className="text-emerald-400" size={24} />, title: "Secure & Reliable", desc: "Enterprise security" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl kaa-card group hover:bg-[#151B27]/80"
                  >
                    <div className="mb-3 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-[#A1A1AA]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
