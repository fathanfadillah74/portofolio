import style from "../assets/styles/skills.module.scss";

function Skills() {
  return (
    <>
      <div className={style.containerSkills} id="skills">
        <div className={style.cardSkills}>
          <div className={`${style.headerCard} ${style.yellow}`}>
            Using Tools Like
          </div>
          <div className={style.bodyCard}>
            <ul>
              <li>Visual Studio Code</li>
              <hr />
              <li>Github</li>
              <hr />
              <li>Figma</li>
              <hr />
              <li>Photoshop</li>
              <hr />
              <li>Jira</li>
              <hr />
            </ul>
          </div>
        </div>
        <div className={style.cardSkills}>
          <div className={`${style.headerCard} ${style.blue}`}>
            Programming Languages
          </div>
          <div className={style.bodyCard}>
            <ul>
              <li>HTML</li>
              <hr />
              <li>CSS</li>
              <hr />
              <li>SCSS</li>
              <hr />
              <li>JavaScript</li>
              <hr />
              <li>TypeScript</li>
              <hr />
              <li>Playwright</li>
              <hr />
            </ul>
          </div>
        </div>
        <div className={style.cardSkills}>
          <div className={`${style.headerCard} ${style.purple}`}>
            Things I Create
          </div>
          <div className={style.bodyCard}>
            <ul>
              <li>Desktop Website</li>
              <hr />
              <li>Automatic Testing</li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
