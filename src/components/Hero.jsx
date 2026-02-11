const stats = [
  { value: "4+ Tahun", label: "Pengalaman Infrastruktur" },
  { value: "99.95%", label: "Target Availability" },
  { value: "30+", label: "Implementasi Site & Branch" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_left,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
            Network Engineer Portfolio
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-100 md:text-6xl">
            Membangun jaringan yang <span className="text-cyan-300">aman</span>,
            stabil, dan siap skala.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Saya Muhammad Arif, Network Engineer yang berfokus pada enterprise
            routing, network security, monitoring, dan otomasi infrastruktur.
            Halaman ini saya gunakan untuk mendokumentasikan project yang sudah
            saya kerjakan.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-500 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Diskusi Kebutuhan
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10">
          <p className="mb-5 text-sm font-medium uppercase tracking-wide text-slate-300">
            Key Metrics
          </p>
          <div className="space-y-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-slate-950/80 p-4"
              >
                <p className="text-2xl font-bold text-cyan-300">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
