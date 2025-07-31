import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useTheme } from './ThemeContext';
import ProductCard from './ProductCard';
import type { Product } from './types';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://fakestoreapi.com/products?limit=6');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const containerStyles = {
    theme1: 'bg-gray-50 min-h-screen',
    theme2: 'bg-gray-900 min-h-screen',
    theme3: 'bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 min-h-screen'
  };

  const titleStyles = {
    theme1: 'text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4',
    theme2: 'text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif',
    theme3: 'text-3xl sm:text-4xl md:text-5xl font-bold text-purple-800 mb-4'
  };

  const subtitleStyles = {
    theme1: 'text-gray-600',
    theme2: 'text-gray-300',
    theme3: 'text-purple-600'
  };

  const buttonStyles = {
    theme1: 'bg-blue-600 text-white hover:bg-blue-700 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105',
    theme2: 'bg-green-600 text-white hover:bg-green-700 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105',
    theme3: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105'
  };

  const sectionTitleStyles = {
    theme1: 'text-gray-900',
    theme2: 'text-white font-serif',
    theme3: 'text-purple-800'
  };

  const skeletonStyles = {
    theme1: { card: 'bg-white', skeleton: 'bg-gray-200' },
    theme2: { card: 'bg-gray-800', skeleton: 'bg-gray-700' },
    theme3: { card: 'bg-white', skeleton: 'bg-pink-200' }
  };

  const errorStyles = {
    theme1: 'bg-red-50 border border-red-200 text-red-700',
    theme2: 'bg-red-900 bg-opacity-50 border border-red-700 text-red-300',
    theme3: 'bg-red-50 border-2 border-red-300 text-red-700'
  };

  return (
    <div className={`pt-14 sm:pt-16 transition-all duration-500 ${containerStyles[theme]}`}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 
            className={`transition-all duration-300 ${titleStyles[theme]}`}
            style={{ fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' }}
          >
            Welcome to ThemeApp
          </h1>
          <p className={`text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto transition-colors duration-300 ${subtitleStyles[theme]}`}>
            Experience the power of dynamic theming with our modern React application. 
            Switch between themes and watch the entire interface transform beautifully.
          </p>
          <button className={buttonStyles[theme]}>
            <ShoppingBag className="w-5 h-5 inline mr-2" />
            <span className="text-sm sm:text-base">Explore Products</span>
          </button>
        </div>

        {/* Products Section */}
        <div className="mb-12 sm:mb-16">
          <h2 
            className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center transition-colors duration-300 ${sectionTitleStyles[theme]}`}
            style={{ 
              fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' 
            }}
          >
            Featured Products
          </h2>

          {/* Error State */}
          {error && (
            <div className={`rounded-lg p-4 mb-6 text-center ${errorStyles[theme]}`}>
              <p className="font-semibold mb-2">Failed to load products</p>
              <p className="text-sm">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-3 px-4 py-2 bg-opacity-20 bg-black rounded hover:bg-opacity-30 transition-all duration-200"
              >
                Retry
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`animate-pulse rounded-xl p-4 sm:p-6 ${skeletonStyles[theme].card}`}>
                  <div className={`aspect-square rounded-lg mb-4 ${skeletonStyles[theme].skeleton}`}></div>
                  <div className={`h-4 rounded mb-2 ${skeletonStyles[theme].skeleton}`}></div>
                  <div className={`h-3 rounded mb-3 w-3/4 ${skeletonStyles[theme].skeleton}`}></div>
                  <div className="flex justify-between">
                    <div className={`h-6 w-16 rounded ${skeletonStyles[theme].skeleton}`}></div>
                    <div className={`h-4 w-12 rounded ${skeletonStyles[theme].skeleton}`}></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Products Grid */}
          {!loading && !error && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && products.length === 0 && (
            <div className={`text-center py-12 ${subtitleStyles[theme]}`}>
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No products available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;