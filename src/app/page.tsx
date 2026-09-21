// import Footer from "./component/footer";
import Navbar from "./component/navbar";
import AboutSection from "./component/about";
import ProjectsSection from "./component/projects";
import HomeSection from "./component/home";
import ExperienceSection from "./component/experience";


export default function Main() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main className="mx-auto max-w-screen-xl px-5 md:px-16 lg:px-30">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
