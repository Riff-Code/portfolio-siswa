import Hero from "../components/Hero";
import Skill from "../components/Skill";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Skill />

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Project Terbaik</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
