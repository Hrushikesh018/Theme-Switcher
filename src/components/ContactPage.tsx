import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from './ThemeContext';

const ContactPage: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

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

  const formStyles = {
    theme1: 'bg-white border border-gray-200 rounded-xl shadow-sm',
    theme2: 'bg-gray-800 border border-gray-700 rounded-xl shadow-lg',
    theme3: 'bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl shadow-xl'
  };

  const inputStyles = {
    theme1: 'w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base',
    theme2: 'w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base placeholder-gray-400',
    theme3: 'w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-300 transition-all duration-200 text-sm sm:text-base'
  };

  const labelStyles = {
    theme1: 'text-gray-700',
    theme2: 'text-gray-300',
    theme3: 'text-purple-700'
  };

  const buttonStyles = {
    theme1: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    theme2: 'bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300',
    theme3: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 disabled:from-pink-300 disabled:to-purple-300'
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'hello@themeapp.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Address', value: '123 Theme Street, Design City, DC 12345' }
  ];

  return (
    <div className={`pt-14 sm:pt-16 transition-all duration-500 ${containerStyles[theme]}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Page Title */}
        <h1 
          className={`text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center transition-colors duration-300 ${titleStyles[theme]}`}
          style={{ 
            fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' 
          }}
        >
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            <h2 
              className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 transition-colors duration-300 ${titleStyles[theme]}`}
              style={{ 
                fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' 
              }}
            >
              Get in Touch
            </h2>
            
            <p className={`text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed transition-colors duration-300 ${
              theme === 'theme1' ? 'text-gray-600' :
              theme === 'theme2' ? 'text-gray-300' :
              'text-purple-600'
            }`}>
              We'd love to hear from you! Whether you have questions about our themes, 
              need support, or want to share feedback, don't hesitate to reach out.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactItems.map(({ icon: Icon, label, value }, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className={`p-2 sm:p-3 rounded-lg transition-colors duration-300 ${
                    theme === 'theme1' ? 'bg-blue-100 text-blue-600' :
                    theme === 'theme2' ? 'bg-gray-700 text-green-400' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${titleStyles[theme]}`}>
                      {label}
                    </h3>
                    <p className={`text-sm sm:text-base transition-colors duration-300 ${
                      theme === 'theme1' ? 'text-gray-600' :
                      theme === 'theme2' ? 'text-gray-300' :
                      'text-purple-600'
                    }`}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-6 sm:p-8 transition-all duration-300 ${formStyles[theme]}`}>
            <h2 
              className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 transition-colors duration-300 ${titleStyles[theme]}`}
              style={{ 
                fontFamily: theme === 'theme3' ? 'cursive' : theme === 'theme2' ? 'serif' : 'sans-serif' 
              }}
            >
              Send us a Message
            </h2>

            {submitted && (
              <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                theme === 'theme1' ? 'bg-green-50 border border-green-200 text-green-700' :
                theme === 'theme2' ? 'bg-green-900 bg-opacity-50 border border-green-700 text-green-300' :
                'bg-green-50 border-2 border-green-300 text-green-700'
              }`}>
                <p className="font-semibold text-sm sm:text-base">Message sent successfully!</p>
                <p className="text-xs sm:text-sm mt-1">We'll get back to you soon.</p>
              </div>
            )}

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${labelStyles[theme]}`}>
                  Name *
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={inputStyles[theme]} 
                  placeholder="Your name" 
                  required
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${labelStyles[theme]}`}>
                  Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputStyles[theme]} 
                  placeholder="your@email.com" 
                  required
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${labelStyles[theme]}`}>
                  Message *
                </label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={inputStyles[theme]} 
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed text-sm sm:text-base ${buttonStyles[theme]}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;