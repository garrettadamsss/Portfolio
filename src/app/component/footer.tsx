export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-emerald-100/85 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Garrett Adams. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
          <a href="mailto:garrett@example.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
