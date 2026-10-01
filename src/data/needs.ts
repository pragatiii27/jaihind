export interface NeedItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  filterQuery: string;
}

export const shopByNeeds: NeedItem[] = [
  {
    id: 'back-pain',
    title: 'Back Pain Relief',
    description: 'Orthopedic firm support designed for spinal alignment',
    iconName: 'Activity',
    filterQuery: '/shop?need=back-pain'
  },
  {
    id: 'hot-sleepers',
    title: 'Hot Sleepers',
    description: 'Cooling gel foam and breathable bamboo covers',
    iconName: 'ThermometerSnowflake',
    filterQuery: '/shop?need=hot-sleepers'
  },
  {
    id: 'kids-room',
    title: "Kids' Room",
    description: 'Non-toxic, hypoallergenic and stain-resistant bedding',
    iconName: 'Smile',
    filterQuery: '/shop?need=kids'
  },
  {
    id: 'guest-room',
    title: 'Guest Room',
    description: 'Versatile medium comfort at incredible value',
    iconName: 'Home',
    filterQuery: '/shop?need=guest'
  },
  {
    id: 'small-spaces',
    title: 'Small Spaces',
    description: 'Foldable mattresses and hydraulic storage beds',
    iconName: 'Maximize2',
    filterQuery: '/shop?need=small-space'
  },
  {
    id: 'new-home',
    title: 'New Home Bundles',
    description: 'Complete room sets with bundle discounts up to 25%',
    iconName: 'Sparkles',
    filterQuery: '/shop?need=new-home'
  }
];
