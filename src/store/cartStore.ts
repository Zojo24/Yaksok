import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { CartState, CartItem } from "../types/\btypes";

let cartStore = (set): CartState => ({
  cartItems: [],
  addToCart: (item: CartItem) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (id: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
});

cartStore = devtools(cartStore);
cartStore = persist(cartStore, { name: "cart" });

export const useCartStore = create<CartState>()(cartStore);
