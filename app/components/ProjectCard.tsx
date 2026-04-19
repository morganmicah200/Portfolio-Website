"use client";

import { IconType } from "react-icons";
import { SiGithub } from "react-icons/si";

export type TechTag = {
  name: string;
  icon?: IconType;
  color: string;
};

export type Project = {
  category: string;
  accentColor: string;
  title: string;
  bullets: string[];
  tech: TechTag[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group flex flex-col rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-accent)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-full" style={{ background: project.accentColor }} />

      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Category */}
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: project.accentColor }}>
          // {project.category}
        </span>

        {/* Title */}
        <h3 className="font-mono text-base font-semibold text-slate-100 leading-snug">
          {project.title}
        </h3>

        {/* Bullets */}
        <ul className="flex flex-col gap-2.5 flex-1">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-xs text-slate-400 leading-relaxed">
              <span className="mt-1 shrink-0 text-indigo-500 font-mono">›</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((tag) => (
            <span
              key={tag.name}
              className="flex items-center gap-1.5 px-2 py-1 rounded font-mono text-[10px] font-medium"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#94a3b8",
              }}
            >
              {tag.icon && (
                <tag.icon className="text-xs shrink-0" style={{ color: tag.color }} />
              )}
              {tag.name}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="pt-3 mt-auto"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors duration-150"
          >
            <SiGithub />
            view on github
          </a>
        </div>
      </div>
    </div>
  );
}
