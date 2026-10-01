export interface CuratedCollection {
  id: string;
  title: string;
  label: string;
  copy: string;
  image: string;
  link: string;
  ratio: string;
  colSpan: string; // Tailwind grid span desktop
  thumbnails: string[];
}

export const curatedCollections: CuratedCollection[] = [
  {
    id: 'sleep',
    title: 'THE SLEEP COLLECTION',
    label: 'Mattresses + Pillows',
    copy: 'Orthopedic memory foam mattresses paired with contouring pillows for pressure-free deep rest.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=80',
    link: '/shop?collection=sleep',
    ratio: '16/9',
    colSpan: 'lg:col-span-8',
    thumbnails: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=300&q=80'
    ]
  },
  {
    id: 'bedroom',
    title: 'THE BEDROOM COLLECTION',
    label: 'Beds + Frame Accessories',
    copy: 'Solid wood teak frames and padded storage beds designed for timeless bedroom elegance.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    link: '/shop?collection=bedroom',
    ratio: '3/4',
    colSpan: 'lg:col-span-4',
    thumbnails: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=300&q=80'
    ]
  },
  {
    id: 'window',
    title: 'THE WINDOW COLLECTION',
    label: 'Blackout & Sheer Curtains',
    copy: 'Custom length heavy blackout drapes and airy linen sheers crafted for light control.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    link: '/shop?collection=window',
    ratio: '3/4',
    colSpan: 'lg:col-span-4',
    thumbnails: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80'
    ]
  },
  {
    id: 'complete-comfort',
    title: 'THE COMPLETE COMFORT SET',
    label: 'Full Room Bundles',
    copy: 'Everything required for a new home setup — mattress, pillows, drapes, and fitted protectors.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    link: '/shop?collection=complete-comfort',
    ratio: '16/9',
    colSpan: 'lg:col-span-8',
    thumbnails: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=300&q=80'
    ]
  }
];
