import { create } from 'zustand';
import { Product } from '../types/product';

interface WishlistStore {
  items: Product[];
  isOpen: boolean;
  toggleWishlist: (product: Product) => boolean; // returns true if added, false if removed
  isInWishlist: (productId: string) => boolean;
  openWishlist: () => void;
  closeWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  isOpen: false,
  toggleWishlist: (product) => {
    const exists = get().items.some((p) => p.id === product.id);
    if (exists) {
      set((state) => ({ items: state.items.filter((p) => p.id !== product.id) }));
      return false;
    } else {
      set((state) => ({ items: [...state.items, product] }));
      return true;
    }
  },
  isInWishlist: (productId) => get().items.some((p) => p.id === productId),
  openWishlist: () => set({ isOpen: true }),
  closeWishlist: () => set({ isOpen: false })
}));
