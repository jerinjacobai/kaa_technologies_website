"use client";
import { motion } from "framer-motion";
import { Settings, Calendar, Smile } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Choose Your Service",
    desc: "Select from our wide range of services tailored to meet your business needs and goals.",
    gradient: "from-[#E91E63] to-[#8A2BE2]"
  },
  {
    number: "02",
    icon: Calendar,
    title: "Make An Appointment",
    desc: "Book your appointment today and let our expert team help you get started.",
    gradient: "from-[#8A2BE2] to-[#3B82F6]"
  },
  {
    number: "03",
    icon: Smile,
    title: "Enjoy Your Service",
    desc: "Relax and enjoy exceptional service designed just for you, with quality and care.",
    gradient: "from-[#3B82F6] to-[#06B6D4]"
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden bg-[#0D0E17]"
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E91E63]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8A2BE2]/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="relative z-10 kaa-container">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E91E63]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E91E63]">
                Our Process
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E91E63]" />
            </div>
            <h2
              className="font-display font-bold leading-tight mb-4 text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              How We Work
            </h2>
            <p className="max-w-xl mx-auto text-base text-[#A1A1AA]">
              We work by understanding your needs, creating a clear strategy, executing with precision, and delivering quality results with ongoing support.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-12 left-[16.67%] right-[16.67%] h-[1px] hidden md:block"
            style={{ background: "linear-gradient(90deg, transparent, rgba(233, 30, 99, 0.5), rgba(138, 43, 226, 0.5), transparent)" }}
          />

          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative text-center group"
              >
                {/* Number bubble */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                  className={`relative w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center z-10 bg-gradient-to-br ${step.gradient} p-[1px]`}
                >
                  <div className="w-full h-full rounded-full bg-[#151B27] flex items-center justify-center relative overflow-hidden group-hover:bg-transparent transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <step.icon size={32} className="text-white relative z-10" />
                  </div>
                  
                  {/* Number badge */}
                  <div
                    className="absolute -top-1 -right-1 w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center text-white bg-[#0D0E17] border border-white/20"
                  >
                    {step.number.slice(-1)}
                  </div>
                </motion.div>

                <div className="p-8 rounded-[24px] kaa-card relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${step.gradient}`} />
                  <h3 className="font-display font-bold text-xl mb-4 text-white relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A1A1AA] relative z-10">
                    {step.desc}
                  </p>
                </div>

                {/* Step number watermark */}
                <div
                  className="absolute -top-4 left-6 font-display font-black text-8xl opacity-[0.02] select-none pointer-events-none tracking-tighter"
                >
                  {step.number}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
