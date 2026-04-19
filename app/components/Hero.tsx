"use client";

import { FaChevronDown, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const stats = [
  { value: "1M+", label: "movies extracted", color: "#22d3ee" },
  { value: "9.66M", label: "CMS records ingested", color: "#818cf8" },
  { value: "3", label: "pipelines built", color: "#fbbf24" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-3.5rem)] flex items-center px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-8 py-16">

        {/* Terminal prompt */}
        <div className="font-mono text-sm flex items-center gap-1.5">
          <span className="text-emerald-400">micah@portfolio</span>
          <span className="text-slate-600">:</span>
          <span className="text-indigo-400">~</span>
          <span className="text-slate-500">$</span>
          <span className="text-slate-300 ml-1">whoami</span>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <h1 className="font-mono font-bold leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}>
            MICAH
          </h1>
          <h1 className="font-mono font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", color: "#818cf8" }}>
            MORGAN
            <span
              className="cursor-blink inline-block ml-2 rounded-sm align-middle"
              style={{
                width: "0.55em",
                height: "0.85em",
                background: "#818cf8",
                opacity: 0.9,
              }}
            />
          </h1>
        </div>

        {/* Role */}
        <div className="font-mono text-base sm:text-lg text-slate-400 flex items-center gap-3">
          <span className="text-indigo-500">&gt;</span>
          <span>Data Engineer &amp; Analyst</span>
        </div>

        {/* Description */}
        <p className="text-slate-400 max-w-lg leading-relaxed text-sm sm:text-base">
          Building end-to-end data pipelines, designing analytical data models,
          and turning raw data into clear insights. BBA in Computer Information
          Systems, University of Central Arkansas.
        </p>

        {/* Stats */}
        <div
          className="grid grid-cols-3 max-w-lg rounded-xl overflow-hidden border"
          style={{
            background: "var(--bg-surface)",
            borderColor: "var(--border-accent)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 p-4"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(129,140,248,0.12)" : "none",
              }}
            >
              <span className="font-mono text-xl sm:text-2xl font-bold" style={{ color: s.color }}>
                {s.value}
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-slate-500 leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://github.com/morganmicah200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-150"
            style={{ background: "#1e293b", border: "1px solid rgba(255,255,255,0.08)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(129,140,248,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            <SiGithub className="text-base" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/micahmorgan-da/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-150"
            style={{ background: "#0A66C2", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <FaLinkedin className="text-base" />
            LinkedIn
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
            style={{
              color: "#818cf8",
              border: "1px solid rgba(129,140,248,0.3)",
              background: "rgba(129,140,248,0.05)",
            }}
          >
            view my work →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-colors duration-150"
        style={{ color: "rgba(99,102,241,0.4)" }}
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">scroll</span>
        <FaChevronDown className="text-xs animate-bounce" />
      </a>
    </section>
  );
}
