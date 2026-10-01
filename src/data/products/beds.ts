import { Product } from '../../types/product';

export const beds: Product[] = [
  {
    id: 'nordic-solid-wood-bed',
    sku: 'JH-BED-001',
    name: 'Nordic Solid Teak Wood Bed Frame',
    brand: 'JAIHIND',
    category: 'bed',
    subcategory: 'Wooden Bed Frame',
    price: 38999,
    originalPrice: 48999,
    discount: 20,
    rating: 4.9,
    reviewCount: 68,
    ratingDistribution: { 5: 90, 4: 8, 3: 2, 2: 0, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'Nordic Solid Teak Wood Bed Frame'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Natural wood grain detail'
      }
    ],
    description:
      'Crafted from 100% kiln-dried Grade-A teak wood with rounded edges and an angled ergonomic headboard. Zero squeaks with heavy-duty metal joinery.',
    highlights: [
      '100% Grade-A Solid Teak Wood',
      'Ergonomic 15-degree angled headboard',
      'Heavy-duty internal steel support slating',
      'Scratch & moisture resistant matte lacquer',
      '10-year structural warranty'
    ],
    features: ['Grade-A Teak', 'Zero Squeak', 'Angled Headboard'],
    material: 'Wood',
    size: ['Queen', 'King'],
    warranty: '10 Years',
    tags: ['teak', 'wooden', 'bestseller', 'bedroom'],
    badges: ['BESTSELLER', 'TOP RATED'],
    stock: 6,
    delivery: { estimateDays: 5, free: true, note: 'Free carpenter assembly included' },
    variants: [
      {
        id: 'var-nwb-queen',
        label: 'Queen Size (Teak Finish)',
        attributes: { size: 'Queen', storage: false },
        price: 38999,
        originalPrice: 48999,
        stock: 6,
        sku: 'JH-BED-001-Q'
      },
      {
        id: 'var-nwb-king',
        label: 'King Size (Teak Finish)',
        attributes: { size: 'King', storage: false },
        price: 45999,
        originalPrice: 57999,
        stock: 3,
        sku: 'JH-BED-001-K'
      }
    ],
    specs: {
      'Frame Material': 'Solid Teak Wood & Steel Center Support',
      Finish: 'Warm Honey Matte Lacquer',
      Storage: 'None (Platform Style)',
      Headboard: 'Integrated Solid Wood Slats',
      Sizes: 'Queen (78"x60") / King (78"x72")',
      'Weight Capacity': 'Tested up to 500 kg',
      Assembly: 'Included Free on Delivery',
      Warranty: '10-Year Structural Warranty'
    },
    createdAt: '2026-01-14T00:00:00.000Z'
  },

  {
    id: 'upholstered-storage-bed',
    sku: 'JH-BED-002',
    name: 'Royal Velvet Hydraulic Storage Bed',
    brand: 'JAIHIND',
    category: 'bed',
    subcategory: 'Hydraulic Storage Bed',
    price: 48999,
    originalPrice: 62999,
    discount: 22,
    rating: 4.8,
    reviewCount: 52,
    ratingDistribution: { 5: 84, 4: 12, 3: 4, 2: 0, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'Royal Velvet Hydraulic Storage Bed'
      }
    ],
    description:
      'Luxe channel-tufted velvet headboard with German gas-lift hydraulic storage mechanism. Provides 900+ liters of dust-free under-bed storage space.',
    highlights: [
      'German gas-lift hydraulic storage (900L capacity)',
      'Plush channel-tufted velvet headboard',
      'Waterproof sealed storage base box',
      'Heavy-duty engineered wood frame',
      '10-year warranty'
    ],
    features: ['Hydraulic Lift', '900L Storage', 'Velvet Tufted'],
    material: 'Wood',
    size: ['Queen', 'King'],
    warranty: '10 Years',
    tags: ['storage', 'hydraulic', 'velvet'],
    badges: ['TRENDING'],
    stock: 4,
    delivery: { estimateDays: 6, free: true },
    variants: [
      {
        id: 'var-usb-queen',
        label: 'Queen · Terracotta Velvet · Hydraulic Storage',
        attributes: { size: 'Queen', storage: true },
        price: 48999,
        originalPrice: 62999,
        stock: 4,
        sku: 'JH-BED-002-Q'
      }
    ],
    specs: {
      'Frame Material': 'Engineered Wood & Heavy Duty Steel',
      Storage: 'Hydraulic Lift-Up (900 Liters)',
      Headboard: 'Channel-Tufted Velvet Padding',
      Warranty: '10 Years'
    },
    createdAt: '2026-01-28T00:00:00.000Z'
  },

  {
    id: 'platform-teak-bed',
    sku: 'JH-BED-003',
    name: 'Zen Minimalist Low Platform Bed',
    brand: 'SleepWell Craft',
    category: 'bed',
    subcategory: 'Platform Bed',
    price: 29999,
    originalPrice: 37999,
    discount: 21,
    rating: 4.7,
    reviewCount: 40,
    ratingDistribution: { 5: 75, 4: 20, 3: 5, 2: 0, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'Zen Minimalist Low Platform Bed'
      }
    ],
    description:
      'Low-profile Japanese platform design that creates an airy, spacious visual in modern master bedrooms.',
    highlights: [
      'Low 8-inch height profile platform',
      'Extra wide side ledge perimeter',
      'Solid rubberwood construction',
      'Slatted mattress base for airflow',
      '10-year warranty'
    ],
    features: ['Low Profile', 'Side Ledge', 'Japanese Zen'],
    material: 'Wood',
    size: ['Queen', 'King'],
    warranty: '10 Years',
    tags: ['platform', 'minimalist', 'low-profile'],
    badges: ['STAFF PICK'],
    stock: 5,
    delivery: { estimateDays: 5, free: true },
    variants: [
      {
        id: 'var-ptb-queen',
        label: 'Queen · Natural Oak',
        attributes: { size: 'Queen', storage: false },
        price: 29999,
        originalPrice: 37999,
        stock: 5,
        sku: 'JH-BED-003-Q'
      }
    ],
    specs: {
      'Frame Material': 'Solid Rubberwood',
      Finish: 'Natural Oak Matte',
      Warranty: '10 Years'
    },
    createdAt: '2026-02-03T00:00:00.000Z'
  },

  {
    id: 'poster-canopy-bed',
    sku: 'JH-BED-004',
    name: 'Imperial Four-Poster Wooden Canopy Bed',
    brand: 'JAIHIND',
    category: 'bed',
    subcategory: 'Canopy Bed',
    price: 54999,
    originalPrice: 69999,
    discount: 21,
    rating: 4.9,
    reviewCount: 28,
    ratingDistribution: { 5: 92, 4: 8, 3: 0, 2: 0, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'Imperial Four-Poster Wooden Canopy Bed'
      }
    ],
    description:
      'Stately four-poster solid Sheesham wood frame designed for hanging drape curtains and adding architectural drama.',
    highlights: [
      'Solid Indian Sheesham Wood',
      'Sturdy four-poster top beam frame',
      'Canopy curtain hanging structure',
      'Rich walnut stain finish',
      '10-year warranty'
    ],
    features: ['4-Poster Canopy', 'Sheesham Wood', 'Imperial Style'],
    material: 'Wood',
    size: ['King'],
    warranty: '10 Years',
    tags: ['canopy', 'sheesham', 'luxury'],
    badges: ['LIMITED OFFER'],
    stock: 3,
    delivery: { estimateDays: 7, free: true },
    variants: [
      {
        id: 'var-pcb-king',
        label: 'King · Walnut Sheesham',
        attributes: { size: 'King', storage: false },
        price: 54999,
        originalPrice: 69999,
        stock: 3,
        sku: 'JH-BED-004-K'
      }
    ],
    specs: {
      'Frame Material': 'Solid Sheesham Wood',
      Warranty: '10 Years'
    },
    createdAt: '2026-01-31T00:00:00.000Z'
  },

  {
    id: 'metal-minimal-bed',
    sku: 'JH-BED-005',
    name: 'SteelCraft Heavy Metal Platform Bed',
    brand: 'SleepWell Craft',
    category: 'bed',
    subcategory: 'Metal Bed Frame',
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    rating: 4.5,
    reviewCount: 44,
    ratingDistribution: { 5: 68, 4: 22, 3: 6, 2: 2, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'SteelCraft Heavy Metal Platform Bed'
      }
    ],
    description:
      'Matte black powder-coated heavy steel frame with 12-inch under-bed clearance for storage boxes. Assembles in 15 minutes.',
    highlights: [
      'Powder-coated heavy steel frame',
      '12" Under-bed storage clearance',
      'Tool-free fast 15-minute assembly',
      'Squeak-free rubber padded slats',
      '5-year warranty'
    ],
    features: ['Heavy Steel', '12" Underbed Clearance', 'Easy Tool-Free'],
    material: 'Wood',
    size: ['Single', 'Double', 'Queen'],
    warranty: '5 Years',
    tags: ['metal', 'budget', 'minimal'],
    badges: ['NEW'],
    stock: 12,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-mmb-queen',
        label: 'Queen · Matte Black',
        attributes: { size: 'Queen', storage: false },
        price: 18999,
        originalPrice: 24999,
        stock: 12,
        sku: 'JH-BED-005-Q'
      }
    ],
    specs: {
      'Frame Material': 'Powder Coated Steel',
      Warranty: '5 Years'
    },
    createdAt: '2026-02-16T00:00:00.000Z'
  },

  {
    id: 'drawer-storage-bed',
    sku: 'JH-BED-006',
    name: '4-Drawer Wooden Storage Bed',
    brand: 'JAIHIND',
    category: 'bed',
    subcategory: 'Drawer Storage Bed',
    price: 42999,
    originalPrice: 54999,
    discount: 22,
    rating: 4.7,
    reviewCount: 36,
    ratingDistribution: { 5: 78, 4: 16, 3: 4, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: '4-Drawer Wooden Storage Bed'
      }
    ],
    description:
      'Four smooth-rolling pull-out storage drawers integrated into the foot and sides of a solid engineered oak frame.',
    highlights: [
      '4 Independent pull-out storage drawers',
      'Smooth ball-bearing drawer slides',
      'Solid headboard with phone shelf',
      'Durable melamine scratch guard finish',
      '10-year warranty'
    ],
    features: ['4 Drawers', 'Ball Bearing Slides', 'Headboard Shelf'],
    material: 'Wood',
    size: ['Queen', 'King'],
    warranty: '10 Years',
    tags: ['storage', 'drawers', 'oak'],
    badges: ['LIMITED OFFER'],
    stock: 6,
    delivery: { estimateDays: 5, free: true },
    variants: [
      {
        id: 'var-dsb-queen',
        label: 'Queen · Warm Oak · 4 Drawers',
        attributes: { size: 'Queen', storage: true },
        price: 42999,
        originalPrice: 54999,
        stock: 6,
        sku: 'JH-BED-006-Q'
      }
    ],
    specs: {
      'Frame Material': 'Engineered Oak Wood',
      Storage: '4 Pull-Out Drawers',
      Warranty: '10 Years'
    },
    createdAt: '2026-02-09T00:00:00.000Z'
  }
];
