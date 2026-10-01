import { create } from 'zustand';
import { Product, Variant, Coupon } from '../types/product';
import { coupons } from '../data/coupons';

export interface CartItem {
  id: string; // product.id + '-' + variantId
  product: Product;
  variant: Variant;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  appliedCoupon: Coupon | null;
  couponError: string | null;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, variant?: Variant, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getDiscountAmount: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  appliedCoupon: null,
  couponError: null,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (product, variant, quantity = 1) => {
    const selectedVariant = variant || product.variants[0];
    const itemId = `${product.id}-${selectedVariant.id}`;

    set((state) => {
      const existingIndex = state.items.findIndex((item) => item.id === itemId);
      let updatedItems;

      if (existingIndex > -1) {
        updatedItems = [...state.items];
        const newQty = Math.min(
          selectedVariant.stock || 10,
          updatedItems[existingIndex].quantity + quantity
        );
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: newQty
        };
      } else {
        updatedItems = [
          ...state.items,
          {
            id: itemId,
            product,
            variant: selectedVariant,
            quantity
          }
        ];
      }

      // Auto open drawer on first add
      const isFirstItem = state.items.length === 0;

      return {
        items: updatedItems,
        isOpen: isFirstItem ? true : state.isOpen
      };
    });
  },

  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId)
    })),

  updateQuantity: (itemId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return { items: state.items.filter((item) => item.id !== itemId) };
      }
      return {
        items: state.items.map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.min(item.variant.stock || 10, quantity) }
            : item
        )
      };
    }),

  applyCoupon: (code) => {
    const trimmed = code.trim().toUpperCase();
    const coupon = coupons.find((c) => c.code === trimmed);

    if (!coupon) {
      return { success: false, message: "This code isn't valid." };
    }

    const subtotal = get().getSubtotal();
    if (subtotal < coupon.minOrder) {
      const diff = coupon.minOrder - subtotal;
      return {
        success: false,
        message: `Add ₹${diff.toLocaleString('en-IN')} more to use this code.`
      };
    }

    set({ appliedCoupon: coupon, couponError: null });
    return { success: true, message: `Coupon ${coupon.code} applied!` };
  },

  removeCoupon: () => set({ appliedCoupon: null, couponError: null }),

  clearCart: () => set({ items: [], appliedCoupon: null }),

  getSubtotal: () => {
    return get().items.reduce((acc, item) => acc + item.variant.price * item.quantity, 0);
  },

  getDiscountAmount: () => {
    const subtotal = get().getSubtotal();
    const coupon = get().appliedCoupon;
    if (!coupon || subtotal < coupon.minOrder) return 0;

    if (coupon.discountType === 'amount') {
      return coupon.value;
    } else {
      const calculated = (subtotal * coupon.value) / 100;
      return coupon.maxDiscount ? Math.min(coupon.maxDiscount, calculated) : calculated;
    }
  },

  getTotal: () => {
    const subtotal = get().getSubtotal();
    const discount = get().getDiscountAmount();
    return Math.max(0, subtotal - discount);
  },

  getItemCount: () => {
    return get().items.reduce((acc, item) => acc + item.quantity, 0);
  }
}));
