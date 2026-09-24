"use client";

import { useState } from "react";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Paramount",
    period: "June 2023 - Present",
    summary:
      'Co-developed a front-end analytics library called "Nebula" that was highly performant and could be used across any Pluto app. Developed front-end in a new project called "Lite" for developing a highly performant Pluto and Paramount+ converged app.',
    skills: ["Typescript", "Svelte", "React", "Analytics", "CI/CD"],
  },
  {
    role: "Team Lead",
    company: "Northrop Grumman Collaboration Project",
    period: "Aug 2022 -  May 2023",
    summary:
      "Led a team of fellow students to designing and integrating autonomous flight system with real-time fire detection. Integrated Pixhawk, Jetson Nano, and onboard camera with the aircraft's flight system. Ran several succesful test flights, concluding with a live demo.",
    skills: ["Team Managment", "Robotics", "Python", "REST"],
  },
  {
    role: "Researcher",
    company: "NSF REU",
    period: "May 2022 - Aug 2022",
    summary:
      "Created a machine learning image segmentation model that identified shoreline features from UAS photogrammetry. The generated maks were used in Metashape to create more accurate 3D models.",
    skills: [
      "Machine Learning",
      "Python",
      "Jupyter Notebook",
      "Pytorch",
      "Keras",
    ],
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-block">
      <div className="glass-card">
        <h3 className="section-title">Experience</h3>

        <ul className="relative mt-6 space-y-8 pl-8 before:absolute before:bottom-1 before:left-2.5 before:top-1 before:w-px before:bg-emerald-300/40">
          {experiences.map((experience, index) => {
            const isOpen = index === openIndex;
            const panelId = `experience-panel-${index}`;

            return (
              <li
                key={`${experience.role}-${experience.company}`}
                className="relative"
              >
                <span className="absolute -left-6 top-3 h-px w-4 bg-emerald-300/50" />
                <span
                  className={`absolute -left-[1.625rem] top-2 h-2 w-2 rounded-full ring-4 ring-emerald-950/80 transition ${
                    isOpen ? "scale-125 bg-emerald-200" : "bg-emerald-200/50"
                  }`}
                />

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                >
                  <span>
                    <span className="block text-sm font-medium text-emerald-200/90">
                      {experience.period}
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-emerald-50 transition group-hover:text-white">
                      {experience.role}
                    </span>
                    <span className="block text-emerald-200/90">
                      {experience.company}
                    </span>
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`mt-1 h-5 w-5 shrink-0 text-emerald-200/70 transition-transform duration-300 group-hover:text-emerald-100 motion-reduce:transition-none ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="mt-2 leading-7 text-emerald-50/90">
                      {experience.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span key={skill} className="skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
