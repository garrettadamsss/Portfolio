import Footer from "./component/footer";
import Navbar from "./component/navbar";
import AboutSection from "./component/about";
import ProjectsSection from "./component/projects";
import ContactSection from "./component/contact";
import HomeSection from "./component/home";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 md:px-10">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
