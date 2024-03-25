import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Experience from "./components/experience";
import NavbarComponent from "./components/navbar";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <NavbarComponent />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
