"use client";

import SlideDeck from "./slideDeck";

export default function AboutSection() {
  return (
    <section id="about" className="flex items-center gap-8">
      <div className="w-1/2 rounded-3xl border border-emerald-200/25 bg-emerald-950/30 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold text-emerald-50">About</h2>
        <p className="mt-4 leading-7 text-emerald-50/90">
          Hello! I'm Garrett, a software engineer with a passion for creating
          simple, performant systems and devling into new technologies.
        </p>
        <p className="mt-4 leading-7 text-emerald-50/90">
          At <span className="font-semibold">Paramount</span>, I'm building{" "}
          <span className="italic">Lite</span>, a high-performance frontend app
          that unifies <span className="font-semibold">PlutoTV</span> and{" "}
          <span className="font-semibold">Paramount+</span> for low-end devices.
        </p>
        <p className="mt-4 leading-7 text-emerald-50/90">
          Outside of coding, I love to both play and listen to music, struggle
          to play golf, and lose money trading stocks.
        </p>
      </div>

      <div className="flex w-1/2 justify-center">
        <SlideDeck />
      </div>
    </section>
  );
}
