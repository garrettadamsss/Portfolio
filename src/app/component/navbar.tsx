const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur">
      <nav className="flex w-full items-center justify-between px-10 py-4 md:px-12">
        <a href="#home" aria-label="Go to home section">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto md:h-16" />
        </a>

        <ul className="ml-auto hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
