export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="bg-gray-800 text-sm px-3 py-1 rounded-full">
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
