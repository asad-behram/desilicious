export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'biryani' | 'beverages' | 'extras';
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface Deal {
  id: string;
  name: string;
  description: string;
  price: number;
  items: string[];
}