export default function HomeSection() {
  return (
    <section
      id="home"
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-3xl border border-emerald-300/20 bg-emerald-950/25 px-6 py-10 shadow-[0_24px_80px_rgba(2,18,12,0.35)] backdrop-blur-sm md:px-10 md:py-14">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-emerald-200/25 bg-emerald-800/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
            Portfolio 2026
          </p>
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold leading-tight text-emerald-50 md:text-7xl">
              Garrett Adams
            </h1>
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-200/90">
              Software Engineer
            </p>
          </div>
          <p className="max-w-3xl text-base leading-8 text-emerald-100/90 md:text-lg">
            I build reliable, user-focused software with a strong foundation in
            full-stack engineering. Explore my projects and experience to see
            what I have been building.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-950 transition hover:bg-emerald-200"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-xl border border-emerald-200/45 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-100 transition hover:border-emerald-100 hover:text-white"
            >
              About Me
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 text-emerald-100">
          <a
            href="https://github.com/garrettadamsss"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="Github"
            className="transition hover:text-white"
          >
            <svg viewBox="0 0 48 48" fill="currentColor" className="h-7 w-7">
              <path d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/garrettadamsss/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="transition hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>

          <a
            href="mailto:garrettadamssss@gmail.com"
            aria-label="Email"
            title="Send me an email"
            className="transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="2 2 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>

          <a
            href="/GarrettAdams_Resume.pdf"
            download
            aria-label="Download resume"
            className="transition hover:text-white"
            title="Resume"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M12 11v6" />
              <path d="m9 14 3 3 3-3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
