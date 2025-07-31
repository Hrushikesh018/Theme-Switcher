import React, { useState } from 'react';
import { Home, User, Mail, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';
import ThemeSelector from './ThemeSelector';
import type { NavigationItem } from './types';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation: NavigationItem[] = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Contact', icon: Mail }
  ];

  const headerStyles = {
    theme1: 'bg-white shadow-sm border-b border-gray-200',
    theme2: 'bg-gray-900 shadow-lg border-b border-gray-700',
    theme3: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg'
  };

  const logoStyles = {
    theme1: 'text-xl sm:text-2xl font-bold text-gray-900',
    theme2: 'text-xl sm:text-2xl font-bold text-white font-serif',
    theme3: 'text-xl sm:text-2xl font-bold text-white'
  };

  const navButtonStyles = {
    theme1: {
      active: 'bg-blue-100 text-blue-700',
      inactive: 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
    },
    theme2: {
      active: 'bg-gray-700 text-white',
      inactive: 'text-gray-300 hover:text-white hover:bg-gray-700'
    },
    theme3: {
      active: 'bg-white bg-opacity-15 text-black border border-white border-opacity-25 shadow-sm',
      inactive: 'text-white hover:bg-white hover:bg-opacity-10 hover:border hover:border-white hover:border-opacity-20'
    }
  };

  const mobileButtonStyles = {
    theme1: 'text-gray-700 hover:bg-gray-100',
    theme2: 'text-white hover:bg-gray-700',
    theme3: 'text-white hover:bg-white hover:bg-opacity-10'
  };

  const mobileBorderStyles = {
    theme1: 'border-gray-200',
    theme2: 'border-gray-700',
    theme3: 'border-white border-opacity-20'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${headerStyles[theme]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className={`transition-all duration-300 ${logoStyles[theme]}`}>
            <span style={{ fontFamily: theme === 'theme3' ? 'cursive' : 'inherit' }}>
              ThemeApp
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navigation.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setCurrentPage(name)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base ${
                  currentPage === name
                    ? navButtonStyles[theme].active
                    : navButtonStyles[theme].inactive
                }`}
              >
                <Icon className="w-4 h-4" />
                {name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeSelector />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${mobileButtonStyles[theme]}`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-all duration-300 ${mobileBorderStyles[theme]}`}>
            {navigation.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => {
                  setCurrentPage(name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 transition-all duration-200 text-sm ${
                  currentPage === name
                    ? navButtonStyles[theme].active
                    : navButtonStyles[theme].inactive
                }`}
              >
                <Icon className="w-5 h-5" />
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;