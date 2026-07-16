export default function HomeSection() {
  return (
    <section id="home" className="flex gap-5 py-14 items-center justify-center">
      <div className="space-y-6">
        <div className="h-64 w-64 overflow-hidden rounded-lg ">
          <img
            src="/headshot.jpeg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-6xl font-semibold text-emerald-50">Garrett Adams</p>
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/90 ml-1">
          Software Engineer
        </p>
        <div className="flex items-center gap-4 text-emerald-100 ml-1 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.21.68-.48v-1.68c-2.78.61-3.37-1.2-3.37-1.2-.46-1.15-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1 .08 1.53 1.03 1.53 1.03.88 1.52 2.32 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.1-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.59 9.59 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.66.65.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.92.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M4.98 3.5A2.5 2.5 0 0 0 2.5 6a2.5 2.5 0 0 0 2.48 2.5A2.5 2.5 0 0 0 7.5 6 2.5 2.5 0 0 0 4.98 3.5ZM2.98 9h4V21h-4V9Zm7 0h3.83v1.71h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.44c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.41-2.08 2.87V21h-4V9Z" />
            </svg>
          </a>

          <a
            href="mailto:garrett@example.com"
            aria-label="Email"
            className="transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7 translate-y-[2px]"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>

          <a
            href="/resume.pdf"
            download
            aria-label="Download resume"
            className="transition hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6 translate-y-[2px]"
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
