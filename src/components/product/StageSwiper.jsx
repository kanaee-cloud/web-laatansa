import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

const StageSwiper = () => {
  const image = [
    { id: 1, src: "/images/stage.png" },
    { id: 2, src: "/images/stage-2.png" },
    { id: 3, src: "/images/stage-3.png" },
    { id: 4, src: "/images/stage-4.png" },
  ];

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mx-auto"
      >
        {image.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="flex justify-center items-center h-full mt-10">
              <img src={img.src} alt={`Tent ${img.id}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default StageSwiper;
