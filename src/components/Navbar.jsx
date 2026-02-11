const navItems = [
  { href: "#hero", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#projects", label: "Project" },
  { href: "#skills", label: "Skill" },
  { href: "#certifications", label: "Sertifikasi" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold tracking-wide text-slate-900">
          Arif<span className="text-sky-500">NOC</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition hover:text-sky-600 focus-visible:text-sky-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 md:inline-flex"
        >
          Hubungi Saya
        </a>
      </nav>
    </header>
  );
}
