"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Stethoscope, ShoppingCart, Factory, Truck, GraduationCap, Building } from "lucide-react";

const industries = [
  { name: "Healthcare", icon: Stethoscope },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics", icon: Truck },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: Building },
];

export default function Industries() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#141521] border-y border-white/5">
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      
      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Empowering Industries Worldwide
            </h2>
            <p className="text-[#A1A1AA] max-w-2xl mx-auto">
              We provide tailored technology solutions for diverse sectors, ensuring compliance, security, and scalability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center p-6 text-center rounded-2xl kaa-card group h-full"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 mb-4 group-hover:bg-[#E91E63]/10 transition-colors duration-300">
                  <ind.icon size={24} className="text-[#A1A1AA] group-hover:text-[#E91E63] transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                  {ind.name}
                </h3>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
