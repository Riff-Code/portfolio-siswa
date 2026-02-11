const quickStats = [
  { label: "Pengalaman", value: "4+ Tahun" },
  { label: "Device Dimonitor", value: "350+" },
  { label: "SLA Uptime", value: "99.95%" },
];

const highlights = [
  "NOC Engineer - Indonesia Financial Group (IFG)",
  "Spesialis monitoring, incident response, dan reliability",
  "Berpengalaman Active Directory & Microsoft Entra ID",
  "Fokus pada layanan jaringan stabil untuk kebutuhan bisnis",
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.24),transparent_40%),linear-gradient(140deg,#f8fbff_10%,#e0f2fe_42%,#eef2ff_100%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex rounded-full border border-sky-300 bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Portfolio Pribadi NOC Engineer
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Muhammad Arif Ramadhan,
            <span className="block text-sky-600">Network Operations Engineer</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            Saya membantu perusahaan menjaga sistem IT tetap online, aman, dan
            responsif melalui monitoring proaktif, troubleshooting terarah, serta
            perbaikan berkelanjutan untuk kebutuhan operasional bisnis.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-700"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-bold text-sky-700">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="network-glow absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="network-glow absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-indigo-300/30 blur-3xl" />

          <div className="relative rounded-3xl border border-white/70 bg-white/85 p-6 shadow-2xl shadow-sky-100 backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                Profil Singkat
              </p>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                Open to Work
              </span>
            </div>

            <div className="mb-5 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-indigo-50 p-4">
              <p className="text-lg font-bold text-slate-900">Muhammad Arif Ramadhan</p>
              <p className="text-sm text-slate-600">NOC / Network Engineer - Jakarta</p>
            </div>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className="network-card flex items-center gap-3 rounded-xl border border-sky-100 bg-white p-4"
                  style={{ animationDelay: `${index * 0.18}s` }}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
