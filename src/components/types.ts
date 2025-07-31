export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface NavigationItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ThemeStyles {
  theme1: string;
  theme2: string;
  theme3: string;
}