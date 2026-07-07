export default function ContactSection() {
  return (
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
  );
}