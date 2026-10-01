export type Category = 'mattress' | 'pillow' | 'curtain' | 'bed' | 'accessory';
export type Badge = 'BESTSELLER' | 'NEW' | 'TRENDING' | 'LIMITED OFFER' | 'STAFF PICK' | 'TOP RATED';

export interface ProductImage {
  src: string;
  alt: string;
  focalPoint?: [number, number];
}

export type Size = 'Single' | 'Double' | 'Queen' | 'King' | 'Custom' | 'Standard';
export type Firmness = 'Soft' | 'Medium' | 'Medium Firm' | 'Firm';

export interface Variant {
  id: string;
  label: string; // e.g. "Queen · 8\" · Medium Firm"
  attributes: Partial<{
    size: Size;
    firmness: Firmness;
    thickness: number;
    colour: string;
    height: 'Low' | 'Medium' | 'High';
    width: number;
    length: number;
    pack: number;
    storage: boolean;
  }>;
  price: number;
  originalPrice: number;
  stock: number;
  sku: string;
}

export interface Review {
  id: string;
  productId: string;
  user: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
  date: string;
  verified: boolean;
  helpful: number;
  photos?: string[];
}

export interface QA {
  id: string;
  productId: string;
  question: string;
  answer: string;
  answeredBy: string;
  date: string;
}

export interface Product {
  id: string; // slug: "cloudrest-premium-mattress"
  sku: string;
  name: string;
  brand: string; // "JAIHIND", "CloudRest", "SleepWell" (fictional)
  category: Category;
  subcategory: string; // e.g. "Memory Foam Mattress"
  price: number; // default variant price
  originalPrice: number;
  discount: number; // % rounded: round((1 - price/originalPrice)*100)
  rating: number; // 1 decimal
  reviewCount: number;
  ratingDistribution: Record<1 | 2 | 3 | 4 | 5, number>;
  images: ProductImage[]; // min 3
  description: string;
  highlights: string[]; // 4-6
  features: string[]; // short tags for cards
  material: string;
  firmness?: Firmness;
  size: Size[];
  thickness?: number; // inches
  warranty: string; // "10 Years"
  trial?: string; // "100 Nights"
  tags: string[]; // e.g. "cooling", "back-pain", "kids", "small-space"
  badges: Badge[];
  stock: number;
  delivery: {
    estimateDays: number;
    free: boolean;
    note?: string;
  };
  variants: Variant[];
  specs: Record<string, string>;
  colours?: { name: string; hex: string }[];
  createdAt: string; // ISO
  relatedIds?: string[];
  bundleIds?: string[]; // frequently bought together
}

export interface Coupon {
  code: string;
  benefit: string;
  discountType: 'amount' | 'percentage';
  value: number; // rupee amount or percent
  maxDiscount?: number;
  minOrder: number;
  expiry: string;
  appliesTo: string; // Category or 'All products'
}

export interface ComfortAnswers {
  position?: 'Back' | 'Side' | 'Stomach' | 'Combination';
  firmness?: 'Soft' | 'Medium' | 'Firm';
  size?: Size;
  material?: 'Memory Foam' | 'Latex' | 'Spring' | 'Hybrid';
  thickness?: 6 | 8 | 10 | 12;
  comfort?: 'Cooling' | 'Balanced' | 'Soft' | 'Supportive';
}

export interface RecommenderMatch {
  product: Product;
  score: number;
  reasons: string[];
}
