import styles from "../assets/styles/navbar.module.scss";
import sun from "../assets/images/icons/sun.png"

function NavbarComponent() {
  return (
    <>
    <nav>
      <div className={styles.navbar}>
        <div className={styles.name}>
          <img src={sun} alt="" />
          <p>Fathan Fadillah</p>
        </div>
          <ul className={styles.list}>
            <li><a href="">About Me</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </div>
    </nav>
    </>
  );
}

export default NavbarComponent;
