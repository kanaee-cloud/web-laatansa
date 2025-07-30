/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import { products } from "../data/Product";
import LightingSwiper from "../components/product/LightingSwiper";
import ProductTable from "../components/product/ProductTable";
import TentSwiper from "../components/product/TentSwiper";
import StageSwiper from "../components/product/StageSwiper";
import AirSwiper from "../components/product/AirSwiper";

const Product = () => {
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleOpenModal = (product) => {
  //   setSelectedProduct(product);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setTimeout(() => setSelectedProduct(null), 300);
  // };

  return (
    <>
      <section className="min-h-screen bg-dark shadow-lg text-light px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Header />
          <div className="container mx-auto px-4 pt-4">
            <div className="flex flex-col  justify-between mb-6">

              <div className="text-left mb-4 bg-primary p-4 rounded-lg mt-5">
                <h1 className="text-3xl font-bold text-left">Ketentuan</h1>
                <ul className="list-disc pl-6 text-sm text-gray-300 mt-5">
                  <li>Harga dibawah adalah untuk pemakaian dalam kota</li>
                  <li>Pemakaian luar kota dikenai beban 2 kali lipat dari harga normal ditambah biaya transportasi (tergantung daerah)</li>
                  <li>Uang muka 50 % dari harga sewa, pelunasan maksimal 1 minggu sebelum event</li>
                  <li>Pemakaian minimal u/panggung dan tenda 40M2 (tenda standar)</li>
                  <li>Harga sewaktu-waktu dapat berubah</li>
                </ul>
              </div>

              <TentSwiper />
              <ProductTable data={products} category="Tent" />

              <LightingSwiper />
              <ProductTable data={products} category="Lighting" />

              <ProductTable data={products} category="Sound System" />

              <StageSwiper />
              <ProductTable data={products} category="Decorations" />

              <AirSwiper />
              <ProductTable data={products} category="Air Conditioner" />

              <ProductTable data={products} category="Special Effects" />
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={handleOpenModal}
                  />
                ))
              ) : (
                <div className="col-span-full opacity-70 p-4 text-center ">
                  <Info className="w-12 h-12 mx-auto mb-2 text-gray-500" />
                  <p className="text-xl font-bold">Product not found</p>
                </div>
              )}
            </div> */}
          </div>
        </motion.div>
      </section>
      {/* <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      /> */}
    </>
  );
};

export default Product;
