export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white px-4 py-8 md:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Muhammad Arif Ramadhan — NOC / Network Engineer Portfolio.</p>
        <p className="font-medium text-slate-600">Built with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}
