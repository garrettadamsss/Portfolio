export default function AboutSection() {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Paramount",
      period: "June 2023 - Present",
      summary:
        'Co-developed a front-end analytics library called "Nebula" that was highly performant and could be used across any Pluto app. Developed front-end in a new project called "Lite" for developing a highly performant Pluto and Paramount+ converged app.',
    },
    {
      role: "Team Lead",
      company: "Northrop Grumman Collaboration Project",
      period: "Aug 2022 -  May 2023",
      summary:
        "Led a team of fellow students to designing and integrating autonomous flight system with real-time fire detection. Integrated Pixhawk, Jetson Nano, and onboard camera with the aircraft's flight system. Ran several succesful test flights, concluding with a live demo.",
    },
    {
      role: "Computer Science Student",
      company: "University Projects",
      period: "May 2022 - Aug 2022",
      summary:
        "Created a machine learning image segmentation model that identified shoreline features from UAS photogrammetry. The generated maks were used in Metashape to create more accurate 3D models.",
    },
  ];

  return (
    <section id="about">
      <div className="rounded-3xl border border-emerald-200/25 bg-emerald-950/30 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold text-emerald-50">About</h2>
        <p className="mt-4 max-w-3xl leading-7 text-emerald-50/90">
          I enjoy turning ideas into polished products. My workflow emphasizes
          readable components, reusable patterns, and measurable improvements to
          speed and usability.
        </p>
      </div>
    </section>
  );
}
