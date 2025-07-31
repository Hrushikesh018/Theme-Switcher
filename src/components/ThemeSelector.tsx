import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeContext';
import type { ThemeType } from './ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'theme1', name: 'Minimal Light' },
    { id: 'theme2', name: 'Dark Professional' },
    { id: 'theme3', name: 'Colorful Creative' }
  ];

  const currentTheme = themes.find(t => t.id === theme);

  const buttonStyles = {
    theme1: 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300',
    theme2: 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600',
    theme3: 'bg-pink-100 text-pink-800 hover:bg-pink-200 border-2 border-pink-300'
  };

  const dropdownStyles = {
    theme1: 'bg-white border border-gray-200 shadow-lg',
    theme2: 'bg-gray-800 border border-gray-600 shadow-lg',
    theme3: 'bg-white border-2 border-pink-300 shadow-xl'
  };

  const itemStyles = {
    theme1: 'hover:bg-gray-50 text-gray-800',
    theme2: 'hover:bg-gray-700 text-white',
    theme3: 'hover:bg-pink-50 text-pink-800'
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${buttonStyles[theme]}`}
      >
        <span className="hidden sm:inline">{currentTheme?.name}</span>
        <span className="sm:hidden">Theme</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-40 sm:w-48 rounded-lg z-50 transition-all duration-200 ${dropdownStyles[theme]}`}>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id as ThemeType);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 sm:px-4 sm:py-3 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg text-sm sm:text-base ${itemStyles[theme]} ${
                t.id === theme ? 'font-semibold' : ''
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;