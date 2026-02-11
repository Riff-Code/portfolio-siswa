export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-sky-100 bg-white p-6 shadow-md shadow-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          {project.category}
        </span>
        <span className="text-xs text-slate-500">{project.year}</span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-sky-600">{project.title}</h3>

      <p className="mt-3 flex-1 leading-relaxed text-slate-600">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-sky-100 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5 text-sm">
        <a href={project.demo} target="_blank" rel="noreferrer" className="font-semibold text-sky-600 hover:underline">
          Case Study
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="font-medium text-slate-600 hover:text-slate-900 hover:underline">
          Repository
        </a>
      </div>
    </article>
  );
}
