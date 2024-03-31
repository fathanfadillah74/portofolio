import style from "../assets/styles/aboutMe.module.scss";
import photoMe from "../assets/images/photoMe.jpeg";
import photoMe2 from "../assets/images/photoMe2.jpeg";

function AboutMe() {
  return (
    <>
      <div className={style.containerAbout}>
        <div className={style.photoContainer}>
          <div className={style.card}>
            <img src={photoMe2} alt=""/>
            <span>Pre Graduation</span>
          </div>
          <div className={style.card}>
            <img src={photoMe} alt="" />
            <span>25/08/2023</span>
          </div>
        </div>
        <div className={style.textContainer}>
          <span>
            I'm Fathan Fadillah and I'm a software developer. Born in Jakarta on
            May 23 2002, I graduated from Telkom University in 2020 with a
            diploma in information systems.
          </span>
          <span>
            Becoming a developer is a challenge in itself for me, where time is
            spent studying to increase my knowledge and survive in this field.
            but because of that, I also feel comfortable to be part of this
            field
          </span>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
