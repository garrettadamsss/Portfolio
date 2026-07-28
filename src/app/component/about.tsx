export default function AboutSection() {
  return (
    <section id="about">
      <div className="rounded-3xl border border-emerald-200/25 bg-emerald-950/30 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold text-emerald-50">About</h2>
        <p className="mt-4 leading-7 text-emerald-50/90">
          Hello I'm Garrett and welcome to my portfolio! I'm a software engineer
          with a passion for writing clean code and trying new things. I love
          creating not only clean interfaces but clean code as well.
        </p>
        <p className="mt-4 leading-7 text-emerald-50/90">
          In my current role at Paramount, I working on Lite, a highly
          performant client app targeting low-end devices, converging PlutoTV
          and Paramount brands into a single application.
        </p>
        <p className="mt-4 leading-7 text-emerald-50/90">
          Outside of coding, I have a huge passion for cars, golfing, and music.
        </p>
      </div>
    </section>
  );
}
