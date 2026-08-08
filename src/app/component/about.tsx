"use client";

import SlideDeck from "./slideDeck";

function SubsectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className= "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/95">
      <span
        className="h-px w-5 shrink-0 bg-gradient-to-r from-emerald-400/80 to-emerald-400/0"
        aria-hidden="true"
      />
      {children}
    </h3>
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

        <div className="mt-6 space-y-6">
          <div>
            <SubsectionHeading>Current Focus</SubsectionHeading>
            <p className="mt-2 leading-7 text-emerald-50/90">
              My current focus is on expanding my backend expertise in order to
              claim the <span className="italic">"Full Stack"</span> title.
            </p>
          </div>

          <div>
            <SubsectionHeading>Current Role</SubsectionHeading>
            <p className="mt-2 leading-7 text-emerald-50/90">
              At <span className="font-semibold">Paramount</span>, I'm building{" "}
              <span className="italic">Lite</span>, a high-performance frontend
              app targeting low-end devices. I am currently converging{" "}
              <span className="font-semibold">PlutoTV</span> and{" "}
              <span className="font-semibold">Paramount+</span> into a single,
              shared app.
            </p>
          </div>

          <div>
            <SubsectionHeading>Current Project</SubsectionHeading>
            <p className="mt-2 leading-7 text-emerald-50/90">
              I am currently working on a Distiller and trying to learn how to
              use AI agents.
            </p>
          </div>

          <div>
            <SubsectionHeading>Fun Facts</SubsectionHeading>
            <p className="mt-2 leading-7 text-emerald-50/90">
              Outside of coding, I love to both play and listen to music,
              struggle to play golf, and lose money trading stocks.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-1/2 justify-center">
        <SlideDeck />
      </div>
    </section>
  );
}
