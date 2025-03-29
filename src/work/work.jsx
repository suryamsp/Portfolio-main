import './work.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

export function Work({ sty, data }) {
  const workData = data?.[0]?.store?.[4]?.work;
  const workDetails = data?.[0]?.store?.[4]?.['wo-detail'];

  return (
    <div id="work" className="work-cont">
      {workData && (
        <>
          <h2 className="work_cont1">{workData.wo_title}</h2>
          <h3 className="work_cont2" style={sty}>{workData.wo_title1}</h3>
        </>
      )}

      <div className="work-flex">
        <div className="work_con">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={10}
            breakpoints={{
              50: { slidesPerView: 1 },
              450: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
          >
            {workDetails?.map((dta, index) => (
              <SwiperSlide key={index}>
                <div className="cont">
                  <img className="work_img" src={dta.imge} alt={dta.name || "Project Image"} />
                  <div className="text-con">
                    <p className="work_con1">{dta.code}</p>
                    <h2 className="work_con2">{dta.name}</h2>
                    <p className="work_con3">{dta.sum}</p>
                    <div className="btn">
                      {dta.net && (
                        <a href={dta.net} target="_blank" rel="noopener noreferrer" className="work_btn">
                          LIVE DEMO
                        </a>
                      )}
                      {dta.git && (
                        <a href={dta.git} target="_blank" rel="noopener noreferrer" className="work_btn">
                          <GitHubIcon />
                          <p className="work_name">SOURCE CODE</p>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
