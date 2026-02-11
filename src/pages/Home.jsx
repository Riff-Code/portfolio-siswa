import Hero from "../components/Hero";
import Skill from "../components/Skill";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const contactInfo = [
  { label: "Email", value: "mrif3419@gmail.com", href: "mailto:mrif3419@gmail.com" },
  { label: "Phone", value: "089516294021", href: "tel:+6289516294021" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-arif-ramadhan-23a759242",
    href: "https://www.linkedin.com/in/muhammad-arif-ramadhan-23a759242",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Skill />

      <section id="projects" className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900">Project Section</h2>
            <p className="mt-2 text-slate-600">
              Contoh project terkait network operation, reliability, security, dan observability.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-6">
        <div className="grid gap-8 rounded-3xl border border-sky-100 bg-white p-8 shadow-lg shadow-sky-100/60 md:grid-cols-[1.1fr_1fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Kontak Section</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Siap membantu monitoring dan peningkatan performa jaringan Anda.
            </h2>
            <p className="mt-3 text-slate-600">
              Jika Anda sedang mencari NOC / Network Engineer untuk support operasional,
              silakan hubungi saya melalui detail di samping.
            </p>
          </div>

          <div className="space-y-3">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-xl border border-sky-100 bg-slate-50 px-4 py-3 transition hover:border-sky-400 hover:bg-sky-50"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="text-sm font-semibold text-slate-800">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
