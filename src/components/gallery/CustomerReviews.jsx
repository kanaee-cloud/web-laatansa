import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star, Quote, User } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Review Card Component
const ReviewCard = ({
  review,
  rating,
  customerName,
  customerImage,
  date,
  location,
}) => {
  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className=" rounded-xl shadow-lg p-6 mx-3 my-4 min-h-[280px] flex flex-col justify-between border  border-light/30 hover:shadow-xl transition-shadow duration-300">
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-accent opacity-40" />
        <div className="flex items-center gap-1">
          {renderStars(rating)}
          <span className="ml-2 text-sm text-gray-600 font-medium">
            {rating}
          </span>
        </div>
      </div>

      {/* Review Text */}
      <div className="flex-1 mb-4">
        <p className="text-light opacity-70 text-sm leading-relaxed italic">
          "{review}"
        </p>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-light/30">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-yellow-300 flex items-center justify-center overflow-hidden">
          {customerImage ? (
            <img
              src={customerImage}
              alt={customerName}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-6 h-6 text-white" />
          )}
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 text-sm">
            {customerName}
          </h4>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {location && <span>{location}</span>}
            {location && date && <span>•</span>}
            {date && <span>{date}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Carousel Component
const CustomerReviewCarousel = ({ reviews }) => {
  // Default sample data jika tidak ada props reviews
  const defaultReviews = [
    {
      id: 1,
      review:
        "Sangat puas menyewa alat pesta di LaaTansa! Peralatan lengkap, bersih, dan berkualitas. Acara kami jadi lebih meriah. Terima kasih LaaTansa!",
      rating: 5,
      customerName: "Rina Sari",
      customerImage: null,
      date: "2 hari yang lalu",
      location: "Bandung",
    },
    {
      id: 2,
      review:
        "Pelayanan LaaTansa sangat memuaskan. Proses pemesanan mudah, staf ramah dan membantu. Alat pesta yang disewa dalam kondisi baik dan sesuai kebutuhan acara kami.",
      rating: 4.5,
      customerName: "Budi Santoso",
      customerImage: null,
      date: "1 minggu yang lalu",
      location: "Lembang, Bandung",
    },
    {
      id: 3,
      review:
        "LaaTansa pilihan tepat untuk sewa alat pesta di Bandung. Harga terjangkau dengan kualitas barang yang oke. Pengiriman dan penjemputan juga tepat waktu. Recommended!",
      rating: 5,
      customerName: "Dewi Anggraeni",
      customerImage: null,
      date: "3 hari yang lalu",
      location: "Cimahi, Bandung",
    },
    {
      id: 4,
      review:
        "Acara ulang tahun anak saya jadi lebih spesial berkat alat pesta dari LaaTansa. Dekorasi dan perlengkapan lainnya bagus dan anak-anak suka. Terima kasih LaaTansa!",
      rating: 4.8,
      customerName: "Herman Wijaya",
      customerImage: null,
      date: "5 hari yang lalu",
      location: "Kabupaten Bandung",
    },
    {
      id: 5,
      review:
        "Saya merekomendasikan LaaTansa untuk kebutuhan sewa alat pesta. Pilihan alatnya banyak, kondisi terawat, dan pelayanannya profesional. Sukses terus LaaTansa!",
      rating: 4.7,
      customerName: "Siti Aminah",
      customerImage: null,
      date: "1 minggu yang lalu",
      location: "Padalarang, Bandung Barat",
    },
  ];

  const reviewData = reviews || defaultReviews;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Lihat apa yang dikatakan pelanggan kami tentang produk dan layanan
          kami
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
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
              spaceBetween: 30,
            },
          }}
          className="review-swiper"
        >
          {reviewData.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard
                review={review.review}
                rating={review.rating}
                customerName={review.customerName}
                customerImage={review.customerImage}
                date={review.date}
                location={review.location}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-blue-500 !w-10 !h-10 !mt-0 !top-1/2 !-left-5 !bg-white !rounded-full !shadow-lg hover:!bg-blue-50 transition-colors after:!text-sm after:!font-bold"></div>
        <div className="swiper-button-next !text-blue-500 !w-10 !h-10 !mt-0 !top-1/2 !-right-5 !bg-white !rounded-full !shadow-lg hover:!bg-blue-50 transition-colors after:!text-sm after:!font-bold"></div>
      </div>
    </div>
  );
};

export default CustomerReviewCarousel;
