import { Product } from '../../types/product';

export const pillows: Product[] = [
  {
    id: 'ortho-contour-pillow',
    sku: 'JH-PIL-001',
    name: 'OrthoContour Ergonomic Cervical Memory Pillow',
    brand: 'CloudRest',
    category: 'pillow',
    subcategory: 'Cervical Contour Pillow',
    price: 1999,
    originalPrice: 2699,
    discount: 26,
    rating: 4.8,
    reviewCount: 340,
    ratingDistribution: { 5: 84, 4: 11, 3: 3, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'OrthoContour Ergonomic Cervical Memory Pillow'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=85',
        alt: 'Ergonomic neck contour curve closeup'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=85',
        alt: 'Washable bamboo knit outer pillowcase'
      }
    ],
    description:
      'Scientifically shaped with dual height contours to cradle your head and align your neck vertebrae. Eliminates morning neck stiffness for side and back sleepers.',
    highlights: [
      'Dual-height ergonomic contour (4" and 5" lobes)',
      'Slow-rebound orthopedic memory foam',
      'Hypoallergenic bamboo washable zip cover',
      'Reduces neck stiffness & morning tension',
      '2-year warranty against sagging'
    ],
    features: ['Ergonomic Contour', 'Slow Rebound', 'Neck Relief'],
    material: 'Memory Foam',
    firmness: 'Medium',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['cervical', 'neck-pain', 'bestseller', 'side-sleeper'],
    badges: ['BESTSELLER', 'TOP RATED'],
    stock: 25,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-ocp-std-1',
        label: 'Standard Pack of 1',
        attributes: { height: 'Medium', pack: 1 },
        price: 1999,
        originalPrice: 2699,
        stock: 25,
        sku: 'JH-PIL-001-P1'
      },
      {
        id: 'var-ocp-std-2',
        label: 'Standard Pack of 2 (Save ₹600)',
        attributes: { height: 'Medium', pack: 2 },
        price: 3399,
        originalPrice: 5398,
        stock: 12,
        sku: 'JH-PIL-001-P2'
      }
    ],
    specs: {
      Height: 'Dual 4 Inches / 5 Inches',
      Material: '100% Orthopedic Memory Foam',
      Firmness: 'Medium (5/10)',
      'Best For': 'Side and Back Sleepers with neck pain',
      'Cover Material': '300 GSM Knitted Bamboo Fabric',
      Washability: 'Machine Washable Outer Zipper Cover',
      'Fill Weight': '1.2 kg',
      Warranty: '2 Years'
    },
    createdAt: '2026-01-10T00:00:00.000Z',
    relatedIds: ['cloudrest-premium-mattress', 'quilted-bed-protector']
  },

  {
    id: 'cooling-gel-pillow',
    sku: 'JH-PIL-002',
    name: 'CoolingGel Infused Memory Foam Pillow',
    brand: 'CloudRest',
    category: 'pillow',
    subcategory: 'Cooling Gel Pillow',
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    rating: 4.7,
    reviewCount: 180,
    ratingDistribution: { 5: 78, 4: 15, 3: 5, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'CoolingGel Infused Memory Foam Pillow'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=85',
        alt: 'Cooling gel pad surface layer'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=85',
        alt: 'Ice-mesh breathable cover'
      }
    ],
    description:
      'Features a cool-touch gel pad bonded directly to ventilated memory foam. Cools your head instantly on contact for uninterrupted hot night sleep.',
    highlights: [
      '3D honeycomb gel pad surface',
      'Active heat transfer technology',
      'Pressure-relieving ventilated foam core',
      'Ice-silk breathable zip cover',
      '2-year warranty'
    ],
    features: ['Cooling Gel Pad', 'Ice Silk Cover', 'Hot Sleepers'],
    material: 'Memory Foam',
    firmness: 'Medium',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['cooling', 'hot-sleepers', 'trending'],
    badges: ['TRENDING'],
    stock: 20,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-cgp-p1',
        label: 'Pack of 1',
        attributes: { height: 'Medium', pack: 1 },
        price: 2499,
        originalPrice: 3299,
        stock: 20,
        sku: 'JH-PIL-002-P1'
      }
    ],
    specs: {
      Height: '4.5 Inches',
      Material: 'Cooling Gel Pad & Memory Foam',
      Firmness: 'Medium (6/10)',
      'Best For': 'Hot Sleepers',
      Warranty: '2 Years'
    },
    createdAt: '2026-01-20T00:00:00.000Z'
  },

  {
    id: 'latex-breathe-pillow',
    sku: 'JH-PIL-003',
    name: 'Organic Latex Breathe Plush Pillow',
    brand: 'SleepWell Craft',
    category: 'pillow',
    subcategory: 'Natural Latex Pillow',
    price: 2999,
    originalPrice: 3899,
    discount: 23,
    rating: 4.9,
    reviewCount: 96,
    ratingDistribution: { 5: 90, 4: 7, 3: 2, 2: 1, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'Organic Latex Breathe Plush Pillow'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=85',
        alt: 'Pin-core natural latex hole pattern'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=85',
        alt: 'Unbleached organic cotton cover'
      }
    ],
    description:
      '100% natural organic latex pillow offering instant springy bounce back. Never needs fluffing and maintains its loft for over 5 years.',
    highlights: [
      '100% Organic Dunlop Latex',
      'Self-ventilating pin-core structure',
      'Never sags or flattens over time',
      'Naturally antibacterial & anti-dust mite',
      '5-year loft resilience guarantee'
    ],
    features: ['100% Latex', 'Bounce Back', 'Never Flattens'],
    material: 'Latex',
    firmness: 'Medium Firm',
    size: ['Standard'],
    warranty: '5 Years',
    tags: ['latex', 'organic', 'eco-friendly'],
    badges: ['STAFF PICK'],
    stock: 14,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-lbp-p1',
        label: 'Pack of 1',
        attributes: { height: 'Medium', pack: 1 },
        price: 2999,
        originalPrice: 3899,
        stock: 14,
        sku: 'JH-PIL-003-P1'
      }
    ],
    specs: {
      Height: '5 Inches',
      Material: '100% Organic Natural Latex',
      Firmness: 'Medium Firm (7/10)',
      Warranty: '5 Years'
    },
    createdAt: '2026-02-05T00:00:00.000Z'
  },

  {
    id: 'plush-microfibre-pillow-set',
    sku: 'JH-PIL-004',
    name: 'Hotel Luxe Plush Microfibre Pillow Set (Pair)',
    brand: 'JAIHIND',
    category: 'pillow',
    subcategory: 'Microfibre Pillow',
    price: 1499,
    originalPrice: 2199,
    discount: 31,
    rating: 4.6,
    reviewCount: 420,
    ratingDistribution: { 5: 70, 4: 20, 3: 6, 2: 3, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'Hotel Luxe Plush Microfibre Pillow Set Pair'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=85',
        alt: 'Plush cloud-like softness feel'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=85',
        alt: 'Piping border hotel style finish'
      }
    ],
    description:
      'Ultra-fine virgin microfibre fill mimicking the fluffy cloud softness of real goose down without allergies or odor. Comes as a set of 2 pillows.',
    highlights: [
      'Includes 2 premium hotel plush pillows',
      '100% Virgin 0.9D microdown fill',
      'Hypoallergenic 300 TC cotton shell',
      'Machine washable & easy maintenance',
      '1-year loft replacement warranty'
    ],
    features: ['Pack of 2', 'Down Alternative', 'Hotel Plush'],
    material: 'Fibre',
    firmness: 'Soft',
    size: ['Standard'],
    warranty: '1 Year',
    tags: ['hotel-luxe', 'budget', 'value-pack'],
    badges: ['BESTSELLER'],
    stock: 40,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-pmp-p2',
        label: 'Pack of 2 Pillows',
        attributes: { height: 'Medium', pack: 2 },
        price: 1499,
        originalPrice: 2199,
        stock: 40,
        sku: 'JH-PIL-004-P2'
      }
    ],
    specs: {
      Height: '5.5 Inches (fluffy soft)',
      Material: '0.9D Microdown Fibre & Cotton Shell',
      Firmness: 'Soft (3/10)',
      Warranty: '1 Year'
    },
    createdAt: '2026-01-01T00:00:00.000Z'
  },

  {
    id: 'ergonomic-snore-less-pillow',
    sku: 'JH-PIL-005',
    name: 'Ergonomic Snore-Relief Wedge Pillow',
    brand: 'CloudRest',
    category: 'pillow',
    subcategory: 'Wedge Pillow',
    price: 3299,
    originalPrice: 4299,
    discount: 23,
    rating: 4.6,
    reviewCount: 78,
    ratingDistribution: { 5: 74, 4: 16, 3: 6, 2: 2, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'Ergonomic Snore-Relief Wedge Pillow'
      }
    ],
    description:
      'Elevated 30° incline wedge pillow designed to open respiratory airways, reduce snoring, and alleviate acid reflux during sleep.',
    highlights: [
      '30-degree orthopedic incline angle',
      'Relieves snoring & acid reflux / GERD',
      'High density foam support core',
      'Breathable zip cover',
      '2-year warranty'
    ],
    features: ['30° Incline', 'Snore Relief', 'GERD Support'],
    material: 'Memory Foam',
    firmness: 'Firm',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['snoring', 'wedge', 'health'],
    badges: ['NEW'],
    stock: 15,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-esp-1',
        label: 'Standard Incline Wedge',
        attributes: { height: 'High', pack: 1 },
        price: 3299,
        originalPrice: 4299,
        stock: 15,
        sku: 'JH-PIL-005-W1'
      }
    ],
    specs: {
      Height: '7 Inches at apex',
      Material: 'Supportive Core Foam',
      Firmness: 'Firm (8/10)',
      Warranty: '2 Years'
    },
    createdAt: '2026-02-18T00:00:00.000Z'
  },

  {
    id: 'adjustable-shredded-memory-pillow',
    sku: 'JH-PIL-006',
    name: 'CustomLoft Adjustable Shredded Memory Pillow',
    brand: 'JAIHIND',
    category: 'pillow',
    subcategory: 'Adjustable Pillow',
    price: 2199,
    originalPrice: 2899,
    discount: 24,
    rating: 4.8,
    reviewCount: 110,
    ratingDistribution: { 5: 82, 4: 12, 3: 4, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'CustomLoft Adjustable Shredded Memory Pillow'
      }
    ],
    description:
      'Unzip the inner lining and add or remove shredded gel foam fill to create your exact ideal pillow height and firmness.',
    highlights: [
      'Zipper access to add or remove foam fill',
      'Shredded gel memory foam & microfibre blend',
      'Customizable height from 2" to 6"',
      'Cooling bamboo rayon outer casing',
      '2-year warranty'
    ],
    features: ['Adjustable Height', 'Custom Loft', 'Gel Memory'],
    material: 'Memory Foam',
    firmness: 'Medium',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['adjustable', 'customizable'],
    badges: ['LIMITED OFFER'],
    stock: 22,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-amp-1',
        label: 'Adjustable Single Pack',
        attributes: { height: 'Medium', pack: 1 },
        price: 2199,
        originalPrice: 2899,
        stock: 22,
        sku: 'JH-PIL-006-A1'
      }
    ],
    specs: {
      Height: 'Adjustable 2" to 6"',
      Material: 'Shredded Gel Foam & Microfibre',
      Firmness: 'Customizable',
      Warranty: '2 Years'
    },
    createdAt: '2026-02-08T00:00:00.000Z'
  },

  {
    id: 'charcoal-bamboo-detox-pillow',
    sku: 'JH-PIL-007',
    name: 'CharcoalInfused Bamboo Purifying Pillow',
    brand: 'CloudRest',
    category: 'pillow',
    subcategory: 'Charcoal Memory Pillow',
    price: 2299,
    originalPrice: 2999,
    discount: 23,
    rating: 4.7,
    reviewCount: 52,
    ratingDistribution: { 5: 75, 4: 18, 3: 5, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'CharcoalInfused Bamboo Purifying Pillow'
      }
    ],
    description:
      'Infused with activated bamboo charcoal to naturally absorb humidity, moisture, and odors while maintaining ergonomic memory foam contours.',
    highlights: [
      'Activated bamboo charcoal odor absorption',
      'Moisture-wicking temperature control',
      'Pressure-relieving memory foam core',
      'Antibacterial & anti-allergen',
      '2-year warranty'
    ],
    features: ['Activated Charcoal', 'Odor Absorbing', 'Anti-Allergen'],
    material: 'Memory Foam',
    firmness: 'Medium Firm',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['charcoal', 'purifying'],
    badges: ['NEW'],
    stock: 18,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-cbp-1',
        label: 'Standard Pack of 1',
        attributes: { height: 'Medium', pack: 1 },
        price: 2299,
        originalPrice: 2999,
        stock: 18,
        sku: 'JH-PIL-007-C1'
      }
    ],
    specs: {
      Height: '4.5 Inches',
      Material: 'Bamboo Charcoal Memory Foam',
      Firmness: 'Medium Firm (7/10)',
      Warranty: '2 Years'
    },
    createdAt: '2026-02-22T00:00:00.000Z'
  },

  {
    id: 'luxury-down-feather-pillow',
    sku: 'JH-PIL-008',
    name: 'Royal Goose Down & Feather Pillow',
    brand: 'JAIHIND',
    category: 'pillow',
    subcategory: 'Down Feather Pillow',
    price: 4499,
    originalPrice: 5999,
    discount: 25,
    rating: 4.9,
    reviewCount: 44,
    ratingDistribution: { 5: 90, 4: 8, 3: 2, 2: 0, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'Royal Goose Down & Feather Pillow'
      }
    ],
    description:
      '70% white goose down and 30% small feathers wrapped in a 500 TC down-proof cotton casing. Ultimate luxury softness for stomach and back sleepers.',
    highlights: [
      '70% White Goose Down / 30% Feathers',
      '500 TC Down-proof Egyptian cotton shell',
      'Ethically sourced RDS certified down',
      'Ultra-breathable cloud luxury',
      '3-year warranty'
    ],
    features: ['70% Goose Down', '500 TC Cotton', 'Cloud Soft'],
    material: 'Feather',
    firmness: 'Soft',
    size: ['Standard'],
    warranty: '3 Years',
    tags: ['luxury', 'down', 'plush'],
    badges: ['STAFF PICK'],
    stock: 8,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-gdf-1',
        label: 'Standard Pack of 1',
        attributes: { height: 'Low', pack: 1 },
        price: 4499,
        originalPrice: 5999,
        stock: 8,
        sku: 'JH-PIL-008-F1'
      }
    ],
    specs: {
      Height: '4 Inches',
      Material: '70% Goose Down / 30% Feather',
      Firmness: 'Soft (2/10)',
      Warranty: '3 Years'
    },
    createdAt: '2026-01-30T00:00:00.000Z'
  },

  {
    id: 'travel-ortho-neck-pillow',
    sku: 'JH-PIL-009',
    name: 'TravelOrtho 360 Memory Neck Pillow',
    brand: 'CloudRest',
    category: 'pillow',
    subcategory: 'Travel Pillow',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.5,
    reviewCount: 160,
    ratingDistribution: { 5: 68, 4: 22, 3: 6, 2: 2, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'TravelOrtho 360 Memory Neck Pillow'
      }
    ],
    description:
      'U-shaped high density memory foam travel pillow with chin support snap lock. Folds down into a compact travel pouch.',
    highlights: [
      '360-degree ergonomic chin & neck lock',
      'Compresses down to 50% size for packing',
      'Velour plush washable cover',
      'Includes travel storage bag & earplugs',
      '1-year warranty'
    ],
    features: ['360° Neck Lock', 'Compressible', 'Travel Bag'],
    material: 'Memory Foam',
    firmness: 'Medium Firm',
    size: ['Standard'],
    warranty: '1 Year',
    tags: ['travel', 'compact', 'budget'],
    badges: ['BESTSELLER'],
    stock: 35,
    delivery: { estimateDays: 2, free: true },
    variants: [
      {
        id: 'var-tnp-1',
        label: 'Travel Pillow + Pouch',
        attributes: { height: 'Low', pack: 1 },
        price: 999,
        originalPrice: 1499,
        stock: 35,
        sku: 'JH-PIL-009-T1'
      }
    ],
    specs: {
      Height: '3.5 Inches',
      Material: 'Memory Foam & Velour Cover',
      Firmness: 'Medium Firm (7/10)',
      Warranty: '1 Year'
    },
    createdAt: '2026-02-02T00:00:00.000Z'
  },

  {
    id: 'body-support-maternity-pillow',
    sku: 'JH-PIL-010',
    name: 'Full Body Support & Maternity Pillow',
    brand: 'JAIHIND',
    category: 'pillow',
    subcategory: 'Body Pillow',
    price: 3499,
    originalPrice: 4499,
    discount: 22,
    rating: 4.8,
    reviewCount: 88,
    ratingDistribution: { 5: 82, 4: 12, 3: 4, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
        alt: 'Full Body Support & Maternity Pillow'
      }
    ],
    description:
      '5-foot U-shaped full body pillow designed for side sleepers, back pain relief, and pregnancy body contouring.',
    highlights: [
      '5-Foot ergonomic U-shape contour',
      'Supports head, back, belly, and knees simultaneously',
      'High-resilience plush microfibre fill',
      'Removable 100% jersey cotton zip cover',
      '2-year warranty'
    ],
    features: ['5-Foot U Shape', 'Full Body Support', 'Maternity Choice'],
    material: 'Fibre',
    firmness: 'Medium',
    size: ['Standard'],
    warranty: '2 Years',
    tags: ['body-pillow', 'maternity', 'side-sleeper'],
    badges: ['TOP RATED'],
    stock: 10,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-fbp-1',
        label: 'Full Body U-Pillow',
        attributes: { height: 'High', pack: 1 },
        price: 3499,
        originalPrice: 4499,
        stock: 10,
        sku: 'JH-PIL-010-B1'
      }
    ],
    specs: {
      Height: '6 Inches',
      Material: 'Microfibre Fill & Jersey Cotton Cover',
      Firmness: 'Medium (5/10)',
      Warranty: '2 Years'
    },
    createdAt: '2026-01-18T00:00:00.000Z'
  }
];
