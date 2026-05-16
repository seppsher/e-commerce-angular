export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartState {
  items: CartItem[];
  lastAddedItem: CartItem | null;
  lastRemovedItem: CartItem | null;
}
