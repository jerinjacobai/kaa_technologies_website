"use client";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 ${centered ? "mx-auto" : ""}`}
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            color: "#60a5fa",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="font-display font-bold tracking-tight leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f8fafc" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "#94a3b8", ...(centered ? { margin: "16px auto 0" } : {}) }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
