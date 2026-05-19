"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Mohammed Al-Rashidi",
    role: "CEO",
    company: "Gulf Trading Group",
    text: "KAA Technologies transformed our entire operations. The ERP system they built handles our 400+ employees seamlessly — payroll, HR, finance, and inventory all unified. The attention to detail in the UI is exceptional.",
    rating: 5,
    tag: "ERP Implementation",
    initials: "MA",
    color: "#3b82f6",
  },
  {
    name: "Priya Menon",
    role: "COO",
    company: "HealthFirst Clinics",
    text: "Our clinic management system is world-class. Patient records, billing, appointments — everything flows perfectly. The team understood our healthcare compliance needs and delivered beyond our expectations.",
    rating: 5,
    tag: "Healthcare Software",
    initials: "PM",
    color: "#8b5cf6",
  },
  {
    name: "Khalid Al-Mansouri",
    role: "Director of Operations",
    company: "Luxe Retail Group",
    text: "The ecommerce platform they built for us is phenomenal. Sales increased 5x in the first quarter. The mobile experience is flawless and the backend is incredibly intuitive for our team to manage.",
    rating: 5,
    tag: "Ecommerce Platform",
    initials: "KM",
    color: "#06b6d4",
  },
  {
    name: "Sanjay Gupta",
    role: "CTO",
    company: "FleetPro Logistics",
    text: "We needed a complex SaaS platform built fast and to enterprise standards. KAA delivered in record time without cutting corners. Their architecture is clean, scalable, and incredibly well-documented.",
    rating: 5,
    tag: "SaaS Development",
    initials: "SG",
    color: "#10b981",
  },
  {
    name: "Fatima Al-Hassan",
    role: "HR Director",
    company: "Doha Construction Co.",
    text: "The HRMS and payroll module has saved our HR department dozens of hours every month. Biometric integration, automated payslips, leave management — everything just works. Highly recommend KAA Technologies.",
    rating: 5,
    tag: "HRMS & Payroll",
    initials: "FH",
    color: "#f59e0b",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir: number) => {
    setDirection(dir);
    setActiveIdx((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[activeIdx];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Client Testimonials"
            title={<>What Our <span style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Clients Say</span></>}
            subtitle="Trusted by businesses across the region. Here's what our partners have to say about working with KAA Technologies."
          />
        </ScrollReveal>

        <div className="mt-14">
          {/* Main testimonial */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIdx}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="p-8 md:p-10 rounded-3xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 16px 60px rgba(0,0,0,0.3)",
                }}
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote size={28} style={{ color: t.color, opacity: 0.6 }} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" style={{ color: "#f59e0b" }} />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-base md:text-lg leading-relaxed mb-8 font-medium"
                  style={{ color: "#cbd5e1" }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-sm"
                      style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">{t.name}</p>
                      <p className="text-xs" style={{ color: "#64748b" }}>{t.role}, {t.company}</p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1.5 text-[10px] font-semibold rounded-full"
                    style={{
                      background: `${t.color}10`,
                      border: `1px solid ${t.color}25`,
                      color: t.color,
                    }}
                  >
                    {t.tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > activeIdx ? 1 : -1); setActiveIdx(i); }}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeIdx ? "24px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === activeIdx ? testimonials[i].color : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              >
                <ChevronLeft size={16} className="text-white/60" />
              </button>
              <button
                onClick={() => navigate(1)}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              >
                <ChevronRight size={16} className="text-white/60" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
