import Hero from "../components/Hero";
import Skill from "../components/Skill";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const workflow = [
  {
    title: "Assessment",
    description:
      "Audit topologi, risiko keamanan, dan bottleneck performa berdasarkan kondisi nyata di lapangan.",
  },
  {
    title: "Design & Plan",
    description:
      "Mendesain arsitektur jaringan yang scalable dengan rencana migrasi yang minim downtime.",
  },
  {
    title: "Implementation",
    description:
      "Eksekusi konfigurasi, hardening, dan validasi end-to-end dengan dokumentasi teknis lengkap.",
  },
  {
    title: "Operate & Improve",
    description:
      "Monitoring proaktif, incident handling, dan optimasi berkelanjutan berdasarkan data operasional.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Skill />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-3xl font-bold text-slate-100">Cara Saya Bekerja</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Highlighted Projects</h2>
            <p className="mt-2 text-slate-400">
              Portofolio implementasi jaringan yang siap ditampilkan untuk klien
              maupun recruiter.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
