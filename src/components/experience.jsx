import style from "../assets/styles/experience.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import experienceData from "../data/experience";

function Experience() {
  return (
    <div className={style.experienceContainer} id="experience">
      <div className={style.listEducationContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={3}
          navigation
          speed={2000}
          spaceBetween={50}
          autoplay={{ delay: 4000 }}
        >
          {experienceData.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className={style.cardListEducation}>
                <img src={exp.image} alt="" />
                <span>{exp.period}</span>
                <span>{exp.location}</span>
                <span>{exp.institution}</span>
                <span>{exp.major}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Experience;
