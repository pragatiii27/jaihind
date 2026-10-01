import { Product } from '../../types/product';

export const curtains: Product[] = [
  {
    id: 'velvet-drape-curtain',
    sku: 'JH-CUR-001',
    name: 'Luxury Velvet Thermal Blackout Curtain',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Blackout Curtain',
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    rating: 4.8,
    reviewCount: 156,
    ratingDistribution: { 5: 82, 4: 12, 3: 4, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'Terracotta Velvet Thermal Blackout Curtain'
      },
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: 'Matte antique brass eyelet grommet detail'
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85',
        alt: 'Heavy drape velvet texture close-up'
      }
    ],
    description:
      'Heavyweight 320 GSM blackout velvet drape with thermal insulation backing. Blocks 100% of outside sunlight and street noise while adding rich terracotta warmth to your living room.',
    highlights: [
      '100% Total blackout light blocking',
      'Thermal insulation reduces AC electricity bills',
      'Heavyweight 320 GSM matte velvet fabric',
      'Rust-free stainless steel eyelets',
      'Pre-washed and fade resistant'
    ],
    features: ['100% Blackout', '320 GSM Velvet', 'Thermal Insulation'],
    material: 'Velvet',
    size: ['Standard'],
    warranty: '3 Years',
    tags: ['blackout', 'terracotta', 'living-room', 'bestseller'],
    badges: ['BESTSELLER', 'TOP RATED'],
    stock: 22,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-vdc-door-7',
        label: 'Terracotta · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Warm Terracotta', pack: 1 },
        price: 2499,
        originalPrice: 3299,
        stock: 22,
        sku: 'JH-CUR-001-T7'
      },
      {
        id: 'var-vdc-door-9',
        label: 'Terracotta · Long Door (9 ft)',
        attributes: { length: 108, width: 48, colour: 'Warm Terracotta', pack: 1 },
        price: 2999,
        originalPrice: 3999,
        stock: 15,
        sku: 'JH-CUR-001-T9'
      },
      {
        id: 'var-vdc-window-5',
        label: 'Terracotta · Window (5 ft)',
        attributes: { length: 60, width: 48, colour: 'Warm Terracotta', pack: 1 },
        price: 1999,
        originalPrice: 2599,
        stock: 18,
        sku: 'JH-CUR-001-T5'
      }
    ],
    colours: [
      { name: 'Warm Terracotta', hex: '#B5654A' },
      { name: 'Oatmeal Beige', hex: '#EFEAE2' },
      { name: 'Charcoal Ink', hex: '#1D1C19' },
      { name: 'Sage Leaf', hex: '#8A9A86' }
    ],
    specs: {
      Fabric: '320 GSM Heavyweight Matte Velvet',
      Colour: 'Warm Terracotta / Oatmeal Beige / Charcoal / Sage',
      Pattern: 'Solid Muted Matte Finish',
      Width: '4 Feet (48 Inches per panel)',
      Length: 'Window 5ft / Door 7ft / Long Door 9ft',
      'Light Control': '100% Blackout Thermal Lining',
      'Wash Care': 'Gentle Machine Wash in Cold Water',
      Installation: '8 Pre-fitted Stainless Steel Eyelets',
      'Pack Contents': '1 Curtain Panel'
    },
    createdAt: '2026-01-12T00:00:00.000Z',
    relatedIds: ['sheer-linen-curtain', 'quilted-bed-protector']
  },

  {
    id: 'sheer-linen-curtain',
    sku: 'JH-CUR-002',
    name: 'Airy Natural Linen Sheer Curtain',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Sheer Curtain',
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    rating: 4.7,
    reviewCount: 110,
    ratingDistribution: { 5: 78, 4: 16, 3: 4, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'Airy Natural Linen Sheer Curtain'
      }
    ],
    description:
      'Semi-transparent pure linen weave that diffuses direct sunlight into a soft, ethereal glow while keeping daytime privacy in your living space.',
    highlights: [
      'Textured linen blend slub weave',
      'Soft sunlight diffusion with 40% shade',
      'Breathable natural airflow fabric',
      'Machine washable easy care',
      'Stainless steel grommet header'
    ],
    features: ['Sun Diffusion', 'Linen Weave', 'Daytime Privacy'],
    material: 'Linen',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['sheer', 'linen', 'living-room', 'light-control'],
    badges: ['STAFF PICK'],
    stock: 30,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-slc-door-7',
        label: 'Natural Cream · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Natural Cream', pack: 1 },
        price: 1499,
        originalPrice: 1999,
        stock: 30,
        sku: 'JH-CUR-002-C7'
      }
    ],
    colours: [
      { name: 'Natural Cream', hex: '#F7F5F1' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    specs: {
      Fabric: 'Linen Blend Slub Weave',
      'Light Control': 'Sheer (40% Light Diffusion)',
      Width: '4 Feet (48 Inches)',
      Length: '7 Feet (84 Inches)',
      Installation: '8 Eyelet Grommets'
    },
    createdAt: '2026-01-22T00:00:00.000Z'
  },

  {
    id: 'blackout-thermal-curtain',
    sku: 'JH-CUR-003',
    name: 'ThermalShield Heavy Blackout Curtain (Pair)',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Blackout Curtain',
    price: 3999,
    originalPrice: 5299,
    discount: 25,
    rating: 4.9,
    reviewCount: 205,
    ratingDistribution: { 5: 90, 4: 7, 3: 2, 2: 1, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'ThermalShield Heavy Blackout Curtain Pair'
      }
    ],
    description:
      'Triple-weave technology drapes sold as a pair of 2 panels. Provides total noise reduction and complete pitch-dark room insulation for night-shift workers and home theaters.',
    highlights: [
      'Pack of 2 curtain panels',
      'Triple-weave pitch blackout technology',
      'Noise dampening for quiet sleep',
      'Wrinkle-free heavy drape texture',
      '3-year colorfastness guarantee'
    ],
    features: ['Pack of 2', 'Noise Reduction', 'Triple Weave'],
    material: 'Polyester',
    size: ['Standard'],
    warranty: '3 Years',
    tags: ['blackout', 'bedroom', 'value-pack'],
    badges: ['BESTSELLER'],
    stock: 18,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-btc-pair-7',
        label: 'Charcoal · Door 7 ft (Pair of 2)',
        attributes: { length: 84, width: 48, colour: 'Charcoal', pack: 2 },
        price: 3999,
        originalPrice: 5299,
        stock: 18,
        sku: 'JH-CUR-003-P7'
      }
    ],
    specs: {
      Fabric: 'Triple-Weave Heavy Polyester',
      'Light Control': '100% Pitch Blackout',
      'Pack Contents': '2 Curtain Panels',
      Width: '4 Feet each (8 Feet total width)',
      Length: '7 Feet'
    },
    createdAt: '2026-01-08T00:00:00.000Z'
  },

  {
    id: 'textured-cotton-curtain',
    sku: 'JH-CUR-004',
    name: 'Organic Textured Cotton Slub Curtain',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Cotton Curtain',
    price: 1799,
    originalPrice: 2399,
    discount: 25,
    rating: 4.6,
    reviewCount: 72,
    ratingDistribution: { 5: 70, 4: 20, 3: 6, 2: 2, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'Organic Textured Cotton Slub Curtain'
      }
    ],
    description:
      '100% pure organic cotton with a tactile hand-woven slub texture. Filters harsh rays into warm natural light.',
    highlights: [
      '100% Organic Cotton',
      'Hand-woven textured slub effect',
      'Room darkening 70% light filtering',
      'Eco-friendly non-toxic dyes',
      '2-year warranty'
    ],
    features: ['100% Cotton', 'Room Darkening', 'Hand-woven Feel'],
    material: 'Cotton',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['cotton', 'organic', 'living-room'],
    badges: ['NEW'],
    stock: 25,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-tcc-7',
        label: 'Oatmeal · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Oatmeal', pack: 1 },
        price: 1799,
        originalPrice: 2399,
        stock: 25,
        sku: 'JH-CUR-004-O7'
      }
    ],
    specs: {
      Fabric: '100% Organic Slub Cotton',
      'Light Control': 'Room Darkening (70%)',
      Width: '4 Feet',
      Length: '7 Feet'
    },
    createdAt: '2026-02-14T00:00:00.000Z'
  },

  {
    id: 'embroidered-sheer-drape',
    sku: 'JH-CUR-005',
    name: 'Artisan Embroidered Sheer Lace Curtain',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Sheer Curtain',
    price: 2199,
    originalPrice: 2899,
    discount: 24,
    rating: 4.8,
    reviewCount: 45,
    ratingDistribution: { 5: 80, 4: 15, 3: 3, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'Artisan Embroidered Sheer Lace Curtain'
      }
    ],
    description:
      'Delicate geometric embroidery over translucent ivory mesh. Adds sophisticated traditional Indian craft aesthetic to modern living rooms.',
    highlights: [
      'Intricate geometric thread embroidery',
      'Translucent ivory mesh backing',
      'Soft ambient light filtration',
      'Weighted bottom hem for straight drape',
      '2-year warranty'
    ],
    features: ['Thread Embroidery', 'Weighted Hem', 'Artisan Craft'],
    material: 'Linen',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['embroidered', 'sheer', 'traditional'],
    badges: ['LIMITED OFFER'],
    stock: 12,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-esd-7',
        label: 'Ivory Gold · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Ivory Gold', pack: 1 },
        price: 2199,
        originalPrice: 2899,
        stock: 12,
        sku: 'JH-CUR-005-I7'
      }
    ],
    specs: {
      Fabric: 'Embroidered Sheer Mesh',
      'Light Control': 'Sheer (30%)',
      Width: '4 Feet',
      Length: '7 Feet'
    },
    createdAt: '2026-02-19T00:00:00.000Z'
  },

  {
    id: 'jacquard-damask-curtain',
    sku: 'JH-CUR-006',
    name: 'Royal Jacquard Damask Room Darkening Curtain',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Room Darkening',
    price: 2899,
    originalPrice: 3799,
    discount: 24,
    rating: 4.7,
    reviewCount: 62,
    ratingDistribution: { 5: 75, 4: 18, 3: 5, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'Royal Jacquard Damask Room Darkening Curtain'
      }
    ],
    description:
      'Woven self-patterned damask motif on heavy jacquard silk blend. Creates an opulent traditional palace look in grand dining rooms and bedrooms.',
    highlights: [
      'Woven self-patterned damask design',
      'Silk blend luster sheen',
      'Room darkening 85% light blocking',
      'Rust-proof eyelet header',
      '3-year warranty'
    ],
    features: ['Jacquard Damask', 'Silk Sheen', '85% Darkening'],
    material: 'Velvet',
    size: ['Standard'],
    warranty: '3 Years',
    tags: ['jacquard', 'royal', 'traditional'],
    badges: ['NEW'],
    stock: 14,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-jdc-7',
        label: 'Antique Gold · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Antique Gold', pack: 1 },
        price: 2899,
        originalPrice: 3799,
        stock: 14,
        sku: 'JH-CUR-006-A7'
      }
    ],
    specs: {
      Fabric: 'Woven Jacquard Silk Blend',
      'Light Control': 'Room Darkening (85%)',
      Width: '4 Feet',
      Length: '7 Feet'
    },
    createdAt: '2026-02-24T00:00:00.000Z'
  },

  {
    id: 'boho-fringe-cotton-curtain',
    sku: 'JH-CUR-007',
    name: 'Boho Tassel Fringe Natural Cotton Curtain',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Cotton Curtain',
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    rating: 4.6,
    reviewCount: 38,
    ratingDistribution: { 5: 68, 4: 22, 3: 6, 2: 2, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'Boho Tassel Fringe Natural Cotton Curtain'
      }
    ],
    description:
      'Playful hand-tied side tassels along the vertical edges over raw off-white slub cotton. Perfect for relaxed Bohemian interior accents.',
    highlights: [
      'Hand-tied cotton side tassel fringe',
      'Raw slub organic cotton fabric',
      'Semi-sheer 50% warm light filtering',
      'Machine washable gently',
      '2-year warranty'
    ],
    features: ['Boho Tassels', 'Organic Slub', 'Semi-Sheer'],
    material: 'Cotton',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['boho', 'tassels', 'cotton'],
    badges: ['TRENDING'],
    stock: 16,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-bfc-7',
        label: 'Raw Off-White · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Raw Off-White', pack: 1 },
        price: 1899,
        originalPrice: 2499,
        stock: 16,
        sku: 'JH-CUR-007-B7'
      }
    ],
    specs: {
      Fabric: 'Organic Slub Cotton with Tassels',
      'Light Control': 'Semi-Sheer (50%)',
      Width: '4 Feet',
      Length: '7 Feet'
    },
    createdAt: '2026-02-11T00:00:00.000Z'
  },

  {
    id: 'noise-reduction-insulated-curtain',
    sku: 'JH-CUR-008',
    name: 'AcousticShield Sound Isolation Curtain',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Blackout Curtain',
    price: 3299,
    originalPrice: 4299,
    discount: 23,
    rating: 4.8,
    reviewCount: 95,
    ratingDistribution: { 5: 82, 4: 12, 3: 4, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'AcousticShield Sound Isolation Curtain'
      }
    ],
    description:
      '4-layer acoustic composite curtain with felt inner lining. Reduces outside street traffic noise up to 12 dB while blocking 100% light.',
    highlights: [
      '4-Layer composite acoustic lining',
      'Reduces ambient traffic noise up to 12 dB',
      '100% Total pitch blackout',
      'Thermal retention keeps rooms cool',
      '3-year warranty'
    ],
    features: ['12 dB Noise Reduction', '4-Layer Acoustic', '100% Blackout'],
    material: 'Polyester',
    size: ['Standard'],
    warranty: '3 Years',
    tags: ['acoustic', 'soundproof', 'blackout'],
    badges: ['TOP RATED'],
    stock: 11,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-nrc-7',
        label: 'Muted Olive · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Muted Olive', pack: 1 },
        price: 3299,
        originalPrice: 4299,
        stock: 11,
        sku: 'JH-CUR-008-O7'
      }
    ],
    specs: {
      Fabric: '4-Layer Acoustic Composite',
      'Light Control': '100% Blackout',
      Width: '4 Feet',
      Length: '7 Feet'
    },
    createdAt: '2026-01-16T00:00:00.000Z'
  },

  {
    id: 'modern-stripe-cotton-curtain',
    sku: 'JH-CUR-009',
    name: 'Nordic Vertical Stripe Cotton Drape',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Cotton Curtain',
    price: 1699,
    originalPrice: 2199,
    discount: 23,
    rating: 4.5,
    reviewCount: 42,
    ratingDistribution: { 5: 65, 4: 25, 3: 6, 2: 2, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'Nordic Vertical Stripe Cotton Drape'
      }
    ],
    description:
      'Subtle vertical yarn-dyed stripes that visually heighten room ceiling height while giving a clean Scandi minimal feel.',
    highlights: [
      'Yarn-dyed vertical stripe weave',
      'Creates height illusion for low ceilings',
      '100% Cotton durable fabric',
      'Machine washable colorfast',
      '2-year warranty'
    ],
    features: ['Vertical Stripe', 'Height Illusion', '100% Cotton'],
    material: 'Cotton',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['stripes', 'scandi', 'minimal'],
    badges: ['NEW'],
    stock: 20,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-msc-7',
        label: 'Beige Stripe · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Beige Stripe', pack: 1 },
        price: 1699,
        originalPrice: 2199,
        stock: 20,
        sku: 'JH-CUR-009-S7'
      }
    ],
    specs: {
      Fabric: 'Yarn-Dyed 100% Cotton',
      'Light Control': 'Semi-Sheer (60%)',
      Width: '4 Feet',
      Length: '7 Feet'
    },
    createdAt: '2026-02-26T00:00:00.000Z'
  },

  {
    id: 'outdoor-weatherproof-curtain',
    sku: 'JH-CUR-010',
    name: 'Patio Shield Waterproof Outdoor Curtain',
    brand: 'JAIHIND',
    category: 'curtain',
    subcategory: 'Outdoor Curtain',
    price: 1999,
    originalPrice: 2699,
    discount: 26,
    rating: 4.6,
    reviewCount: 30,
    ratingDistribution: { 5: 70, 4: 20, 3: 5, 2: 3, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
        alt: 'Patio Shield Waterproof Outdoor Curtain'
      }
    ],
    description:
      'Heavy-duty mildew resistant waterproof canvas for balconies, verandas, and outdoor cabanas. Protects against rain and UV rays.',
    highlights: [
      'Waterproof & mildew resistant coating',
      'UV 50+ sun protection shield',
      'Rust-proof plastic eyelets',
      'Wind-resistant weighted bottom',
      '3-year outdoor warranty'
    ],
    features: ['100% Waterproof', 'UV 50+ Shield', 'Balcony Ready'],
    material: 'Polyester',
    size: ['Standard'],
    warranty: '3 Years',
    tags: ['outdoor', 'balcony', 'waterproof'],
    badges: ['LIMITED OFFER'],
    stock: 15,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-owc-7',
        label: 'Sand Beige · Door (7 ft)',
        attributes: { length: 84, width: 48, colour: 'Sand Beige', pack: 1 },
        price: 1999,
        originalPrice: 2699,
        stock: 15,
        sku: 'JH-CUR-010-P7'
      }
    ],
    specs: {
      Fabric: 'UV-Treated Waterproof Canvas',
      'Light Control': 'Blockout (90%)',
      Width: '4 Feet',
      Length: '7 Feet'
    },
    createdAt: '2026-02-04T00:00:00.000Z'
  }
];
