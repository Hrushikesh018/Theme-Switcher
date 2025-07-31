import React from 'react';
import { Star } from 'lucide-react';
import { useTheme } from './ThemeContext';
import type { Product } from './types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();

  const cardStyles = {
    theme1: 'bg-white border border-gray-200 hover:shadow-lg hover:border-gray-300',
    theme2: 'bg-gray-800 border border-gray-700 hover:bg-gray-750 hover:border-gray-600',
    theme3: 'bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 hover:border-pink-300 hover:shadow-xl'
  };

  const titleStyles = {
    theme1: 'text-gray-900',
    theme2: 'text-white font-serif',
    theme3: 'text-purple-800'
  };

  const descriptionStyles = {
    theme1: 'text-gray-600',
    theme2: 'text-gray-300',
    theme3: 'text-purple-600'
  };

  const priceStyles = {
    theme1: 'text-blue-600',
    theme2: 'text-green-400',
    theme3: 'text-pink-600'
  };

  const starStyles = {
    theme1: 'text-yellow-400',
    theme2: 'text-yellow-400',
    theme3: 'text-orange-400'
  };

  const ratingStyles = {
    theme1: 'text-gray-600',
    theme2: 'text-gray-300',
    theme3: 'text-purple-600'
  };

  return (
    <div className={`rounded-xl p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 ${cardStyles[theme]}`}>
      {/* Product Image */}
      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
      
      {/* Product Title */}
      <h3 
        className={`font-semibold mb-2 line-clamp-2 transition-colors duration-300 text-sm sm:text-base ${titleStyles[theme]}`}
        style={{ 
          fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif',
          fontSize: theme === 'theme3' ? '1.1rem' : undefined
        }}
        title={product.title}
      >
        {product.title}
      </h3>
      
      {/* Product Description */}
      <p className={`text-xs sm:text-sm mb-3 line-clamp-2 transition-colors duration-300 ${descriptionStyles[theme]}`}>
        {product.description}
      </p>
      
      {/* Price and Rating */}
      <div className="flex items-center justify-between">
        <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${priceStyles[theme]}`}>
          ${product.price}
        </span>
        
        <div className="flex items-center gap-1">
          <Star className={`w-3 h-3 sm:w-4 sm:h-4 fill-current transition-colors duration-300 ${starStyles[theme]}`} />
          <span className={`text-xs sm:text-sm transition-colors duration-300 ${ratingStyles[theme]}`}>
            {product.rating.rate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;