import Footer from "./component/footer";
import Navbar from "./component/navbar";
import AboutSection from "./component/about";
import ProjectsSection from "./component/projects";
import HomeSection from "./component/home";
import ExperienceSection from "./component/experience";

export default function Main() {
  return (
    <div className="min-h-screen text-foreground">
      <main className="mx-auto max-w-screen-2xl px-6 py-12">
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
