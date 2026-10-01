import { create } from 'zustand';
import { Product } from '../types/product';

interface RecentlyViewedStore {
  recent: Product[];
  addRecent: (product: Product) => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>((set) => ({
  recent: [],
  addRecent: (product) =>
    set((state) => {
      const filtered = state.recent.filter((p) => p.id !== product.id);
      return { recent: [product, ...filtered].slice(0, 8) };
    })
}));
