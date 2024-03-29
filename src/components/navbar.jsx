import styles from "../assets/styles/navbar.module.scss";
import sun from "../assets/images/icons/sun.png";
import moon from "../assets/images/icons/moon.png";
import { useState } from "react";

function NavbarComponent() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    const body = document.body;
    if (isLightTheme) {
      setIsLightTheme(!isLightTheme);
      body.classList.add("is-active");
      body.style.backgroundColor = "#222831";
      body.style.color = "#ffffff";
    } else {
      setIsLightTheme(!isLightTheme);
      body.classList.remove("is-active");
      body.style.backgroundColor = "#fff9f1";
      body.style.color = "#000000";
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.name}>
          <img src={isLightTheme ? sun : moon} alt="" onClick={toggleTheme} />
          <p>Fathan Fadillah</p>
        </div>
        <ul className={styles.list}>
          <li>
            <a href="#about" onClick={() => scrollToSection("about")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => scrollToSection("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => scrollToSection("experience")}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;
