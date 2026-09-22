const projects = [
  {
    title: "Distiller (WIP)",
    description:
      "This stock sentiment dashboard surfaces current market mood, key metrics, and the most relevant signals in one place.",
    skills: ["AI MCP Agents"],
    accent:
      "bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.9),_rgba(17,24,39,0.92)_55%,_rgba(2,6,23,1)_100%)]",
  },
  {
    title: "LeetCode Discord Bot",
    description:
      "This Discord bot generates fresh coding challenges based on the difficulty a user selects.",
    skills: ["Javascript", "NodeJS", "Web Scraping", "APIs"],
    accent:
      "bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.8),_rgba(15,23,42,0.95)_55%,_rgba(2,6,23,1)_100%)]",
  },
  {
    title: "Northrop Grumman Collaboration Project - UAV",
    description:
      "This collaboration focused on building and refining a UAV system using practical robotics workflows and testing.",
    skills: ["Python", "Robotics"],
    accent:
      "bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.75),_rgba(15,23,42,0.96)_58%,_rgba(2,6,23,1)_100%)]",
  },
  {
    title: "UNET Image Segmentation",
    description:
      "This project compares multiple image segmentation models and includes the Python pipelines needed to process data and train them.",
    skills: [
      "Machine Learning",
      "Python",
      "Jupyter Notebook",
      "Pytorch",
      "Keras",
    ],
    accent:
      "bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.8),_rgba(15,23,42,0.96)_58%,_rgba(2,6,23,1)_100%)]",
  },
  {
    title: "My First Website",
    description:
      "This first website was a simple static business landing page built for my father’s company and is still running today.",
    skills: ["HTML", "CSS", "Javascript", "PHP"],
    accent:
      "bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.8),_rgba(15,23,42,0.95)_58%,_rgba(2,6,23,1)_100%)]",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-15">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title">Featured Projects</h2>
        <a
          href="#"
          className="text-sm font-medium text-emerald-200 hover:text-emerald-100"
        >
          View all
        </a>
      </div>

      <div className="mt-6 grid w-full gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-card group relative min-h-[320px] w-full overflow-hidden transition hover:-translate-y-1 hover:border-emerald-200/75"
          >
            <div
              className={`absolute inset-0 ${project.accent}`}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/15 transition duration-300 group-hover:from-slate-950/95 group-hover:via-slate-950/55"
              aria-hidden="true"
            />

            <div className="relative flex min-h-[320px] items-end p-6">
              <div className="w-full translate-y-6 opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-50/90">
                  Project Details
                </div>
                <h3 className="mt-4 text-xl font-semibold text-emerald-50">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-100/85">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 transition duration-300 ease-out group-hover:-translate-y-3 group-hover:opacity-0">
              <div className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-50/90">
                {project.title}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
