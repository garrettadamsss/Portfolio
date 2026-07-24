import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex gap-10 py-20 items-center justify-center"
    >
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
            href="https://github.com/garrettadamsss"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
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
            className="transition hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>

          <a
            href="mailto:garrettadamssss@gmail.com"
            aria-label="Email"
            className="transition hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke-width="2"
                stroke-linecap="round"
              />
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
