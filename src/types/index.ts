export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category?: string;
  isNew?: boolean;
  isSale?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}