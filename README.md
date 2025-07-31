# 🎨 Multi-Theme Switcher App

> A modern, responsive React application showcasing dynamic theming with three distinct visual experiences.

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎭 **Three Distinct Themes** - Complete visual transformations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🔄 **Persistent Preferences** - Theme choice saved across sessions
- 🎯 **TypeScript Support** - Full type safety throughout
- 🌐 **API Integration** - Real product data from Fake Store API
- 🎨 **Modern UI/UX** - Glass-morphism effects and smooth animations
- ♿ **Accessible** - WCAG compliant design patterns
- 📦 **Component Architecture** - Modular and reusable components

## 🎨 Theme Showcase

### 🤍 Theme 1: Minimal Light
- Clean white backgrounds with subtle shadows
- Sans-serif typography for clarity
- Blue accent colors
- Minimalist design philosophy

### 🖤 Theme 2: Dark Professional  
- Sophisticated dark gray/black palette
- Elegant serif fonts
- Green accent highlights
- Professional business aesthetic

### 🌈 Theme 3: Colorful Creative
- Vibrant gradient backgrounds
- Playful cursive typography
- Pink/purple color scheme
- Creative and energetic vibe

## 🚀 Quick Start

### Prerequisites

- Node.js (16.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/multi-theme-switcher-app.git
   cd multi-theme-switcher-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ThemeContext.tsx      # Theme management with Context API
│   ├── Header.tsx            # Navigation header with mobile menu
│   ├── ThemeSelector.tsx     # Theme dropdown component
│   ├── ProductCard.tsx       # Product display component
│   ├── SkeletonLoader.tsx    # Reusable loading skeletons
│   ├── HomePage.tsx          # Main landing page
│   ├── AboutPage.tsx         # About page with features
│   └── ContactPage.tsx       # Contact form page
├── types/
│   └── index.ts              # TypeScript type definitions
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                 # Global styles and Tailwind imports
```

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.2.0 |
| **TypeScript** | Type Safety | 5.0+ |
| **Tailwind CSS** | Styling | 3.3+ |
| **Vite** | Build Tool | 4.4+ |
| **Lucide React** | Icons | 0.263+ |
| **Context API** | State Management | Built-in |

## 📱 Responsive Design

The application is built mobile-first with responsive breakpoints:

- **Mobile**: `< 640px` - Optimized touch interfaces
- **Tablet**: `640px - 1024px` - Adaptive layouts
- **Desktop**: `> 1024px` - Full feature experience

## 🎯 Core Features

### Theme Management
- **Context API** implementation for global state
- **localStorage** persistence across sessions
- **Smooth transitions** between theme changes
- **Type-safe** theme definitions

### Component Architecture
- **Modular design** for easy maintenance
- **Reusable components** across pages
- **Props typing** with TypeScript interfaces
- **Consistent styling** patterns

### User Experience
- **Loading states** with skeleton animations
- **Error handling** for API failures
- **Accessibility** compliance
- **Performance optimization**

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Customization

### Adding New Themes

1. **Extend ThemeType** in `types/index.ts`:
   ```typescript
   export type ThemeType = 'theme1' | 'theme2' | 'theme3' | 'theme4';
   ```

2. **Add theme styles** in components:
   ```typescript
   const styles = {
     theme4: 'your-custom-styles'
   };
   ```

3. **Update ThemeSelector** dropdown options

### Custom Components

All components follow the same theming pattern:
```typescript
const { theme } = useTheme();
const styles = {
  theme1: 'light-theme-styles',
  theme2: 'dark-theme-styles', 
  theme3: 'colorful-theme-styles'
};
```

## 🌐 API Integration

The app integrates with the [Fake Store API](https://fakestoreapi.com/) for product data:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Features**: Error handling, loading states, type safety
- **Fallbacks**: Graceful degradation when API is unavailable

## 🎭 Design Philosophy

### Theme Consistency
Each theme maintains consistency across:
- Color palettes and contrast ratios
- Typography and font choices  
- Spacing and layout patterns
- Interactive element styling
- Animation and transition timing

### Responsive Approach
- **Mobile-first** design methodology
- **Progressive enhancement** for larger screens
- **Touch-friendly** interactive elements
- **Flexible layouts** that adapt gracefully

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code patterns and naming conventions
- Ensure TypeScript strict mode compliance
- Add responsive design for all new components
- Test across all three themes
- Update documentation for new features


## 🙏 Acknowledgments

- **Fake Store API** for providing product data
- **Lucide React** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **React Community** for excellent ecosystem



<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Hrushikesh kadudula](https://github.com/Hrushikesh018)

</div>
