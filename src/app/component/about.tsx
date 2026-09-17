export default function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="glass-card p-8">
        <h2 className="section-title">About</h2>
        <p className="mt-4 leading-7 text-emerald-50/90">
          Hello, I&apos;m Garrett. I love building and learning new things, and
          to me, software engineering is one of the best ways to do both. That
          is what led me to pursue this path, and I&apos;m excited to keep
          building projects and expanding my skill set.
        </p>
        <div className="mt-6 space-y-4">
          <div className="border-b border-emerald-200/10 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/95">
              <span className="flex items-center gap-3">
                <span
                  className="h-px w-5 shrink-0 bg-gradient-to-r from-emerald-400/80 to-emerald-400/0"
                  aria-hidden="true"
                />
                <span>Current Focus</span>
              </span>
            </h3>
            <p className="pt-2 leading-7 text-emerald-50/90">
              My experience is currently stronger on the frontend, but my goal
              is to become a well-rounded full-stack engineer. I&apos;m working
              toward that by building projects with backend technologies and
              gaining more industry experience
            </p>
          </div>

          <div className="border-b border-emerald-200/10 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/95">
              <span className="flex items-center gap-3">
                <span
                  className="h-px w-5 shrink-0 bg-gradient-to-r from-emerald-400/80 to-emerald-400/0"
                  aria-hidden="true"
                />
                <span>Current Role</span>
              </span>
            </h3>
            <p className="pt-2 leading-7 text-emerald-50/90">
              At <span className="font-semibold">Paramount</span>, I&apos;m
              helping to build
              <span className="italic"> Lite</span>, a high-performance frontend
              app targeting low-powered devices. I am currently converging the
              frontend
              <span className="font-semibold"> PlutoTV</span> and
              <span className="font-semibold"> Paramount+</span> into a single,
              shared app.
            </p>
          </div>

          <div className="border-b border-emerald-200/10 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/95">
              <span className="flex items-center gap-3">
                <span
                  className="h-px w-5 shrink-0 bg-gradient-to-r from-emerald-400/80 to-emerald-400/0"
                  aria-hidden="true"
                />
                <span>Current Project</span>
              </span>
            </h3>
            <p className="pt-2 leading-7 text-emerald-50/90">
              The aim of
              <span className="italic"> Stock Distiller </span> is creating
              repeadatable system that executes a particular analysis structure
              I have developed. In its current infancy stage it is a crude Agent
              Skill, but the end goal is to create a custom interface for the
              agent output.
            </p>
          </div>

          <div className="border-b border-emerald-200/10 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/95">
              <span className="flex items-center gap-3">
                <span
                  className="h-px w-5 shrink-0 bg-gradient-to-r from-emerald-400/80 to-emerald-400/0"
                  aria-hidden="true"
                />
                <span>Hobbies</span>
              </span>
            </h3>
            <p className="pt-2 leading-7 text-emerald-50/90">
              I have a lot of hobbies, including snowboarding, surfing, and MMA,
              but my real passions are getting better at golf and trying to make
              money through stock investing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
