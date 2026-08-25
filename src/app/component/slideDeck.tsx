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

  const showPrevImage = () => {
    setActiveIndex(
      (current) => (current - 1 + DECK_IMAGES.length) % DECK_IMAGES.length,
    );
  };

  const showNextImage = () => {
    setActiveIndex((current) => (current + 1) % DECK_IMAGES.length);
  };

  const selectImage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-full w-full min-h-[24rem] max-w-[34rem] overflow-hidden rounded-3xl bg-black shadow-2xl shadow-black/30">
      <div
        key={activeIndex}
        className="absolute inset-0 will-change-transform"
        style={{ animation: "deck-slide-in 700ms ease-out" }}
      >
        <Image
          src={DECK_IMAGES[activeIndex]}
          alt={`Selected photo ${activeIndex + 1}`}
          fill
          quality={95}
          sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 32rem, (min-width: 768px) 45vw, 92vw"
          className="object-cover object-[center_50%]"
          priority
        />
      </div>

      <button
        type="button"
        onClick={showPrevImage}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-emerald-50 transition-colors hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-50"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M14.5 5.5 8 12l6.5 6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={showNextImage}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-emerald-50 transition-colors hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-50"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M9.5 5.5 16 12l-6.5 6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

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
                    isActive
                      ? "scale-110"
                      : "opacity-80 hover:opacity-100"
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
                  {isActive ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 56 56"
                      className="absolute inset-0 h-full w-full"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="54"
                        height="54"
                        rx="7"
                        fill="none"
                        stroke="rgba(236, 253, 245, 0.95)"
                        strokeWidth="3"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                        pathLength="100"
                        style={{ animation: "deck-countdown 5s linear backwards" }}
                      />
                    </svg>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
