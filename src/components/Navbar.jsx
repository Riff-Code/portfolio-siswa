export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">
          Portfolio<span className="text-blue-500">.</span>
        </span>

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#hero" className="hover:text-white">
            Home
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
