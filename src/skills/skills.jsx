import "./skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css/bundle';

export function Skills({ sty, data }) {
  const skills = data?.[0]?.store?.[3]?.["skill-detail"] ?? []; // Default to empty array to avoid errors

  return (
    <div id="skill" className="skill_contain">
      <h2 className="skill_con1">{data?.[0]?.store?.[3]?.skill?.skill_title}</h2>
      <h3 className="skill_con2" style={sty}>
        {data?.[0]?.store?.[3]?.skill?.skill_title1}
      </h3>
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={5}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {skills.map((dta, index) => (
            <SwiperSlide key={index}>
              <div className="skill-con">
                <div className="circle">
                  <img className="skill_img" src={dta.img} alt={dta.tit} />
                </div>
                <h3 className="skill-tit">{dta.tit}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
