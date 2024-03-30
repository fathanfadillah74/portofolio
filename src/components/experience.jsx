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
import school from "../assets/images/school.webp";
import asyst from "../assets/images/asyst.webp";
import telyu from "../assets/images/telyu.gif";
import binar from "../assets/images/binar.gif";
import silvertech from "../assets/images/silvertech.jfif";

function Experience() {
  return (
    <>
      <div className={style.experienceContainer} id="experience">
        <div className={style.listEducationContainer}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={2}
            navigation
            speed={2000}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: {
                slidesPerView:1
              }
            }}
          >
            <SwiperSlide>
              <div className={style.cardListEducation}>
                <img src={school} alt="" />
                <span>2017-2020</span>
                <span>Jakarta Pusat</span>
                <span>Senior High School 4 Jakarta</span>
                <span>Science major</span>
              </div>
              <div className={style.cardListEducation}>
                <img src={telyu} alt="" />
                <span>2020-2023</span>
                <span>Bandung Regency, Buah Batu</span>
                <span>Telkom University</span>
                <span>D3 Information Systems</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardListEducation}>
                <img src={binar} alt="" />
                <span>2024-Present</span>
                <span>Online Learning</span>
                <span>Binar Academy (Bootcamp)</span>
                <span>Fullstack Web Developer</span>
              </div>
              <div className={style.cardListEducation}>
                <img src={asyst} alt="" />
                <span>2022-2023</span>
                <span>Work From Home</span>
                <span>PT Aero System Indonesia</span>
                <span>Software Enginerr Internship</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cardListEducation}>
                <img src={silvertech} alt="" />
                <span>2023-Present</span>
                <span>Tanjung Duren, Jakarta Barat</span>
                <span>PT SilverTech Indonesia</span>
                <span>Software Enginerr</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Experience;
