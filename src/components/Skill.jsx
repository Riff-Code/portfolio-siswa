const skillGroups = [
  {
    title: "Network Operations",
    points: ["NOC Monitoring", "Incident Management", "RCA & Escalation"],
    color: "from-sky-100 to-cyan-100",
  },
  {
    title: "Routing & Switching",
    points: ["BGP / OSPF", "VLAN & STP", "High Availability"],
    color: "from-indigo-100 to-blue-100",
  },
  {
    title: "Security",
    points: ["Firewall Policy", "VPN IPsec", "Identity Access (Entra ID)"],
    color: "from-emerald-100 to-cyan-100",
  },
  {
    title: "Tools",
    points: ["Zabbix", "Grafana", "Wireshark & PRTG"],
    color: "from-orange-100 to-yellow-100",
  },
];

const certifications = [
  "Alibaba Cloud Certified Associate",
  "Cyber Security Awareness",
  "Network Monitoring Fundamentals",
  "Google IT Support Professional",
];

export default function Skill() {
  return (
    <>
      <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-lg shadow-sky-100/80 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">About Me</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Network Engineer dengan pendekatan proaktif dan human-centered.
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
            Berpengalaman di lingkungan enterprise untuk melakukan monitoring infrastruktur,
            troubleshooting, dan memastikan layanan IT berjalan stabil. Saya terbiasa
            berkolaborasi lintas tim untuk meningkatkan availability, mengurangi downtime,
            dan menjaga standar keamanan operasional harian.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 md:pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900">Skill Section</h2>
          <p className="mt-2 text-slate-600">Kemampuan teknis utama untuk role NOC / Network Engineer.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`rounded-2xl border border-white bg-gradient-to-br ${group.color} p-6 shadow-md shadow-slate-100 transition hover:-translate-y-1`}
            >
              <h3 className="text-xl font-bold text-slate-800">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {group.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="certification" className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-6">
        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-cyan-50 p-8 md:p-10">
          <h2 className="text-3xl font-black text-slate-900">Certification Section</h2>
          <p className="mt-2 text-slate-600">Sertifikasi profesional yang menunjang kapabilitas saya.</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert} className="rounded-xl border border-indigo-100 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
