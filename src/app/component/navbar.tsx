"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];

        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <header>
      <nav
        aria-label="Section progress"
        className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:block"
      >
        <ul className="flex flex-col items-end gap-3">
          {navLinks.map((link) => {
            const isActive = link.href === activeHref;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center justify-end gap-2 py-1"
                >
                  <span
                    className={`text-xs font-medium uppercase tracking-[0.18em] transition-opacity duration-200 motion-reduce:transition-none ${
                      isActive
                        ? "text-emerald-100 opacity-100"
                        : "text-emerald-200/70 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`w-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                      isActive
                        ? "h-6 bg-emerald-200"
                        : "h-1.5 bg-emerald-200/35 group-hover:bg-emerald-200/70"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
