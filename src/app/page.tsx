import Footer from "./component/footer";
import Navbar from "./component/navbar";
import AboutSection from "./component/about";
import ProjectsSection from "./component/projects";
import HomeSection from "./component/home";
import ExperienceSection from "./component/experience";


// Add the logo to the bottom left corner that appears and sticks there once user scrolls past the navbar. 
export default function Main() {
  return (
    <div className="min-h-screen text-foreground">
      <main className="mx-auto max-w-screen-xl px-10 md:px-16 lg:px-30">
        {/* <Navbar /> */}
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
