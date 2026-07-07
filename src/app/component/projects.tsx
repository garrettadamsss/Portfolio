const projects = [
  {
    title: "Project One",
    description: "A full-stack app with authentication, dashboards, and API integrations.",
  },
  {
    title: "Project Two",
    description: "A fast landing page system with reusable components and analytics.",
  },
  {
    title: "Project Three",
    description: "A data-driven tool focused on clear charts and practical workflows.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-14">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold text-emerald-50">Featured Projects</h2>
        <a href="#" className="text-sm font-medium text-emerald-200 hover:text-emerald-100">
          View all
        </a>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-emerald-200/20 bg-emerald-950/25 p-6 transition hover:-translate-y-1 hover:border-emerald-200/45"
          >
            <h3 className="text-lg font-semibold text-emerald-50">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-emerald-100/85">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}