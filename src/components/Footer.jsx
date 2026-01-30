export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-16 text-center">
      <h3 className="text-2xl font-bold mb-4">Tertarik Bekerja Sama?</h3>

      <p className="text-gray-400 mb-6">
        Hubungi saya melalui email atau GitHub
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="mailto:email@gmail.com"
          className="text-blue-500 hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/username"
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
