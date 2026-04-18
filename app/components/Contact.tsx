import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const links = [
  {
    label: "Email",
    href: "mailto:micahmorgan212@gmail.com",
    icon: FaEnvelope,
    display: "micahmorgan212@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/morganmicah200",
    icon: SiGithub,
    display: "github.com/morganmicah200",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/micahmorgan-da/",
    icon: FaLinkedin,
    display: "linkedin.com/in/micahmorgan-da",
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-400 max-w-lg text-base leading-relaxed">
              I&apos;m currently open to full-time data engineering and analytics
              roles. Feel free to reach out — I&apos;d love to connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-indigo-500 hover:text-white transition-all duration-150"
              >
                <link.icon className="text-xl shrink-0 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-150" />
                <span className="text-sm font-medium truncate">{link.display}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-900 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Micah Morgan</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/morganmicah200"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-150"
            >
              <SiGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/micahmorgan-da/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors duration-150"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:micahmorgan212@gmail.com"
              className="hover:text-indigo-400 transition-colors duration-150"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
