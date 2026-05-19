"use client";
import { motion } from "framer-motion";
import {
  HeadphonesIcon, Globe, Server, Shield, Megaphone, Building2, ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Software, Web & Mobile Solutions",
    desc: "We build responsive websites, e-commerce platforms, and mobile apps to deliver seamless and engaging digital experiences.",
  },
  {
    icon: Server,
    title: "IT Infrastructure & Networking",
    desc: "We offer server & storage, networking, and IT support to keep your business running smoothly.",
  },
  {
    icon: Shield,
    title: "Cloud & Security Solutions",
    desc: "We deliver cloud migration, cybersecurity, and backup & disaster recovery solutions to secure and protect your business.",
  },
  {
    icon: HeadphonesIcon,
    title: "IT Support",
    desc: "We deliver reliable IT support to keep your business running smoothly, offering proactive solutions and expert management.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Branding",
    desc: "We offer SEO, social media marketing, branding, design, and campaign management to boost your business.",
  },
  {
    icon: Building2,
    title: "Industries We Serve",
    desc: "We serve diverse industries including retail, e-commerce, real estate, education, healthcare, hospitality, and SMEs.",
  },
];

export default function Services() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#0D0E17]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none subtle-grid opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#E91E63]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#8A2BE2]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 kaa-container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E91E63]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
                Our Services
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E91E63]" />
            </div>
            <h2
              className="font-display font-bold leading-tight mb-6 text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Smart Solutions for a <br className="hidden sm:block" />
              <span className="gradient-text-pink">
                Digital-First World
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-base text-[#A1A1AA]">
              We offer a full range of technology services, from custom software and web development to IT infrastructure, cloud solutions, and digital marketing—designed to help your business thrive in the digital era.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full p-8 rounded-[24px] group cursor-pointer overflow-hidden bg-[#151B27]/60 backdrop-blur-xl border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/0 to-[#8A2BE2]/0 group-hover:from-[#E91E63]/5 group-hover:to-[#8A2BE2]/5 transition-colors duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:bg-[#E91E63]/10 group-hover:border-[#E91E63]/30 transition-colors duration-300">
                    <svc.icon size={24} className="text-white group-hover:text-[#E91E63] transition-colors duration-300" />
                  </div>

                  <h3 className="font-display font-bold text-xl mb-4 text-white leading-tight">
                    {svc.title}
                  </h3>
                  
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors duration-300">
                    {svc.desc}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToContact();
                    }}
                    className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-[#E91E63] transition-colors duration-300"
                  >
                    Explore Service
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
