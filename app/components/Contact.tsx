import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const links = [
  {
    label: "Email",
    href: "mailto:micahmorgan212@gmail.com",
    icon: FaEnvelope,
    display: "micahmorgan212@gmail.com",
    color: "hover:text-indigo-600",
  },
  {
    label: "GitHub",
    href: "https://github.com/morganmicah200",
    icon: SiGithub,
    display: "github.com/morganmicah200",
    color: "hover:text-slate-900",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/micahmorgan-da/",
    icon: FaLinkedin,
    display: "linkedin.com/in/micahmorgan-da",
    color: "hover:text-[#0A66C2]",
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-indigo-600 tracking-widest uppercase">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Contact
            </h2>
            <p className="text-slate-500 max-w-lg">
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
                className={`group flex items-center gap-3 px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 transition-all duration-150 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm ${link.color}`}
              >
                <link.icon className="text-xl shrink-0 transition-colors duration-150" />
                <span className="text-sm font-medium truncate">{link.display}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Micah Morgan</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/morganmicah200"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 transition-colors duration-150"
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
              className="hover:text-indigo-600 transition-colors duration-150"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
