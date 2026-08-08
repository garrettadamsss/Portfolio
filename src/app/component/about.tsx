"use client";

import { useId, useState, type ReactNode } from "react";
import SlideDeck from "./slideDeck";

function ExpandableSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="border-b border-emerald-200/10 pb-4 last:border-b-0 last:pb-0">
      <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/95">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="group flex w-full cursor-pointer items-center gap-3 text-left transition-colors hover:text-emerald-100"
        >
          <span
            className="h-px w-5 shrink-0 bg-gradient-to-r from-emerald-400/80 to-emerald-400/0 transition-all duration-300 group-hover:w-7 group-hover:from-emerald-300/90"
            aria-hidden="true"
          />
          <span className="flex-1">{title}</span>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 text-emerald-300/80 transition-transform duration-300 ease-out group-hover:text-emerald-100 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h3>

      <div
        id={contentId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-2 leading-7 text-emerald-50/90">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex items-center gap-8 py-20 md:py-28 lg:py-32"
    >
      <div className="w-1/2 rounded-3xl border border-emerald-200/25 bg-emerald-950/30 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold text-emerald-50">About</h2>
        <p className="mt-4 leading-7 text-emerald-50/90">
          Hello! I'm Garrett, a software engineer with a passion for creating
          simple, performant systems and devling into new technologies.
        </p>

        <div className="mt-6 space-y-4">
          <ExpandableSection title="Current Focus">
            My current focus is on expanding my backend expertise in order to
            claim the <span className="italic">"Full Stack"</span> title.
          </ExpandableSection>

          <ExpandableSection title="Current Role">
            At <span className="font-semibold">Paramount</span>, I'm building{" "}
            <span className="italic">Lite</span>, a high-performance frontend
            app targeting low-end devices. I am currently converging{" "}
            <span className="font-semibold">PlutoTV</span> and{" "}
            <span className="font-semibold">Paramount+</span> into a single,
            shared app.
          </ExpandableSection>

          <ExpandableSection title="Current Project">
            I am currently working on a Distiller and trying to learn how to
            use AI agents.
          </ExpandableSection>

          <ExpandableSection title="Fun Facts">
            Outside of coding, I love to both play and listen to music, struggle
            to play golf, and lose money trading stocks.
          </ExpandableSection>
        </div>
      </div>

      <div className="flex w-1/2 justify-center">
        <SlideDeck />
      </div>
    </section>
  );
}
