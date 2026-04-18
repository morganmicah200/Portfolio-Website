import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

type ExperienceEntry = {
  type: "work" | "education";
  org: string;
  role: string;
  period: string;
  location?: string;
  bullets?: string[];
  details?: string[];
};

const entries: ExperienceEntry[] = [
  {
    type: "education",
    org: "University of Central Arkansas",
    role: "Bachelor of Business Administration",
    period: "Aug 2021 – May 2025",
    location: "Conway, AR",
    details: [
      "Major: Computer Information Systems",
      "Minor: Computer Science",
    ],
  },
  {
    type: "work",
    org: "TaxPro",
    role: "Software Support Analyst",
    period: "Jun 2025 – Nov 2025",
    bullets: [
      "Queried MySQL databases to generate client-facing reports supporting data analysis and troubleshooting",
      "Delivered data-focused presentations using Excel to elected county Tax Collectors at the 2025 User's Conference",
      "Built a Positive Pay export-file system handling tab-delimited, comma-delimited, and fixed-length formats using the org's proprietary web toolkit",
      "Automated routine data-processing tasks with Bash scripts using grep, awk, and cron jobs",
    ],
  },
  {
    type: "work",
    org: "Walmart",
    role: "Customer Service Associate",
    period: "2022 – 2026",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 hidden sm:block" />

          {entries.map((entry, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Icon dot */}
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-slate-200 shadow-sm">
                  {entry.type === "education" ? (
                    <FaGraduationCap className="text-indigo-500 text-base" />
                  ) : (
                    <FaBriefcase className="text-slate-500 text-base" />
                  )}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug">
                      {entry.org}
                    </h3>
                    <p className="text-indigo-600 font-medium text-sm">
                      {entry.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5 shrink-0">
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                      {entry.period}
                    </span>
                    {entry.location && (
                      <span className="text-xs text-slate-400">
                        {entry.location}
                      </span>
                    )}
                  </div>
                </div>

                {entry.details && (
                  <ul className="flex flex-col gap-1">
                    {entry.details.map((d, j) => (
                      <li key={j} className="text-sm text-slate-600 flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {entry.bullets && (
                  <ul className="flex flex-col gap-2 mt-1">
                    {entry.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-slate-600 flex gap-2 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
