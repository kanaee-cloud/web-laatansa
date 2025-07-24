/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, Zap, Monitor, Tent, Speaker, Camera, Fan, Lightbulb } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  const getProductIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('led') || lowerName.includes('lamp') || lowerName.includes('light')) {
      return <Lightbulb className="w-16 h-16 text-yellow-500" />;
    }
    if (lowerName.includes('sound') || lowerName.includes('speaker')) {
      return <Speaker className="w-16 h-16 text-blue-500" />;
    }
    if (lowerName.includes('tenda') || lowerName.includes('tent')) {
      return <Tent className="w-16 h-16 text-green-500" />;
    }
    if (lowerName.includes('fan') || lowerName.includes('ac')) {
      return <Fan className="w-16 h-16 text-cyan-500" />;
    }
    if (lowerName.includes('screen') || lowerName.includes('tv') || lowerName.includes('proyektor')) {
      return <Monitor className="w-16 h-16 text-purple-500" />;
    }
    if (lowerName.includes('gen') || lowerName.includes('power')) {
      return <Zap className="w-16 h-16 text-orange-500" />;
    }
    return <Package className="w-16 h-16 text-gray-500" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="bg-primary text-light rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              >
                <X className="w-5 h-5 text-accent" />
              </button>

              <div className="relative h-48 sm:h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-t-2xl">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {getProductIcon(product.name)}
                    <span className="text-sm text-gray-400 uppercase tracking-wide">No Image Available</span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 capitalize">
                  {product.name}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-gray-600">Harga:</span>
                    <span className="text-xl font-bold text-accent">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base text-gray-600">Kategori:</span>
                    <span className="text-sm sm:text-base text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">
                      {product.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base text-gray-600">Satuan:</span>
                    <span className="text-sm sm:text-base text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">
                      {product.ket}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base text-gray-600">ID Produk:</span>
                    <span className="text-base text-gray-800 font-mono">
                      #{product.id.toString().padStart(3, '0')}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-accent text-white py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-yellow-500 transition-colors"
                  >
                    Hubungi untuk Pemesanan
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
