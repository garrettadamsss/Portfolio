const projects = [
  {
    title: "Distiller (WIP)",
    description:
      "Web app that illustrates current sentiment and important data points of a given stock",
    skills: ["AI MCP Agents"],
  },
  {
    title: "LeetCode Discord Bot",
    description:
      "Discord Bot that generates random free problems based on selected difficulty.",
    skills: ["Javascript", "NodeJS", "Web Scraping", "APIs"],
  },
  {
    title: "Northrop Grumman Collaboration Project - UAV",
    description: "",
    skills: ["Python", "Robotics"],
  },
  {
    title: "UNET Image Segmentation",
    description:
      "A collection of different image segmentation models with supporting Python code for image processing",
    skills: [
      "Machine Learning",
      "Python",
      "Jupyter Notebook",
      "Pytorch",
      "Keras",
    ],
  },
  {
    title: "My First Website",
    description:
      "Do not judge! This is the first website I created. Its an static website for my father's business and still up today!",
    skills: ["HTML", "CSS", "Javascript", "PHP"],
  },
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="my-15">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold text-emerald-50">
          Featured Projects
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-emerald-200 hover:text-emerald-100"
        >
          View all
        </a>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-emerald-200/20 bg-emerald-950/25 p-6 transition hover:-translate-y-1 hover:border-emerald-200/45"
          >
            <h3 className="text-lg font-semibold text-emerald-50">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-emerald-100/85">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-200/25 bg-emerald-800/40 px-3 py-0.5 text-xs font-medium text-emerald-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
