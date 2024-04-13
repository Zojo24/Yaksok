import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let searchStore = (set) => ({
  searchResults: [],

  setSearchResults: (results) => set({ searchResults: results }),
});

searchStore = devtools(searchStore);
searchStore = persist(searchStore, { name: "search" });

export const useSearchStore = create(searchStore);
