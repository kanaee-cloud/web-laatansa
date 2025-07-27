/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import { products } from "../data/Product";
import LightingSwiper from "../components/product/LightingSwiper";
import ProductTable from "../components/product/ProductTable";
import TentSwiper from "../components/product/StageSwiper";
import StageSwiper from "../components/product/StageSwiper";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

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
            <div className="flex flex-col items-center justify-between mb-6">
              <LightingSwiper />
              <ProductTable data={products} category="Lighting" />

              <StageSwiper />
              <ProductTable data={products} category="Tent" />

              <TentSwiper />
              <ProductTable data={products} category="Decorations" />
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
