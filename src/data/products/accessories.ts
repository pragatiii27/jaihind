import { Product } from '../../types/product';

export const accessories: Product[] = [
  {
    id: 'quilted-bed-protector',
    sku: 'JH-ACC-001',
    name: 'Quilted Waterproof Mattress Protector',
    brand: 'JAIHIND',
    category: 'accessory',
    subcategory: 'Mattress Protector',
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    rating: 4.8,
    reviewCount: 310,
    ratingDistribution: { 5: 85, 4: 10, 3: 3, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: 'Quilted Waterproof Mattress Protector'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=85',
        alt: 'Deep elastic skirt fitting up to 14 inches'
      }
    ],
    description:
      '100% waterproof TPU breathable membrane backing under soft quilted bamboo terry top. Protects mattress against spills, sweat, stains, and dust mites.',
    highlights: [
      '100% Spill & liquid waterproof protection',
      'Quiet breathable TPU membrane backing',
      'Fitted elastic skirt fits mattresses up to 14"',
      'Machine washable easy laundry',
      '3-year waterproof warranty'
    ],
    features: ['100% Waterproof', 'Noiseless TPU', 'Elastic Skirt'],
    material: 'Bamboo Terry',
    size: ['Single', 'Double', 'Queen', 'King'],
    warranty: '3 Years',
    tags: ['protector', 'waterproof', 'bestseller', 'essential'],
    badges: ['BESTSELLER', 'TOP RATED'],
    stock: 50,
    delivery: { estimateDays: 2, free: true },
    variants: [
      {
        id: 'var-qmp-queen',
        label: 'Queen (78" x 60")',
        attributes: { size: 'Queen' },
        price: 1299,
        originalPrice: 1799,
        stock: 50,
        sku: 'JH-ACC-001-Q'
      },
      {
        id: 'var-qmp-king',
        label: 'King (78" x 72")',
        attributes: { size: 'King' },
        price: 1499,
        originalPrice: 2099,
        stock: 35,
        sku: 'JH-ACC-001-K'
      }
    ],
    specs: {
      Type: 'Fitted Mattress Protector',
      Size: 'Queen / King / Double / Single',
      Material: 'Bamboo Terry & Waterproof TPU Backing',
      Colour: 'Crisp White',
      'Wash Care': 'Machine Wash Cold / Tumble Dry Low',
      'Pack Contents': '1 Fitted Mattress Protector',
      Warranty: '3-Year Waterproof Guarantee'
    },
    createdAt: '2026-01-02T00:00:00.000Z',
    relatedIds: ['cloudrest-premium-mattress', 'ortho-contour-pillow']
  },

  {
    id: 'bamboo-fitted-sheet-set',
    sku: 'JH-ACC-002',
    name: '100% Organic Bamboo Sheet Set (4-Piece)',
    brand: 'JAIHIND',
    category: 'accessory',
    subcategory: 'Bed Sheet Set',
    price: 3299,
    originalPrice: 4499,
    discount: 27,
    rating: 4.9,
    reviewCount: 140,
    ratingDistribution: { 5: 90, 4: 7, 3: 2, 2: 1, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: '100% Organic Bamboo Sheet Set'
      }
    ],
    description:
      'Silky smooth 400 TC organic bamboo viscose sheets. Cool to the touch, hypoallergenic, and softer than 1000 TC Egyptian cotton.',
    highlights: [
      'Includes 1 fitted sheet, 1 flat sheet & 2 pillowcases',
      '100% Organic Viscose from Bamboo',
      'Silky 400 TC sateen weave texture',
      'Cooling temperature regulation',
      '2-year warranty'
    ],
    features: ['4-Piece Set', 'Silky Bamboo', '400 TC Sateen'],
    material: 'Bamboo Viscose',
    size: ['Queen', 'King'],
    warranty: '2 Years',
    tags: ['bamboo', 'sheets', 'luxury'],
    badges: ['STAFF PICK'],
    stock: 20,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-bss-queen',
        label: 'Queen · Natural Cream (4-Piece)',
        attributes: { size: 'Queen', colour: 'Natural Cream' },
        price: 3299,
        originalPrice: 4499,
        stock: 20,
        sku: 'JH-ACC-002-Q'
      }
    ],
    specs: {
      Type: '4-Piece Bed Sheet Set',
      Material: '100% Organic Bamboo Viscose',
      Warranty: '2 Years'
    },
    createdAt: '2026-01-18T00:00:00.000Z'
  },

  {
    id: 'silk-pillow-cover-pair',
    sku: 'JH-ACC-003',
    name: '100% Mulberry Silk Pillowcase Pair (22 Momme)',
    brand: 'CloudRest',
    category: 'accessory',
    subcategory: 'Pillowcase',
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.8,
    reviewCount: 188,
    ratingDistribution: { 5: 85, 4: 10, 3: 4, 2: 1, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: '100% Mulberry Silk Pillowcase Pair'
      }
    ],
    description:
      'Pure 22 Momme Grade 6A Mulberry silk pillowcases. Prevents facial sleep creases, tames hair frizz, and preserves natural skin moisture overnight.',
    highlights: [
      'Pack of 2 Mulberry Silk pillowcases',
      '22 Momme Grade 6A pure silk',
      'Anti-bedhead frizz & hair breakage prevention',
      'Retains skin hydration & anti-aging benefits',
      'Hidden zipper enclosure'
    ],
    features: ['22 Momme Silk', 'Anti-Frizz Hair', 'Skin Hydration'],
    material: 'Mulberry Silk',
    size: ['Standard'],
    warranty: '1 Year',
    tags: ['silk', 'beauty', 'pillowcase', 'trending'],
    badges: ['TRENDING'],
    stock: 25,
    delivery: { estimateDays: 2, free: true },
    variants: [
      {
        id: 'var-spc-pair',
        label: 'Ivory Pearl · Pack of 2',
        attributes: { size: 'Standard', pack: 2 },
        price: 2499,
        originalPrice: 3499,
        stock: 25,
        sku: 'JH-ACC-003-P2'
      }
    ],
    specs: {
      Type: 'Pillowcase Pair',
      Material: '100% Grade 6A Mulberry Silk (22 Momme)',
      Warranty: '1 Year'
    },
    createdAt: '2026-01-25T00:00:00.000Z'
  },

  {
    id: 'weighted-comfort-blanket',
    sku: 'JH-ACC-004',
    name: 'Deep Sleep Glass Bead Weighted Blanket (7 kg)',
    brand: 'JAIHIND',
    category: 'accessory',
    subcategory: 'Weighted Blanket',
    price: 3999,
    originalPrice: 5499,
    discount: 27,
    rating: 4.7,
    reviewCount: 95,
    ratingDistribution: { 5: 76, 4: 16, 3: 5, 2: 2, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: 'Deep Sleep Glass Bead Weighted Blanket'
      }
    ],
    description:
      '7 kg weighted blanket filled with micro glass beads in 4-inch square pockets. Simulates deep pressure touch to reduce anxiety and induce calm sleep.',
    highlights: [
      '7 kg weight optimal for adults (55-80 kg)',
      'Micro glass beads sealed in 4" stitched pockets',
      'Includes removable plush minky washable duvet cover',
      'Promotes serotonin and melatonin release naturally',
      '2-year warranty'
    ],
    features: ['7 kg Weight', 'Micro Glass Beads', 'Deep Pressure Touch'],
    material: 'Cotton & Glass Beads',
    size: ['Double'],
    warranty: '2 Years',
    tags: ['weighted', 'anxiety-relief', 'calm'],
    badges: ['STAFF PICK'],
    stock: 14,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-wbl-7kg',
        label: '7 kg · Slate Grey',
        attributes: { size: 'Double' },
        price: 3999,
        originalPrice: 5499,
        stock: 14,
        sku: 'JH-ACC-004-7K'
      }
    ],
    specs: {
      Type: 'Weighted Therapy Blanket',
      Weight: '7 kg (15 lbs)',
      Material: '100% Cotton Outer & Micro Glass Beads',
      Warranty: '2 Years'
    },
    createdAt: '2026-02-06T00:00:00.000Z'
  },

  {
    id: 'luxury-microfibre-duvet',
    sku: 'JH-ACC-005',
    name: 'All-Season Microfibre Quilted Comforter / Duvet',
    brand: 'JAIHIND',
    category: 'accessory',
    subcategory: 'Comforter',
    price: 2199,
    originalPrice: 2999,
    discount: 27,
    rating: 4.6,
    reviewCount: 165,
    ratingDistribution: { 5: 72, 4: 20, 3: 5, 2: 2, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: 'All-Season Microfibre Quilted Comforter Duvet'
      }
    ],
    description:
      '250 GSM light-and-fluffy hollowfibre filled duvet. Designed for all-year round Indian air-conditioned bedrooms.',
    highlights: [
      '250 GSM all-season hollowfibre fill',
      'Box stitch quilting keeps fill evenly spread',
      'Corner duvet cover tie loops',
      'Hypoallergenic & machine washable',
      '2-year warranty'
    ],
    features: ['250 GSM', 'Box Stitching', 'All-Season AC'],
    material: 'Microfibre',
    size: ['Queen', 'King'],
    warranty: '2 Years',
    tags: ['comforter', 'duvet', 'ac-blanket'],
    badges: ['BESTSELLER'],
    stock: 28,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-lmd-queen',
        label: 'Queen (88" x 96")',
        attributes: { size: 'Queen' },
        price: 2199,
        originalPrice: 2999,
        stock: 28,
        sku: 'JH-ACC-005-Q'
      }
    ],
    specs: {
      Type: 'All-Season Comforter',
      GSM: '250 GSM',
      Warranty: '2 Years'
    },
    createdAt: '2026-01-12T00:00:00.000Z'
  },

  {
    id: 'cotton-fitted-sheet-pair',
    sku: 'JH-ACC-006',
    name: '300 TC Percale Pure Cotton Fitted Sheet',
    brand: 'JAIHIND',
    category: 'accessory',
    subcategory: 'Bed Sheet',
    price: 1599,
    originalPrice: 2199,
    discount: 27,
    rating: 4.7,
    reviewCount: 88,
    ratingDistribution: { 5: 78, 4: 15, 3: 5, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: '300 TC Percale Pure Cotton Fitted Sheet'
      }
    ],
    description:
      'Crisp, cool 300 Thread Count long-staple cotton percale fitted sheet with 360-degree heavy elastic hem for tight bed fitting.',
    highlights: [
      '300 TC Long-Staple Cotton Percale',
      'Crisp cool hotel sheet weave',
      'Deep 12-inch elastic corners',
      'Colorfast & pill-resistant fabric',
      '2-year warranty'
    ],
    features: ['300 TC Cotton', 'Crisp Percale', '360° Elastic'],
    material: 'Cotton',
    size: ['Single', 'Double', 'Queen', 'King'],
    warranty: '2 Years',
    tags: ['cotton', 'sheets', 'fitted'],
    badges: ['NEW'],
    stock: 30,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-cfs-queen',
        label: 'Queen · White Crisp',
        attributes: { size: 'Queen' },
        price: 1599,
        originalPrice: 2199,
        stock: 30,
        sku: 'JH-ACC-006-Q'
      }
    ],
    specs: {
      Type: 'Fitted Bed Sheet',
      Material: '100% Long-Staple Cotton (300 TC)',
      Warranty: '2 Years'
    },
    createdAt: '2026-02-17T00:00:00.000Z'
  },

  {
    id: 'memory-foam-lumbar-cushion',
    sku: 'JH-ACC-007',
    name: 'Ergonomic Office Chair & Car Lumbar Cushion',
    brand: 'CloudRest',
    category: 'accessory',
    subcategory: 'Cushion',
    price: 1199,
    originalPrice: 1699,
    discount: 29,
    rating: 4.6,
    reviewCount: 120,
    ratingDistribution: { 5: 70, 4: 20, 3: 6, 2: 2, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: 'Ergonomic Office Chair & Car Lumbar Cushion'
      }
    ],
    description:
      'Contoured orthopedic memory foam lumbar cushion with dual adjustable chair straps for work-from-home back relief.',
    highlights: [
      'Contoured lower back spine support',
      'Dual adjustable chair fastening straps',
      'Breathable 3D mesh zip cover',
      'Works on office chairs, sofas & car seats',
      '2-year warranty'
    ],
    features: ['Spine Support', 'Dual Chair Straps', '3D Breathable Mesh'],
    material: 'Memory Foam',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['lumbar', 'back-pain', 'office-chair'],
    badges: ['LIMITED OFFER'],
    stock: 22,
    delivery: { estimateDays: 2, free: true },
    variants: [
      {
        id: 'var-mlc-std',
        label: 'Black Mesh Lumbar Cushion',
        attributes: { size: 'Standard' },
        price: 1199,
        originalPrice: 1699,
        stock: 22,
        sku: 'JH-ACC-007-B'
      }
    ],
    specs: {
      Type: 'Lumbar Back Support Cushion',
      Material: 'Memory Foam & 3D Mesh',
      Warranty: '2 Years'
    },
    createdAt: '2026-01-15T00:00:00.000Z'
  },

  {
    id: 'hotel-plush-duvet-cover-set',
    sku: 'JH-ACC-008',
    name: 'Hotel Satin Stripe Duvet Cover Set (3-Piece)',
    brand: 'JAIHIND',
    category: 'accessory',
    subcategory: 'Duvet Cover',
    price: 2699,
    originalPrice: 3599,
    discount: 25,
    rating: 4.8,
    reviewCount: 75,
    ratingDistribution: { 5: 80, 4: 15, 3: 4, 2: 1, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: 'Hotel Satin Stripe Duvet Cover Set'
      }
    ],
    description:
      '1cm satin stripe woven 350 TC cotton duvet cover with hidden zipper and corner tie ribbons to secure comforter in place.',
    highlights: [
      'Includes 1 Duvet Cover + 2 Pillow Shams',
      '1cm Luxury hotel satin stripe pattern',
      'Internal corner ties prevent duvet shifting',
      'Hidden bottom zipper closure',
      '2-year warranty'
    ],
    features: ['Satin Stripe', 'Corner Ties', '350 TC Cotton'],
    material: 'Cotton',
    size: ['Queen', 'King'],
    warranty: '2 Years',
    tags: ['duvet-cover', 'hotel-luxe', 'satin-stripe'],
    badges: ['NEW'],
    stock: 15,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-hdc-queen',
        label: 'Queen · Pure White Satin Stripe',
        attributes: { size: 'Queen' },
        price: 2699,
        originalPrice: 3599,
        stock: 15,
        sku: 'JH-ACC-008-Q'
      }
    ],
    specs: {
      Type: '3-Piece Duvet Cover Set',
      Material: '350 TC Satin Stripe Cotton',
      Warranty: '2 Years'
    },
    createdAt: '2026-02-21T00:00:00.000Z'
  },

  {
    id: 'ortho-foot-rest-cushion',
    sku: 'JH-ACC-009',
    name: 'Ergonomic Under-Desk Memory Foam Footrest',
    brand: 'CloudRest',
    category: 'accessory',
    subcategory: 'Footrest',
    price: 1399,
    originalPrice: 1899,
    discount: 26,
    rating: 4.7,
    reviewCount: 45,
    ratingDistribution: { 5: 75, 4: 18, 3: 5, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: 'Ergonomic Under-Desk Memory Foam Footrest'
      }
    ],
    description:
      'Teardrop curved memory foam foot cushion for desk work. Improves posture and leg circulation during long desk hours.',
    highlights: [
      'Teardrop ergonomic arch support',
      'Anti-slip tread base keeps it in place',
      'Relieves leg fatigue & lower back strain',
      'Washable plush outer cover',
      '2-year warranty'
    ],
    features: ['Ergonomic Teardrop', 'Anti-Slip Base', 'Desk Fatigue Relief'],
    material: 'Memory Foam',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['footrest', 'ergonomic', 'office'],
    badges: ['TOP RATED'],
    stock: 20,
    delivery: { estimateDays: 2, free: true },
    variants: [
      {
        id: 'var-ofr-std',
        label: 'Standard Footrest',
        attributes: { size: 'Standard' },
        price: 1399,
        originalPrice: 1899,
        stock: 20,
        sku: 'JH-ACC-009-F1'
      }
    ],
    specs: {
      Type: 'Under-Desk Footrest',
      Material: 'Memory Foam & Anti-Slip Base',
      Warranty: '2 Years'
    },
    createdAt: '2026-02-07T00:00:00.000Z'
  },

  {
    id: 'weighted-sleep-eye-mask',
    sku: 'JH-ACC-010',
    name: 'Silk Weighted Lavender Sleep Eye Mask',
    brand: 'JAIHIND',
    category: 'accessory',
    subcategory: 'Eye Mask',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    rating: 4.8,
    reviewCount: 130,
    ratingDistribution: { 5: 82, 4: 12, 3: 4, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=85',
        alt: 'Silk Weighted Lavender Sleep Eye Mask'
      }
    ],
    description:
      'Weighted silk eye mask filled with organic flaxseeds and natural dried lavender. Blocks 100% light while gentle pressure calms facial nerves.',
    highlights: [
      '100% Mulberry silk gentle on eye area',
      'Weighted with natural flaxseed & real lavender',
      '100% Total light blockout contouring',
      'Adjustable snag-free elastic strap',
      '1-year warranty'
    ],
    features: ['Mulberry Silk', 'Real Lavender', '100% Light Blockout'],
    material: 'Mulberry Silk',
    size: ['Standard'],
    warranty: '1 Year',
    tags: ['eyemask', 'sleep-aid', 'budget'],
    badges: ['BESTSELLER'],
    stock: 45,
    delivery: { estimateDays: 2, free: true },
    variants: [
      {
        id: 'var-sem-std',
        label: 'Terracotta Silk Eye Mask',
        attributes: { size: 'Standard' },
        price: 799,
        originalPrice: 1199,
        stock: 45,
        sku: 'JH-ACC-010-M1'
      }
    ],
    specs: {
      Type: 'Weighted Sleep Eye Mask',
      Material: 'Mulberry Silk & Organic Lavender Flaxseeds',
      Warranty: '1 Year'
    },
    createdAt: '2026-01-05T00:00:00.000Z'
  }
];
