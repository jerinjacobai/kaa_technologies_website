"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, DollarSign, BarChart3, ShoppingCart, Package,
  Briefcase, Clock, Building2, CheckSquare, FolderKanban,
  PieChart, Zap, Shield, Bell, ArrowRight, Check,
  TrendingUp, Activity, Cpu
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const modules = [
  { icon: Users, label: "HRMS", desc: "Complete HR lifecycle management", color: "#3b82f6" },
  { icon: DollarSign, label: "Payroll", desc: "Automated payroll processing", color: "#8b5cf6" },
  { icon: Briefcase, label: "CRM", desc: "Customer relationship tracking", color: "#06b6d4" },
  { icon: ShoppingCart, label: "Sales", desc: "Sales pipeline & orders", color: "#10b981" },
  { icon: Package, label: "Purchase", desc: "Procurement & vendor management", color: "#f59e0b" },
  { icon: Package, label: "Inventory", desc: "Stock & warehouse control", color: "#ef4444" },
  { icon: BarChart3, label: "Finance", desc: "Accounting & financial reports", color: "#3b82f6" },
  { icon: Clock, label: "Attendance", desc: "Time tracking & biometrics", color: "#8b5cf6" },
  { icon: Building2, label: "ESS Portal", desc: "Employee self-service", color: "#06b6d4" },
  { icon: FolderKanban, label: "Projects", desc: "Project & task management", color: "#10b981" },
  { icon: PieChart, label: "Analytics", desc: "Business intelligence & KPIs", color: "#f59e0b" },
  { icon: Zap, label: "Automation", desc: "Workflow & process automation", color: "#ef4444" },
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

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="erp" className="section-padding relative overflow-hidden bg-[#090A10]">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E91E63]/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8A2BE2]/25 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#151B27]/40 to-transparent opacity-60" />
      </div>

      <div className="kaa-container relative z-10">
        <ScrollReveal>
          <SectionHeader
            badge="KAA ERP Platform"
            title={<>The <span className="gradient-text-pink">All-in-One ERP</span> Built for Growth</>}
            subtitle="A modular, enterprise-grade management platform designed to unify your operations — from human resources and payroll to inventory and financial reporting."
          />
        </ScrollReveal>

        {/* Dynamic Tab Navigation */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2.5 mt-10 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden"
                style={{
                  background: activeTab === tab.id ? "rgba(233, 30, 99, 0.15)" : "rgba(255, 255, 255, 0.02)",
                  border: activeTab === tab.id ? "1px solid #E91E63" : "1px solid rgba(255, 255, 255, 0.06)",
                  color: activeTab === tab.id ? "#FFFFFF" : "#A1A1AA",
                }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="erp-tab-glow"
                    className="absolute inset-0 bg-gradient-to-r from-[#E91E63]/10 to-[#8A2BE2]/10 blur-sm -z-10"
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Interactive Tab Showcase Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left 7 Columns: Dynamic Viewport Preview */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-white/12 to-white/3 border border-white/10 shadow-2xl backdrop-blur-md"
                >
                  {/* Browser Mockup Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/5 rounded-t-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
                    <span className="text-[10px] text-[#A1A1AA] ml-4 font-mono select-none">erp.kaatechnologies.qa/dashboard</span>
                  </div>
                  
                  {/* Actual Mockup Image */}
                  <div className="relative aspect-[16/10] rounded-b-xl overflow-hidden bg-[#0D0E17]">
                    <Image
                      src="/kaa-screenshot.jpg"
                      alt="KAA ERP Dashboard Overview"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[#090A10]/10 pointer-events-none" />
                  </div>
                </motion.div>
              )}

              {activeTab === "hrms" && (
                <motion.div
                  key="hrms"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-2xl kaa-card border border-white/10 bg-[#151B27]/40 backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                      <Users className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">HRMS &amp; Attendance</h4>
                      <p className="text-xs text-[#A1A1AA]">Automated personnel tracking &amp; records</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Smart Biometrics Sync", desc: "Live integration with attendance machines", status: "Active", val: "100%" },
                      { title: "Qatar Labor Law Payroll", desc: "Automated basic salary, allowance, and WPS exports", status: "Active", val: "WPS Ready" },
                      { title: "Employee Self Service", desc: "Request leave, submit expense receipts, and view WPS slips online", status: "Active", val: "Portal Live" }
                    ].map((item) => (
                      <div key={item.title} className="p-4 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-white mb-0.5">{item.title}</div>
                          <div className="text-xs text-[#A1A1AA]">{item.desc}</div>
                        </div>
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono flex-shrink-0">
                          {item.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "finance" && (
                <motion.div
                  key="finance"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-2xl kaa-card border border-white/10 bg-[#151B27]/40 backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                      <DollarSign className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Advanced Accounting Hub</h4>
                      <p className="text-xs text-[#A1A1AA]">WPS, GL journals, and vendor double-entry audits</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-black/20 border border-white/5 rounded-xl">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Operational Budget Controls</span>
                        <span className="text-xs font-mono text-purple-400">92% Utilized</span>
                      </div>
                      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: "92%" }} />
                      </div>
                    </div>
                    {[
                      { label: "Accounts Receivable", desc: "Automated billing cycles & dunning letters", value: "QAR 542,000" },
                      { label: "Purchase Approvals", desc: "Multi-level authorization hierarchy workflows", value: "Strict Control" }
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center p-3 rounded-lg bg-black/10 border border-white/5">
                        <div>
                          <span className="text-xs font-semibold text-white block">{row.label}</span>
                          <span className="text-[10px] text-[#A1A1AA]">{row.desc}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-white">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "analytics" && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-2xl kaa-card border border-white/10 bg-[#151B27]/40 backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <TrendingUp className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Live Business Intelligence</h4>
                      <p className="text-xs text-[#A1A1AA]">Real-time operational overview tracking</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { l: "Revenue Growth", v: "+18.2%", icon: TrendingUp, c: "text-emerald-400", bg: "bg-emerald-500/10" },
                      { l: "Procurement Efficiency", v: "99.4%", icon: Activity, c: "text-blue-400", bg: "bg-blue-500/10" },
                      { l: "Process Automation", v: "84.2%", icon: Cpu, c: "text-purple-400", bg: "bg-purple-500/10" },
                      { l: "System Health", v: "100.0%", icon: Shield, c: "text-amber-400", bg: "bg-amber-500/10" }
                    ].map((c) => (
                      <div key={c.l} className="p-4 rounded-xl bg-black/20 border border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">{c.l}</span>
                          <div className={`w-6 h-6 rounded-md ${c.bg} flex items-center justify-center`}>
                            <c.icon size={12} className={c.c} />
                          </div>
                        </div>
                        <div className="text-lg font-bold text-white">{c.v}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right 5 Columns: ERP Core Features & Benefits */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal direction="right">
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Unified Business Operations in
                <span className="gradient-text-pink"> One Workspace</span>
              </h3>
              
              {/* Modules Grid Quick Showcase */}
              <div className="grid grid-cols-3 gap-2.5 mb-8">
                {modules.slice(0, 6).map((mod) => (
                  <div
                    key={mod.label}
                    className="p-2.5 rounded-xl bg-white/3 border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#E91E63]/10 flex items-center justify-center mb-1.5">
                      <mod.icon size={12} className="text-[#E91E63]" />
                    </div>
                    <span className="text-[10px] font-bold text-white/90">{mod.label}</span>
                  </div>
                ))}
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#E91E63]/10 border border-[#E91E63]/20 flex-shrink-0">
                      <Check size={10} className="text-[#E91E63]" />
                    </div>
                    <span className="text-sm text-[#A1A1AA]">{b}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToContact}
                  className="btn-pink"
                >
                  Schedule ERP Demo <ArrowRight size={14} />
                </button>
                <button
                  onClick={scrollToContact}
                  className="btn-outline"
                >
                  Learn Modules
                </button>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
