"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";

const projects = [
  { title: "Enterprise ERP Suite", desc: "Full-scale Qatar WPS-compliant ERP system with HRMS, payroll, inventory, and financial ledger modules for a major trading conglomerate.", tags: ["ERP", "HRMS", "WPS", "Finance"], gradient: "from-neon-magenta/30 to-neon-purple/30" },
  { title: "E-Commerce Platform", desc: "Premium e-commerce storefront with integrated payment gateway, inventory sync, and brand-focused design for a Qatar-based luxury retailer.", tags: ["E-Commerce", "Payments", "UI/UX"], gradient: "from-neon-purple/30 to-neon-cyan/30" },
  { title: "AI Chatbot System", desc: "Custom LLM-powered AI assistant with multi-language support, trained on company knowledge base for automated customer service.", tags: ["AI", "LLM", "NLP", "Automation"], gradient: "from-neon-cyan/30 to-neon-green/30" },
  { title: "Advanced Security Solutions", desc: "Enterprise-wide biometric access control systems, network firewall hardening, and corporate cybersecurity deployments integrated with ERP dashboards.", tags: ["Biometrics", "Cybersecurity", "Network Security", "ERP Integration"], gradient: "from-neon-green/20 to-neon-cyan/30" },
  { title: "Marketing Dashboard", desc: "Real-time digital marketing analytics platform with SEO tracking, campaign ROI metrics, and automated reporting pipelines.", tags: ["Analytics", "SEO", "Dashboard", "SaaS"], gradient: "from-neon-magenta/20 to-neon-cyan/20" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-space-void">
      <div className="perspective-grid" />

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-magenta" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-magenta">Our Work</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-magenta" />
            </div>
            <h2 className="font-display font-bold leading-tight mb-6 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Featured Projects &amp; <br className="hidden sm:block" />
              <span className="gradient-text-neon">Case Studies</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="holo-card group cursor-pointer h-full">
                {/* Gradient header */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 subtle-grid opacity-30" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-neon-cyan transition-colors duration-300">{project.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded font-mono bg-neon-cyan/[0.04] border border-neon-cyan/8 text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
