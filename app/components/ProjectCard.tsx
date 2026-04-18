import { IconType } from "react-icons";

export type TechTag = {
  name: string;
  icon?: IconType;
  color: string;
};

export type Project = {
  category: string;
  categoryColor: string;
  title: string;
  bullets: string[];
  tech: TechTag[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Top accent bar */}
      <div className={`h-1 w-full ${project.categoryColor}`} />

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Category badge */}
        <span className="self-start text-xs font-semibold uppercase tracking-widest text-slate-400">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {project.title}
        </h3>

        {/* Bullets */}
        <ul className="flex flex-col gap-2 flex-1">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              {b}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag.name}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600"
            >
              {tag.icon && (
                <tag.icon
                  className="text-sm shrink-0"
                  style={{ color: tag.color }}
                />
              )}
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
