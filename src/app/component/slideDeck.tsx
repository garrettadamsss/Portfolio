"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DECK_IMAGES = [
  "/about/headshot.JPEG",
  "/about/paramount.jpeg",
  "/about/golf.JPG",
  "/about/snowboarding.jpg",
];

export default function SlideDeck() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % DECK_IMAGES.length);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex]);

  const selectImage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-full w-full min-h-[24rem] max-w-[34rem] overflow-hidden rounded-3xl border border-white/20">
      {DECK_IMAGES.map((imageSrc, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={imageSrc}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={imageSrc}
              alt={`Selected photo ${index + 1}`}
              fill
              quality={95}
              sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 32rem, (min-width: 768px) 45vw, 92vw"
              className="object-cover object-[center_50%]"
            />
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/55 to-transparent p-3">
        <ul className="flex items-center justify-center gap-2 pb-2">
          {DECK_IMAGES.map((imageSrc, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={imageSrc}>
                <button
                  type="button"
                  onClick={() => selectImage(index)}
                  aria-label={`Show photo ${index + 1}`}
                  aria-pressed={isActive}
                  className={`relative h-14 w-14 transition ${
                    isActive ? "scale-110" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imageSrc}
                    alt=""
                    fill
                    quality={85}
                    sizes="56px"
                    className="object-cover rounded-lg"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
