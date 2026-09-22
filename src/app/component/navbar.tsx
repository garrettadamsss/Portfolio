"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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
    <header className="fixed bottom-15 left-20 z-50">
      <nav
        ref={navRef}
        aria-label="Primary"
        className="flex flex-col items-start"
        onMouseEnter={() => {
          if (!window.matchMedia("(hover: none)").matches) setOpen(true);
        }}
        onMouseLeave={() => {
          if (!window.matchMedia("(hover: none)").matches) setOpen(false);
        }}
        onFocus={() => {
          if (!window.matchMedia("(hover: none)").matches) setOpen(true);
        }}
        onBlur={(event) => {
          if (window.matchMedia("(hover: none)").matches) return;
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setOpen(false);
          }
        }}
      >
        <div
          className={`grid w-max transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="flex min-h-0 min-w-max flex-col justify-end overflow-hidden">
            <ul className="flex flex-col gap-4 py-4">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-1 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${index * 70}ms` : "0ms",
                  }}
                >
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          aria-label="Open nav menu"
          aria-expanded={open}
          className="block rounded-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-200"
          onClick={(event) => {
            if (!window.matchMedia("(hover: none)").matches) return;
            event.preventDefault();
            setOpen((value) => !value);
          }}
        >
          <Image
            src="/logo.png"
            alt=""
            className="h-10 w-auto md:h-15"
            width={56}
            height={56}
            quality={95}
          />
        </a>
      </nav>
    </header>
  );
}
