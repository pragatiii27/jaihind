import { Product } from '../../types/product';

export const mattresses: Product[] = [
  {
    id: 'cloudrest-premium-mattress',
    sku: 'JH-MAT-001',
    name: 'CloudRest Premium Orthopedic Mattress',
    brand: 'JAIHIND',
    category: 'mattress',
    subcategory: 'Memory Foam Mattress',
    price: 24999,
    originalPrice: 31999,
    discount: 22,
    rating: 4.8,
    reviewCount: 126,
    ratingDistribution: { 5: 82, 4: 11, 3: 4, 2: 2, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'CloudRest Premium Orthopedic Queen Mattress in modern bedroom'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Close-up texture of plush breathable quilted top layer'
      },
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
        alt: 'Bed setup with white linen and warm interior lighting'
      }
    ],
    description:
      'Engineered with high-density pressure-relieving memory foam and responsive orthopedic support layers. Designed specifically to realign your spine while maintaining active body temperature regulation.',
    highlights: [
      'Advanced 3-layer spine alignment technology',
      'Zero motion transfer for undisturbed sleep',
      'Cooling gel-infused breathable memory foam layer',
      'Anti-microbial washable knitted bamboo outer cover',
      'Recommended by top orthopedic specialists'
    ],
    features: ['Cooling Gel', 'Zero Motion', 'Ortho Support'],
    material: 'Memory Foam',
    firmness: 'Medium Firm',
    size: ['Single', 'Double', 'Queen', 'King', 'Custom'],
    thickness: 10,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['cooling', 'back-pain', 'bestseller', 'orthopedic'],
    badges: ['BESTSELLER', 'TOP RATED'],
    stock: 15,
    delivery: { estimateDays: 3, free: true, note: 'Free white-glove doorstep delivery' },
    variants: [
      {
        id: 'var-cr-single-8',
        label: 'Single · 8" · Medium Firm',
        attributes: { size: 'Single', thickness: 8, firmness: 'Medium Firm' },
        price: 14999,
        originalPrice: 18999,
        stock: 8,
        sku: 'JH-MAT-001-S8'
      },
      {
        id: 'var-cr-double-8',
        label: 'Double · 8" · Medium Firm',
        attributes: { size: 'Double', thickness: 8, firmness: 'Medium Firm' },
        price: 19999,
        originalPrice: 24999,
        stock: 10,
        sku: 'JH-MAT-001-D8'
      },
      {
        id: 'var-cr-queen-10',
        label: 'Queen · 10" · Medium Firm',
        attributes: { size: 'Queen', thickness: 10, firmness: 'Medium Firm' },
        price: 24999,
        originalPrice: 31999,
        stock: 15,
        sku: 'JH-MAT-001-Q10'
      },
      {
        id: 'var-cr-king-10',
        label: 'King · 10" · Medium Firm',
        attributes: { size: 'King', thickness: 10, firmness: 'Medium Firm' },
        price: 29999,
        originalPrice: 37999,
        stock: 6,
        sku: 'JH-MAT-001-K10'
      }
    ],
    specs: {
      Material: 'Gel-Infused Memory Foam & High Resilience Base',
      Firmness: 'Medium Firm (7/10)',
      Thickness: '10 Inches',
      Layers: '3 Layers (Cooling Gel + Ortho Foam + HD Support)',
      'Cover Fabric': 'Organic Breathable Knitted Bamboo Fabric',
      Warranty: '10 Years Manufacturer Warranty',
      Trial: '100-Night Risk-Free Trial',
      'Cooling Tech': 'Open-Cell Thermal Gel Channel',
      'Motion Isolation': '99% Vibration Damping',
      'Weight Capacity': 'Up to 280 kg total weight'
    },
    createdAt: '2026-01-15T00:00:00.000Z',
    relatedIds: ['ortho-contour-pillow', 'quilted-bed-protector', 'nordic-solid-wood-bed'],
    bundleIds: ['ortho-contour-pillow', 'quilted-bed-protector']
  },

  {
    id: 'latex-breathe-ortho-mattress',
    sku: 'JH-MAT-002',
    name: 'Natural Latex Breathe Ortho Mattress',
    brand: 'SleepWell Craft',
    category: 'mattress',
    subcategory: 'Latex Mattress',
    price: 34999,
    originalPrice: 42999,
    discount: 19,
    rating: 4.7,
    reviewCount: 94,
    ratingDistribution: { 5: 78, 4: 15, 3: 5, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85',
        alt: 'Natural Latex Breathe Ortho Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Latex pin-core ventilation detail'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Natural cotton quilted top finish'
      }
    ],
    description:
      'Made from 100% natural organic Pin-Core latex sourced sustainably. Features natural buoyancy that dynamically pushes back against weight for instant spinal correction.',
    highlights: [
      '100% Natural Organic Certified Latex',
      'Pin-core air channels for continuous airflow',
      'Zero synthetic foam chemical off-gassing',
      'Hypoallergenic & resistant to dust mites',
      '10-year shape retention guarantee'
    ],
    features: ['100% Natural', 'Pin-Core Airflow', 'Eco-Organic'],
    material: 'Latex',
    firmness: 'Medium',
    size: ['Single', 'Double', 'Queen', 'King'],
    thickness: 8,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['cooling', 'organic', 'eco-friendly', 'latex'],
    badges: ['STAFF PICK'],
    stock: 9,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-lx-queen-8',
        label: 'Queen · 8" · Medium',
        attributes: { size: 'Queen', thickness: 8, firmness: 'Medium' },
        price: 34999,
        originalPrice: 42999,
        stock: 9,
        sku: 'JH-MAT-002-Q8'
      },
      {
        id: 'var-lx-king-8',
        label: 'King · 8" · Medium',
        attributes: { size: 'King', thickness: 8, firmness: 'Medium' },
        price: 41999,
        originalPrice: 51999,
        stock: 4,
        sku: 'JH-MAT-002-K8'
      }
    ],
    specs: {
      Material: '100% Organic Dunlop Latex Core',
      Firmness: 'Medium (6/10)',
      Thickness: '8 Inches',
      Layers: '2 Layers (Organic Latex + Coir Base)',
      'Cover Fabric': 'Unbleached Organic Cotton',
      Warranty: '10 Years',
      Trial: '100 Nights'
    },
    createdAt: '2026-02-01T00:00:00.000Z'
  },

  {
    id: 'pocket-spring-hybrid-mattress',
    sku: 'JH-MAT-003',
    name: 'Pocket Spring Hybrid Plush Mattress',
    brand: 'JAIHIND',
    category: 'mattress',
    subcategory: 'Hybrid Spring Mattress',
    price: 28999,
    originalPrice: 36999,
    discount: 22,
    rating: 4.9,
    reviewCount: 210,
    ratingDistribution: { 5: 88, 4: 8, 3: 3, 2: 1, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'Pocket Spring Hybrid Plush Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Individually wrapped pocket spring coils'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'European pillow-top luxury cushioning'
      }
    ],
    description:
      'Combines individually encased pocket coils with a euro-top layer of memory foam. Delivers bounce without disturbing your partner on the other side of the bed.',
    highlights: [
      '800+ Encased pocket spring coils',
      'Integrated Euro pillow-top comfort',
      'Reinforced foam perimeter edge support',
      'Active cooling jacquard fabric cover',
      'Superior durability for heavier weights'
    ],
    features: ['Pocket Coils', 'Euro Pillow Top', 'Edge Support'],
    material: 'Hybrid',
    firmness: 'Soft',
    size: ['Double', 'Queen', 'King'],
    thickness: 12,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['hotel-luxe', 'plush', 'couples', 'trending'],
    badges: ['TRENDING', 'TOP RATED'],
    stock: 12,
    delivery: { estimateDays: 4, free: true },
    variants: [
      {
        id: 'var-ps-queen-12',
        label: 'Queen · 12" · Soft',
        attributes: { size: 'Queen', thickness: 12, firmness: 'Soft' },
        price: 28999,
        originalPrice: 36999,
        stock: 12,
        sku: 'JH-MAT-003-Q12'
      },
      {
        id: 'var-ps-king-12',
        label: 'King · 12" · Soft',
        attributes: { size: 'King', thickness: 12, firmness: 'Soft' },
        price: 34999,
        originalPrice: 44999,
        stock: 5,
        sku: 'JH-MAT-003-K12'
      }
    ],
    specs: {
      Material: 'Encased Pocket Coils & Memory Foam Euro Top',
      Firmness: 'Soft (4/10)',
      Thickness: '12 Inches',
      Warranty: '10 Years',
      Trial: '100 Nights'
    },
    createdAt: '2026-01-20T00:00:00.000Z'
  },

  {
    id: 'ortho-firm-coir-mattress',
    sku: 'JH-MAT-004',
    name: 'OrthoFirm High-Density Coir Mattress',
    brand: 'JAIHIND',
    category: 'mattress',
    subcategory: 'Coir & Foam Mattress',
    price: 15999,
    originalPrice: 19999,
    discount: 20,
    rating: 4.5,
    reviewCount: 88,
    ratingDistribution: { 5: 65, 4: 25, 3: 6, 2: 2, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
        alt: 'OrthoFirm High-Density Coir Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Natural coir fiber core construction'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Firm orthopaedic sleeping surface'
      }
    ],
    description:
      'Extra-firm orthopedic support featuring rubberised coconut coir layers sandwiched between bonded foam for intense lower back reinforcement.',
    highlights: [
      'Rubberised coconut coir core for maximum firmness',
      'Dual-sided firmness (Firm side / Medium Firm side)',
      'Natural heat dispersion and air movement',
      'Resistant to sagging under high weight loads',
      'Ideal for chronic lumbar discomfort'
    ],
    features: ['Extra Firm', 'Rubberised Coir', 'Dual Sided'],
    material: 'Memory Foam',
    firmness: 'Firm',
    size: ['Single', 'Double', 'Queen', 'King'],
    thickness: 6,
    warranty: '5 Years',
    trial: '30 Nights',
    tags: ['back-pain', 'extra-firm', 'coir'],
    badges: ['LIMITED OFFER'],
    stock: 14,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-co-queen-6',
        label: 'Queen · 6" · Firm',
        attributes: { size: 'Queen', thickness: 6, firmness: 'Firm' },
        price: 15999,
        originalPrice: 19999,
        stock: 14,
        sku: 'JH-MAT-004-Q6'
      }
    ],
    specs: {
      Material: 'Rubberised Coconut Coir & High Bonded Foam',
      Firmness: 'Firm (9/10)',
      Thickness: '6 Inches',
      Warranty: '5 Years'
    },
    createdAt: '2026-02-10T00:00:00.000Z'
  },

  {
    id: 'coolpulse-gel-memory-mattress',
    sku: 'JH-MAT-005',
    name: 'CoolPulse Active Gel Memory Mattress',
    brand: 'CloudRest',
    category: 'mattress',
    subcategory: 'Cooling Memory Foam',
    price: 27999,
    originalPrice: 34999,
    discount: 20,
    rating: 4.8,
    reviewCount: 142,
    ratingDistribution: { 5: 80, 4: 15, 3: 3, 2: 1, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'CoolPulse Active Gel Memory Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Cooling phase-change material cover'
      },
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
        alt: 'Gel microbeads dispersing body warmth'
      }
    ],
    description:
      'Engineered specifically for hot Indian summers. Phase-change gel beads actively absorb heat away from the body to keep the mattress surface 4°C cooler all night.',
    highlights: [
      'Phase-change active gel cooling beads',
      'Maintains 4°C lower surface temperature',
      'Open-cell breathable foam structure',
      'Quick-response pressure relief',
      '10-year anti-sagging guarantee'
    ],
    features: ['Phase Change Gel', '4°C Cooler', 'Open Cell'],
    material: 'Memory Foam',
    firmness: 'Medium',
    size: ['Single', 'Double', 'Queen', 'King'],
    thickness: 8,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['hot-sleepers', 'cooling', 'bestseller'],
    badges: ['BESTSELLER'],
    stock: 18,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-cp-queen-8',
        label: 'Queen · 8" · Medium',
        attributes: { size: 'Queen', thickness: 8, firmness: 'Medium' },
        price: 27999,
        originalPrice: 34999,
        stock: 18,
        sku: 'JH-MAT-005-Q8'
      }
    ],
    specs: {
      Material: 'Phase-Change Gel Memory Foam & HR Foam',
      Firmness: 'Medium (6/10)',
      Thickness: '8 Inches',
      Warranty: '10 Years',
      Trial: '100 Nights'
    },
    createdAt: '2026-01-25T00:00:00.000Z'
  },

  {
    id: 'grandeur-hotel-plush-mattress',
    sku: 'JH-MAT-006',
    name: 'Grandeur 5-Star Hotel Plush Mattress',
    brand: 'JAIHIND',
    category: 'mattress',
    subcategory: 'Hotel Luxury Mattress',
    price: 49999,
    originalPrice: 64999,
    discount: 23,
    rating: 4.9,
    reviewCount: 76,
    ratingDistribution: { 5: 90, 4: 8, 3: 2, 2: 0, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Grandeur 5-Star Hotel Plush Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'Pillow-top quilted cashmere detail'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Deep luxury mattress height'
      }
    ],
    description:
      'Recreate the opulent feel of 5-star presidential hotel suites at home. Deep 12-inch profile with double box-pillow top quilted with cashmere wool touch fabric.',
    highlights: [
      'Double box pillow-top plush comfort layer',
      'High coil count 9-zone pocket springs',
      'Cashmere-blend ultra-soft outer casing',
      'Heavy-duty motion dampening system',
      '10-year comprehensive replacement warranty'
    ],
    features: ['5-Star Hotel Luxe', 'Cashmere Touch', '9-Zone Springs'],
    material: 'Hybrid',
    firmness: 'Soft',
    size: ['Queen', 'King'],
    thickness: 12,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['hotel-luxe', 'premium', 'plush'],
    badges: ['STAFF PICK', 'TOP RATED'],
    stock: 5,
    delivery: { estimateDays: 4, free: true },
    variants: [
      {
        id: 'var-gr-king-12',
        label: 'King · 12" · Soft',
        attributes: { size: 'King', thickness: 12, firmness: 'Soft' },
        price: 49999,
        originalPrice: 64999,
        stock: 5,
        sku: 'JH-MAT-006-K12'
      }
    ],
    specs: {
      Material: 'Cashmere Quilted Foam & 9-Zone Pocket Spring Core',
      Firmness: 'Soft (3/10)',
      Thickness: '12 Inches',
      Warranty: '10 Years'
    },
    createdAt: '2026-02-15T00:00:00.000Z'
  },

  {
    id: 'zenbed-minimalist-foam-mattress',
    sku: 'JH-MAT-007',
    name: 'ZenBed Dual Comfort Flip Mattress',
    brand: 'SleepWell Craft',
    category: 'mattress',
    subcategory: 'Dual Comfort Mattress',
    price: 12999,
    originalPrice: 16999,
    discount: 24,
    rating: 4.4,
    reviewCount: 65,
    ratingDistribution: { 5: 60, 4: 30, 3: 7, 2: 2, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'ZenBed Dual Comfort Flip Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Dual side firmness color demarcation'
      },
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
        alt: 'Compact roll-pack boxed mattress delivery'
      }
    ],
    description:
      'Two sleeping experiences in one mattress. Simply flip over to choose between a medium-soft plush surface or a firm orthopedic side.',
    highlights: [
      'Dual-comfort reversible sleeping surfaces',
      'Medium-Soft on side A / Firm on side B',
      'High-resilience adaptive foam core',
      'Removable zipper washable cover',
      'Bed-in-a-box easy unboxing'
    ],
    features: ['Dual Comfort', 'Flip Reversible', 'Bed in Box'],
    material: 'Memory Foam',
    firmness: 'Medium',
    size: ['Single', 'Double', 'Queen', 'King'],
    thickness: 6,
    warranty: '7 Years',
    trial: '100 Nights',
    tags: ['budget', 'reversible', 'guest'],
    badges: ['NEW'],
    stock: 20,
    delivery: { estimateDays: 2, free: true },
    variants: [
      {
        id: 'var-zb-queen-6',
        label: 'Queen · 6" · Medium',
        attributes: { size: 'Queen', thickness: 6, firmness: 'Medium' },
        price: 12999,
        originalPrice: 16999,
        stock: 20,
        sku: 'JH-MAT-007-Q6'
      }
    ],
    specs: {
      Material: 'HR Adaptive Foam Dual Layer',
      Firmness: 'Medium (5/10 on soft side, 8/10 on firm side)',
      Thickness: '6 Inches',
      Warranty: '7 Years'
    },
    createdAt: '2026-02-20T00:00:00.000Z'
  },

  {
    id: 'spinal-shield-ortho-mattress',
    sku: 'JH-MAT-008',
    name: 'Spinal Shield Extra Firm Ortho Mattress',
    brand: 'JAIHIND',
    category: 'mattress',
    subcategory: 'Orthopedic Mattress',
    price: 21999,
    originalPrice: 28999,
    discount: 24,
    rating: 4.7,
    reviewCount: 112,
    ratingDistribution: { 5: 75, 4: 18, 3: 4, 2: 2, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Spinal Shield Extra Firm Ortho Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Heavy duty lumbar support zone'
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'Spinal alignment demo mockup'
      }
    ],
    description:
      'Engineered in consultation with physical therapists for severe back discomfort. Features targeted 5-zone spinal reinforcement that prevents posture sagging.',
    highlights: [
      'Targeted 5-zone spinal reinforcement',
      'Ultra high density rebonded foam base',
      'Corrects posture alignment during sleep',
      'Anti-sagging edge perimeter support',
      '10-year structural warranty'
    ],
    features: ['5-Zone Support', 'Extra Firm', 'Spine Correcting'],
    material: 'Memory Foam',
    firmness: 'Firm',
    size: ['Single', 'Double', 'Queen', 'King', 'Custom'],
    thickness: 8,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['back-pain', 'orthopedic', 'extra-firm'],
    badges: ['BESTSELLER'],
    stock: 11,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-ss-queen-8',
        label: 'Queen · 8" · Firm',
        attributes: { size: 'Queen', thickness: 8, firmness: 'Firm' },
        price: 21999,
        originalPrice: 28999,
        stock: 11,
        sku: 'JH-MAT-008-Q8'
      }
    ],
    specs: {
      Material: 'Rebonded Ortho Foam & Memory Top Layer',
      Firmness: 'Firm (8.5/10)',
      Thickness: '8 Inches',
      Warranty: '10 Years'
    },
    createdAt: '2026-01-10T00:00:00.000Z'
  },

  {
    id: 'bio-organic-latex-hybrid',
    sku: 'JH-MAT-009',
    name: 'BioOrganic Latex Spring Hybrid',
    brand: 'SleepWell Craft',
    category: 'mattress',
    subcategory: 'Latex Hybrid Mattress',
    price: 39999,
    originalPrice: 49999,
    discount: 20,
    rating: 4.8,
    reviewCount: 54,
    ratingDistribution: { 5: 85, 4: 10, 3: 3, 2: 2, 1: 0 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85',
        alt: 'BioOrganic Latex Spring Hybrid'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Latex cushion over pocket springs'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Organic bamboo quilted finish'
      }
    ],
    description:
      'The ultimate eco-luxury hybrid. Combines a 3-inch top layer of 100% natural Talalay latex with pocket spring coils for buoyant, pressure-free support.',
    highlights: [
      '3" 100% Natural Talalay Latex topper',
      'Individually pocketed steel coils',
      'Naturally temperature regulating & breathable',
      'Zero synthetic polyurethane foams used',
      '10-year full replacement guarantee'
    ],
    features: ['Natural Latex', 'Pocket Coils', 'Eco Luxury'],
    material: 'Latex',
    firmness: 'Medium Firm',
    size: ['Queen', 'King'],
    thickness: 10,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['organic', 'latex', 'premium'],
    badges: ['NEW'],
    stock: 7,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-bo-queen-10',
        label: 'Queen · 10" · Medium Firm',
        attributes: { size: 'Queen', thickness: 10, firmness: 'Medium Firm' },
        price: 39999,
        originalPrice: 49999,
        stock: 7,
        sku: 'JH-MAT-009-Q10'
      }
    ],
    specs: {
      Material: '100% Natural Latex & Pocket Spring Hybrid',
      Firmness: 'Medium Firm (7/10)',
      Thickness: '10 Inches',
      Warranty: '10 Years'
    },
    createdAt: '2026-02-25T00:00:00.000Z'
  },

  {
    id: 'sovereign-king-spring-mattress',
    sku: 'JH-MAT-010',
    name: 'Sovereign Royal Pocket Spring Mattress',
    brand: 'JAIHIND',
    category: 'mattress',
    subcategory: 'Pocket Spring Mattress',
    price: 31999,
    originalPrice: 39999,
    discount: 20,
    rating: 4.6,
    reviewCount: 48,
    ratingDistribution: { 5: 72, 4: 20, 3: 5, 2: 2, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'Sovereign Royal Pocket Spring Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Reinforced pocket spring edge structure'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Heavy duty quilted damask cover'
      }
    ],
    description:
      'Classic British hotel comfort constructed with 1000+ individually pocketed coils wrapped in high-density foam padding.',
    highlights: [
      '1000+ Independent pocket springs',
      'Dual-layer high resilience foam topping',
      'Breathable damask woven cover',
      'Zero partner disturbance',
      '10-year warranty'
    ],
    features: ['1000+ Springs', 'Damask Cover', 'Partner Comfort'],
    material: 'Spring',
    firmness: 'Medium',
    size: ['Double', 'Queen', 'King'],
    thickness: 10,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['spring', 'classic', 'couples'],
    badges: ['LIMITED OFFER'],
    stock: 8,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-sov-queen-10',
        label: 'Queen · 10" · Medium',
        attributes: { size: 'Queen', thickness: 10, firmness: 'Medium' },
        price: 31999,
        originalPrice: 39999,
        stock: 8,
        sku: 'JH-MAT-010-Q10'
      }
    ],
    specs: {
      Material: '1000+ Pocket Spring Coils & Damask Cover',
      Firmness: 'Medium (6/10)',
      Thickness: '10 Inches',
      Warranty: '10 Years'
    },
    createdAt: '2026-01-05T00:00:00.000Z'
  },

  {
    id: 'airrest-cooling-bamboo-mattress',
    sku: 'JH-MAT-011',
    name: 'AirRest Cooling Bamboo Memory Foam',
    brand: 'CloudRest',
    category: 'mattress',
    subcategory: 'Memory Foam Mattress',
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    rating: 4.7,
    reviewCount: 92,
    ratingDistribution: { 5: 76, 4: 16, 3: 5, 2: 2, 1: 1 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'AirRest Cooling Bamboo Memory Foam Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Bamboo fabric texture'
      },
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
        alt: 'Cooling airflow memory foam layer'
      }
    ],
    description:
      'Silky bamboo rayon outer cover paired with breathable open-cell memory foam. Offers balanced contouring for side and back sleepers.',
    highlights: [
      'Silky cooling bamboo rayon zipper cover',
      'Open-cell heat dispersing memory foam',
      'Medium balanced feel for everyday comfort',
      'Washable removable outer cover',
      '10-year warranty'
    ],
    features: ['Bamboo Cover', 'Open Cell', 'Washable Cover'],
    material: 'Memory Foam',
    firmness: 'Medium',
    size: ['Single', 'Double', 'Queen', 'King'],
    thickness: 8,
    warranty: '10 Years',
    trial: '100 Nights',
    tags: ['cooling', 'bamboo', 'budget'],
    badges: ['TRENDING'],
    stock: 16,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-air-queen-8',
        label: 'Queen · 8" · Medium',
        attributes: { size: 'Queen', thickness: 8, firmness: 'Medium' },
        price: 18999,
        originalPrice: 24999,
        stock: 16,
        sku: 'JH-MAT-011-Q8'
      }
    ],
    specs: {
      Material: 'Bamboo Fabric & Open-Cell Memory Foam',
      Firmness: 'Medium (5.5/10)',
      Thickness: '8 Inches',
      Warranty: '10 Years'
    },
    createdAt: '2026-02-12T00:00:00.000Z'
  },

  {
    id: 'ortho-lux-spring-mattress',
    sku: 'JH-MAT-012',
    name: 'OrthoLux Bonnell Spring Firm Mattress',
    brand: 'JAIHIND',
    category: 'mattress',
    subcategory: 'Spring Mattress',
    price: 16499,
    originalPrice: 21999,
    discount: 25,
    rating: 4.3,
    reviewCount: 38,
    ratingDistribution: { 5: 55, 4: 30, 3: 10, 2: 3, 1: 2 },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
        alt: 'OrthoLux Bonnell Spring Firm Mattress'
      },
      {
        src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        alt: 'Heavy gauge steel Bonnell spring unit'
      },
      {
        src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
        alt: 'Sturdy felt insulated spring topper'
      }
    ],
    description:
      'Heavy-gauge Bonnell spring mattress engineered for durable firmness and maximum air circulation beneath the body.',
    highlights: [
      'Heavy-gauge tempered steel Bonnell coils',
      'Thermally bonded felt insulation padding',
      'Maximum breathability for humid climates',
      'Edge-to-edge frame support wire',
      '5-year manufacturer warranty'
    ],
    features: ['Bonnell Coils', 'Max Airflow', 'Heavy Gauge'],
    material: 'Spring',
    firmness: 'Firm',
    size: ['Single', 'Double', 'Queen', 'King'],
    thickness: 8,
    warranty: '5 Years',
    trial: '30 Nights',
    tags: ['spring', 'firm', 'budget'],
    badges: ['NEW'],
    stock: 12,
    delivery: { estimateDays: 3, free: true },
    variants: [
      {
        id: 'var-ol-queen-8',
        label: 'Queen · 8" · Firm',
        attributes: { size: 'Queen', thickness: 8, firmness: 'Firm' },
        price: 16499,
        originalPrice: 21999,
        stock: 12,
        sku: 'JH-MAT-012-Q8'
      }
    ],
    specs: {
      Material: 'Bonnell Steel Springs & Felt Padding',
      Firmness: 'Firm (8/10)',
      Thickness: '8 Inches',
      Warranty: '5 Years'
    },
    createdAt: '2026-02-28T00:00:00.000Z'
  }
];
