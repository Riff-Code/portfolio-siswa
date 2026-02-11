const focusAreas = [
  {
    title: "Routing & Switching",
    points: ["OSPF / BGP", "VLAN Segmentation", "HSRP & Redundancy"],
  },
  {
    title: "Security & Access",
    points: ["Firewall Policy", "Site-to-Site VPN", "Zero Trust Access"],
  },
  {
    title: "Cloud & Automation",
    points: ["Terraform Basic", "Ansible Playbook", "NetBox & API"],
  },
  {
    title: "Monitoring & Reliability",
    points: ["Zabbix / Grafana", "Capacity Planning", "Incident Response"],
  },
];

const certifications = [
  "Cisco CCNA",
  "MTCNA MikroTik",
  "Fortinet NSE 1-2",
];

export default function Skill() {
  return (
    <>
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Tentang Saya
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-100 md:text-4xl">
            Engineer dengan pendekatan business-first.
          </h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
            Saya percaya infrastruktur jaringan bukan sekadar konfigurasi
            perangkat, tetapi fondasi operasional bisnis. Setiap project saya
            kerjakan dengan target jelas: latency rendah, uptime tinggi, dan
            keamanan yang bisa diaudit. Saya terbiasa bekerja lintas tim IT,
            security, dan manajemen untuk memastikan implementasi berjalan rapi
            dari planning sampai handover dokumentasi.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Keahlian Utama</h2>
            <p className="mt-2 text-slate-400">
              Kombinasi skill teknis dan operasional untuk lingkungan enterprise.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-100">{area.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {area.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
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
