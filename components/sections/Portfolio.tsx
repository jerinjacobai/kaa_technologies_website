"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const projects = [
  {
    title: "National Trading Group ERP",
    category: "ERP Implementation",
    tag: "ERP",
    desc: "Full-scale ERP rollout for a 500+ employee trading company — HRMS, payroll, inventory, finance and CRM unified.",
    metrics: ["500+ Employees", "8 Modules", "3 Months"],
    gradient: "from-blue-600/20 to-indigo-600/10",
    accent: "#3b82f6",
  },
  {
    title: "LuxeHome Ecommerce Platform",
    category: "Ecommerce Development",
    tag: "Ecommerce",
    desc: "Premium furniture ecommerce store with custom 3D product viewer, multi-currency checkout, and inventory sync.",
    metrics: ["10K+ Products", "99.9% Uptime", "5x Conversion"],
    gradient: "from-purple-600/20 to-pink-600/10",
    accent: "#8b5cf6",
  },
  {
    title: "HealthFirst Clinic Management",
    category: "Custom Software",
    tag: "Healthcare",
    desc: "Comprehensive clinic management system with patient records, appointments, billing, and lab integration.",
    metrics: ["50+ Clinics", "HIPAA Ready", "Real-time"],
    gradient: "from-cyan-600/20 to-blue-600/10",
    accent: "#06b6d4",
  },
  {
    title: "FleetPro Logistics SaaS",
    category: "SaaS Application",
    tag: "SaaS",
    desc: "Cloud-native logistics SaaS with real-time fleet tracking, route optimization, and automated billing.",
    metrics: ["1000+ Vehicles", "Multi-tenant", "Mobile App"],
    gradient: "from-emerald-600/20 to-teal-600/10",
    accent: "#10b981",
  },
  {
    title: "ConstructPro Project Manager",
    category: "Web Application",
    tag: "Construction",
    desc: "End-to-end construction project management with budgeting, material tracking, labour management, and reporting.",
    metrics: ["200+ Projects", "Real-time KPIs", "Offline Mode"],
    gradient: "from-amber-600/20 to-orange-600/10",
    accent: "#f59e0b",
  },
  {
    title: "EduSpark LMS Platform",
    category: "Education Platform",
    tag: "Education",
    desc: "Modern Learning Management System with live classes, assessments, progress tracking, and fee automation.",
    metrics: ["5K+ Students", "Live Video", "AI Grading"],
    gradient: "from-red-600/20 to-rose-600/10",
    accent: "#ef4444",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-15" />

      <div className="kaa-container">
        <ScrollReveal>
          <SectionHeader
            badge="Portfolio & Case Studies"
            title={<>Real Solutions for <span style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Real Businesses</span></>}
            subtitle="A showcase of enterprise implementations, digital platforms, and custom software solutions delivered across industries."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl overflow-hidden h-full"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Gradient header */}
                <div
                  className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  style={{ borderBottom: `1px solid rgba(255,255,255,0.05)` }}
                >
                  {/* Pattern dots */}
                  <div className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }} />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2.5 py-1 text-[10px] font-semibold rounded-full"
                      style={{
                        background: `${project.accent}25`,
                        border: `1px solid ${project.accent}40`,
                        color: project.accent,
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>
                  {/* External icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.1)" }}>
                      <ExternalLink size={12} className="text-white/60" />
                    </div>
                  </div>
                  {/* Mock UI */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-1.5 rounded-full flex-1"
                        style={{ background: `${project.accent}${j === 0 ? "60" : "25"}` }} />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-[10px] font-medium mb-1.5" style={{ color: project.accent }}>{project.category}</p>
                  <h3 className="font-display font-bold text-sm text-white mb-2 leading-snug">{project.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#64748b" }}>{project.desc}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2 py-1 text-[10px] font-medium rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "#94a3b8",
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
