"use client";

import Image from "next/image";
import { useState } from "react";

const DECK_IMAGES = [
  "/about/headshot.JPEG",
  "/about/golf.JPG",
  "/about/paramount.jpeg",
  "/about/snowboarding.jpg"
];
const STACK_COUNT = 5;

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextImage = () => {
    setActiveIndex((current) => (current + 1) % DECK_IMAGES.length);
  };

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
        <button
          type="button"
          onClick={showNextImage}
          aria-label="Show next photo"
          className="flex cursor-pointer flex-row-reverse [--photo-w:16rem] [&>*+*]:-mr-[calc(var(--photo-w)*0.75)]"
        >
          {Array.from({ length: STACK_COUNT }, (_, index) => {
            const depthFromFront = STACK_COUNT - 1 - index;
            const imageIndex =
              (activeIndex + depthFromFront) % DECK_IMAGES.length;

            return (
              <div
                key={index}
                className="relative h-60 w-[var(--photo-w)] shrink-0 overflow-hidden rounded-2xl border-2 border-emerald-200/25 bg-emerald-950/30 shadow-lg ring-2 ring-emerald-400/10 transition-transform hover:scale-[1.05]"
                style={{ zIndex: index + 1 }}
              >
                <Image
                  src={DECK_IMAGES[imageIndex]}
                  alt={depthFromFront === 0 ? "Photo stack" : ""}
                  fill
                  className="object-cover object-[center_40%]"
                />
              </div>
            );
          })}
        </button>
      </div>
    </section>
  );
}
