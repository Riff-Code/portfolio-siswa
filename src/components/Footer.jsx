export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white/70 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-600 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Muhammad Arif Ramadhan - Network Engineer Portfolio.</p>
        <p>Dibuat dengan React + Tailwind CSS, siap untuk kebutuhan promosi personal branding.</p>
      </div>
    </footer>
  );
}
