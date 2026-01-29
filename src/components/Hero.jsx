export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Muhammad Arif
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Frontend Developer • React & Tailwind
        </p>

        <a
          href="#projects"
          className="inline-block bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Lihat Project
        </a>
      </div>
    </section>
  );
}
