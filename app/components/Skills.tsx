import {
  SiPython,
  SiGnubash,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiSnowflake,
  SiDbt,
  SiPandas,
  SiSqlalchemy,
  SiAiohttp,
  SiDocker,
  SiApacheairflow,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaAws, FaDatabase, FaFileExcel, FaChartBar } from "react-icons/fa";
import { IconType } from "react-icons";

type Skill = {
  name: string;
  icon?: IconType;
  color: string;
};

type Category = {
  label: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: FaDatabase, color: "#6366f1" },
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
      { name: "pandas", icon: SiPandas, color: "#150458" },
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
      { name: "Linux", icon: SiLinux, color: "#374151" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Excel", icon: FaFileExcel, color: "#217346" },
      { name: "REST APIs", color: "#6366f1" },
    ],
  },
];

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-150 cursor-default">
      {skill.icon ? (
        <skill.icon className="text-xl shrink-0" style={{ color: skill.color }} />
      ) : (
        <span
          className="h-4 w-4 rounded-full shrink-0 border-2"
          style={{ borderColor: skill.color, backgroundColor: `${skill.color}20` }}
        />
      )}
      <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase">
            Toolkit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">
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
