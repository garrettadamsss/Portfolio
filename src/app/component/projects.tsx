import Image from "next/image";

const projects = [
  {
    title: "Distiller (WIP)",
    description:
      "Dashboard that runs my custom built analysis on given stocks in order to improve investing decisions.",
    skills: ["AI MCP Agents"],
    imageSrc: "/projects/wip.png",
    // link: 'https://www.adamsbros.com/'
  },
  {
    title: "LeetCode Discord Bot",
    description:
      "This Discord bot generates coding challenges based on the difficulty a user selects. Utilizes Discord NodeJS module and web scraping data pipeline. ",
    skills: ["Javascript", "NodeJS", "Web Scraping", "APIs"],
    imageSrc: "/projects/discordBot.png",
    link: 'https://github.com/garrettadamsss/LeetcodeBot'

  },
  {
    title: "Northrop Grumman Collaboration Project - UAV",
    description:
      "Lead a team in collaboration with Northrop Grumman focused on building an autonomous UAV system using flight software and components.",
    skills: ["Python", "Robotics"],
    imageSrc: "/projects/ngcp.png",
    link: 'https://github.com/NGCP22-23/UAV'
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
    imageSrc: "/projects/nsf.png",
    link: 'https://github.com/garrettadamsss/UNET_Image_Segmentation'
  },
  {
    title: "My First Website",
    description:
      "This first website was a simple static business landing page built for my father’s company that is still running today. This is where I learned the basics of web development.",
    skills: ["HTML", "CSS", "Javascript", "PHP"],
    imageSrc: "/projects/adamsbros.png",
    link: "https://www.adamsbros.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-15 scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="section-title">Featured Projects</h2>
        </div>
      </div>

      <div className="mt-6 grid w-full gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="glass-card group relative block min-h-[320px] w-full overflow-hidden transition hover:-translate-y-1 hover:border-emerald-200/75"
          >
            <Image
              className={`absolute inset-0 object-cover`}
              src={project.imageSrc}
              alt="project image"
              fill
              quality={85}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition duration-300 group-hover:from-black/95 group-hover:via-black/55"
              aria-hidden="true"
            />
            <div className="relative flex min-h-[320px] items-end p-6">
              <div className="w-full ">
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
          </a>
        ))}
      </div>
    </section>
  );
}
