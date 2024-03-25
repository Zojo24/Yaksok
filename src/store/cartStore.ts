import { create } from "zustand";
import { CartItem } from "../types/\btypes";

interface CartState {
  cartItems: CartItem[];
  addToCart: (newItem: Omit<CartItem, "id">) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (newItem) =>
    set((state) => {
      const newId =
        state.cartItems.reduce((maxId, item) => Math.max(maxId, item.id), 0) +
        1;
      const newItemWithId = { ...newItem, id: newId };

      const isItemInCart = state.cartItems.some(
        (item) => item.id === newItemWithId.id
      );
      if (!isItemInCart) {
        return { cartItems: [...state.cartItems, newItemWithId] };
      }

      return state;
    }),
}));
