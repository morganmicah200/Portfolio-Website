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
      "Built a Positive Pay export-file system handling tab-delimited, comma-delimited, and fixed-length formats",
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
    <section id="experience" className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs text-slate-600">
            <span className="text-indigo-500">// </span>experience
          </p>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background
          </h2>
        </div>

        <div className="relative flex flex-col">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px hidden sm:block"
            style={{ background: "rgba(129,140,248,0.15)" }}
          />

          {entries.map((entry, i) => (
            <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
              {/* Icon dot */}
              <div className="hidden sm:flex shrink-0 items-start pt-0.5">
                <div
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid rgba(129,140,248,0.25)",
                  }}
                >
                  {entry.type === "education" ? (
                    <FaGraduationCap className="text-indigo-400 text-sm" />
                  ) : (
                    <FaBriefcase className="text-slate-500 text-sm" />
                  )}
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-xl p-5 flex flex-col gap-3"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-mono font-semibold text-slate-100 leading-snug">
                      {entry.org}
                    </h3>
                    <p className="font-mono text-xs text-indigo-400 mt-0.5">
                      {entry.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5 shrink-0">
                    <span className="font-mono text-xs text-slate-500 whitespace-nowrap">
                      {entry.period}
                    </span>
                    {entry.location && (
                      <span className="font-mono text-xs text-slate-600">
                        {entry.location}
                      </span>
                    )}
                  </div>
                </div>

                {entry.details && (
                  <ul className="flex flex-col gap-1.5">
                    {entry.details.map((d, j) => (
                      <li key={j} className="text-xs text-slate-400 flex gap-2.5">
                        <span className="text-indigo-500 font-mono shrink-0">›</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {entry.bullets && (
                  <ul className="flex flex-col gap-2">
                    {entry.bullets.map((b, j) => (
                      <li key={j} className="text-xs text-slate-400 flex gap-2.5 leading-relaxed">
                        <span className="text-indigo-500 font-mono shrink-0 mt-0.5">›</span>
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
