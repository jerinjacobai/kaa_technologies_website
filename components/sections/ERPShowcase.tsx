"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, DollarSign, BarChart3, ShoppingCart, Package, Briefcase, Clock, Building2, FolderKanban, PieChart, Zap, Shield, ArrowRight, Check, TrendingUp, Activity, Cpu } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const modules = [
  { icon: Users, label: "HRMS", desc: "Complete HR lifecycle management", color: "#00F5FF" },
  { icon: DollarSign, label: "Payroll", desc: "Automated payroll processing", color: "#8B5CF6" },
  { icon: Briefcase, label: "CRM", desc: "Customer relationship tracking", color: "#00F5FF" },
  { icon: ShoppingCart, label: "Sales", desc: "Sales pipeline & orders", color: "#39FF14" },
  { icon: Package, label: "Inventory", desc: "Stock & warehouse control", color: "#FF006E" },
  { icon: BarChart3, label: "Finance", desc: "Accounting & financial reports", color: "#8B5CF6" },
];

const benefits = [
  "Unified platform — no more data silos",
  "Real-time dashboards & KPI tracking",
  "Role-based access & audit trails",
  "Cloud-ready with on-premise option",
  "Mobile-first responsive design",
  "Automated workflows & approvals",
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "hrms", label: "HRMS & Payroll" },
  { id: "finance", label: "Finance Controls" },
  { id: "analytics", label: "Real-time Analytics" }
];

export default function ERPShowcase() {
  const [activeTab, setActiveTab] = useState("overview");
  const scrollToContact = () => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <section id="erp" className="section-padding relative overflow-hidden bg-space-deep">
      <div className="perspective-grid" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      </div>

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <SectionHeader badge="KAA ERP Platform" title={<>The <span className="gradient-text-neon">All-in-One ERP</span> Built for Growth</>}
            subtitle="A modular, enterprise-grade management platform designed to unify your operations — from human resources and payroll to inventory and financial reporting." />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2.5 mt-10 mb-16">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="px-6 py-3 rounded-xl text-sm font-display font-semibold transition-all duration-300 relative overflow-hidden"
                style={{
                  background: activeTab === tab.id ? "rgba(0, 245, 255, 0.08)" : "rgba(0, 245, 255, 0.02)",
                  border: activeTab === tab.id ? "1px solid #00F5FF" : "1px solid rgba(0, 245, 255, 0.06)",
                  color: activeTab === tab.id ? "#FFFFFF" : "#94A3B8",
                  boxShadow: activeTab === tab.id ? "0 0 20px rgba(0,245,255,0.1)" : "none"
                }}>
                {activeTab === tab.id && <motion.div layoutId="erp-tab-glow" className="absolute inset-0 bg-gradient-to-r from-neon-cyan/8 to-neon-purple/8 blur-sm -z-10" />}
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div key="overview" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/5 border border-neon-cyan/10 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2 px-4 py-3 bg-space-void/60 border-b border-neon-cyan/5 rounded-t-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-neon-magenta/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neon-green/80" />
                    <span className="text-[10px] text-slate-500 ml-4 font-mono select-none">erp.kaatechnologies.qa/dashboard</span>
                  </div>
                  <div className="relative aspect-[16/10] rounded-b-xl overflow-hidden bg-space-surface">
                    <Image src="/kaa-screenshot.jpg" alt="KAA ERP Dashboard" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-space-void/5 pointer-events-none" />
                  </div>
                </motion.div>
              )}
              {activeTab === "hrms" && (
                <motion.div key="hrms" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }}
                  className="p-8 rounded-2xl holo-card border border-neon-cyan/8 bg-space-surface/40 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/20"><Users className="text-neon-cyan" size={20} /></div>
                    <div><h4 className="text-base font-display font-bold text-white">HRMS &amp; Attendance</h4><p className="text-xs text-slate-500">Automated personnel tracking &amp; records</p></div>
                  </div>
                  <div className="space-y-4">
                    {[{ title: "Smart Biometrics Sync", desc: "Live integration with attendance machines", val: "100%" },
                      { title: "Qatar Labor Law Payroll", desc: "Automated basic salary, allowance, and WPS exports", val: "WPS Ready" },
                      { title: "Employee Self Service", desc: "Request leave, submit expense receipts, and view WPS slips online", val: "Portal Live" }
                    ].map((item) => (
                      <div key={item.title} className="p-4 rounded-xl bg-space-void/40 border border-neon-cyan/5 flex items-center justify-between">
                        <div><div className="text-sm font-display font-semibold text-white mb-0.5">{item.title}</div><div className="text-xs text-slate-500">{item.desc}</div></div>
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-neon-cyan/8 text-neon-cyan border border-neon-cyan/15 font-mono flex-shrink-0">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeTab === "finance" && (
                <motion.div key="finance" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }}
                  className="p-8 rounded-2xl holo-card border border-neon-cyan/8 bg-space-surface/40 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20"><DollarSign className="text-neon-purple" size={20} /></div>
                    <div><h4 className="text-base font-display font-bold text-white">Advanced Accounting Hub</h4><p className="text-xs text-slate-500">WPS, GL journals, and vendor double-entry audits</p></div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-space-void/40 border border-neon-cyan/5 rounded-xl">
                      <div className="flex justify-between items-center mb-3"><span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Budget Controls</span><span className="text-xs font-mono text-neon-purple">92% Utilized</span></div>
                      <div className="w-full bg-neon-purple/5 h-2 rounded-full overflow-hidden"><div className="bg-neon-purple h-full rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" style={{ width: "92%" }} /></div>
                    </div>
                    {[{ label: "Accounts Receivable", desc: "Automated billing cycles & dunning letters", value: "QAR 542,000" },
                      { label: "Purchase Approvals", desc: "Multi-level authorization hierarchy workflows", value: "Strict Control" }
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center p-3 rounded-lg bg-space-void/30 border border-neon-cyan/5">
                        <div><span className="text-xs font-display font-semibold text-white block">{row.label}</span><span className="text-[10px] text-slate-500">{row.desc}</span></div>
                        <span className="text-xs font-mono font-bold text-white">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeTab === "analytics" && (
                <motion.div key="analytics" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }}
                  className="p-8 rounded-2xl holo-card border border-neon-cyan/8 bg-space-surface/40 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20"><TrendingUp className="text-emerald-400" size={20} /></div>
                    <div><h4 className="text-base font-display font-bold text-white">Live Business Intelligence</h4><p className="text-xs text-slate-500">Real-time operational overview tracking</p></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[{ l: "Revenue Growth", v: "+18.2%", icon: TrendingUp, c: "text-emerald-400", bg: "bg-emerald-500/10" },
                      { l: "Procurement", v: "99.4%", icon: Activity, c: "text-neon-cyan", bg: "bg-neon-cyan/10" },
                      { l: "Automation", v: "84.2%", icon: Cpu, c: "text-neon-purple", bg: "bg-neon-purple/10" },
                      { l: "System Health", v: "100.0%", icon: Shield, c: "text-amber-400", bg: "bg-amber-500/10" }
                    ].map((c) => (
                      <div key={c.l} className="p-4 rounded-xl bg-space-void/40 border border-neon-cyan/5">
                        <div className="flex items-center justify-between mb-2"><span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{c.l}</span><div className={`w-6 h-6 rounded-md ${c.bg} flex items-center justify-center`}><c.icon size={12} className={c.c} /></div></div>
                        <div className="text-lg font-display font-bold text-white">{c.v}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal direction="right">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Unified Business Operations in<span className="gradient-text-neon"> One Workspace</span></h3>
              <div className="grid grid-cols-3 gap-2.5 mb-8">
                {modules.map((mod) => (
                  <div key={mod.label} className="p-2.5 rounded-xl bg-neon-cyan/[0.02] border border-neon-cyan/5 flex flex-col items-center text-center hover:bg-neon-cyan/[0.04] hover:border-neon-cyan/10 transition-colors">
                    <div className="w-6 h-6 rounded-md bg-neon-cyan/8 flex items-center justify-center mb-1.5"><mod.icon size={12} className="text-neon-cyan" /></div>
                    <span className="text-[10px] font-display font-bold text-white/90">{mod.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-neon-cyan/8 border border-neon-cyan/15 flex-shrink-0"><Check size={10} className="text-neon-cyan" /></div>
                    <span className="text-sm text-slate-400">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={scrollToContact} className="btn-neon"><span>Schedule ERP Demo</span> <ArrowRight size={14} /></button>
                <button onClick={scrollToContact} className="btn-outline">Learn Modules</button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
