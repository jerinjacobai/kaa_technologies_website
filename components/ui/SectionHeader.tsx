"use client";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge: string;
  title: ReactNode;
  subtitle: string;
}

export default function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-neon-cyan">{badge}</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-cyan" />
      </div>
      <h2
        className="font-display font-bold leading-tight mb-6 text-white"
        style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
      >
        {title}
      </h2>
      <p className="max-w-2xl mx-auto text-base text-slate-400">{subtitle}</p>
    </div>
  );
}
