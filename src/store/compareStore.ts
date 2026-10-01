import { create } from 'zustand';
import { Product } from '../types/product';

interface CompareStore {
  items: Product[];
  isDrawerOpen: boolean;
  toggleCompare: (product: Product) => { success: boolean; message?: string };
  isInCompare: (productId: string) => boolean;
  removeCompare: (productId: string) => void;
  clearCompare: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useCompareStore = create<CompareStore>((set, get) => ({
  items: [],
  isDrawerOpen: false,

  toggleCompare: (product) => {
    const items = get().items;
    const exists = items.some((p) => p.id === product.id);

    if (exists) {
      set({ items: items.filter((p) => p.id !== product.id) });
      return { success: true };
    } else {
      if (items.length >= 3) {
        return {
          success: false,
          message: 'You can compare up to 3 products at a time.'
        };
      }
      set({ items: [...items, product] });
      return { success: true };
    }
  },

  isInCompare: (productId) => get().items.some((p) => p.id === productId),

  removeCompare: (productId) =>
    set((state) => ({ items: state.items.filter((p) => p.id !== productId) })),

  clearCompare: () => set({ items: [] }),

  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false })
}));
