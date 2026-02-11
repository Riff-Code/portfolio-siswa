const focusAreas = [
  {
    title: "Network Monitoring",
    points: ["Zabbix & Grafana", "Alert Escalation", "NOC Dashboard"],
  },
  {
    title: "Troubleshooting",
    points: ["Packet Analysis", "Root Cause Analysis", "SLA Recovery"],
  },
  {
    title: "Security Access",
    points: ["Firewall Policy", "VPN IPSec", "Identity Access (Entra ID)"],
  },
  {
    title: "System Operations",
    points: ["Windows & Linux", "Active Directory", "Incident Documentation"],
  },
];

export default function Skill() {
  return (
    <>
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-sky-100 bg-white/80 p-8 shadow-xl shadow-sky-100/60 backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            NOC Engineer yang fokus pada stabilitas layanan dan kecepatan respon.
          </h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-slate-700">
            Saya terbiasa menangani operasional infrastruktur IT dari sisi
            monitoring, user support, hingga manajemen akses menggunakan Active
            Directory dan Microsoft Entra ID. Tujuan saya sederhana: memastikan
            sistem bisnis tetap berjalan aman, cepat, dan minim downtime.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Skill Section</h2>
          <p className="mt-2 text-slate-600">
            Keahlian inti yang saya gunakan untuk menjaga operasional jaringan.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-md shadow-sky-100/40"
            >
              <h3 className="text-xl font-semibold text-slate-900">{area.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {area.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
