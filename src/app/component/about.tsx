export default function AboutSection() {
  return (
    <section id="about">
      <div className="rounded-3xl border border-emerald-200/25 bg-emerald-950/30 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold text-emerald-50">About</h2>
        <p className="mt-4 leading-7 text-emerald-50/90">
          Hello! I'm Garrett, a software engineer with a passion for creating simple, performant systems and devling into new technologies.
        </p>
        <p className="mt-4 leading-7 text-emerald-50/90">
          At Paramount, I'm building Lite, a high-performance frontend app that unifies PlutoTV and Paramount+ for low-end devices.
        </p>
        <p className="mt-4 leading-7 text-emerald-50/90">
          Outside of coding, I love to both play and listen to music, struggle to play golf, and also tinker with my car. 
        </p>
      </div>
    </section>
  );
}
