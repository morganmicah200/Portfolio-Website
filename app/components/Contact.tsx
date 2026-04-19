"use client";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const links = [
  {
    label: "Email",
    href: "mailto:micahmorgan212@gmail.com",
    icon: FaEnvelope,
    display: "micahmorgan212@gmail.com",
    color: "#818cf8",
  },
  {
    label: "GitHub",
    href: "https://github.com/morganmicah200",
    icon: SiGithub,
    display: "github.com/morganmicah200",
    color: "#e2e8f0",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/micahmorgan-da/",
    icon: FaLinkedin,
    display: "linkedin.com/in/micahmorgan-da",
    color: "#0A66C2",
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="py-24 px-6"
        style={{ background: "var(--bg-panel)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs text-slate-600">
              <span className="text-indigo-500">// </span>contact
            </p>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-500 max-w-lg text-sm leading-relaxed">
              Open to full-time data engineering and analytics roles.
              Feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-150"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <link.icon
                  className="text-lg shrink-0 transition-colors duration-150"
                  style={{ color: link.color }}
                />
                <span className="font-mono text-xs text-slate-400 group-hover:text-slate-200 transition-colors duration-150 truncate">
                  {link.display}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="py-8 px-6"
        style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} Micah Morgan
          </span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/morganmicah200" target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-300 transition-colors duration-150">
              <SiGithub className="text-base" />
            </a>
            <a href="https://www.linkedin.com/in/micahmorgan-da/" target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#0A66C2] transition-colors duration-150">
              <FaLinkedin className="text-base" />
            </a>
            <a href="mailto:micahmorgan212@gmail.com"
              className="text-slate-600 hover:text-indigo-400 transition-colors duration-150">
              <FaEnvelope className="text-base" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
