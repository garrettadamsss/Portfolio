import Footer from "./footer";
import Navbar from "./navbar";

console.log('here');
export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 md:px-10">
        <section id="home" className="grid gap-10 py-14 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/90">Software Developer</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Building useful, fast, and reliable web experiences.
            </h1>
            <p className="max-w-xl text-base text-emerald-100/90 md:text-lg">
              I am Garrett Adams. I create practical full-stack products with a focus on clean UI, maintainable code,
              and strong user experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-emerald-200/70 px-5 py-2.5 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-900/40"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200/25 bg-emerald-950/30 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-widest text-emerald-200/80">Current Focus</p>
            <ul className="mt-4 space-y-3 text-emerald-50/95">
              <li>TypeScript and Next.js app architecture</li>
              <li>Performance optimization and accessibility</li>
              <li>API design and backend integration</li>
            </ul>
          </div>
        </section>

        <section id="about" className="rounded-3xl border border-emerald-200/25 bg-emerald-950/30 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-emerald-50">About</h2>
          <p className="mt-4 max-w-3xl leading-7 text-emerald-50/90">
            I enjoy turning ideas into polished products. My workflow emphasizes readable components, reusable patterns,
            and measurable improvements to speed and usability.
          </p>
        </section>

        <section id="projects" className="py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-emerald-50">Featured Projects</h2>
            <a href="#" className="text-sm font-medium text-emerald-200 hover:text-emerald-100">
              View all
            </a>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
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
            ].map((project) => (
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

        <section
          id="contact"
          className="rounded-3xl border border-emerald-200/25 bg-emerald-950/35 p-8 text-center backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-emerald-50">Let&apos;s Work Together</h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-100/90">
            Looking for someone to build or improve your next web project? Reach out and I can help shape the right
            solution.
          </p>
          <a
            href="mailto:garrett@example.com"
            className="mt-6 inline-block rounded-full bg-emerald-200 px-6 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100"
          >
            garrett@example.com
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
