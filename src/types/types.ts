export interface SearchResultItem {
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
