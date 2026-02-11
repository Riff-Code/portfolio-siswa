const quickStats = [
  { label: "Uptime SLA", value: "99.95%" },
  { label: "Resolved Incident", value: "1200+" },
  { label: "Network Devices", value: "500+" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_45%),radial-gradient(circle_at_bottom_right,#cffafe,transparent_35%),linear-gradient(180deg,#ffffff, #f8fafc)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
            NOC & Network Engineer
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            Bright Network Portfolio <br />
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Monitoring. Reliability. Secure Access.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Saya Muhammad Arif Ramadhan, Network Operations Center engineer yang fokus
            pada monitoring 24/7, incident response, dan menjaga infrastruktur tetap
            aman serta stabil di berbagai skala bisnis.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-600"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-600"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="animate-float-card rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-xl shadow-sky-100 md:p-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-100 to-indigo-100 p-6">
              <div className="absolute -right-8 -top-8 h-24 w-24 animate-pulse rounded-full bg-sky-300/40" />
              <div className="absolute -bottom-6 -left-6 h-20 w-20 animate-pulse rounded-full bg-cyan-300/50" />

              <svg viewBox="0 0 420 250" className="relative z-10 w-full" role="img" aria-label="Network engineer illustration">
                <rect x="15" y="35" width="390" height="180" rx="22" fill="#ffffff" opacity="0.9" />
                <rect x="40" y="65" width="120" height="80" rx="10" fill="#0ea5e9" />
                <rect x="170" y="65" width="120" height="80" rx="10" fill="#6366f1" opacity="0.88" />
                <rect x="300" y="65" width="80" height="80" rx="10" fill="#14b8a6" />
                <path d="M100 150 L100 190 L210 190" stroke="#0284c7" strokeWidth="7" fill="none" strokeLinecap="round" />
                <path d="M230 150 L230 190 L340 190" stroke="#4f46e5" strokeWidth="7" fill="none" strokeLinecap="round" />
                <circle cx="210" cy="190" r="16" fill="#0f172a" />
                <circle cx="340" cy="190" r="13" fill="#0f172a" />
                <circle cx="100" cy="190" r="13" fill="#0f172a" />
                <circle cx="80" cy="50" r="8" fill="#22d3ee" className="animate-ping-soft" />
                <circle cx="210" cy="40" r="8" fill="#38bdf8" className="animate-ping-soft" />
                <circle cx="335" cy="50" r="8" fill="#818cf8" className="animate-ping-soft" />
              </svg>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {quickStats.map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 p-3 text-center">
                  <p className="text-lg font-extrabold text-slate-900">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
