import Footer from "./component/footer";
import Navbar from "./component/navbar";
import AboutSection from "./component/about";
import ProjectsSection from "./component/projects";
import HomeSection from "./component/home";
import ExperienceSection from "./component/experience";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 md:px-10">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
