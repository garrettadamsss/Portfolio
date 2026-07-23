const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur">
      <nav className="flex w-full items-center justify-between px-10 py-4 md:px-12">
        <a href="#home" aria-label="Go to home section">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto md:h-16" />
        </a>

        <ul className="ml-auto hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base text-emerald-100/90 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
