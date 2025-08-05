import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

const TentSwiper = () => {
  const images = [
    { id: 1, src: "/images/tenda.png", caption: "Tenda Dekorasi" },
    { id: 2, src: "/images/tenda_2.png", caption: "Tenda Rigging" },
    { id: 3, src: "/images/tenda_3.png", caption: "" },
    { id: 4, src: "/images/tenda_4.png", caption: "Tenda Plafon" },
    { id: 5, src: "/images/tenda_5.png", caption: "Tenda Transparan" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]}
        className="mySwiper"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative flex justify-center items-center h-full">
              <div className="relative">
                <div className="relative">
                  <img
                    src={img.src}
                    alt={`Tent ${img.id}`}
                    className="w-full h-full object-contain rounded-xl shadow-xl"
                  />
                  <div className="absolute top-2 left-2 z-10">
                    <img
                      src="/images/laatansa.png"
                      alt="Watermark Logo"
                      className="w-16 opacity-80 pointer-events-none"
                    />
                  </div>
                  <div className="absolute bottom-2 left-2 z-10 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                    {img.caption}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TentSwiper;

