import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Experience from "./components/experience";
import NavbarComponent from "./components/navbar";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <NavbarComponent />
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
