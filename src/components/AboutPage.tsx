import React from 'react';
import { useTheme } from './ThemeContext';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  const containerStyles = {
    theme1: 'bg-gray-50 min-h-screen',
    theme2: 'bg-gray-900 min-h-screen',
    theme3: 'bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 min-h-screen'
  };

  const titleStyles = {
    theme1: 'text-gray-900',
    theme2: 'text-white font-serif',
    theme3: 'text-purple-800'
  };

  const textStyles = {
    theme1: 'text-gray-600',
    theme2: 'text-gray-300',
    theme3: 'text-purple-600'
  };

  const cardStyles = {
    theme1: 'bg-white border border-gray-200 shadow-sm',
    theme2: 'bg-gray-800 border border-gray-700 shadow-lg',
    theme3: 'bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 shadow-xl'
  };

  const features = [
    {
      title: 'Dynamic Theming',
      description: 'Switch between three distinct themes that completely transform the user experience.'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works seamlessly across all devices and screen sizes.'
    },
    {
      title: 'Modern Technology',
      description: 'Built with React, TypeScript, and modern web technologies for optimal performance.'
    },
    {
      title: 'Persistent Preferences',
      description: 'Your theme choice is remembered across sessions using localStorage.'
    }
  ];

  return (
    <div className={`pt-14 sm:pt-16 transition-all duration-500 ${containerStyles[theme]}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Title */}
        <h1 
          className={`text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 transition-colors duration-300 ${titleStyles[theme]}`}
          style={{ 
            fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' 
          }}
        >
          About ThemeApp
        </h1>
        
        {/* Main Content */}
        <div className={`mb-8 sm:mb-12 transition-colors duration-300 ${textStyles[theme]}`}>
          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            ThemeApp is a modern React application that demonstrates the power of dynamic theming. 
            Built with TypeScript and modern React patterns, it showcases how different themes can 
            completely transform the user experience.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Our application features three distinct themes, each with its own personality and design language. 
            From minimalist elegance to bold creativity, each theme offers a unique way to experience the same content.
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed">
            The app is built with performance and accessibility in mind, using React Context for state management 
            and localStorage for persistence. It's fully responsive and works seamlessly across all devices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 
            className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 transition-colors duration-300 ${titleStyles[theme]}`}
            style={{ 
              fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' 
            }}
          >
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`rounded-xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 ${cardStyles[theme]}`}
              >
                <h3 
                  className={`text-lg sm:text-xl font-semibold mb-3 transition-colors duration-300 ${titleStyles[theme]}`}
                  style={{ 
                    fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' 
                  }}
                >
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${textStyles[theme]}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className={`rounded-xl p-6 sm:p-8 transition-all duration-300 ${cardStyles[theme]}`}>
          <h2 
            className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 transition-colors duration-300 ${titleStyles[theme]}`}
            style={{ 
              fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' 
            }}
          >
            Technology Stack
          </h2>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center ${textStyles[theme]}`}>
            {['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'localStorage', 'Lucide Icons', 'Fake Store API', 'Responsive Design'].map((tech, index) => (
              <div key={index} className={`py-2 px-3 rounded-lg text-sm sm:text-base transition-all duration-200 ${
                theme === 'theme1' ? 'bg-blue-50 hover:bg-blue-100' :
                theme === 'theme2' ? 'bg-gray-700 hover:bg-gray-600' :
                'bg-pink-100 hover:bg-pink-200'
              }`}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;