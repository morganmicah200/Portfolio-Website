"use client";

import { FaChevronDown } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center px-6 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#c7d2fe 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-100 opacity-50 blur-[100px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-100 opacity-35 blur-[80px] pointer-events-none translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-6 py-20">
        {/* Available badge */}
        <div className="self-start flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to opportunities
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-indigo-500 tracking-widest uppercase">
            Hi, I&apos;m
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-slate-900 leading-none tracking-tight">
            Micah
            <br />
            <span className="text-indigo-600">Morgan</span>
          </h1>
        </div>

        <h2 className="text-xl sm:text-2xl font-medium text-slate-500 tracking-wide">
          Data Engineer &amp; Analyst
        </h2>

        <p className="max-w-lg text-base sm:text-lg text-slate-600 leading-relaxed">
          I build end-to-end data pipelines, design analytical data models, and
          turn raw data into clear insights.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://github.com/morganmicah200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors duration-150 shadow-sm"
          >
            <SiGithub className="text-base" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/micahmorgan-da/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#004182] transition-colors duration-150 shadow-sm"
          >
            <FaLinkedin className="text-base" />
            LinkedIn
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-600 text-sm font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-colors duration-150"
          >
            View my work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-500 transition-colors duration-150"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase">
          Scroll
        </span>
        <FaChevronDown className="text-sm animate-bounce" />
      </a>
    </section>
  );
}
