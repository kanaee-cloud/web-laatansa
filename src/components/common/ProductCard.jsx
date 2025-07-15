/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Package, Zap, Monitor, Tent, Speaker, Camera, Fan, Lightbulb } from 'lucide-react';

const ProductCard = ({ product, onOpenModal }) => {
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
      return <Lightbulb className="w-8 h-8 text-yellow-500" />;
    }
    if (lowerName.includes('sound') || lowerName.includes('speaker')) {
      return <Speaker className="w-8 h-8 text-blue-500" />;
    }
    if (lowerName.includes('tenda') || lowerName.includes('tent')) {
      return <Tent className="w-8 h-8 text-green-500" />;
    }
    if (lowerName.includes('fan') || lowerName.includes('ac')) {
      return <Fan className="w-8 h-8 text-cyan-500" />;
    }
    if (lowerName.includes('screen') || lowerName.includes('tv') || lowerName.includes('proyektor')) {
      return <Monitor className="w-8 h-8 text-purple-500" />;
    }
    if (lowerName.includes('gen') || lowerName.includes('power')) {
      return <Zap className="w-8 h-8 text-orange-500" />;
    }
    return <Package className="w-8 h-8 text-gray-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-primary rounded-xl shadow-md overflow-hidden cursor-pointer group"
      onClick={() => onOpenModal(product)}
    >
      <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2">
            {getProductIcon(product.name)}
            <span className="text-xs text-gray-400 uppercase tracking-wide">No Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>

      <div className="p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 capitalize line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg md:text-2xl font-bold text-accent">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs md:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.ket}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
