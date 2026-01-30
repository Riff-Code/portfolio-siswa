export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-3xl">
        <span className="text-blue-500 font-semibold tracking-widest">
          PORTFOLIO SISWA
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold">
          Muhammad <span className="text-blue-500">Arif</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Frontend Developer yang fokus membangun website modern menggunakan
          React dan Tailwind CSS.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Lihat Project
          </a>

          <a
            href="#contact"
            className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
