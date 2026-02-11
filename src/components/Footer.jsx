const contactLinks = [
  { label: "Email", value: "arif.network@gmail.com", href: "mailto:arif.network@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/arif-network", href: "https://linkedin.com/in/arif-network" },
  { label: "GitHub", value: "github.com/arif-netops", href: "https://github.com/arif-netops" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/80 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </p>
          <h3 className="mt-3 text-3xl font-bold text-slate-100">
            Butuh engineer untuk upgrade infrastruktur jaringan?
          </h3>
          <p className="mt-4 max-w-2xl text-slate-400">
            Saya terbuka untuk project implementasi, optimasi performa, maupun
            dukungan operasional network.
          </p>
        </div>

        <div className="space-y-3">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="block rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 transition hover:border-cyan-300/40"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {item.label}
              </p>
              <p className="text-sm font-medium text-slate-200">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
