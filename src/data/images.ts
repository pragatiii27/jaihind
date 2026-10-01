export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  ratio: string;
  focalPoint?: [number, number];
}

export const imageAssets: Record<string, ImageAsset> = {
  hero: {
    id: 'hero-bedroom',
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1920&q=85',
    alt: 'Serene bedroom with layered white linen bedding and warm daylight',
    ratio: '7/6'
  },
  // Category strip & editorial
  categoryMattress: {
    id: 'cat-mattress',
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury plush mattress layered with soft bedding',
    ratio: '1/1'
  },
  categoryPillow: {
    id: 'cat-pillow',
    src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    alt: 'Fluffy ergonomic memory foam pillow with natural cotton cover',
    ratio: '1/1'
  },
  categoryCurtain: {
    id: 'cat-curtain',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    alt: 'Warm terracotta linen drapes framing sunlit window',
    ratio: '1/1'
  },
  categoryBed: {
    id: 'cat-bed',
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    alt: 'Solid oak teak bed frame with minimalist headboard',
    ratio: '1/1'
  },
  categoryAccessory: {
    id: 'cat-accessory',
    src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    alt: 'Quilted waterproof mattress protector and organic sheet set',
    ratio: '1/1'
  },
  categoryNew: {
    id: 'cat-new',
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    alt: 'New arrival home comfort collection',
    ratio: '1/1'
  },
  categoryOffers: {
    id: 'cat-offers',
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    alt: 'Exclusive comfort set discounts and promotional offers',
    ratio: '1/1'
  },
  // Room Assistant sample rooms
  roomSample1: {
    id: 'room-sample-1',
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern neutral bedroom with wooden bedside table',
    ratio: '4/3'
  },
  roomSample2: {
    id: 'room-sample-2',
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Living room with terracotta throw cushions and linen curtains',
    ratio: '4/3'
  },
  roomSample3: {
    id: 'room-sample-3',
    src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warm minimal bedroom setup with soft ambient lighting',
    ratio: '4/3'
  }
};
