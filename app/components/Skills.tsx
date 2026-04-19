"use client";

import {
  SiPython, SiGnubash, SiCplusplus, SiPostgresql, SiMysql,
  SiSnowflake, SiDbt, SiPandas, SiSqlalchemy, SiAiohttp,
  SiDocker, SiApacheairflow, SiGit, SiLinux,
} from "react-icons/si";
import { FaAws, FaDatabase, FaFileExcel, FaChartBar } from "react-icons/fa";
import { IconType } from "react-icons";

type Skill = { name: string; icon?: IconType; color: string };
type Category = { label: string; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: FaDatabase, color: "#818cf8" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    label: "Data & Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "dbt", icon: SiDbt, color: "#FF694A" },
      { name: "pandas", icon: SiPandas, color: "#4DABCF" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#D71F00" },
      { name: "aiohttp", icon: SiAiohttp, color: "#2C5BB4" },
      { name: "PyArrow", color: "#E25B2E" },
    ],
  },
  {
    label: "Cloud & Tools",
    skills: [
      { name: "AWS S3", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#94a3b8" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Excel", icon: FaFileExcel, color: "#217346" },
      { name: "REST APIs", color: "#818cf8" },
    ],
  },
];

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs text-slate-400 cursor-default transition-all duration-150"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(129,140,248,0.35)";
        e.currentTarget.style.color = "#e2e8f0";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.color = "#94a3b8";
      }}
    >
      {skill.icon ? (
        <skill.icon className="text-sm shrink-0" style={{ color: skill.color }} />
      ) : (
        <span
          className="h-2 w-2 rounded-full shrink-0"
          style={{ background: skill.color }}
        />
      )}
      {skill.name}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-14" style={{ background: "var(--bg-panel)" }}>
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs text-slate-600">
            <span className="text-indigo-500">// </span>skills
          </p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col gap-4">
              <h3
                className="font-mono text-xs font-semibold uppercase tracking-widest pb-3"
                style={{
                  color: "#4b5563",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
