export default function Skill() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Fetch API",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10">Skill & Teknologi</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
