export interface MegaMenuColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface MegaMenuData {
  category: string;
  columns: MegaMenuColumn[];
  featured: {
    title: string;
    subtitle: string;
    image: string;
    link: string;
  };
}

export const megaMenuContent: Record<string, MegaMenuData> = {
  Mattresses: {
    category: 'mattress',
    columns: [
      {
        title: 'Shop by Type',
        links: [
          { label: 'Memory Foam Mattresses', href: '/mattresses?material=Memory+Foam' },
          { label: 'Latex Foam Mattresses', href: '/mattresses?material=Latex' },
          { label: 'Pocket Spring Hybrid', href: '/mattresses?material=Hybrid' },
          { label: 'Orthopedic Back Pain Relief', href: '/mattresses?tag=back-pain' },
          { label: 'Cooling Gel Mattresses', href: '/mattresses?tag=cooling' }
        ]
      },
      {
        title: 'Shop by Need',
        links: [
          { label: 'Back & Spine Care', href: '/shop?need=back-pain' },
          { label: 'Hot Sleepers', href: '/shop?need=hot-sleepers' },
          { label: 'Senior Citizens Support', href: '/shop?need=back-pain' },
          { label: 'Couples Motion Isolation', href: '/mattresses?tag=cooling' },
          { label: 'Custom Size Orders', href: '/comfort-studio?tab=mattress' }
        ]
      },
      {
        title: 'Popular Sizes',
        links: [
          { label: 'King Size (78" x 72")', href: '/mattresses?size=King' },
          { label: 'Queen Size (78" x 60")', href: '/mattresses?size=Queen' },
          { label: 'Double Bed Size (72" x 48")', href: '/mattresses?size=Double' },
          { label: 'Single Bed Size (72" x 36")', href: '/mattresses?size=Single' }
        ]
      }
    ],
    featured: {
      title: 'CloudRest Premium',
      subtitle: 'Our 4.8★ rated flagship orthopedic mattress',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80',
      link: '/product/cloudrest-premium-mattress'
    }
  },
  Pillows: {
    category: 'pillow',
    columns: [
      {
        title: 'Shop by Type',
        links: [
          { label: 'Cervical Contour Pillows', href: '/pillows?material=Memory+Foam' },
          { label: 'Cooling Gel Memory Foam', href: '/pillows?tag=cooling' },
          { label: 'Natural Latex Pillows', href: '/pillows?material=Latex' },
          { label: 'Microfibre Plush Pillows', href: '/pillows?material=Fibre' }
        ]
      },
      {
        title: 'Shop by Sleep Style',
        links: [
          { label: 'Side Sleepers', href: '/pillows?tag=side-sleeper' },
          { label: 'Back Sleepers', href: '/pillows?tag=back-sleeper' },
          { label: 'Stomach Sleepers', href: '/pillows?tag=low-profile' }
        ]
      },
      {
        title: 'Pillow Sets',
        links: [
          { label: 'Pack of 2 Value Sets', href: '/pillows' },
          { label: 'Pillow + Protector Bundles', href: '/pillows' }
        ]
      }
    ],
    featured: {
      title: 'OrthoContour Pillow',
      subtitle: 'Ergonomic neck support for pain-free mornings',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
      link: '/product/ortho-contour-pillow'
    }
  },
  Curtains: {
    category: 'curtain',
    columns: [
      {
        title: 'Shop by Light Control',
        links: [
          { label: '100% Blackout Drapes', href: '/curtains?light=Blackout' },
          { label: 'Room Darkening Curtains', href: '/curtains?light=Room+darkening' },
          { label: 'Sheer Linen Curtains', href: '/curtains?light=Sheer' },
          { label: 'Semi-Sheer Drapes', href: '/curtains?light=Semi-sheer' }
        ]
      },
      {
        title: 'Shop by Fabric',
        links: [
          { label: 'Pure Linen Blend', href: '/curtains?fabric=Linen' },
          { label: 'Luxury Velvet Drapes', href: '/curtains?fabric=Velvet' },
          { label: 'Textured Cotton Blend', href: '/curtains?fabric=Cotton' }
        ]
      },
      {
        title: 'Room Match',
        links: [
          { label: 'Match Curtains to your Space', href: '/comfort-studio?tab=space' },
          { label: 'Door Length (7ft / 9ft)', href: '/curtains' },
          { label: 'Window Length (5ft)', href: '/curtains' }
        ]
      }
    ],
    featured: {
      title: 'Velvet Drape Curtain',
      subtitle: 'Thermal blackout insulation in rich muted terracotta',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      link: '/product/velvet-drape-curtain'
    }
  },
  Beds: {
    category: 'bed',
    columns: [
      {
        title: 'Bed Frames',
        links: [
          { label: 'Solid Teak Wood Beds', href: '/beds?material=Wood' },
          { label: 'Hydraulic Storage Beds', href: '/beds?storage=true' },
          { label: 'Upholstered Fabric Beds', href: '/beds' },
          { label: 'Minimalist Platform Beds', href: '/beds' }
        ]
      },
      {
        title: 'Bed Sizes',
        links: [
          { label: 'King Bed Frame', href: '/beds?size=King' },
          { label: 'Queen Bed Frame', href: '/beds?size=Queen' }
        ]
      },
      {
        title: 'Services',
        links: [
          { label: 'Free In-Home Assembly', href: '/beds' },
          { label: '10-Year Frame Warranty', href: '/beds' }
        ]
      }
    ],
    featured: {
      title: 'Nordic Solid Teak Bed',
      subtitle: 'Handcrafted solid wood with built-in ambient headboard',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
      link: '/product/nordic-solid-wood-bed'
    }
  },
  Accessories: {
    category: 'accessory',
    columns: [
      {
        title: 'Protectors & Covers',
        links: [
          { label: 'Waterproof Mattress Protectors', href: '/accessories?type=Protector' },
          { label: 'Pure Bamboo Fitted Sheets', href: '/accessories?type=Sheet' },
          { label: 'Silk Pillow Cover Sets', href: '/accessories?type=Pillowcase' },
          { label: 'Weighted Comfort Blankets', href: '/accessories?type=Blanket' }
        ]
      },
      {
        title: 'Bedding Sets',
        links: [
          { label: 'Hotel Luxury Sheet Sets', href: '/accessories' },
          { label: 'All-Season Microfibre Duvets', href: '/accessories' }
        ]
      },
      {
        title: 'Custom Sizes',
        links: [
          { label: 'Custom Sheet Fitting', href: '/accessories' }
        ]
      }
    ],
    featured: {
      title: 'Quilted Mattress Protector',
      subtitle: '100% waterproof breathable bamboo cotton cover',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
      link: '/product/quilted-bed-protector'
    }
  }
};
