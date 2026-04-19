"use client";

import {
  SiPython, SiSnowflake, SiDbt, SiApacheairflow,
  SiDocker, SiPandas, SiPostgresql, SiMysql, SiSqlalchemy,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    category: "ETL Pipeline",
    accentColor: "#818cf8",
    title: "TMDB Movie Data Pipeline",
    bullets: [
      "Extracted 1M+ movies via async concurrent batching (aiohttp, asyncio, 50-thread semaphore); staged through medallion architecture on AWS S3",
      "Modeled star schema in dbt (1 fact, 4 dims); orchestrated by Airflow DAG in Docker with S3 checkpointing for fault-tolerant extraction",
      "Validated with 28 pytest + 14 dbt tests across 1.1M movie IDs",
    ],
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "AWS S3", icon: FaAws, color: "#FF9900" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "dbt", icon: SiDbt, color: "#FF694A" },
      { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "pandas", icon: SiPandas, color: "#4DABCF" },
    ],
    link: "https://github.com/morganmicah200/tmdb-pipeline",
  },
  {
    category: "Analytics",
    accentColor: "#34d399",
    title: "Medicare Analytics Pipeline",
    bullets: [
      "Ingested 9.66M CMS Medicare claim records into PostgreSQL via bulk COPY INTO for optimized load performance",
      "Kimball-style star schema in dbt; Power BI dashboard revealing providers bill ~4x Medicare reimbursement — Alaska #1 at $101/service",
      "Validated with 22 pytest tests",
    ],
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "dbt", icon: SiDbt, color: "#FF694A" },
      { name: "Power BI", color: "#F2C811" },
      { name: "pandas", icon: SiPandas, color: "#4DABCF" },
    ],
    link: "https://github.com/morganmicah200/medicare-analytics",
  },
  {
    category: "Financial Data",
    accentColor: "#fbbf24",
    title: "S&P 500 Market Analytics",
    bullets: [
      "ETL pipeline ingesting S&P 500 market data (Alpha Vantage) and macroeconomic indicators (FRED API)",
      "50-day MAs, 30-day rolling volatility, Pearson correlation across 1,000 observations",
      "Strong macro-market relationships: CPI +0.9998, Fed Funds Rate −0.9073, Unemployment −0.9907",
    ],
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#D71F00" },
      { name: "pandas", icon: SiPandas, color: "#4DABCF" },
      { name: "REST APIs", color: "#818cf8" },
    ],
    link: "https://github.com/morganmicah200/sp500-analytics",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-14" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs text-slate-600">
            <span className="text-indigo-500">// </span>projects
          </p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-slate-500 max-w-xl text-sm">
            End-to-end data pipelines and analytics systems built with production-grade tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
