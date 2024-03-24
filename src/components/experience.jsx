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

function Experience() {
  return (
    <>
      <div className={style.experienceContainer}>
        <div className={style.listEducationContainer}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 4000 }}
            speed={1000}
          >
            <SwiperSlide>
              <div className={style.listEducation}>
                <span>2017-2020</span>
                <span>Jakarta Pusat</span>
                <span>Senior High School 4 Jakarta</span>
                <span>Science major</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.listEducation}>
                <span>2020-2023</span>
                <span>Bandung Regency, Buah Batu</span>
                <span>Telkom University</span>
                <span>D3 Information Systems</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={style.listEducationContainer}>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 4000 }}
            speed={1000}
          >
            <SwiperSlide>
              <div className={style.listEducation}>
                <span>2017-2020</span>
                <span>Jakarta Pusat</span>
                <span>Senior High School 4 Jakarta</span>
                <span>Science major</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.listEducation}>
                <span>2020-2023</span>
                <span>Bandung Regency, Buah Batu</span>
                <span>Telkom University</span>
                <span>D3 Information Systems</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Experience;
