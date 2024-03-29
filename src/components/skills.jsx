import style from "../assets/styles/skills.module.scss";
import skillsData from "../data/skills";
import React from "react";

function Skills() {
  return (
    <>
      <div className={style.containerSkills} id="skills">
        {/* Looping melalui data keterampilan */}
        {skillsData.map((category, index) => (
          <div className={style.cardSkills} key={index}>
            <div className={`${style.headerCard} ${getStyleColor(index)}`}>
              {category.category}
            </div>
            <div className={style.bodyCard}>
              <ul>
                {/* Looping melalui keterampilan dalam kategori */}
                {category.skills.map((skill, index) => (
                  <React.Fragment key={index}>
                    <li>{skill}</li>
                    {index !== category.skills.length - 1 && <hr />}{" "}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function getStyleColor(index) {
  switch (index) {
    case 0:
      return style.yellow;
    case 1:
      return style.blue;
    case 2:
      return style.purple;
    default:
      return "";
  }
}

export default Skills;
