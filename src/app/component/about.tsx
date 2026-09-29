"use client";

import { useRef, useState } from "react";

const aboutParagraphClass = "leading-7 text-emerald-50/90";

const tabs = [
  {
    id: "focus",
    label: "Current Focus",
    content: (
      <p className={aboutParagraphClass}>
        My experience is currently stronger on the frontend, but my goal is to
        become a full-stack engineer. I&apos;m working toward that
        by building projects with backend technologies and gaining more industry
        experience.
      </p>
    ),
  },
  {
    id: "role",
    label: "Current Role",
    content: (
      <p className={aboutParagraphClass}>
        At <span className="font-semibold">Paramount</span>, I&apos;m helping to
        build
        <span className="italic"> Lite</span>, a high-performance frontend app
        targeting low-powered devices. I&apos;m currently working with my team on converging the
        frontends of
        <span className="font-semibold"> PlutoTV</span> and
        <span className="font-semibold"> Paramount+</span> into a single, shared
        app.
      </p>
    ),
  },
  {
    id: "project",
    label: "Current Project",
    content: (
      <p className={aboutParagraphClass}>
        The aim of
        <span className="italic"> Stock Analyzer </span> is to create a
        repeatable system that executes a particular analysis structure I have
        developed. In its early stages, it is a crude Agent Skill, but
        the end goal is to create a custom interface for the agent output.
      </p>
    ),
  },
  {
    id: "hobbies",
    label: "Hobbies",
    content: (
      <p className={aboutParagraphClass}>
        I love to snowboard, surf, train in MMA, and
        <span className="italic"> try </span>
        to make money through stock investing.
      </p>
    ),
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const offset =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (offset === 0) return;

    event.preventDefault();
    const index = tabs.findIndex((tab) => tab.id === activeTab);
    const next = tabs[(index + offset + tabs.length) % tabs.length];
    setActiveTab(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section id="about" className="section-block">
      <div className="glass-card">
        <h2 className="section-title">About</h2>
        <p className={`mt-4 ${aboutParagraphClass}`}>
          Hello, I&apos;m Garrett. I chose to be a software engineer so that I could build
          practically anything I set my mind to. I am dedicated to creating concise,
          quality work and expanding my knowledge through industry experience and personal
          projects.
        </p>

        <div className="mt-8">
          <div
            role="tablist"
            aria-label="More about Garrett"
            onKeyDown={onTabKeyDown}
            className="flex flex-wrap gap-2 border-b border-emerald-200/10 pb-4"
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  ref={(node) => {
                    tabRefs.current[tab.id] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`about-tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`about-panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    isActive
                    ? "border-emerald-200/60 bg-emerald-200/15 text-emerald-50"
                    : "border-emerald-200/20 text-emerald-200/70 hover:border-emerald-200/40 hover:text-emerald-100"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              role="tabpanel"
              id={`about-panel-${tab.id}`}
              aria-labelledby={`about-tab-${tab.id}`}
              hidden={tab.id !== activeTab}
              className="pt-5"
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
