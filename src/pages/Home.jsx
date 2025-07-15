import React from "react";
import AnimationButton from "../components/common/AnimationButton";
import AutoSlidingGrid from "../components/gallery/AutoSlidingGrid";
import CustomerReviewCarousel from "../components/gallery/CustomerReviews";

const Home = () => {

  const instagram = () => {
    window.open("https://www.instagram.com/laatansapesta/", "_blank");
  }

  const toProduct = () => {
    window.location.href = "/product";
  }

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-screen bg-landing bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        <div className="z-50 text-center flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold text-light ">
            Wujudkan Pesta Impian Anda Menjadi Kenyataan
          </h1>
          <p className="text-light opacity-80">
            Laatansa Pesta: Solusi Lengkap untuk Acara Impian Anda.
          </p>
          <AnimationButton title="Jelajahi Sekarang" onClick={toProduct}/>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
      </section>
      <section className=" px-4 py-16  bg-dark">
        <div className="text-light text-center mx-auto px-12 py-16">
          <h2 className="text-4xl font-bold mb-6 underline decoration-accent tracking-wide">
            About Us
          </h2>
          <p className=" text-gray-700 opacity-70 max-w-xl mx-auto">
            Kami adalah platform yang menghubungkan Anda dengan berbagai vendor
            untuk mewujudkan pesta impian Anda. Temukan semua yang Anda butuhkan
            untuk acara istimewa Anda di sini.
          </p>
        </div>
        <img
          src="/images/venue.png"
          alt="Image"
          className="mx-auto rounded-lg hover:scale-105 transition-all duration-300"
        />
      </section>
      <section className="px-4 py-16  bg-dark text-light">
        <div className="text-left py-16 mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-6 underline decoration-accent tracking-wide">
            Our Galleries
          </h2>
          <p className="text-gray-700 opacity-70 mb-8">
            Jelajahi koleksi foto kami yang menampilkan momen-momen indah dari
            berbagai acara yang telah kami tangani. Setiap gambar adalah bukti
            dedikasi kami untuk menciptakan pengalaman yang tak terlupakan.
          </p>
          <AnimationButton title="Lihat Lainnya" onClick={instagram}/>
        </div>
          <AutoSlidingGrid />
      </section>
      <section>
        <div className="bg-dark text-light py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-2 underline decoration-accent tracking-wide">
            Customer Reviews
          </h2>
          
            <CustomerReviewCarousel />
          
        </div>
      </section>
    </>
  );
};

export default Home;
