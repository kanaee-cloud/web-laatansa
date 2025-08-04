import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

const LedSwiper = () => {
  const images = [
    { id: 1, src: "/images/led.png", caption: "LED Screen" },
    { id: 2, src: "/images/led_2.png", caption: "TV Standing" },
    { id: 3, src: "/images/led_3.png", caption: "Proyektor" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
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
                {/* Container gambar dengan posisi relative */}
                <div className="relative">
                  {/* Gambar utama */}
                  <img
                    src={img.src}
                    alt={`LED ${img.id}`}
                    className="max-w-[95%] h-full object-contain rounded-xl shadow-xl"
                  />

                  {/* Watermark: logo di kiri atas gambar seperti di contoh */}
                  <div className="absolute top-2 left-2 z-10">
                    <img
                      src="/images/laatansa.png"
                      alt="Watermark Logo"
                      className="w-16  opacity-80 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Caption for the image */}
                <div className="absolute bottom-2 left-2 z-10 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  {img.caption}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LedSwiper;
