export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-black/40 border border-white/10 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <a
          href={project.demo}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          className="text-gray-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
