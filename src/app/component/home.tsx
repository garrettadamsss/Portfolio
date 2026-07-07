 export default function HomeSection() {
    return (
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
    )
 }