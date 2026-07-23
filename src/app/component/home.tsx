import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="flex gap-10 py-20 items-center justify-center">
      <div className="space-y-6">
        <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-2 border-emerald-200/25 ring-3 ring-emerald-400/10">
          <Image
            src="/headshot6.JPEG"
            alt="Profile"
            fill
            priority
            quality={95}
            sizes="256px"
            className="object-cover object-[center_40%]"
          />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-6xl font-semibold text-emerald-50">Garrett Adams</p>
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/90 ml-1">
          Software Engineer
        </p>
        <div className="flex items-center gap-4 text-emerald-100 ml-1">
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
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 translate-y-[1px]"
              aria-hidden="true"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.473 0 16 .513 16 1.146v13.708c0 .633-.527 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.433.08-.587.173-.433.568-.881 1.233-.881.87 0 1.216.665 1.216 1.639v3.864h2.401V9.252c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.679 0 7.225 0 7.225h2.4z" />
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
              className="h-7 w-7 translate-y-[3px]"
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
