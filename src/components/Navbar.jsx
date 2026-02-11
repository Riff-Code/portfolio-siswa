const navItems = [
  { href: "#hero", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Project" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-semibold tracking-wide text-slate-100">
          Arif<span className="text-cyan-400">NetOps</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition hover:text-cyan-300 focus-visible:text-cyan-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
