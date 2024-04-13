export interface SearchResultItem {
  id: string;
  title: string;
  address: string;
  lat: number;
  lng: number;
  link: string;
  rating: number;
}
export interface LatLng {
  lat: number;
  lng: number;
}

export interface User {
  name: string;
  bgColor: string;
}

export interface PlaceInfo {
  title: string;
  link: string;
  rating: number;
  address: string;
  point: { x: number; y: number };
  distance: number;
  vote: string[];
  memos: { memoId: number; context: string }[];
}

export interface CartItem {
  index?: string;
  id: string;
  title: string;
  address: string;
  lat: number;
  lng: number;
}

export interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
