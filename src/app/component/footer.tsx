export default function Footer() {
  return (
    <footer className="max-w-xl px-10 py-8 text-sm">
      <p>
        Loosely designed in{" "}
        <a
          href="https://www.figma.com/"
          className="font-medium text-slate-400"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (opens in a new tab)"
        >
          Figma
        </a>{" "}
        and coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
