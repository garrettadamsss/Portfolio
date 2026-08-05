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

export default function SlideDeck() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextImage = () => {
    setActiveIndex((current) => (current + 1) % DECK_IMAGES.length);
  };

  return (
    <button
      type="button"
      onClick={showNextImage}
      aria-label="Show next photo"
      className="flex cursor-pointer flex-row-reverse [--photo-w:18rem] [&>*+*]:-mr-[calc(var(--photo-w)*0.90)]"
    >
      {Array.from({ length: STACK_COUNT }, (_, index) => {
        const depthFromFront = STACK_COUNT - 1 - index;
        const imageIndex =
          (activeIndex + depthFromFront) % DECK_IMAGES.length;

        return (
          <div
            key={index}
            className="relative h-80 w-[var(--photo-w)] shrink-0 overflow-hidden rounded-2xl transition-transform hover:scale-[1.05]"
            style={{ zIndex: index + 1 }}
          >
            <Image
              src={DECK_IMAGES[imageIndex]}
              alt={depthFromFront === 0 ? "Photo stack" : ""}
              fill
              quality={95}
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 40vw, 80vw"
              className="object-cover object-[center_40%]"
            />
          </div>
        );
      })}
    </button>
  );
}