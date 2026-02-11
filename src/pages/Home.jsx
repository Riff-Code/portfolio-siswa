import Hero from "../components/Hero";
import Skill from "../components/Skill";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const certifications = [
  {
    name: "Alibaba Cloud Certified Associate",
    issuer: "Alibaba Cloud",
    year: "2025",
    detail: "Cyber Security Awareness & Cloud Fundamentals",
  },
  {
    name: "Cisco CCNA Training",
    issuer: "Cisco Networking Academy",
    year: "2024",
    detail: "Routing, switching, dan best practice enterprise network",
  },
  {
    name: "Microsoft 365 Identity Admin (Learning Path)",
    issuer: "Microsoft Learn",
    year: "2024",
    detail: "Identity management, provisioning, dan secure access",
  },
];

const contactList = [
  { label: "Email", value: "mrif3419@gmail.com", href: "mailto:mrif3419@gmail.com" },
  { label: "WhatsApp", value: "089516294021", href: "https://wa.me/6289516294021" },
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

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Project Section</h2>
            <p className="mt-2 text-slate-600">
              Studi kasus implementasi yang relevan untuk kebutuhan promosi profesional
              sebagai NOC / Network Engineer.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-sky-50 to-cyan-50 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Certification Section</h2>
          <p className="mt-2 text-slate-700">
            Sertifikasi dan pelatihan untuk meningkatkan kredibilitas dan kepercayaan
            klien.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.name}
                className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  {cert.issuer}
                </p>
                <h3 className="mt-2 font-semibold text-slate-900">{cert.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{cert.detail}</p>
                <p className="mt-3 text-xs font-medium text-slate-500">Tahun {cert.year}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-xl shadow-sky-100/50 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Contact Section
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Siap untuk kebutuhan promosi dan kolaborasi project.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Anda bisa menghubungi saya untuk posisi NOC, network engineer, maupun
              kebutuhan optimasi infrastruktur IT perusahaan.
            </p>
          </div>

          <div className="space-y-3">
            {contactList.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-xl border border-sky-100 bg-sky-50/70 px-4 py-3 transition hover:border-sky-300 hover:bg-sky-100"
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
