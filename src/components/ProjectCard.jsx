export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/65 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          {project.category}
        </span>
        <span className="text-xs text-slate-500">{project.year}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-slate-100 group-hover:text-cyan-300">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 leading-relaxed text-slate-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5 text-sm">
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-cyan-300 hover:underline"
        >
          Case Study
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 hover:text-white hover:underline"
        >
          Repository
        </a>
      </div>
    </article>
  );
}
