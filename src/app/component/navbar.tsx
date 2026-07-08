const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-100"
        >
          Garrett Adams
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-emerald-100/90 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-emerald-200/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-50 transition hover:bg-emerald-900/40"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
